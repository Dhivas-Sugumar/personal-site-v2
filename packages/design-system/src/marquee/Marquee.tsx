import { default as RNFastMarquee } from "react-fast-marquee";

type MarqueeProps<T> = {
  items: T[];
  MarqueeComponent: React.ComponentType<T>;
};

export function Marque<T>({
  items,
  MarqueeComponent,
}: MarqueeProps<T>): JSX.Element {
  return (
    <div className="bg-neutral100">
      <RNFastMarquee>
        {items.map((item, index) => (
          <MarqueeComponent key={index} {...item} />
        ))}
      </RNFastMarquee>
    </div>
  );
}
