import Image from "next/image";

import { CardRoot } from "@/components/card/card-root";
import { CardContent } from "@/components/card/card-content";
import { CardHeader } from "@/components/card/card-header";
import { CardContentTitle } from "@/components/card/card-content-title";
import { TitleSection } from "@/components/title-section";

export default function Home() {
  return (
    <section>
      <TitleSection title=" Avaliações mais recentes" />
      <div className="flex flex-col gap-3">
        <CardRoot>
          <CardHeader
            title="Jaxson Dias"
            subtitle="Hoje"
            imgUrl="https://github.com/bfukumori.png"
          />
          <CardContent>
            <Image
              src="/assets/books/o-hobbit.png"
              width={108}
              height={152}
              alt="O Hobbit"
            />
            <div>
              <CardContentTitle title="O Hobbit" subtitle="J.R.R. Tolkien" />
              <p className="line-clamp-3 text-sm text-app-gray-300">
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                varius leo a in. Amet libero pharetra nunc elementum fringilla
                velit ipsum. Sed vulputate massa velit nibh
              </p>
              <span className="cursor-pointer font-bold text-app-purple-100 hover:text-app-purple-100/60">
                ver mais
              </span>
            </div>
          </CardContent>
        </CardRoot>
      </div>
    </section>
  );
}
