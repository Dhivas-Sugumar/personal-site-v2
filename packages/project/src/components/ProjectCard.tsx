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
  technologies: TechnologiesProps[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="default" {...props}>
      <h2>{name}</h2>
      <div className="flex flex-wrap">
        <TechnologiesMarquee technologies={technologies} />
      </div>
    </BaseCard>
  );
};
