import {
  SiRuby,
  SiTypescript,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJupyter,
  SiMongodb,
  SiNetlify,
  SiNestjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRemix,
  SiRubyonrails,
  SiScikitlearn,
  SiSqlite,
  SiTailwindcss,
  SiDatadog,
  SiVercel,
  SiLinkedin,
  SiPhotobucket,
  SiFastapi,
  SiExpo,
  IconType,
  SiMinutemailer,
} from "@icons-pack/react-simple-icons";

export type IconVariant =
  | "ruby"
  | "typescript"
  | "bootstrap"
  | "css"
  | "docker"
  | "express"
  | "firebase"
  | "figma"
  | "git"
  | "github"
  | "googleCloudPlatform"
  | "graphql"
  | "heroku"
  | "html"
  | "java"
  | "javascript"
  | "jest"
  | "jupyterNotebook"
  | "mongodb"
  | "netlify"
  | "nestjs"
  | "nextjs"
  | "numpy"
  | "opencv"
  | "pandas"
  | "pillow"
  | "postman"
  | "prsima"
  | "python"
  | "react"
  | "reactNative"
  | "remix"
  | "rails"
  | "rspec"
  | "scikitLearn"
  | "sql"
  | "tailwind"
  | "vsCode"
  | "datadog"
  | "aws"
  | "vercel"
  | "linkedin"
  | "email"
  | "photo"
  | "resume"
  | "project"
  | "dhivasLogo"
  | "fastapi"
  | "expo"
  | "minitest"
  | "jetbrainsIDEsuite";

const icons: Record<IconVariant, IconType | null> = {
  ruby: SiRuby,
  typescript: SiTypescript,
  bootstrap: SiBootstrap,
  css: SiCss3,
  docker: SiDocker,
  express: SiExpress,
  firebase: SiFirebase,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  googleCloudPlatform: SiGooglecloud,
  graphql: SiGraphql,
  heroku: SiHeroku,
  html: SiHtml5,
  java: null,
  javascript: SiJavascript,
  jest: SiJest,
  jupyterNotebook: SiJupyter,
  mongodb: SiMongodb,
  netlify: SiNetlify,
  nestjs: SiNestjs,
  nextjs: null,
  numpy: SiNumpy,
  opencv: SiOpencv,
  pandas: SiPandas,
  pillow: null,
  postman: SiPostman,
  prsima: SiPrisma,
  python: SiPython,
  react: SiReact,
  reactNative: null,
  remix: SiRemix,
  rails: SiRubyonrails,
  rspec: null,
  scikitLearn: SiScikitlearn,
  sql: SiSqlite,
  tailwind: SiTailwindcss,
  vsCode: null,
  datadog: SiDatadog,
  aws: null,
  vercel: SiVercel,
  linkedin: SiLinkedin,
  email: SiMinutemailer,
  photo: SiPhotobucket,
  resume: null,
  project: null,
  dhivasLogo: null,
  fastapi: SiFastapi,
  expo: SiExpo,
  minitest: null,
  jetbrainsIDEsuite: null,
};

export type IconProps = {
  variant: IconVariant;
  size?: "small" | "medium";
  tint?: string;
};
export const Icon: React.FC<IconProps> = ({
  variant,
  size,
  tint = "#ffff",
}) => {
  const iconDimensions = size === "small" ? 20 : 40;
  const IconComponent = icons[variant];
  return IconComponent ? (
    <IconComponent size={iconDimensions} color={tint} />
  ) : null;
};
