import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/experience/src/components/ExperienceCard";
import { experienceCards } from "./Constants";

export const ExperienceCardList: React.FC = () => {
  return <CardList cards={experienceCards} CardComponent={ExperienceCard} />;
};
