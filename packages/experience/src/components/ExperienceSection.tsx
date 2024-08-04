import { EducationCardList } from "./education/EducationCardList";
import { ExperienceCardList } from "./experience/ExperienceCardList";

export const ExperienceSection: React.FC = () => {
  return (
    <div>
      <h2>Experience</h2>
      <EducationCardList />
      <ExperienceCardList />
    </div>
  );
};
