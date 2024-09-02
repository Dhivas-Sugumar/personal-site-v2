import { Icon, IconVariant } from "../Icon";

export type TechnologyCardProps = {
  name: string;
  iconVariant: IconVariant;
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  iconVariant,
}) => {
  return (
    <div className="flex flex-col rounded-full border-secondary500 border-3">
      <Icon variant={iconVariant} size="medium" tint="#ffff" />
      <h4>{name}</h4>
    </div>
  );
};
