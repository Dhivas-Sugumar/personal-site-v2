import Link from "next/link";

// TODO: Add icon variant
export type NavigationBarTabProps = {
  title: string;
  // iconVariant: IconVariant;
  link: string;
};

export const NavigationBarTab: React.FC<NavigationBarTabProps> = ({
  title,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center p-4 hover:animate-pulse ">
        {/* <Icon variant={iconVariant} size="medium" /> */}
        <h4 className="text-accent300">{title}</h4>
      </div>
    </Link>
  );
};
