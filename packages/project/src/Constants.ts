import { ProjectCardProps } from "./components/ProjectCard";

const minerva: ProjectCardProps = {
  name: "Minerva",
  imageSrc: "test.svg",
  imageAlt: "Minerva Display Picture",
  startDate: "Dec 2021",
  endDate: "Jan 2023",
  description: `Minerva is a web application that created a platform allowing users to create their own courses and enroll in courses made by others. 
    These courses combining both video, audio and text deliver users with informational content on a variety of topics.`,
  technologies: [
    {
      name: "Ruby",
      iconVariant: "ruby",
    },
    {
      name: "Rails",
      iconVariant: "rails",
    },
    {
      name: "Bootstrap",
      iconVariant: "bootstrap",
    },
    {
      name: "PostgreSQL",
      iconVariant: "postgresql",
    },
    {
      name: "JavaScript",
      iconVariant: "javascript",
    },
    {
      name: "HTML",
      iconVariant: "html",
    },
    {
      name: "CSS",
      iconVariant: "css",
    },
    {
      name: "Heroku",
      iconVariant: "heroku",
    },
    {
      name: "Google Cloud Platform",
      iconVariant: "googleCloudPlatform",
    },
  ],
};

const personalSiteV1: ProjectCardProps = {
  name: "Personal Site V1",
  imageSrc: "test.svg",
  imageAlt: "Personal Site V1 Display Picture",
  startDate: "Nov 2022",
  endDate: "Feb 2023",
  description:
    "Previous iteration of the portfolio site. The design motif was inspired by minimalism and a neutral color palette. Used animation to create visually more appealing user experience",
  technologies: [
    {
      name: "Typescript",
      iconVariant: "typescript",
    },
    {
      name: "React",
      iconVariant: "react",
    },
    {
      name: "Next.js",
      iconVariant: "nextjs",
    },
    {
      name: "Framer Motion",
      iconVariant: "framerMotion",
    },
    {
      name: "HTML",
      iconVariant: "html",
    },
    {
      name: "CSS",
      iconVariant: "css",
    },
    {
      name: "Vercel",
      iconVariant: "vercel",
    },
  ],
};

const personalSiteV2: ProjectCardProps = {
  name: "Personal Site V2",
  imageSrc: "test.svg",
  imageAlt: "Personal Site V2 Display Picture",
  startDate: "August 2024",
  endDate: "August 2024",
  description:
    "Personal Site V2 is the site that you are currently viewing. The design motif was inspired by nature, in particular the night sky, forests, and the ocean. The site design also contains pieces of my own personality and interests.",
  technologies: [
    {
      name: "Typescript",
      iconVariant: "typescript",
    },
    {
      name: "React",
      iconVariant: "react",
    },
    {
      name: "Next.js",
      iconVariant: "nextjs",
    },
    {
      name: "Tailwind",
      iconVariant: "tailwind",
    },
    {
      name: "HTML",
      iconVariant: "html",
    },
    {
      name: "CSS",
      iconVariant: "css",
    },
    {
      name: "Vercel",
      iconVariant: "vercel",
    },
  ],
};

const mindMood: ProjectCardProps = {
  name: "Mind Mood",
  imageSrc: "test.svg",
  imageAlt: "Mind Mood Display Picture",
  startDate: "July 2024",
  endDate: "July 2024",
  description:
    "Mind Mood is a user-friendly app designed to help you take control of your emotional health. With features like mood logging, self-care reminders, music recommendations, and access to mental health resources, Mind Mood supports your mental well-being in a comprehensive way.",
  technologies: [
    {
      name: "Java",
      iconVariant: "java",
    },
    {
      name: "Firebase",
      iconVariant: "firebase",
    },
    {
      name: "Gradle",
      iconVariant: "gradle",
    },
  ],
};

const pizzaParty: ProjectCardProps = {
  name: "Pizza Party",
  imageSrc: "test.svg",
  imageAlt: "Pizza Party Display Picture",
  startDate: "Apr 2024",
  endDate: "May 2024",
  description:
    "Pizza Party was a game inspired by the popular pizza making game Papa's Pizzeria. The game was added to the Covey.town site that allows users to navigate and interact in a pixel art virtual world.",
  technologies: [
    {
      name: "TypeScript",
      iconVariant: "typescript",
    },
    {
      name: "React",
      iconVariant: "react",
    },
    {
      name: "Phaser",
      iconVariant: "phaser",
    },
    {
      name: "Express",
      iconVariant: "express",
    },
    {
      name: "MongoDB",
      iconVariant: "mongodb",
    },
  ],
};

const dataViz: ProjectCardProps = {
  name: "Data Viz",
  imageSrc: "test.svg",
  imageAlt: "Data Viz Display Picture",
  startDate: "August 2021",
  endDate: "Present",
  description:
    "Data Viz was a custom vizualization designed to meet the needs of the MHealth Research Lab at Northeastern University. The script was custom built from scratch to data wrangle and visualize 2000+ raw csv with a total size of 1GB+ containing data like sendentry, heartrate, sleep from health smart watches. Aided in the doctoral thesis of a PhD student at the lab.",
  technologies: [
    {
      name: "Python",
      iconVariant: "python",
    },
    {
      name: "Pandas",
      iconVariant: "pandas",
    },
    {
      name: "NumPy",
      iconVariant: "numpy",
    },
    {
      name: "pillow",
      iconVariant: "pillow",
    },
    {
      name: "Jupyter Notebook",
      iconVariant: "jupyterNotebook",
    },
  ],
};

const picLink: ProjectCardProps = {
  name: "PicLink",
  imageSrc: "test.svg",
  imageAlt: "Proxima Display Picture",
  startDate: "Jan 2023",
  endDate: "Present",
  description: "Coming soon! Keep an eye out ...",
  technologies: [],
};

export const projects: ProjectCardProps[] = [
  picLink,
  personalSiteV2,
  mindMood,
  pizzaParty,
  personalSiteV1,
  minerva,
  dataViz,
];
