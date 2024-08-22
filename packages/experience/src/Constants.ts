import { ExperienceCardProps } from "@/experience/src/components/ExperienceCard";

export const experienceCards: ExperienceCardProps[] = [
  {
    imageSrc: "/images/company-a-logo.png",
    imageAlt: "Company A Logo",
    startDate: "Jan 2020",
    endDate: "Dec 2021",
    name: "Company A",
    jobTitle: "Senior Software Engineer",
    location: "San Francisco, CA",
    description:
      "Led a team of developers in creating a new cloud-based platform. Implemented microservices architecture and improved system performance by 40%.",
  },
  {
    imageSrc: "/images/company-b-logo.png",
    imageAlt: "Company B Logo",
    startDate: "Jun 2018",
    endDate: "Dec 2019",
    name: "Company B",
    jobTitle: "Full Stack Developer",
    location: "New York, NY",
    description:
      "Developed and maintained multiple web applications using React and Node.js. Collaborated with UX designers to implement responsive designs.",
  },
  {
    imageSrc: "/images/company-c-logo.png",
    imageAlt: "Company C Logo",
    startDate: "Aug 2016",
    endDate: "May 2018",
    name: "Company C",
    jobTitle: "Junior Developer",
    location: "Austin, TX",
    description:
      "Assisted in the development of a mobile app using React Native. Participated in code reviews and implemented unit tests to ensure code quality.",
  },
];
