import { Hero, HeroAnimatedGradientBackground } from "@/design-system";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <HeroAnimatedGradientBackground>
      <Link href="/about">
        <div className="flex items-center justify-center min-h-screen">
          <Hero />
        </div>
      </Link>
    </HeroAnimatedGradientBackground>
  );
}
