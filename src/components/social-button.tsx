import { ComponentProps } from "react";

import { SocialIcon } from "./social-icon";

type SocialButtonProps = ComponentProps<"button"> & {
  text: string;
  providerName: SocialIcon;
};

export function SocialButton({
  providerName,
  text,
  ...props
}: SocialButtonProps) {
  return (
    <button
      className="flex w-full items-center gap-5 rounded-lg bg-app-gray-600 px-5 py-6 text-lg font-bold text-app-gray-200 hover:bg-app-gray-500"
      {...props}
    >
      <SocialIcon variant={providerName} />
      {text}
    </button>
  );
}
