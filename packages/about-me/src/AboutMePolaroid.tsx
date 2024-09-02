"use client";
import {
  PolaroidCard,
  PolaroidCardImage,
} from "@/design-system/src/cards/polaroid-card";
import { useState, useEffect } from "react";

export type AboutMePolaroidProps = {
  images: PolaroidCardImage[];
};

export const AboutMePolaroid: React.FC<AboutMePolaroidProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);

  const currentImage = images[currentImageIndex];

  return (
    <div>
      <PolaroidCard
        imageSrc={currentImage.imageSrc}
        imageAlt={currentImage.imageAlt}
        variant="default"
      />
    </div>
  );
};
