"use client";

import { useState } from "react";

import { SocialButton } from "@/components/social-button";
import { X } from "@/libs/phosphor-icons";
import { useSession } from "next-auth/react";
import { RatingForm } from "@/components/rating-form";

export function RatingCTA() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  function handleOpen() {
    if (isAuthenticated) {
      setShowForm(true);
      return;
    }
    setOpen(true);
  }

  function handleClose() {
    if (isAuthenticated) {
      setShowForm(false);
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm text-app-gray-100">Avaliações</h2>
        <div>
          {!showForm && (
            <button
              className="text-sm font-bold text-app-purple-100 hover:bg-app-purple-100/[.06]"
              onClick={handleOpen}
            >
              Avaliar
            </button>
          )}

          {open && (
            <div className="fixed inset-0 flex animate-fadeIn items-center justify-center bg-black/60">
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
                  <SocialButton
                    text="Entrar com Google"
                    providerName="google"
                  />
                  <SocialButton
                    text="Entrar com GitHub"
                    providerName="github"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showForm && (
        <div className="mb-3">
          <RatingForm handleClose={handleClose} />
        </div>
      )}
    </>
  );
}
