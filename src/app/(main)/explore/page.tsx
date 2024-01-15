import Image from "next/image";

import { CardContent } from "@/components/card/card-content";
import { CardContentTitle } from "@/components/card/card-content-title";
import { CardRoot } from "@/components/card/card-root";
import { PageTitle } from "@/components/page-title";
import { RatingStars } from "@/components/rating-stars";
import { Binoculars } from "libs/phosphor-icons";

export default function Explore() {
  return (
    <div>
      <PageTitle title="Explorar" icon={Binoculars} />
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
