import Link from "next/link";

import { CaretRight } from "libs/phosphor-icons";

type TitleSectionProps = {
  title: string;
  linkTo?: string;
};

export function TitleSection({ title, linkTo }: TitleSectionProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm text-app-gray-100">{title}</h2>
      {linkTo && (
        <Link
          href={linkTo}
          className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold text-app-purple-100 hover:bg-app-purple-100/[.06]"
        >
          Ver todos
          <CaretRight />
        </Link>
      )}
    </div>
  );
}
