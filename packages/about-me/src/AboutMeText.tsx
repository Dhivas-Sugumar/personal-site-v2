import { Column } from "@/design-system";
import { aboutMeBody, aboutMeGreeting } from "./Constants";

export const AboutMeText: React.FC = () => {
  return (
    <div>
      <h2 className="header2 text-accent300">{aboutMeGreeting}</h2>
      <p className="text-accent300"> {aboutMeBody}</p>
    </div>
  );
};
