import { CardList } from "@/design-system/src/cards/CardList";
import { ProjectCard } from "@/design-system/src/cards/ProjectCard";
import { projectCards } from "../Constants";

export const ProjectsList: React.FC = () => {
  return <CardList cards={projectCards} CardComponent={ProjectCard} />;
};
