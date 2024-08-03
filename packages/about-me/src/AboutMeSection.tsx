import { Row } from "@/design-system";
import { AboutMePolaroid } from "./AboutMePolaroid";
import { AboutMeText } from "./AboutMeText";
import { aboutMeImages } from "./Constants";

export const AboutMeSection: React.FC = () => {
  return (
    <Row>
      <AboutMePolaroid images={aboutMeImages} />
      <AboutMeText />
    </Row>
  );
};
