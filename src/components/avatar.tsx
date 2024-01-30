import clsx from "clsx";
import Image from "next/image";
import { ComponentProps } from "react";

type AvatarProps = ComponentProps<"div"> & {
  size: number;
  srcUrl: string;
};

export function Avatar({ size, srcUrl, className, ...props }: AvatarProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] p-[2px]",
        className,
      )}
      {...props}
    >
      <Image
        style={{
          aspectRatio: "1/1",
        }}
        src={srcUrl ?? ""}
        width={size}
        height={size}
        alt=""
        className="rounded-full"
      />
    </div>
  );
}
