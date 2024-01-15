import { PageTitle } from "@/components/page-title";
import { Binoculars } from "libs/phosphor-icons";

export default function Explore({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageTitle title="Explorar" icon={Binoculars} />
      <div className="grid grid-cols-home gap-16">
        <main>{children}</main>
      </div>
    </div>
  );
}
