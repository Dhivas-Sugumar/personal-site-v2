import { CardList } from "@/design-system/src/cards/card-list";
import { ExperienceCard } from "@/experience/src/components/ExperienceCard";
import { educationCards } from "./Constants";

export const EducationCardList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-accent300 text-center">Education</h2>
      <CardList cards={educationCards} CardComponent={ExperienceCard} />
    </div>
  );
};
