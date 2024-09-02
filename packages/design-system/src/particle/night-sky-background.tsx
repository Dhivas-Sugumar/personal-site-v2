"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { colorPalette } from "../theme/ColorPalette";

const nightSkyOptions = {
  background: {
    color: colorPalette.neutral0,
  },
  particles: {
    number: {
      value: 200,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 0.1,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    fullScreen: true,
  },
};

export const NightSkyBackground: React.FC = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  return (
    <Particles
      id="tsParticles"
      options={nightSkyOptions}
      className="absolute -z-10"
    />
  );
};
