import { ProjectCardProps } from "./components/ProjectCard";

const minerva : ProjectCardProps = {
    name: "Minerva",
    imageSrc: "test.svg",
    imageAlt: "Minerva Display Picture",
    startDate: "August 2021",
    endDate: "Present",
    description: "Minerva is a platform that allows students to create and share their own study materials. It is built with React, TypeScript, and Firebase.",
    technologies: [
        {
            name: "React",
            icon: {
                iconAlt: "React Logo",
                variant: "react",
            },
        },
        {
            name: "TypeScript",
            icon: {
                iconAlt: "TypeScript Logo",
                variant: "typescript",
            },
        },
        {
            name: "Firebase",
            icon: {
                iconAlt: "Firebase Logo",
                variant: "firebase",
            },
        },
    ],
}

export const projects : ProjectCardProps[] = [minerva];