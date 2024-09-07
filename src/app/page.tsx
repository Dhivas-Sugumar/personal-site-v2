import { Hero, HeroAnimatedGradientBackground } from "@/design-system";
import { NavigationBar } from "@/design-system/src/navigation-bar/NavigationBar";
import { NavigationBarContainer } from "@/design-system/src/navigation-bar/NavigationBarContainer";
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
      {/* <NavigationBarContainer /> */}
    </HeroAnimatedGradientBackground>
  );
}
