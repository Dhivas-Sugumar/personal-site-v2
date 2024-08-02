import { Hero } from "@/design-system";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <Link href="/about">
      <div className="flex items-center justify-center min-h-screen">
        <Hero />
      </div>
    </Link>
  );
}
