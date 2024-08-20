import { Row } from "@/design-system";
import { AboutMePolaroid } from "./AboutMePolaroid";
import { AboutMeText } from "./AboutMeText";
import { aboutMeImages } from "./Constants";

export const AboutMeSection: React.FC = () => {
  return (
    <div className="flex flex-row h-screen items-center justify-center gap-8">
      <AboutMePolaroid images={aboutMeImages} />
      <AboutMeText />
    </div>
  );
};
