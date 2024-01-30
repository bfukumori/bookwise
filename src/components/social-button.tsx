"use client";

import { ComponentProps } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();

  async function handleLogin() {
    if (providerName === "guest") {
      return push("home");
    }

    try {
      await signIn(providerName);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="flex w-full items-center gap-5 rounded-lg bg-app-gray-600 px-5 py-6 text-lg font-bold text-app-gray-200 hover:bg-app-gray-500"
      {...props}
    >
      <SocialIcon variant={providerName} />
      {text}
    </button>
  );
}
