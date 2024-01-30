"use client";

import { useState } from "react";
import { Avatar } from "./avatar";
import { RatingStars } from "./rating-stars/rating-stars";
import { Check, X } from "@/libs/phosphor-icons";

type RatingFormProps = {
  handleClose: () => void;
};

export function RatingForm({ handleClose }: RatingFormProps) {
  const [rating, setRating] = useState(0);
  const [ratingText, setRatingText] = useState("");
  const currentLettersCount = ratingText.length;

  function handleRating(value: number) {
    setRating(value);
  }

  return (
    <form className="flex flex-col gap-2 rounded-lg bg-app-gray-700 p-6">
      <div>
        <div className="flex justify-between">
          <Avatar size={40} srcUrl="" className="size-10 min-w-10" />
          <RatingStars
            ratingsAvg={0}
            starsSize={24}
            controlledRatingState={rating}
            setControlledRatingState={handleRating}
          />
        </div>
        <div className="relative">
          <textarea
            value={ratingText}
            onChange={(e) => setRatingText(e.target.value)}
            maxLength={450}
            rows={8}
            placeholder="Escreva sua avaliação"
            className="mt-6 w-full resize-none rounded border border-app-gray-800 bg-app-gray-800 px-5 py-3.5 text-sm text-app-gray-200 outline-none placeholder:text-app-gray-400 focus:border-app-green-200"
          />

          <span className="pointer-events-none absolute bottom-3 right-2 text-xs text-app-gray-400">
            {currentLettersCount}/450
          </span>
        </div>
      </div>
      <div className="flex gap-2 self-end">
        <button
          onClick={handleClose}
          type="button"
          className="rounded bg-app-gray-600 p-2 text-app-purple-100 hover:bg-app-gray-500"
        >
          <X size={24} />
        </button>
        <button className="rounded bg-app-gray-600 p-2 text-app-green-100 hover:bg-app-gray-500">
          <Check size={24} />
        </button>
      </div>
    </form>
  );
}
