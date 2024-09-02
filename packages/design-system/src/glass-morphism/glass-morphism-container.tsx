import { PropsWithChildren } from "react";

export const GlassMorphismContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 animate-15-seconds bg-gradient-to-r from-primary100 via-tertiary100 to-secondary100 rounded-lg overflow-hidden"></div>
      <div className="relative bg-primary100/30 bg-opacity-70 backdrop-blur-3xl rounded-lg border-2 border-accent300 shadow-lg shadow-accent300 ">
        {children}
      </div>
    </div>
  );
};
