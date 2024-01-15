import { Logo } from "@/components/logo";
import { SocialButton } from "@/components/social-button";

export default function Login() {
  return (
    <div className="m-auto grid h-full max-w-8xl grid-cols-login gap-5 p-5 max-[675px]:grid-cols-1">
      <aside className="grid place-content-center overflow-clip rounded-lg bg-[url('/assets/login-background.png')] bg-cover bg-no-repeat">
        <Logo />
      </aside>
      <main className="mt-6 min-[675px]:m-auto">
        <div className="sm:min-w-[372px]">
          <div>
            <h2 className="text-2xl font-bold text-app-gray-100 ">
              Boas vindas!
            </h2>
            <p className="mb-10 text-app-gray-200">
              Faça seu login ou acesse como visitante
            </p>
          </div>
          <div className="flex w-full flex-col gap-4">
            <SocialButton text="Entrar com Google" providerName="google" />
            <SocialButton text="Entrar com GitHub" providerName="github" />
            <SocialButton text="Acessar como visitante" providerName="guest" />
          </div>
        </div>
      </main>
    </div>
  );
}
