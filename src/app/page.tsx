import Image from 'next/image';

import { SocialButton } from '@/components/social-button';
import logo from '../../public/assets/mdi_book-heart-outline.svg';

export default function Login() {
  return (
    <div className="p-5 grid grid-cols-app h-full">
      <aside className="bg-[url('/assets/login-img.png')] grid place-content-center relative rounded-lg overflow-clip">
        <div className="z-10 flex items-center gap-3">
          <Image src={logo} width={48} height={48} alt="BookWise" />
          <span className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent font-bold text-4xl leading-relaxed">
            BookWise
          </span>
        </div>
        <span
          className="inset-0 absolute
        bg-gradient-to-bl from-app-purple-200 to-app-purple-100/60 backdrop-blur-[1px]"
        />
      </aside>
      <main className="m-auto">
        <div className="min-w-[372px]">
          <div>
            <h2 className="text-app-gray-100 text-2xl font-bold ">
              Boas vindas!
            </h2>
            <p className="text-app-gray-200 mb-10">
              Faça seu login ou acesse como visitante
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <SocialButton text="Entrar com Google" providerName="google" />
            <SocialButton text="Entrar com GitHub" providerName="github" />
            <SocialButton text="Acessar como visitante" providerName="guest" />
          </div>
        </div>
      </main>
    </div>
  );
}
