import { BaseCard } from "@/design-system/src/cards/BaseCard";
import { Icon, IconVariant } from "@/design-system/src/Icon";
import Link from "next/link";

export type SocialCardProps = {
  socialName: string;
  iconVariant: IconVariant;
  iconAlt: string;
  link: string;
  username: string;
};

export const SocialCard: React.FC<SocialCardProps> = ({
  socialName,
  iconVariant,
  iconAlt,
  link,
  username,
}) => {
  return (
    <Link href={link}>
      <div className="flex bg-accent300 rounded-xl">
        <Icon variant={iconVariant} iconAlt={iconAlt} />
        <div className="flex flex-col px-l">
          <h2>{socialName}</h2>
          <p>{username}</p>
        </div>
      </div>
    </Link>
  );
};
