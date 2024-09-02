import { CardList } from "@/design-system/src/cards/card-list";
import { SocialCard } from "./SocialCard";
import { socialCards } from "../Constants";

export const SocialCardList: React.FC = () => {
  return <CardList cards={socialCards} CardComponent={SocialCard} />;
};
