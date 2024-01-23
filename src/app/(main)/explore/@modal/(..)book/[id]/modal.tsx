"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

import { X } from "@/libs/phosphor-icons";
import { useEffect } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    document.querySelector("body")?.classList.remove("overflow-hidden");
    router.back();
  }

  useEffect(() => {
    const modal = document.getElementById("modal");

    if (modal && modal.hasAttribute("open")) {
      document.querySelector("body")?.classList.add("overflow-hidden");
    }
  }, []);

  return createPortal(
    <div className="fixed inset-0 m-0 grid grid-cols-[1fr_660px] bg-black/60">
      <dialog
        id="modal"
        open
        onClose={onDismiss}
        className="animate-fadeIn col-start-2 m-0 flex h-full w-full flex-col gap-10 overflow-y-auto bg-app-gray-800 px-12 py-6"
      >
        <button
          className="-mb-6 self-end text-app-gray-400"
          onClick={onDismiss}
        >
          <X size={24} />
        </button>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
