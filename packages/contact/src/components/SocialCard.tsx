import { BaseCard } from "@/design-system/src/cards/BaseCard";
import { Icon, IconProps, IconVariant } from "@/design-system/src/Icon";
import { GradientShadow } from "@/design-system/src/shadow/GradientShadow";
import Link from "next/link";

export type SocialCardProps = {
  name: string;
  link: string;
  username: string;
  icon: IconProps;
};

export const SocialCard: React.FC<SocialCardProps> = ({
  name,
  link,
  username,
  icon,
}) => {
  const { variant: iconVariant, size: iconSize } = icon;
  return (
    <Link href={link}>
      <GradientShadow
        gradientColor1={"primary100"}
        gradientColor2={"tertiary100"}
        gradientColor3={"secondary100"}
        cardBackgroundColor="neutral0"
      >
        <div className="flex flex-row items-center justify-center ">
          <Icon variant={iconVariant} size={iconSize} />
          <div className="flex flex-col px-l">
            <h3 className="header3">{name}</h3>
            <p className="body">{username}</p>
          </div>
        </div>
      </GradientShadow>
    </Link>
  );
};
