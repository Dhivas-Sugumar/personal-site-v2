import { AboutMePolaroid } from "./about-me-polaroid";
import { AboutMeText } from "./about-me-text";
import { aboutMeImages } from "./Constants";

export const AboutMeSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 overflow-auto">
      <AboutMePolaroid images={aboutMeImages} />
      <div className="w-full md:w-1/2">
        <AboutMeText />
      </div>
    </div>
  );
};
