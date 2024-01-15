import { ComponentProps } from "react";

type TextInputRootProps = ComponentProps<"div">;

export function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className="flex items-center gap-2 rounded border border-app-gray-500 px-5 py-3.5 text-app-gray-500 focus-within:border-app-green-200 focus-within:text-app-green-200 focus-within:caret-app-green-100"
      {...props}
    />
  );
}
