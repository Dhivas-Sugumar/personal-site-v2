import Image from "next/image";
import React from "react";

type PolaroidCardVariant = "default" | "small";
export type PolaroidCardImage = {
  imageSrc: string;
  imageAlt: string;
};

export type PolaroidCardProps = {
  imageSrc: PolaroidCardImage["imageSrc"];
  imageAlt: PolaroidCardImage["imageAlt"];
  date?: string;
  name?: string;
  variant: PolaroidCardVariant;
};

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  imageAlt,
  date,
  name,
  variant = "default",
}) => {
  const polaroidTextBottom = variant === "default" ? "border-8" : "border-2";
  const imageWidth = variant === "default" ? 450 : 100;
  const imageHeight = variant === "default" ? 400 : 100;

  return (
    <div className="border-8 border-neutral100 ">
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
      />
      <div className={`${polaroidTextBottom} border-neutral100 bg-neutral100 `}>
        {date && <h3 className="header3 text-neutral0">{date}</h3>}
        <h3 className="header3 text-neutral0">{name}</h3>
      </div>
    </div>
  );
};
