"use client";
import { ReactNode } from "react";
import { InfiniteCarousel } from "./InfiniteCarousel";
import { BaseCard } from "../cards/BaseCard";

export type NumberSlideProps = {
  content: string;
};
const NumberSlide: React.FC<NumberSlideProps> = ({ content }) => {
  return (
    <div className="bg-neutral100">
      <p className="text-neutral0">{content}</p>
    </div>
  );
};
const slides: NumberSlideProps[] = [
  { content: "1" },
  { content: "2" },
  { content: "3" },
];
export const TestCarousel: React.FC = () => {
  return (
    <div>
      <InfiniteCarousel slides={slides} SlideComponent={NumberSlide} />
    </div>
  );
};
