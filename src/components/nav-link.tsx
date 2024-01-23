"use client";
import { ElementType } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavlinkProps = {
  icon: ElementType;
  text: string;
  path: string;
};

export function Navlink({ icon: Icon, text, path }: NavlinkProps) {
  const pathname = usePathname();

  return (
    <Link
      data-active={path.includes(pathname)}
      href={path}
      className="selected-link flex items-center gap-3 rounded px-1 py-2 text-app-gray-400 hover:text-app-gray-100"
    >
      <Icon size={24} />
      {text}
    </Link>
  );
}
