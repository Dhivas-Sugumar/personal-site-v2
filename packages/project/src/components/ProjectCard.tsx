import { ReactNode } from "react";
import { TechnologyCard } from "../../../design-system/src/cards/TechnologyCard";
import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/BaseCard";
import { IconProps } from "@/design-system/src/Icon";

export type TechnologiesProps = {
  name: string;
  icon: IconProps; // Add a Icon component to the design  system
};

export type ProjectCardProps = BaseCardProps & {
  technologies: TechnologiesProps[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  technologies,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="default" {...props}>
      <div className="flex flex-wrap">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </BaseCard>
  );
};
