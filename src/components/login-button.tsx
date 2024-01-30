"use client";

import { SignIn, SignOut } from "@/libs/phosphor-icons";
import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar } from "./avatar";

export function LoginButton() {
  const { data, status } = useSession();
  const IS_AUTHENTICATED = status === "authenticated";

  async function handleLogin() {
    try {
      await signIn("github");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {IS_AUTHENTICATED ? (
        <div className="mt-auto flex items-center justify-center gap-4">
          <Avatar
            size={32}
            srcUrl={data?.user?.image ?? ""}
            className="size-8 min-w-8"
          />
          <span className="text-sm text-app-gray-200">{data?.user?.name}</span>
          <button className="h-5 w-5" onClick={handleLogout}>
            <SignOut size={20} className="text-[#F75A68]" />
          </button>
        </div>
      ) : (
        <button
          className="mt-auto flex items-center justify-center gap-3 rounded px-1 py-2 font-bold text-app-gray-200 hover:bg-gray-200/[.04]"
          onClick={handleLogin}
        >
          Fazer login
          <SignIn size={20} className="text-app-green-100" />
        </button>
      )}
    </>
  );
}
