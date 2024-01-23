import Image from "next/image";

import { CardContent } from "@/components/card/card-content";
import { CardContentTitle } from "@/components/card/card-content-title";
import { CardRoot } from "@/components/card/card-root";
import { PageTitle } from "@/components/page-title";
import { Binoculars } from "@/libs/phosphor-icons";
import { Chip } from "@/components/chip";
import { prisma } from "@/libs/prisma";
import { SearchForm } from "@/components/search-form";
import { RatingStarsWrapper } from "@/components/rating-stars/rating-stars-wrapper";
import Link from "next/link";

type GetBooksParams = { category?: string; search?: string };

async function getBooks({ category, search }: GetBooksParams) {
  if (category === "Tudo") {
    return await prisma.book.findMany({
      orderBy: {
        ratings: {
          _count: "desc",
        },
      },
      include: {
        ratings: {
          select: {
            rate: true,
          },
        },
      },
    });
  }

  return await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
    where: {
      AND: [
        {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              author: {
                contains: search,
              },
            },
          ],
        },
        category
          ? {
              categories: {
                some: {
                  category: {
                    name: category,
                  },
                },
              },
            }
          : {},
      ],
    },
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  });
}

async function getCategories() {
  return await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export default async function Explore({
  searchParams,
}: {
  searchParams: GetBooksParams;
}) {
  const books = await getBooks({
    category: searchParams.category,
    search: searchParams.search,
  });
  const categories = await getCategories();

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between">
        <PageTitle title="Explorar" icon={Binoculars} />
        <div className="mb-10 w-full max-w-[433px]">
          <SearchForm />
        </div>
      </div>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <Chip title="Tudo" />
        {categories.map((category) => (
          <Chip key={category.id} title={category.name} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`} scroll={false}>
            <CardRoot className="h-full cursor-pointer gap-8 bg-app-gray-700 hover:border-app-gray-600">
              <CardContent>
                <Image
                  src={book.cover_url}
                  width={102}
                  height={152}
                  alt={book.name}
                />
                <div className="flex flex-col justify-between">
                  <CardContentTitle title={book.name} subtitle={book.author} />
                  <RatingStarsWrapper readOnly bookId={book.id} />
                </div>
              </CardContent>
            </CardRoot>
          </Link>
        ))}
      </div>
    </div>
  );
}
