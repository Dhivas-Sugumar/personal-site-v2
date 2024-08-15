import { Icon, IconProps } from "../Icon";

export type TechnologyCardProps = {
  name: string;
  icon: IconProps;
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  icon,
}) => {
  return (
    <div className="flex flex-col">
      <Icon variant={icon.variant} size={icon.size} iconAlt={icon.iconAlt} />
      <h4>{name}</h4>
    </div>
  );
};
