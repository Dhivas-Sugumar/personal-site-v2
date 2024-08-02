import { PropsWithChildren } from "react";

export const CardBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex bg-accent300 rounded-xl">{children}</div>;
};
