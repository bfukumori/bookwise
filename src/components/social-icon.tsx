import Image from "next/image";

import githubLogo from "../../public/images/github-icon.svg";
import googleLogo from "../../public/images/google-icon.svg";
import defaultLogo from "../../public/images/rocket-launch.svg";

export type SocialIcon = "google" | "github" | "guest";

type SocialIconProps = {
  variant: SocialIcon;
};

export function SocialIcon({ variant }: SocialIconProps) {
  if (variant === "google") {
    return <Image src={googleLogo} width={32} height={32} alt="Google" />;
  }

  if (variant === "github") {
    return <Image src={githubLogo} width={32} height={32} alt="Github" />;
  }

  return <Image src={defaultLogo} width={32} height={32} alt="Guest" />;
}
