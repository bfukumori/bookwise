type CardContentTitleProps = {
  title: string;
  subtitle?: string;
};

export function CardContentTitle({ title, subtitle }: CardContentTitleProps) {
  return (
    <div>
      <h2 className="font-bold text-app-gray-100">{title}</h2>
      {subtitle && (
        <span className="text-sm text-app-gray-400">{subtitle}</span>
      )}
    </div>
  );
}
