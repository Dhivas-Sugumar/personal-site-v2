import { ExperienceCardProps } from "@/experience/src/components/ExperienceCard";

const universityCard: ExperienceCardProps = {
  imageSrc: "northeastern.svg",
  imageAlt: "Northeastern University Logo",
  companyName: "Northeastern University",
  jobTitle: "Bachelor of Science in Computer Science",
  location: "Boston, MA",
  description:
    "Relevant coursework: Data Structures and Algorithms, Web Development, Software Development, Computer Systems, and Computer Networks.",
};

export const educationCards: ExperienceCardProps[] = [universityCard];
