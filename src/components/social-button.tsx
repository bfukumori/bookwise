import { ComponentProps } from 'react';

import { SocialIcon } from './social-icon';

type SocialButtonProps = ComponentProps<'button'> & {
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
      className="flex items-center gap-5 px-5 py-6 bg-app-gray-600 rounded-lg hover:bg-app-gray-500"
      {...props}
    >
      <SocialIcon variant={providerName} />
      <span className="text-app-gray-200 font-bold text-lg">{text}</span>
    </button>
  );
}
