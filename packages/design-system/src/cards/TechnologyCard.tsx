import { SiReact } from "@icons-pack/react-simple-icons";
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
      <Icon variant="datadog" size="medium" tint="#ffff" />
      <h4>{name}</h4>
    </div>
  );
};
