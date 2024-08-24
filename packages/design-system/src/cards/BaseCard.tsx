import { PropsWithChildren } from "react";
import { PolaroidCard } from "./PolaroidCard";
import { GradientShadow } from "../shadow/GradientShadow";

export type BaseCardProps = PropsWithChildren & {
  imageSrc: string;
  imageAlt: string;
  startDate?: string;
  endDate?: string;
  polaroidVariant?: "default" | "small";
};

export const BaseCard: React.FC<BaseCardProps> = ({
  imageSrc,
  imageAlt,
  startDate,
  endDate,
  children,
}) => {
  const dateRange = `${startDate} - ${endDate}`;
  return (
    // <div className="flex bg-neutral0 shadow-lg shadow-primary100 rounded-xl gap-x-6">
    <GradientShadow
      gradientColor1={"primary100"}
      gradientColor2={"tertiary100"}
      gradientColor3={"secondary100"}
      cardBackgroundColor="neutral0"
    >
      <PolaroidCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        date={dateRange}
        variant={children ? "small" : "default"}
      />
      {children}
    </GradientShadow>

    // </div>
  );
};
