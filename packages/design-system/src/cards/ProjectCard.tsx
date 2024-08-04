import { ReactNode } from "react";
import { TechnologyCard } from "./TechnologyCard";
import { BaseCard, BaseCardProps } from "./BaseCard";

export type TechnologiesProps = {
  name: string;
  icon: ReactNode; // Add a Icon component to the design  system
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
