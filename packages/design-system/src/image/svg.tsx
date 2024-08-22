import React from "react";

export type SVGProps = {
  src: string;
  alt: string;
};

export const SVG: React.FC<SVGProps> = () => {
  return <Image src={src} />;
};
