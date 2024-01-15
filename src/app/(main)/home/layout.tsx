import Image from "next/image";

import { CardContent } from "@/components/card/card-content";
import { CardRoot } from "@/components/card/card-root";
import { CaretRight, ChartLineUp } from "libs/phosphor-icons";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-10 flex items-center gap-3">
        <ChartLineUp size={32} className="text-app-green-100" />
        <h1 className="text-2xl font-bold text-app-gray-100">Início</h1>
      </div>
      <div className="grid grid-cols-home gap-16">
        <main>{children}</main>
        <aside>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm text-app-gray-100">Livros populares</h2>
            <Link
              href="/explore"
              className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold text-app-purple-100 hover:bg-app-purple-100/[.06]"
            >
              Ver todos
              <CaretRight />
            </Link>
          </div>
          <div>
            <CardRoot>
              <CardContent>
                <Image
                  src="/assets/books/a-revolucao-dos-bichos.png"
                  width={64}
                  height={94}
                  alt="A Revolução dos Bichos"
                />
                <div>
                  <h2 className="font-bold text-app-gray-100">
                    A revolução dos bichos
                  </h2>
                  <span className="text-sm text-app-gray-400">
                    George Orwell
                  </span>
                </div>
              </CardContent>
            </CardRoot>
          </div>
        </aside>
      </div>
    </div>
  );
}
