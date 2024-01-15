"use client";
import { Star } from "libs/phosphor-icons";
import { useState } from "react";

type RatingStarsProps = {
  readOnly?: boolean;
  initialState?: number;
};

export function RatingStars({ readOnly, initialState = 0 }: RatingStarsProps) {
  const [rating, setRating] = useState(initialState);
  const [ratingHoverState, setRatingHoverState] = useState(0);

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
          className={`${readOnly ? "cursor-default" : "cursor-pointer"} text-app-purple-100`}
          onMouseEnter={() => handleOnMouseEnter(starIndex)}
          onMouseLeave={handleOnMouseLeave}
          onClick={() => handleOnClick(starIndex)}
        >
          <Star
            weight={starIndex < (ratingHoverState || rating) ? "fill" : "light"}
          />
        </div>
      ))}
    </div>
  );
}
