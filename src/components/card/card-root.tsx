import clsx from "clsx";
import { ComponentProps } from "react";

type CardRootProps = ComponentProps<"div">;

export function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-lg border-2 border-transparent p-6",
        className,
      )}
      {...props}
    />
  );
}
