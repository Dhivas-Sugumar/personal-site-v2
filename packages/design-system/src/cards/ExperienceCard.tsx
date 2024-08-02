import { CardBackground } from "./CardBackground";
import { PolaroidCard } from "./PolaroidCard";

export type ExperienceCardProps = {
  imageSrc: string;
  imageAlt: string;
  dateStart: string;
  dateEnd: string;
  companyName: string;
  jobTitle: string;
  location: string;
  description: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  imageAlt,
  dateStart,
  dateEnd,
  companyName,
  jobTitle,
  location,
  description,
}) => {
  const dateRange = `${dateStart} - ${dateEnd}`;
  return (
    <CardBackground>
      <PolaroidCard
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        date={dateRange}
        variant={"small"}
      />
      <div className="flex flex-col px-l">
        <div className="flex">
          <h2 className="justify-self-start">{companyName}</h2>
          <h3 className="justify-self-end">{location}</h3>
        </div>
        <h3>{jobTitle}</h3>
        <p>{description}</p>
      </div>
    </CardBackground>
  );
};
