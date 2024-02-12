import { prisma } from "@/libs/prisma";
import { RatingStarsReadOnly } from "./rating-start-readonly";

type RatingStarsWrapperProps = {
  bookId: string;
  showRatingsCount?: boolean;
  rate?: number;
  size?: number;
};

async function getRatings(book_id: string) {
  return await prisma.rating.aggregate({
    _avg: {
      rate: true,
    },
    orderBy: {
      rate: "desc",
    },
    where: {
      book_id,
    },
    _count: {
      _all: true,
    },
  });
}

export async function RatingStarsWrapper({
  bookId,
  showRatingsCount,
  rate,
  size,
}: RatingStarsWrapperProps) {
  const ratings = await getRatings(bookId);
  const ratingsAvg = ratings._avg.rate;
  const ratingCount = ratings._count._all;
  const ratingText =
    ratingCount === 1
      ? `${ratingCount} avaliação`
      : `${ratingCount} avaliações`;

  return (
    <div>
      <RatingStarsReadOnly
        size={size}
        ratingsAvg={rate ?? ((ratingsAvg && Math.ceil(ratingsAvg)) || 0)}
      />
      {showRatingsCount && (
        <span className="mt-1 block text-sm text-app-gray-400">
          {ratingText}
        </span>
      )}
    </div>
  );
}
