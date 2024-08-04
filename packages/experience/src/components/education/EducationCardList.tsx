import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/design-system/src/cards/ExperienceCard";
import { educationCards } from "./Constants";

export const EducationCardList: React.FC = () => {
  return <CardList cards={educationCards} CardComponent={ExperienceCard} />;
};
