import dayjs from "dayjs";
require("dayjs/locale/pt-br");
import relativeTime from "dayjs/plugin/relativeTime";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import { PageTitle } from "@/components/page-title";
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from "@/libs/phosphor-icons";
import { SearchRatedBookForm } from "@/components/search-rated-book-form";
import { Avatar } from "@/components/avatar";
import { ListItem } from "@/components/list-item";
import { authOptions } from "app/api/auth/[...nextauth]/auth-options";
import { prisma } from "@/libs/prisma";
import { CardContent } from "@/components/card/card-content";
import { CardContentTitle } from "@/components/card/card-content-title";
import { CardRoot } from "@/components/card/card-root";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";

dayjs.extend(relativeTime);

async function getUserRatings(userId: string, limit?: number, search?: string) {
  const res = await prisma.rating.findMany({
    where: {
      user_id: userId,
      AND: [
        {
          book: {
            name: {
              contains: search,
            },
          },
        },
      ],
    },
    include: {
      book: true,
    },
    take: limit,
  });

  return res;
}

async function getMostReadCategory(userId: string) {
  const mostReadCategory = await prisma.categoriesOnBooks.groupBy({
    by: ["categoryId"],
    orderBy: {
      _count: {
        categoryId: "desc",
      },
    },
    where: {
      book: {
        ratings: {
          some: {
            user_id: userId,
          },
        },
      },
    },
  });

  const categoryId = mostReadCategory[0]?.categoryId;

  if (!categoryId) {
    return null;
  }

  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    select: {
      name: true,
    },
  });

  return category;
}

async function getUserData(userId: string) {
  const res = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      created_at: true,
    },
  });

  return res;
}

async function getProfileData(userId: string) {
  const ratings = await getUserRatings(userId);

  const totalRatedBooks = ratings.length;
  const totalPagesRead = ratings.reduce((acc: number, curr: any) => {
    return acc + curr.book.total_pages;
  }, 0);
  const totalAuthorsRead = ratings.reduce((acc: string[], curr: any) => {
    if (!acc.includes(curr.book.author)) {
      acc.push(curr.book.author);
    }
    return acc;
  }, []).length;

  const mostReadCategory = await getMostReadCategory(userId);
  const user = await getUserData(userId);

  return {
    totalRatedBooks,
    totalPagesRead,
    totalAuthorsRead,
    mostReadCategory: mostReadCategory?.name ?? "Nenhuma categoria lida",
    memberSince: user?.created_at.getFullYear(),
  };
}

export default async function Profile({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/home");
  }

  const {
    memberSince,
    mostReadCategory,
    totalAuthorsRead,
    totalPagesRead,
    totalRatedBooks,
  } = await getProfileData(session.user.id);

  const mostRecentRatings = await getUserRatings(
    session.user.id,
    3,
    searchParams.search,
  );

  return (
    <div className="animate-fadeIn">
      <PageTitle title="Perfil" icon={User} />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-home">
        <section>
          <SearchRatedBookForm />
          <div className="mt-8 flex flex-col gap-6">
            {mostRecentRatings.length === 0 ? (
              <h2 className="text-center text-app-gray-200">
                Você não fez nenhuma avaliação
              </h2>
            ) : (
              mostRecentRatings.map((rating) => (
                <div key={rating.id}>
                  <span className="mb-2 block text-sm text-app-gray-300">
                    {dayjs(rating.created_at).locale("pt-br").fromNow()}
                  </span>
                  <CardRoot className="gap-8 bg-app-gray-700">
                    <CardContent>
                      <Image
                        src={rating.book.cover_url}
                        width={98}
                        height={134}
                        alt={rating.book.name}
                      />
                      <div className="flex flex-col justify-between">
                        <CardContentTitle
                          title={rating.book.name}
                          subtitle={rating.book.author}
                        />
                        <RatingStarsWrapper
                          bookId={rating.book.id}
                          rate={rating.rate}
                        />
                      </div>
                    </CardContent>
                    <p className="text-sm text-app-gray-300">
                      {rating.book.summary}
                    </p>
                  </CardRoot>
                </div>
              ))
            )}
          </div>
        </section>
        <aside>
          <div className="border-l border-app-gray-700">
            <div className="flex flex-col items-center gap-5">
              <Avatar
                size={72}
                srcUrl={session.user.image ?? ""}
                className="size-[72px] min-w-[72px]"
              />
              <div>
                <h2 className="text-xl font-bold text-app-gray-100">
                  {session.user.name}
                </h2>
                <p className="text-center text-sm text-app-gray-400">
                  membro desde {memberSince}
                </p>
              </div>
            </div>
            <div className="mx-auto my-8 h-1 w-8 rounded-full bg-gradient-to-r from-[#7FD1CC] to-[#9694F5]" />
            <div className="space-y-10 px-14 py-5">
              <ListItem
                icon={BookOpen}
                title={totalPagesRead.toString()}
                subtitle="Páginas lidas"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={Books}
                title={totalRatedBooks.toString()}
                subtitle="Livros avaliados"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={UserList}
                title={totalAuthorsRead.toString()}
                subtitle="Autores lidos"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={BookmarkSimple}
                title={mostReadCategory}
                subtitle="Categoria mais lida"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
