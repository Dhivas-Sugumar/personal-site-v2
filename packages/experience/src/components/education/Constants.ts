import { ExperienceCardProps } from "@/design-system/src/cards/ExperienceCard";

const universityCard : ExperienceCardProps = {
    imageSrc: 'northeastern.svg',
    imageAlt: 'Northeastern University Logo',
    name: 'Northeastern University',
    jobTitle: 'Bachelor of Science in Computer Science',
    location: 'Boston, MA',
    description: 'Relevant coursework: Data Structures and Algorithms, Web Development, Software Development, Computer Systems, and Computer Networks.'
}

export const educationCards : ExperienceCardProps[] = [
    universityCard,
]