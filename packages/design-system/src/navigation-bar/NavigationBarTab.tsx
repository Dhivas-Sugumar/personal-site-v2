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
  const { variant, size } = icon;
  return (
    <Link href={link}>
      <div className="flex flex-col items-center p-4">
        <Icon variant={variant} size={size} />
        <h4 className="text-accent300">{title}</h4>
      </div>
    </Link>
  );
};
