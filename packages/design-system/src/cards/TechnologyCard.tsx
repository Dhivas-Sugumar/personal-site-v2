import { ReactNode } from "react";
import { Icon, IconProps } from "../Icon";

type TechnologyCardProps = {
  key?: string;
  name: string;
  icon: IconProps;
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  key,
  name,
  icon,
}) => {
  return (
    <div key={key} className="flex flex-col">
      <Icon variant={icon.variant} size={icon.size} iconAlt={icon.iconAlt} />
      <h4>{name}</h4>
    </div>
  );
};
