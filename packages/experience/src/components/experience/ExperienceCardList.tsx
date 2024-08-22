import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/experience/src/components/ExperienceCard";
import { experienceCards } from "./Constants";

export const ExperienceCardList: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>
      <CardList cards={experienceCards} CardComponent={ExperienceCard} />
    </div>
  );
};
