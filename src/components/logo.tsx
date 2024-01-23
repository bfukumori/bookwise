import Image from "next/image";

import logo from "../../public/images/app-logo.svg";

type LogoProps = {
  variant?: "sm" | "md";
};

export function Logo({ variant = "md" }: LogoProps) {
  const iconSize = variant === "md" ? 48 : 24;
  const textSize = variant === "md" ? "text-4xl" : "text-xl";

  return (
    <div className="flex items-center gap-3">
      <Image src={logo} width={iconSize} height={iconSize} alt="BookWise" />
      <span
        className={`bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text font-bold text-transparent ${textSize}`}
      >
        BookWise
      </span>
    </div>
  );
}
