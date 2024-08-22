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
  return (
    <div className="border-8 border-neutral100 w-fit h-fit">
      {variant === "small" && (
        <Image src={imageSrc} width={100} height={100} alt={imageAlt} />
      )}
      {variant === "default" && (
        <Image src={imageSrc} width={450} height={400} alt={imageAlt} />
      )}
      <div className={`${polaroidTextBottom} border-neutral100 bg-neutral100 `}>
        {date && <h3 className="header3 text-neutral0">{date}</h3>}
        <h3 className="header3 text-neutral0">{name}</h3>
      </div>
    </div>
  );
};
