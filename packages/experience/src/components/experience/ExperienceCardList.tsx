import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/design-system/src/cards/ExperienceCard";
import { experienceCards } from "./Constants";

export const ExperienceCardList: React.FC = () => {
  return <CardList cards={experienceCards} CardComponent={ExperienceCard} />;
};
