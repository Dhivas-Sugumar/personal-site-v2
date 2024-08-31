import { TechnologyCardProps } from "../../../design-system/src/cards/TechnologyCard";
import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/BaseCard";
import { TechnologiesMarquee } from "@/design-system/src/marquee/TechnologiesMarquee";

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
      <div className="flex flex-col ">
        <h2>{name}</h2>
        <p className="text-accent300">{description}</p>
        <TechnologiesMarquee technologies={technologies} />
      </div>
    </BaseCard>
  );
};
