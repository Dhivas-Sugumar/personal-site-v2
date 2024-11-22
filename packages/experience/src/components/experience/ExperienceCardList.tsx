import { experienceYears } from "./Constants";
import { ExperienceYear } from "./experience-year";
export const ExperienceCardList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-accent300 text-center">Experience</h2>
      <div className="gap-4">
        {experienceYears.years.map((experienceYear) => {
          return (
            <ExperienceYear
              year={experienceYear.year}
              experiences={experienceYear.experiences}
              key={experienceYear.year}
            />
          );
        })}
      </div>
      ;
    </div>
  );
};
