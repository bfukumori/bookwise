import { ComponentProps } from "react";

type CardContentProps = ComponentProps<"div">;

export function CardContent(props: CardContentProps) {
  return <div className="flex flex-1 gap-5" {...props} />;
}
