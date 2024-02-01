import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PageTitle } from "@/components/page-title";
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from "@/libs/phosphor-icons";
import { redirect } from "next/navigation";
import { SearchRatedBookForm } from "@/components/search-rated-book-form";
import { Avatar } from "@/components/avatar";
import { ListItem } from "@/components/list-item";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/auth-options";

dayjs.extend(relativeTime);

export default async function Profile() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session?.user) {
    redirect("/home");
  }

  return (
    <div className="animate-fadeIn">
      <PageTitle title="Perfil" icon={User} />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-home">
        <section>
          <SearchRatedBookForm />
        </section>
        <aside>
          <div className="border-l border-app-gray-700">
            <div className="flex flex-col items-center gap-5">
              <Avatar
                size={72}
                srcUrl={session.user.image ?? ""}
                className="size-[72px] min-w-[72px]"
              />
              <div>
                <h2 className="text-xl font-bold text-app-gray-100">
                  {session.user.name}
                </h2>
                <p className="text-center text-sm text-app-gray-400">
                  membro desde 2019
                </p>
              </div>
            </div>
            <div className="mx-auto my-8 h-1 w-8 rounded-full bg-gradient-to-r from-[#7FD1CC] to-[#9694F5]" />
            <div className="space-y-10 px-14 py-5">
              <ListItem
                icon={BookOpen}
                title="3853"
                subtitle="Páginas lidas"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={Books}
                title="10"
                subtitle="Livros avaliados"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={UserList}
                title="8"
                subtitle="Autores lidos"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
              <ListItem
                icon={BookmarkSimple}
                title="Computação"
                subtitle="Categoria mais lida"
                iconSize={32}
                titleProps="font-bold text-app-gray-200"
                subtitleProps="text-sm text-app-gray-300"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
