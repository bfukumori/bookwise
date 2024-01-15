import { ComponentProps } from "react";

type CardRootProps = ComponentProps<"div">;

export function CardRoot(props: CardRootProps) {
  return (
    <div
      className="flex flex-col gap-8 rounded-lg bg-app-gray-700 p-6"
      {...props}
    />
  );
}
