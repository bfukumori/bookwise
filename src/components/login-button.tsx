"use client";
import { SignIn } from "libs/phosphor-icons";

export function LoginButton() {
  async function handleLogin() {
    console.log("Fazer o login");
  }

  return (
    <button
      className="mt-auto flex items-center gap-3 rounded px-1 py-2 font-bold text-app-gray-200 hover:bg-gray-200/[.04]"
      onClick={handleLogin}
    >
      Fazer login
      <SignIn size={20} className="text-app-green-100" />
    </button>
  );
}
