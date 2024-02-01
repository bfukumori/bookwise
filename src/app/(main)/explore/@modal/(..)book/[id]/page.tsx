import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { CardContent } from "@/components/card/card-content";
import { CardContentTitle } from "@/components/card/card-content-title";
import { CardFooter } from "@/components/card/card-footer";
import { CardHeader } from "@/components/card/card-header";
import { CardRoot } from "@/components/card/card-root";
import { ListItem } from "@/components/list-item";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";
import { prisma } from "@/libs/prisma";
import { Modal } from "./modal";
import { BookOpen, BookmarkSimple } from "@/libs/phosphor-icons";
import { RatingCTA } from "./rating-cta";

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

export default async function BookDetailsModal({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBookDetails(params.id);
  const categories = book.categories
    .map((item) => item.category.name)
    .join(", ");
  const ratings = await getRatings(params.id);

  return (
    <Modal>
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
            <RatingStarsWrapper readOnly bookId={book.id} showRatingsCount />
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
            <CardRoot key={rating.id} className="gap-5 bg-app-gray-700">
              <CardHeader
                title={rating.user.name}
                subtitle={dayjs(rating.created_at).fromNow()}
                imgUrl={rating.user.image}
              >
                <RatingStarsWrapper readOnly bookId={rating.book_id} />
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
    </Modal>
  );
}
