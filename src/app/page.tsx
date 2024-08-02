import { ExperienceCard } from "@/design-system/src/cards/ExperienceCard";

export default function Home() {
  return (
    <ExperienceCard
      imageSrc={"../public/next.svg"}
      dateStart={"07/01/23"}
      dateEnd="07/01/23"
      companyName={"Next.js"}
      jobTitle={"Software Engineer"}
      location={"Remote"}
      description={"I worked on the Next.js team."}
      imageAlt={"Olympic National Park Polaroid"}
    />
  );
}
