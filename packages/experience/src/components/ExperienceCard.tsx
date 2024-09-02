import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/base-card";

export type ExperienceCardProps = BaseCardProps & {
  jobTitle: string;
  location: string;
  companyName: string;
  description?: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  jobTitle,
  location,
  companyName,
  description,
  ...props
}) => {
  return (
    <BaseCard polaroidVariant="small" {...props}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h2>{companyName}</h2>
          {/* <p className="text-accent300">{location}</p> */}
        </div>
        <h4>{jobTitle}</h4>
        <p className="text-accent300">{description}</p>
      </div>
    </BaseCard>
  );
};
