import { EducationCardList } from "./education/EducationCardList";
import { ExperienceCardList } from "./experience/ExperienceCardList";

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <EducationCardList />
      <ExperienceCardList />
    </div>
  );
};
