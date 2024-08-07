import { CardList } from "@/design-system/src/cards/CardList";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../Constants";

export const ProjectList: React.FC = () => {
  return <CardList cards={projects} CardComponent={ProjectCard} />;
};
