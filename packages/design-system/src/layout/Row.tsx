import { PropsWithChildren } from "react";

export type RowProps = PropsWithChildren & {
  contentJustify?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | "normal";
  className?: string;
};

export const Row: React.FC<RowProps> = ({
  children,
  contentJustify = "normal",
  className,
}) => {
  return (
    <div className={`flex flex-row justify-${contentJustify} ${className}`}>
      {children}
    </div>
  );
};
