import { PropsWithChildren } from "react";
import { PolaroidCard } from "./PolaroidCard";
import { GradientShadow } from "../shadow/GradientShadow";
import { GlassMorphismContainer } from "../glass-morphism/glass-morphism-container";

export type BaseCardProps = PropsWithChildren & {
  imageSrc?: string;
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
    <div className="bg-primary100/20 backdrop-blur-2xl border-[1px] rounded-lg border-accent300">
      {imageSrc && (
        <PolaroidCard
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          date={dateRange}
          variant={children ? "small" : "default"}
        />
      )}
      <div className="ml-6">{children}</div>
    </div>
  );
};
