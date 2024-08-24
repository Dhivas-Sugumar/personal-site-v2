import { ColorPalette } from "@/design-system";
import { PropsWithChildren } from "react";

type GradientShadowProps = PropsWithChildren & {
  gradientColor1: ColorPalette;
  gradientColor2: ColorPalette;
  gradientColor3: ColorPalette;
  cardBackgroundColor: ColorPalette;
  isAnimated?: boolean;
};

export const GradientShadow: React.FC<GradientShadowProps> = ({
  gradientColor1,
  gradientColor2,
  gradientColor3,
  isAnimated,
  cardBackgroundColor,
  children,
}) => {
  return (
    <div className="relative">
      <div
        className={`absolute ${
          isAnimated && "animate-pulse"
        } -inset-2 rounded-full bg-gradient-to-r from-${gradientColor1} via-${gradientColor2} to-${gradientColor3} opacity-75 blur`}
      />
      <div className={`relative flex rounded-lg bg-${cardBackgroundColor}`}>
        {children}
      </div>
    </div>
  );
};
