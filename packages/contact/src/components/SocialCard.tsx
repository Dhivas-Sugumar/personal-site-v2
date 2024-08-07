import { BaseCard } from "@/design-system/src/cards/BaseCard";
import { Icon, IconVariant } from "@/design-system/src/Icon";
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
      <div className="flex bg-neutral0 shadow-lg shadow-primary100 rounded-xl">
        <Icon variant={iconVariant} iconAlt={iconAlt} />
        <div className="flex flex-col px-l">
          <h3 className="header3">{name}</h3>
          <p className="body">{username}</p>
        </div>
      </div>
    </Link>
  );
};
