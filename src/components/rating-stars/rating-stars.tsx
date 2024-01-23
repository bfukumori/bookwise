"use client";
import { Star } from "@/libs/phosphor-icons";
import { useState } from "react";

type RatingStarsProps = {
  readOnly?: boolean;
  ratingsAvg: number;
};

export function RatingStars({ ratingsAvg, readOnly }: RatingStarsProps) {
  const [rating, setRating] = useState(ratingsAvg);
  const [ratingHoverState, setRatingHoverState] = useState(0);

  function getWeight(starIndex: number) {
    if (readOnly) {
      return starIndex <= (ratingHoverState || rating) ? "fill" : "light";
    }
    return starIndex < (ratingHoverState || rating) ? "fill" : "light";
  }

  function handleOnClick(starIndex: number) {
    if (readOnly) {
      return;
    }
    setRating(starIndex + 1);
  }

  function handleOnMouseEnter(starIndex: number) {
    if (readOnly) {
      return;
    }
    setRatingHoverState(starIndex + 1);
  }

  function handleOnMouseLeave() {
    if (readOnly) {
      return;
    }
    setRatingHoverState(0);
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <div
          key={starIndex}
          className={`${readOnly ? "pointer-events-none cursor-none" : "cursor-pointer"} text-app-purple-100`}
          onMouseEnter={() => handleOnMouseEnter(starIndex)}
          onMouseLeave={handleOnMouseLeave}
          onClick={() => handleOnClick(starIndex)}
        >
          <Star weight={getWeight(starIndex)} />
        </div>
      ))}
    </div>
  );
}
