import { ComponentProps } from "react";

type TextInputControlProps = ComponentProps<"input">;

export function TextInputControl(props: TextInputControlProps) {
  return (
    <input
      type="text"
      className="flex-1 bg-transparent text-app-gray-200 outline-none placeholder:text-app-gray-400"
      {...props}
    />
  );
}
