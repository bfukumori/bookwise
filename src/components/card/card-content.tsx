import { ComponentProps } from "react";

type CardContentProps = ComponentProps<"div">;

export function CardContent(props: CardContentProps) {
  return <div className="flex gap-5" {...props} />;
}