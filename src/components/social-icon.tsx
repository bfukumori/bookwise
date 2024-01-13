import Image from 'next/image';

import githubLogo from '../../public/assets/akar-icons_github-fill.svg';
import googleLogo from '../../public/assets/logos_google-icon.svg';
import defaultLogo from '../../public/assets/rocket-launch.svg';

export type SocialIcon = 'google' | 'github' | 'guest';

type SocialIconProps = {
  variant: SocialIcon;
};

export function SocialIcon({ variant }: SocialIconProps) {
  if (variant === 'google') {
    return <Image src={googleLogo} width={32} height={32} alt="Google" />;
  }

  if (variant === 'github') {
    return <Image src={githubLogo} width={32} height={32} alt="Github" />;
  }

  return <Image src={defaultLogo} width={32} height={32} alt="Guest" />;
}
