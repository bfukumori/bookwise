"use client";

import { useEffect, useRef, useState } from "react";

type SeeMoreProps = {
  review: string;
};

export function SeeMore({ review }: SeeMoreProps) {
  const reviewRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  function seeMore() {
    if (reviewRef.current) {
      reviewRef.current.classList.remove("line-clamp-3");
      setIsVisible(false);
    }
  }

  useEffect(() => {
    function isEllipsisActive() {
      if (reviewRef.current) {
        setIsVisible(
          reviewRef.current.offsetHeight < reviewRef.current.scrollHeight,
        );
      }
    }
    window.addEventListener("resize", isEllipsisActive);
    return () => window.removeEventListener("resize", isEllipsisActive);
  }, []);

  return (
    <>
      <p
        ref={reviewRef}
        className="mt-6 line-clamp-3 text-sm text-app-gray-300"
      >
        {review}
      </p>
      {isVisible ? (
        <span
          className="cursor-pointer font-bold text-app-purple-100 hover:text-app-purple-100/60"
          onClick={seeMore}
        >
          ver mais
        </span>
      ) : null}
    </>
  );
}
