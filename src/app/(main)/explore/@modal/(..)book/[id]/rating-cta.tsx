"use client";

import { useState } from "react";

import { SocialButton } from "@/components/social-button";
import { X } from "@/libs/phosphor-icons";

export function RatingCTA() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <button
        className="text-sm font-bold text-app-purple-100 hover:bg-app-purple-100/[.06]"
        onClick={handleOpen}
      >
        Avaliar
      </button>

      {open && (
        <div className="animate-fadeIn fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="relative rounded-xl bg-app-gray-700 px-[72px] py-14">
            <button
              className="absolute right-4 top-4 text-app-gray-400"
              onClick={handleClose}
            >
              <X size={24} />
            </button>
            <h2 className="mb-10 text-center font-bold text-app-gray-200">
              Faça login para deixar sua avaliação
            </h2>
            <div className="flex w-[372px] flex-col gap-4">
              <SocialButton text="Entrar com Google" providerName="google" />
              <SocialButton text="Entrar com GitHub" providerName="github" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
