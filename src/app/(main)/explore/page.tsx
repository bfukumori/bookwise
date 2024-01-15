import Image from "next/image";

import { CardContent } from "@/components/card/card-content";
import { CardContentTitle } from "@/components/card/card-content-title";
import { CardRoot } from "@/components/card/card-root";
import { PageTitle } from "@/components/page-title";
import { RatingStars } from "@/components/rating-stars";
import { Binoculars, MagnifyingGlass } from "libs/phosphor-icons";
import { TextInputRoot } from "@/components/text-input/text-input-root";
import { TextInputControl } from "@/components/text-input/text-input-control";
import { Chip } from "@/components/chip";

export default function Explore() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <PageTitle title="Explorar" icon={Binoculars} />
        <div className="mb-10 w-full max-w-[433px]">
          <TextInputRoot>
            <TextInputControl placeholder="Buscar livro ou autor" />
            <MagnifyingGlass size={20} />
          </TextInputRoot>
        </div>
      </div>
      <div className="mb-12 flex items-center gap-3">
        <Chip title="Tudo" value="all" />
        <Chip title="Computação" value="computing" />
        <Chip title="Educação" value="education" />
        <Chip title="Fantasia" value="fantasy" />
        <Chip title="Ficção científica" value="fiction" />
        <Chip title="Horror" value="horror" />
        <Chip title="HQs" value="hqs" />
        <Chip title="Suspense" value="suspense" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <CardRoot>
          <CardContent>
            <Image
              src="/assets/books/a-revolucao-dos-bichos.png"
              width={102}
              height={152}
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
    </div>
  );
}
