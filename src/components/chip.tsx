"use client";

import { createQueryString } from "@/utils/createQueryString";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type ChipProps = {
  title: string;
};

export function Chip({ title }: ChipProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <button
      data-selected={title === searchParams.get("category")}
      onClick={() => {
        router.push(pathname + "?" + createQueryString("category", title));
      }}
      className="rounded-full border border-app-purple-100 px-4 py-1 text-app-purple-100  hover:bg-app-purple-200 hover:text-app-gray-100 data-[selected=true]:border-app-purple-200 data-[selected=true]:bg-app-purple-200 data-[selected=true]:text-app-gray-100"
    >
      {title}
    </button>
  );
}
