import Link from "next/link";
import { Icon, IconProps } from "../Icon";

export type NavigationBarTabProps = {
  title: string;
  icon: IconProps;
  link: string;
};

export const NavigationBarTab: React.FC<NavigationBarTabProps> = ({
  title,
  icon,
  link,
}) => {
  const { variant, size, iconAlt } = icon;
  return (
    <Link href={link}>
      <div className="flex flex-col items-center">
        <Icon variant={variant} size={size} iconAlt={iconAlt} />
        <h4>{title}</h4>
      </div>
    </Link>
  );
};
