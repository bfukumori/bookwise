import { ElementType } from "react";

type ListItemProps = {
  title: string;
  subtitle?: string;
  icon: ElementType;
};

export function ListItem({ title, subtitle, icon: Icon }: ListItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon size={24} className="text-app-green-100" />
      <div>
        <h3 className="text-sm text-app-gray-300">{title}</h3>
        <span className="font-bold text-app-gray-200">{subtitle}</span>
      </div>
    </div>
  );
}
