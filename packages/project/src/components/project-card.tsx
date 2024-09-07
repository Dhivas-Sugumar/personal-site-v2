import { TechnologyCardProps } from "../../../design-system/src/cards/technology-card";
import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/base-card";
import { Badge } from "@/design-system/src/badge/badge";

export type ProjectCardProps = BaseCardProps & {
  name: string;
  description: string;
  technologies: TechnologyCardProps[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  description,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="default" {...props}>
      <div className="flex flex-col gap-3">
        <h2>{name}</h2>
        <p className="body">{description}</p>
        <div className="items-center flex flex-row gap-2 ">
          {/* <TechnologiesMarquee technologies={technologies} /> */}
          {technologies.map((technology) => {
            return <Badge label={technology.name} />;
          })}
        </div>
      </div>
    </BaseCard>
  );
};
