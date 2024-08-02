import { ReactNode } from "react";

type TechnologyCardProps = {
  key?: string;
  name: string;
  icon: ReactNode;
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  key,
  name,
  icon,
}) => {
  return (
    <div key={key} className="flex flex-col">
      {icon}
      <h4>{name}</h4>
    </div>
  );
};
