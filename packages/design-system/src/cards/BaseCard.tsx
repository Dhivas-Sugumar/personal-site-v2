import { PropsWithChildren } from "react";
import { PolaroidCard } from "./PolaroidCard";

export type BaseCardProps = PropsWithChildren & {
  imageSrc: string;
  imageAlt: string;
  startDate: string;
  endDate: string;
  name: string;
  description: string;
  polaroidVariant?: "default" | "small";
};

export const BaseCard: React.FC<BaseCardProps> = ({
  imageSrc,
  imageAlt,
  startDate,
  endDate,
  name,
  description,
  children,
}) => {
  const dateRange = `${startDate} - ${endDate}`;
  return (
    <div className="flex bg-accent300 rounded-xl">
      <PolaroidCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        date={dateRange}
        variant={children ? "small" : "default"}
      />
      <div className="flex flex-col px-l">
        <h2>{name}</h2>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};
