import React, { PropsWithChildren } from "react";

export type ColumnProps = PropsWithChildren & {
  className?: string;
};
export const Column: React.FC<ColumnProps> = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
