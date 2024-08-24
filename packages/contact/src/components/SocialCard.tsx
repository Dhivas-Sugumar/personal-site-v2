import { BaseCard } from "@/design-system/src/cards/BaseCard";
import { Icon, IconVariant } from "@/design-system/src/Icon";
import { GradientShadow } from "@/design-system/src/shadow/GradientShadow";
import Link from "next/link";

export type SocialCardProps = {
  name: string;
  iconVariant: IconVariant;
  iconAlt: string;
  link: string;
  username: string;
};

export const SocialCard: React.FC<SocialCardProps> = ({
  name,
  iconVariant,
  iconAlt,
  link,
  username,
}) => {
  return (
    <Link href={link}>
      <GradientShadow
        gradientColor1={"primary100"}
        gradientColor2={"tertiary100"}
        gradientColor3={"secondary100"}
        cardBackgroundColor="neutral0"
      >
        <Icon variant={iconVariant} iconAlt={iconAlt} />
        <div className="flex flex-col px-l">
          <h3 className="header3">{name}</h3>
          <p className="body">{username}</p>
        </div>
      </GradientShadow>
    </Link>
  );
};
