import { CardList } from "@/design-system/src/cards/card-list";
import exp from "constants";
import { experienceYears } from "./Constants";
import { ExperienceYear } from "./ExperienceYear";
export const ExperienceCardList: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-accent300">Experience</h2>
      <div>
        {experienceYears.years.map((experienceYear) => {
          return (
            <div className="my-4">
              <ExperienceYear
                year={experienceYear.year}
                experiences={experienceYear.experiences}
              />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};
