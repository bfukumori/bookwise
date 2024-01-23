import { ComponentProps } from "react";

export function CardFooter(props: ComponentProps<"footer">) {
  return (
    <footer
      className="flex gap-14 border-t border-app-gray-600 py-6"
      {...props}
    />
  );
}
