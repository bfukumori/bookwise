"use server";

import { prisma } from "@/libs/prisma";

type RatingFormData = {
  rate: number;
  description: string;
  book_id: string;
  user_id: string;
};

export async function createRating(data: RatingFormData) {
  const alreadyRated = await prisma.rating.findFirst({
    where: {
      book_id: data.book_id,
      user_id: data.user_id,
    },
  });

  if (alreadyRated) {
    return null;
  }

  await prisma.rating.create({
    data,
  });

  return {
    rating: {
      ...data,
    },
  };
}
