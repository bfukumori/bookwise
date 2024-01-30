import { ElementType } from "react";

type ListItemProps = {
  title: string;
  titleProps?: string;
  subtitle?: string;
  subtitleProps?: string;
  icon: ElementType;
  iconSize?: number;
};

export function ListItem({
  title,
  subtitle,
  subtitleProps,
  titleProps,
  iconSize = 24,
  icon: Icon,
}: ListItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon size={iconSize} className="text-app-green-100" />
      <div>
        <h3 className={titleProps ?? "text-sm text-app-gray-300"}>{title}</h3>
        <span className={subtitleProps ?? "font-bold text-app-gray-200"}>
          {subtitle}
        </span>
      </div>
    </div>
  );
}
