import { getServerSession } from "next-auth";

import { Binoculars, ChartLineUp, User } from "@/libs/phosphor-icons";
import { Navlink } from "./nav-link";
import { Logo } from "./logo";
import { LoginButton } from "./login-button";

export async function Sidebar() {
  const session = await getServerSession();
  const isLoggedIn = session?.user;

  return (
    <aside className="flex max-h-[880px] flex-col overflow-clip rounded-lg bg-[url('/images/sidebar-background.png')] bg-cover bg-no-repeat px-12 py-10">
      <Logo variant="sm" />
      <nav className="mt-16 flex flex-col gap-4">
        <Navlink icon={ChartLineUp} text="Início" path="/home" />
        <Navlink
          icon={Binoculars}
          text="Explorar"
          path="/explore?category=Tudo"
        />
        {isLoggedIn && <Navlink icon={User} text="Perfil" path="/profile" />}
      </nav>
      <LoginButton />
    </aside>
  );
}
