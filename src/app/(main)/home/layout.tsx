import Image from "next/image";

import { CardContent } from "@/components/card/card-content";
import { CardRoot } from "@/components/card/card-root";
import { PageTitle } from "@/components/page-title";
import { TitleSection } from "@/components/title-section";
import { CardContentTitle } from "@/components/card/card-content-title";
import { ChartLineUp } from "libs/phosphor-icons";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageTitle title="Início" icon={ChartLineUp} />
      <div className="grid grid-cols-home gap-16">
        <main>{children}</main>
        <aside>
          <TitleSection title="Livros populares" linkTo="/explore" />
          <CardRoot>
            <CardContent>
              <Image
                src="/assets/books/a-revolucao-dos-bichos.png"
                width={64}
                height={94}
                alt="A Revolução dos Bichos"
              />
              <CardContentTitle
                title="A Revolução dos Bichos"
                subtitle="George Orwell"
              />
            </CardContent>
          </CardRoot>
        </aside>
      </div>
    </div>
  );
}
