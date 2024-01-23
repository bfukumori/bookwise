import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { CardRoot } from "@/components/card/card-root";
import { CardContent } from "@/components/card/card-content";
import { CardHeader } from "@/components/card/card-header";
import { CardContentTitle } from "@/components/card/card-content-title";
import { SectionTitle } from "@/components/section-title";
import { RatingStars } from "@/components/rating-stars/rating-stars";
import { PageTitle } from "@/components/page-title";
import { CaretRight, ChartLineUp } from "@/libs/phosphor-icons";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";
import { prisma } from "@/libs/prisma";
import Link from "next/link";

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
          avatar_url: true,
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

export default async function Home() {
  const mostRecentReviews = await getMostRecentReviews();
  const mostPopularBooks = await getMostPopularBooks();

  return (
    <div>
      <PageTitle title="Início" icon={ChartLineUp} />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-home">
        <section>
          <SectionTitle title=" Avaliações mais recentes" />
          <div className="flex flex-col gap-3">
            {mostRecentReviews.map((review) => (
              <CardRoot key={review.id} className="gap-8 bg-app-gray-700">
                <CardHeader
                  title={review.user.name}
                  subtitle={dayjs(review.created_at).fromNow()}
                  imgUrl={review.user.avatar_url}
                >
                  <RatingStarsWrapper readOnly bookId={review.book_id} />
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
                    <p className="line-clamp-3 text-sm text-app-gray-300">
                      {review.description}
                    </p>
                    <span className="cursor-pointer font-bold text-app-purple-100 hover:text-app-purple-100/60">
                      ver mais
                    </span>
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
              <Link key={item.id} href={`/book/${item.book_id}`}>
                <CardRoot className="cursor-pointer gap-8 bg-app-gray-700 hover:border-app-gray-600">
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
                      <RatingStars readOnly ratingsAvg={item.rate} />
                    </div>
                  </CardContent>
                </CardRoot>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
