import { ReactNode } from "react";
import { TechnologyCard } from "../../../design-system/src/cards/TechnologyCard";
import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/BaseCard";
import { IconProps } from "@/design-system/src/Icon";
import { TechnologiesMarquee } from "@/design-system/src/marquee/TechnologiesMarquee";

export type TechnologiesProps = {
  name: string;
  icon: IconProps; // Add a Icon component to the design  system
};

export type ProjectCardProps = BaseCardProps & {
  name: string;
  description: string; 
  technologies: TechnologiesProps[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  description,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="default" {...props}>
      <div className="flex flex-col ">
        <h2>{name}</h2>
        <p className="text-accent300">{description}</p>
        <TechnologiesMarquee technologies={technologies} />
      </div>
    </BaseCard>
  );
};
