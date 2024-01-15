import Image from "next/image";
import { ReactNode } from "react";
import { CardContentTitle } from "./card-content-title";

type CardHeaderProps = {
  title: string;
  subtitle: string;
  imgUrl: string;
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
        <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]">
          <Image
            src={imgUrl}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
        </div>
        <CardContentTitle title={title} subtitle={subtitle} />
      </div>
      {children}
    </header>
  );
}
