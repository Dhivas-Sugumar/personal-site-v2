import {
  PolaroidCard,
  PolaroidCardImage,
} from "@/design-system/src/cards/PolaroidCard";
import { useState } from "react";

export type AboutMePolaroidProps = {
  images: PolaroidCardImage[];
};

export const AboutMePolaroid : React.FC<AboutMePolaroidProps> = ({images}) => {
  const [currentImage, setCurrentImage] = useState<PolaroidCardImage>(images[0]);
  return (
    <div>
      <PolaroidCard
        imageSrc={currentImage.imageSrc}
        imageAlt={currentImage.imageAlt}
        date="2021"
        name="Dhivas Sugumar"
        variant="default"
      />
    </div>
  );
  )
};
