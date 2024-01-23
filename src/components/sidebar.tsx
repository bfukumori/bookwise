import { Navlink } from "./nav-link";
import { Logo } from "./logo";
import { Binoculars, ChartLineUp } from "@/libs/phosphor-icons";
import { LoginButton } from "./login-button";

export function Sidebar() {
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
      </nav>
      <LoginButton />
    </aside>
  );
}
