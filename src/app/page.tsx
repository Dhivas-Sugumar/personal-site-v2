import { PolaroidCard } from "@/design-system/src/cards/PolaroidCard";

export default function Home() {
  return (
    <PolaroidCard
      imageSrc={"../public/next.svg"}
      date={"07/01/23"}
      name={"Olympic"}
      variant={"small"}
      imageAlt={"Olympic National Park Polaroid"}
    />
  );
}
