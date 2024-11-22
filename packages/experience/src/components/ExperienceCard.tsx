import { GlassMorphismContainer } from "@/design-system/src/glass-morphism/glass-morphism-container";
import {
  BaseCardProps,
} from "../../../design-system/src/cards/base-card";
import Image from "next/image";

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
  const startAndEnd = props.startDate + " - " + props.endDate;
  const imageSrc = props.imageSrc || "";
  return (
    <GlassMorphismContainer isBorder={false}>
      <div className="flex flex-col justify-center items-center lg:w-80 lg:h-80 rounded-full hover:border-2 hover:border-primary200 drop-shadow-md shadow-primary200">
        <Image
          src={imageSrc}
          alt={companyName}
          className="rounded-full"
          width={100}
          height={100}
        />
        <h2 className="text-center">{companyName}</h2>
        <h4 className="text-center">{jobTitle}</h4>
        {props.startDate ? (
          <p className="text-accent300 text-center">{startAndEnd}</p>
        ) : null}
      </div>
    </GlassMorphismContainer>
  );
};
