import { AboutMePolaroid } from "./AboutMePolaroid";
import { AboutMeText } from "./AboutMeText";
import { aboutMeImages } from "./Constants";

export const AboutMeSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 overflow-auto">
      <div className="w-full max-w-md">
        <AboutMePolaroid images={aboutMeImages} />
      </div>
      <div className="w-full max-w-md">
        <AboutMeText />
      </div>
    </section>
  );
};
