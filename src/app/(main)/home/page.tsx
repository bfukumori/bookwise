import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { CardRoot } from "@/components/card/card-root";
import { CardContent } from "@/components/card/card-content";
import { CardHeader } from "@/components/card/card-header";
import { CardContentTitle } from "@/components/card/card-content-title";
import { SectionTitle } from "@/components/section-title";
import { PageTitle } from "@/components/page-title";
import { CaretRight, ChartLineUp } from "@/libs/phosphor-icons";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";
import { prisma } from "@/libs/prisma";
import { SeeMore } from "@/components/see-more";
import { RatingStarsReadOnly } from "@/components/rating-stars/rating-start-readonly";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/auth-options";

dayjs.extend(relativeTime);

async function getMostRecentReviews() {
  return await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 3,
    include: {
      user: {
        select: {
          image: true,
          name: true,
        },
      },
      book: {
        select: {
          author: true,
          cover_url: true,
          name: true,
        },
      },
    },
  });
}

async function getMostPopularBooks() {
  return await prisma.rating.findMany({
    where: {
      rate: {
        gte: 4,
      },
    },
    orderBy: {
      rate: "desc",
    },
    distinct: "book_id",
    take: 4,
    include: {
      book: {
        select: {
          author: true,
          cover_url: true,
          name: true,
        },
      },
    },
  });
}

async function getMostRecentRead(userId: string) {
  return await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 1,
    include: {
      book: {
        select: {
          author: true,
          cover_url: true,
          name: true,
          summary: true,
        },
      },
    },
  });
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  const mostRecentReviews = await getMostRecentReviews();
  const mostPopularBooks = await getMostPopularBooks();
  const mostRecentRead = await getMostRecentRead(session?.user.id as string);

  return (
    <div className="animate-fadeIn">
      <PageTitle title="Início" icon={ChartLineUp} />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-home">
        <section>
          {session?.user.id && mostRecentRead.length > 0 && (
            <div className="mb-10">
              <SectionTitle
                title="Sua última leitura"
                linkTo="/profile"
                linkTitle="Ver todos"
                icon={CaretRight}
              />
              <div className="flex flex-col gap-3">
                {mostRecentRead.map((review) => (
                  <CardRoot key={review.id} className="gap-8 bg-app-gray-600">
                    <CardContent>
                      <Image
                        src={review.book.cover_url}
                        width={108}
                        height={152}
                        alt={review.book.name}
                      />
                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-sm text-app-gray-300">
                            {dayjs(review.created_at).fromNow()}
                          </span>
                          <RatingStarsWrapper
                            bookId={review.book_id}
                            rate={review.rate}
                          />
                        </div>
                        <CardContentTitle
                          title={review.book.name}
                          subtitle={review.book.author}
                        />
                        <SeeMore review={review.book.summary} />
                      </div>
                    </CardContent>
                  </CardRoot>
                ))}
              </div>
            </div>
          )}
          <SectionTitle title="Avaliações mais recentes" />
          <div className="flex flex-col gap-3">
            {mostRecentReviews.map((review) => (
              <CardRoot key={review.id} className="gap-8 bg-app-gray-700">
                <CardHeader
                  title={review.user.name ?? ""}
                  subtitle={dayjs(review.created_at).fromNow()}
                  imgUrl={review.user.image}
                >
                  <RatingStarsWrapper
                    bookId={review.book_id}
                    rate={review.rate}
                  />
                </CardHeader>
                <CardContent>
                  <Image
                    src={review.book.cover_url}
                    width={108}
                    height={152}
                    alt={review.book.name}
                  />
                  <div>
                    <CardContentTitle
                      title={review.book.name}
                      subtitle={review.book.author}
                    />
                    <SeeMore review={review.description} />
                  </div>
                </CardContent>
              </CardRoot>
            ))}
          </div>
        </section>
        <aside>
          <SectionTitle
            title="Livros populares"
            linkTo="/explore?category=Tudo"
            linkTitle="Ver todos"
            icon={CaretRight}
          />
          <div className="flex flex-col gap-3">
            {mostPopularBooks.map((item) => (
              <CardRoot key={item.id} className="gap-8 bg-app-gray-700">
                <CardContent>
                  <Image
                    src={item.book.cover_url}
                    width={64}
                    height={94}
                    alt={item.book.name}
                  />
                  <div className="flex flex-col justify-between">
                    <CardContentTitle
                      title={item.book.name}
                      subtitle={item.book.author}
                    />
                    <RatingStarsReadOnly ratingsAvg={item.rate} />
                  </div>
                </CardContent>
              </CardRoot>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
