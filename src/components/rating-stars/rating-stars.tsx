"use client";
import { Star } from "@/libs/phosphor-icons";
import { useState } from "react";

type RatingStarsProps = {
  controlledRatingState: number;
  setControlledRatingState: (value: number) => void;
};

export function RatingStars({
  controlledRatingState,
  setControlledRatingState,
}: RatingStarsProps) {
  const [ratingHoverState, setRatingHoverState] = useState(0);

  function getWeight(starIndex: number) {
    return starIndex < (ratingHoverState || controlledRatingState)
      ? "fill"
      : "light";
  }

  function handleOnClick(starIndex: number) {
    if (setControlledRatingState) {
      setControlledRatingState(starIndex + 1);
    }
  }

  function handleOnMouseEnter(starIndex: number) {
    setRatingHoverState(starIndex + 1);
  }

  function handleOnMouseLeave() {
    setRatingHoverState(0);
  }

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((starIndex) => {
        return (
          <div
            key={starIndex}
            className="cursor-pointer text-app-purple-100"
            onMouseEnter={() => handleOnMouseEnter(starIndex)}
            onMouseLeave={handleOnMouseLeave}
            onClick={() => handleOnClick(starIndex)}
          >
            <Star weight={getWeight(starIndex)} size={24} />
          </div>
        );
      })}
    </div>
  );
}
