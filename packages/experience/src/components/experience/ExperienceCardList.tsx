import { CardList } from "@/design-system/src/cards/card-list";
import exp from "constants";
import { experienceYears } from "./Constants";
import { ExperienceYear } from "./ExperienceYear";
export const ExperienceCardList: React.FC = () => {
  return (
    <div>
      <h2 className="text-accent300">Experience</h2>
      {experienceYears.years.map((experienceYear) => {
        return (
          <ExperienceYear
            year={experienceYear.year}
            experiences={experienceYear.experiences}
          />
        );
      })}
      ;
    </div>
  );
};
