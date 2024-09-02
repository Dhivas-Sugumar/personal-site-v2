"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { colorPalette } from "../theme/ColorPalette";

const nightSkyOptions = {
  background: {
    color: colorPalette.neutral0,
  },
  particles: {
    number: {
      value: 100,
    },
    fullScreen: { enable: true },
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
    ZIndex: -1,
  },
};

export const NightSkyBackground: React.FC = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <Particles
      id="tsParticles"
      options={nightSkyOptions}
      particlesLoaded={particlesLoaded}
    />
  );
};
