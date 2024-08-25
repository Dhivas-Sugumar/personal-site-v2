"use client";

// TODO: Remove this Icon component and replace it with using SiReact from the react-simple-icons package
// Still make it so that variant can be passed in as a prop

import Image from "next/image";
import { useIconImageVariant } from "./hooks/useIconImageVariant";
import { useState, useEffect } from "react";

export type IconVariant =
  | "ruby"
  | "react"
  | "graphql"
  | "typescript"
  | "dhivasLogo"
  | "resume"
  | "project"
  | "mail"
  | "photo"
  | "java"
  | "python"
  | "html"
  | "css"
  | "javascript"
  | "sql"
  | "mongodb"
  | "rails"
  | "reactNative"
  | "fastapi"
  | "nextjs"
  | "nestjs"
  | "remix"
  | "express"
  | "prsima"
  | "expo"
  | "tailwind"
  | "bootstrap"
  | "pandas"
  | "numpy"
  | "pillow"
  | "scikitLearn"
  | "opencv"
  | "jest"
  | "minitest"
  | "rspec"
  | "git"
  | "github"
  | "datadog"
  | "heroku"
  | "netlify"
  | "vercel"
  | "googleCloudPlatform"
  | "firebase"
  | "docker"
  | "aws"
  | "jupyterNotebook"
  | "vsCode"
  | "jetbrainsIDEsuite"
  | "postman"
  | "figma"
  | "linkedin";

export type IconSize = "small" | "medium" | "large";

export type IconProps = {
  iconAlt: string;
  size?: IconSize;
  variant: IconVariant;
};

export const Icon: React.FC<IconProps> = ({
  iconAlt,
  size = "medium",
  variant,
}) => {
  const { width, height } = useIconImageVariant(size);
  const [iconSrc, setIconSrc] = useState<string>("");

  useEffect(() => {
    const importIcon = async () => {
      try {
        const icon = await import(`../assets/icons/${variant}.svg`);
        setIconSrc(icon.default.src);
      } catch (error) {
        console.error(`Failed to load icon: ${variant}`, error);
        setIconSrc("");
      }
    };

    importIcon();
  }, [variant]);

  if (!iconSrc) {
    return null; // or a placeholder
  }

  return <Image src={iconSrc} width={width} height={height} alt={iconAlt} />;
};

/*
Icon 
Languages 
- Java
- Python 
- typescript
- Ruby
-html 
- css 
- javascript
- sql 
- mongodb 
- graphql

frameworks 
- Rails 
- React 
- React Native *
- FastAPI 
- next.js 
- nest.js * 
- remix * 
- express* 
- pRSIMA 
- Expo 
- tailwind 
- Bootstrap
- pandas 
- numpy * 
- pillow * 
- scikit learn 
- OpenCV 

testing frameworks 
- Jest
- Minitest *
- Rspec *

Developer tools 
- Git 
- Github 
- Datadog 
- Heorku 
- Netlify
- Vercel
- Google Cloud PLatform 
- Firebase 
- Docker 
- AWS 
- Jupyer Notebook 
- VS Code 
- Jetbrains IDE suite 
- Postman 
- Figma 

Dhivas Sugumar Logo 

*/
