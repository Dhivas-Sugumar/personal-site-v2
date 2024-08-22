import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/experience/src/components/ExperienceCard";
import { educationCards } from "./Constants";

export const EducationCardList: React.FC = () => {
  return (
    <div>
      <h2>Education</h2>
      <CardList cards={educationCards} CardComponent={ExperienceCard} />
    </div>
  );
};
