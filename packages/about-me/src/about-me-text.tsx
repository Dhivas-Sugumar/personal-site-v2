import { aboutMeBody, aboutMeGreeting } from "./Constants";

export const AboutMeText: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>{aboutMeGreeting}</h1>
      <p className="body"> {aboutMeBody}</p>
    </div>
  );
};
