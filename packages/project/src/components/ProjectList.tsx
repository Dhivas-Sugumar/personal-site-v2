import { CardList } from "@/design-system/src/cards/card-list";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../Constants";

export const ProjectList: React.FC = () => {
  return <CardList cards={projects} CardComponent={ProjectCard} />;
};
