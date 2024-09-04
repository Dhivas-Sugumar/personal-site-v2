import { PropsWithChildren } from "react";

export const GlassMorphismContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-grad/10  rounded-lg border-2 border-accent300 shadow-lg shadow-accent300 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};
