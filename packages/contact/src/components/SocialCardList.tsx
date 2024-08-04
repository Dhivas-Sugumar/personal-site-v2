import { CardList } from "@/design-system/src/cards/CardList";
import { SocialCard } from "./SocialCard";
import { socialCards } from "../Constants";

export const SocialCardList: React.FC = () => {
  return <CardList cards={socialCards} CardComponent={SocialCard} />;
};
