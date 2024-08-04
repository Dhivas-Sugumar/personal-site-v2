import { CardList } from "@/design-system/src/cards/CardList";
import { ExperienceCard } from "@/design-system/src/cards/ExperienceCard";
import { experienceCards } from "../Constants";

export const ExperienceSection: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>
      <CardList cards={experienceCards} CardComponent={ExperienceCard} />
    </div>
  );
};
