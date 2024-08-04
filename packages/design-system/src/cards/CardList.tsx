type CardListProps<T> = {
  cards: T[];
  CardComponent: React.ComponentType<T>;
};

export function CardList<T>({ cards, CardComponent }: CardListProps<T>) {
  return (
    <div className="flex flex-row">
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
}