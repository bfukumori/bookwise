import Image from "next/image";

import { CardRoot } from "@/components/card/card-root";
import { CardContent } from "@/components/card/card-content";
import { CardHeader } from "@/components/card/card-header";

export default function Home() {
  return (
    <section>
      <h2 className="mb-4 text-sm text-app-gray-100">
        Avaliações mais recentes
      </h2>
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
              <h2 className="font-bold text-app-gray-100">O Hobbit</h2>
              <span className="text-sm text-app-gray-400">J.R.R. Tolkien</span>
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
