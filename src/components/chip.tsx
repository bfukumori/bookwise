"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type ChipProps = {
  title: string;
  value: string;
};

export function Chip({ title, value }: ChipProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <button
      data-selected={value === searchParams.get("category")}
      onClick={() => {
        router.push(pathname + "?" + createQueryString("category", value));
      }}
      className="rounded-full border border-app-purple-100 px-4 py-1 text-app-purple-100  hover:bg-app-purple-200 hover:text-app-gray-100 data-[selected=true]:border-app-purple-200 data-[selected=true]:bg-app-purple-200 data-[selected=true]:text-app-gray-100"
    >
      {title}
    </button>
  );
}
