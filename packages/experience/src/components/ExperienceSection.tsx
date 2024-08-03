import { CardList } from "@/design-system/src/cards/CardList";
import { educationCards, experienceCards } from "./Constants";
import { Column } from "@/design-system";

export const ExperienceSection: React.FC = () => {
  return (
    <>
      <Column>
        <CardList cards={educationCards} />
        <CardList cards={experienceCards} />
        {/* Add technologies here */}
      </Column>
    </>
  );
};
