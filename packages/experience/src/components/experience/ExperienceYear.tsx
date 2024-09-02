import { CardList } from "@/design-system/src/cards/card-list";
import { ExperienceCard, ExperienceCardProps } from "../ExperienceCard";

export type ExperienceYearProps = {
  year: string;
  experiences: ExperienceCardProps[];
};

export const ExperienceYear: React.FC<ExperienceYearProps> = ({
  year,
  experiences,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2>{year}</h2>
      <CardList cards={experiences} CardComponent={ExperienceCard} />
    </div>
  );
};
