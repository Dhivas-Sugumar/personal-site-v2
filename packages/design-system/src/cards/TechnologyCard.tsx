import { SiReact } from "@icons-pack/react-simple-icons";
import { Icon, IconProps, IconVariant } from "../Icon";

export type TechnologyCardProps = {
  name: string;
  iconVariant: IconVariant;
};

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  iconVariant,
}) => {
  return (
    <div className="flex flex-col">
      <Icon variant={iconVariant} size="medium" tint="#ffff" />
      <h4>{name}</h4>
    </div>
  );
};
