import { Column } from "@/design-system";
import { aboutMeBody, aboutMeGreeting } from "./Constants";

export const AboutMeText: React.FC = () => {
  return (
    <Column>
      <h2 className="header2">{aboutMeGreeting}</h2>
      <p>{aboutMeBody}</p>
    </Column>
  );
};
