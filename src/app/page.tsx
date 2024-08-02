import { ProjectCard } from "@/design-system/src/cards/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <ProjectCard
      imageSrc={"../public/next.svg"}
      imageAlt={"Olympic National Park Polaroid"}
      startDate={"2021"}
      endDate={"2021"}
      projectName={"Next.js"}
      description={"I worked on the Next.js team."}
      technologies={[
        {
          name: "React",
          icon: (
            <Image
              src={"../public/next.svg"}
              width={100}
              height={100}
              alt={"heello"}
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <Image
              src={"../public/next.svg"}
              width={100}
              height={100}
              alt={"heello"}
            />
          ),
        },
        {
          name: "GraphQL",
          icon: (
            <Image
              src={"../public/next.svg"}
              width={100}
              height={100}
              alt={"heello"}
            />
          ),
        },
      ]}
    />
  );
}
