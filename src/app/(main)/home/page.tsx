import Image from "next/image";

import { CardRoot } from "@/components/card/card-root";
import { CardContent } from "@/components/card/card-content";
import { CardHeader } from "@/components/card/card-header";
import { CardContentTitle } from "@/components/card/card-content-title";
import { TitleSection } from "@/components/title-section";
import { RatingStars } from "@/components/rating-stars";
import { PageTitle } from "@/components/page-title";
import { ChartLineUp } from "libs/phosphor-icons";

export default function Home() {
  return (
    <div>
      <PageTitle title="Início" icon={ChartLineUp} />
      <div className="grid grid-cols-home gap-16">
        <section>
          <TitleSection title=" Avaliações mais recentes" />
          <div className="flex flex-col gap-3">
            <CardRoot>
              <CardHeader
                title="Jaxson Dias"
                subtitle="Hoje"
                imgUrl="https://github.com/bfukumori.png"
              >
                <RatingStars readOnly />
              </CardHeader>
              <CardContent>
                <Image
                  src="/assets/books/o-hobbit.png"
                  width={108}
                  height={152}
                  alt="O Hobbit"
                />
                <div>
                  <CardContentTitle
                    title="O Hobbit"
                    subtitle="J.R.R. Tolkien"
                  />
                  <p className="line-clamp-3 text-sm text-app-gray-300">
                    Semper et sapien proin vitae nisi. Feugiat neque integer
                    donec et aenean posuere amet ultrices. Cras fermentum id
                    pulvinar varius leo a in. Amet libero pharetra nunc
                    elementum fringilla velit ipsum. Sed vulputate massa velit
                    nibh
                  </p>
                  <span className="cursor-pointer font-bold text-app-purple-100 hover:text-app-purple-100/60">
                    ver mais
                  </span>
                </div>
              </CardContent>
            </CardRoot>
          </div>
        </section>
        <aside>
          <TitleSection
            title="Livros populares"
            linkTo="/explore?category=all"
          />
          <div className="flex flex-col gap-3">
            <CardRoot>
              <CardContent>
                <Image
                  src="/assets/books/a-revolucao-dos-bichos.png"
                  width={64}
                  height={94}
                  alt="A Revolução dos Bichos"
                />
                <div className="flex flex-col justify-between">
                  <CardContentTitle
                    title="A Revolução dos Bichos"
                    subtitle="George Orwell"
                  />
                  <RatingStars readOnly />
                </div>
              </CardContent>
            </CardRoot>
          </div>
        </aside>
      </div>
    </div>
  );
}
