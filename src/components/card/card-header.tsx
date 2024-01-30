import { ReactNode } from "react";

import { CardContentTitle } from "./card-content-title";
import { Avatar } from "../avatar";

type CardHeaderProps = {
  title: string;
  subtitle: string;
  imgUrl: string | null;
  children?: ReactNode;
};

export function CardHeader({
  title,
  subtitle,
  imgUrl,
  children,
}: CardHeaderProps) {
  return (
    <header className="flex items-start justify-between">
      <div className="flex gap-4">
        <Avatar size={40} srcUrl={imgUrl ?? ""} className="size-10 min-w-10" />
        <CardContentTitle title={title} subtitle={subtitle} />
      </div>
      {children}
    </header>
  );
}
