import { BaseCard, BaseCardProps } from "./BaseCard";

export type ExperienceCardProps = BaseCardProps & {
  jobTitle: string;
  location: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  jobTitle,
  location,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="small" {...props}>
      <div className="flex justify-between">
        <h3 className="header3">{jobTitle}</h3>
        <h3 className="header3">{location}</h3>
      </div>
    </BaseCard>
  );
};
