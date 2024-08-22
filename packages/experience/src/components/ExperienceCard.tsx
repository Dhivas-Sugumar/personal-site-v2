import {
  BaseCard,
  BaseCardProps,
} from "../../../design-system/src/cards/BaseCard";

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
      <div className="grid grid-cols-2">
        <div className="row-span-7">
          <h2>{companyName}</h2>
          <p className="body1 text-accent300">{description}</p>
        </div>
        <div>
          <p className="text-accent300 text-end">{location}</p>
        </div>
      </div>
    </BaseCard>
  );
};
