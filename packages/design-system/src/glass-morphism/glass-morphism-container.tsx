import { PropsWithChildren } from "react";

type GlassMorphismContainerProps = PropsWithChildren & {
  isBorder?: boolean;
};

export const GlassMorphismContainer: React.FC<GlassMorphismContainerProps> = ({
  children,
  isBorder = true,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative bg-grad/10  rounded-lg ${
          isBorder && "border-2 border-accent300"
        } shadow-lg shadow-accent300 backdrop-blur-sm`}
      >
        {children}
      </div>
    </div>
  );
};
