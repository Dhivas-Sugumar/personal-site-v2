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
    <div className="max-w-80">
      <RNFastMarquee
        pauseOnHover={true}
        className="justify-center items-center"
      >
        {items.map((item, index) => (
          <MarqueeComponent key={index} {...item} />
        ))}
      </RNFastMarquee>
    </div>
  );
}
