import { ElementType } from "react";

type PageTitleProps = {
  title: string;
  icon: ElementType;
};

export function PageTitle({ title, icon: Icon }: PageTitleProps) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <Icon size={32} className="text-app-green-100" />
      <h1 className="text-2xl font-bold text-app-gray-100">{title}</h1>
    </div>
  );
}
