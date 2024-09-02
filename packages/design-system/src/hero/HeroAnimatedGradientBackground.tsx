import { PropsWithChildren } from "react";

export const HeroAnimatedGradientBackground: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="animate-15-seconds bg-gradient-to-r from-primary100 via-tertiary100 to-secondary100">
      {children}
    </div>
  );
};
