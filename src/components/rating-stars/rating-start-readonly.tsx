import { Star } from "@/libs/phosphor-icons";

type RatingStarsProps = {
  ratingsAvg: number;
  size?: number;
};

export function RatingStarsReadOnly({
  ratingsAvg,
  size = 16,
}: RatingStarsProps) {
  function getWeight(starIndex: number) {
    return starIndex < ratingsAvg ? "fill" : "light";
  }

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((starIndex) => {
        return (
          <div
            key={starIndex}
            className="pointer-events-none cursor-none text-app-purple-100"
          >
            <Star weight={getWeight(starIndex)} size={size} />
          </div>
        );
      })}
    </div>
  );
}
