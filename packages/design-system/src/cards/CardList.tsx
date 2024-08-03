import { Column } from "@/design-system";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";

type CardListProps = {
  cards: ExperienceCardProps[];
};

export const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <Column>
      {cards.map((card) => {
        return (
          <ExperienceCard
            key={card.companyName}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            companyName={card.companyName}
            jobTitle={card.jobTitle}
            location={card.location}
            dateStart={card.dateStart}
            dateEnd={card.dateEnd}
          />
        );
      })}
    </Column>
  );
};
