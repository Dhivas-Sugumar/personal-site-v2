type CardListProps<T> = {
  cards: T[];
  orientation?: "row" | "col";
  CardComponent: React.ComponentType<T>;
};

export function CardList<T>({
  cards,
  CardComponent,
  orientation = "col",
}: CardListProps<T>) {
  return (
    <div className={`flex flex-${orientation} gap-y-8`}>
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
}
