"use client";
import { CardList } from "@/design-system/src/cards/card-list";
import { ExperienceCard, ExperienceCardProps } from "../ExperienceCard";
import { useBreakpoint } from "@/core/src/hooks/useBreakpoint";

export type ExperienceYearProps = {
  year: string;
  experiences: ExperienceCardProps[];
};

export const ExperienceYear: React.FC<ExperienceYearProps> = ({
  year,
  experiences,
}) => {
  const breakpoint = useBreakpoint();
  const orientation = breakpoint !== "desktop" ? "col" : "row";
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2>{year}</h2>
      <CardList
        cards={experiences}
        CardComponent={ExperienceCard}
        orientation={orientation}
      />
    </div>
  );
};
