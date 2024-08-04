import Image from "next/image";
import { useIconImageVariant } from "./hooks/useIconImageVariant";

export type IconVariant =
  | "ruby"
  | "react"
  | "graphql"
  | "typescript"
  | "dhivasLogo"
  | "resume"
  | "build"
  | "mail"
  | "photo";
export type IconSize = "small" | "medium" | "large";
export type IconProps = {
  iconAlt: string;
  size: IconSize;
  variant: IconVariant;
};

export const Icon: React.FC<IconProps> = ({ iconAlt, size, variant }) => {
  const { imageSrc, width, height } = useIconImageVariant(variant, size);
  return <Image src={imageSrc} width={width} height={height} alt={iconAlt} />;
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
