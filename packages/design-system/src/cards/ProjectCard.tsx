import { ReactNode } from "react";
import { CardBackground } from "./CardBackground";
import { PolaroidCard } from "./PolaroidCard";
import { TechnologyCard } from "./TechnologyCard";

export type TechnologiesProps = {
  name: string;
  icon: ReactNode; // Add a Icon component to the design  system
};

export type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  startDate: string;
  endDate: string;
  projectName: string;
  description: string;
  technologies: TechnologiesProps[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  startDate,
  endDate,
  projectName,
  description,
  technologies,
}) => {
  const dateRange = `${startDate} - ${endDate}`;
  return (
    <CardBackground>
      <PolaroidCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        date={dateRange}
        variant={"default"}
      />
      <div className="flex flex-col px-l">
        <h2>{projectName}</h2>
        <p>{description}</p>
        {/*TODO: Make this an auto scrolling carousel */}
        <div className="flex flex-wrap">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </CardBackground>
  );
};
