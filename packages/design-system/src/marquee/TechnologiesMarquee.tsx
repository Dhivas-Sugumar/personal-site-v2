import { TechnologyCard, TechnologyCardProps } from "../cards/TechnologyCard";
import { Marque } from "./Marquee";

export type TechnologiesMarqueeProps = {
  technologies: TechnologyCardProps[];
};

export const TechnologiesMarquee: React.FC<TechnologiesMarqueeProps> = ({
  technologies,
}) => {
  return <Marque items={technologies} MarqueeComponent={TechnologyCard} />;
};
