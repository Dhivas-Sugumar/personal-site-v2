import Image from "next/image";
import { useIconImageVariant } from "./hooks/useIconImageVariant";

export type IconVariant = "ruby" | "react" | "graphql" | "typescript";
export type IconSize = "small" | "medium" | "large";
export type IconProps = {
  iconAlt: string;
  size: IconSize;
  variant: IconVariant;
};

export const Icon: React.FC<IconProps> = ({ iconAlt, size, variant }) => {
  const { imageSrc, width, height } = useIconImageVariant(variant, size);
  return <Image src={imageSrc} width={width} height={height} alt={iconAlt} />;
};
