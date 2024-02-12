import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BookOpen, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";

import { CardContent } from "@/components/card/card-content";
import { CardRoot } from "@/components/card/card-root";
import { CardContentTitle } from "@/components/card/card-content-title";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";
import { CardFooter } from "@/components/card/card-footer";
import { ListItem } from "@/components/list-item";
import { CardHeader } from "@/components/card/card-header";
import { prisma } from "@/libs/prisma";
import { RatingCTA } from "app/(main)/explore/@modal/(..)book/[id]/rating-cta";
import { authOptions } from "app/api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth";

dayjs.extend(relativeTime);

async function getBookDetails(bookId: string) {
  return await prisma.book.findUniqueOrThrow({
    where: {
      id: bookId,
    },
    include: {
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
}

async function getRatings(bookId: string) {
  return await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
}

export default async function BookDetails({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBookDetails(params.id);
  const categories = book.categories
    .map((item) => item.category.name)
    .join(", ");
  const ratings = await getRatings(params.id);
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-10">
      <CardRoot className="gap-8 bg-app-gray-700">
        <CardContent>
          <Image
            src={book.cover_url}
            width={171}
            height={242}
            alt={book.name}
          />
          <div className="flex flex-col justify-between">
            <CardContentTitle title={book.name} subtitle={book.author} />
            <RatingStarsWrapper bookId={book.id} showRatingsCount />
          </div>
        </CardContent>
        <CardFooter>
          <ListItem
            title="Categoria"
            subtitle={categories}
            icon={BookmarkSimple}
          />
          <ListItem
            title="Páginas"
            subtitle={book.total_pages.toString()}
            icon={BookOpen}
          />
        </CardFooter>
      </CardRoot>
      <section>
        <RatingCTA />
        <div className="flex flex-col gap-3">
          {ratings.map((rating) => (
            <CardRoot
              key={rating.id}
              className={`gap-5 ${rating.user_id === session?.user.id ? "bg-app-gray-600" : "bg-app-gray-700"}`}
            >
              <CardHeader
                title={rating.user.name ?? "Anônimo"}
                subtitle={dayjs(rating.created_at).fromNow()}
                imgUrl={rating.user.image}
              >
                <RatingStarsWrapper
                  bookId={rating.book_id}
                  rate={rating.rate}
                  size={20}
                />
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-app-gray-300">
                  {rating.description}
                </p>
              </CardContent>
            </CardRoot>
          ))}
        </div>
      </section>
    </div>
  );
}
