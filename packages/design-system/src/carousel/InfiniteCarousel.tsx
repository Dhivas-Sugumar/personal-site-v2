"use client";
import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type CarouselProps<T> = {
  slides: T[];
  SlideComponent: React.ComponentType<T>;
};
const infiniteScrollOptions: EmblaOptionsType = {
  loop: true,
  align: 'center',
  skipSnaps: false,
  containScroll: "keepSnaps",
  dragFree: false
}
export function InfiniteCarousel<T>({
  slides,
  SlideComponent,
}: CarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(infiniteScrollOptions, [
    AutoScroll({ playOnInit: false }),
  ]);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.play();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    toggleAutoplay();
  }, [emblaApi]);

  return (
    <div>
      <div ref={emblaRef}>
        <div>
          {slides.map((slide, index) => (
            <SlideComponent key={index} {...slide} />
          ))}
        </div>
      </div>
    </div>
  );
}
