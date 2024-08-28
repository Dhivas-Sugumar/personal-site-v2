import { SocialCardProps } from "./components/SocialCard";

const github: SocialCardProps = {
  name: "GitHub",
  username: "Dhivas-Sugumar",
  link: "https://github.com/Dhivas-Sugumar",
  icon: {
    variant: "github",
  },
};

const linkedin: SocialCardProps = {
  name: "LinkedIn",
  icon: {
    variant: "linkedin",
  },
  username: "Dhivas Sugumar",
  link: "https://www.linkedin.com/in/dhivas-sugumar/",
};

const email: SocialCardProps = {
  name: "Email",
  icon: {
    variant: "email",
  },
  username: "hello@dhivassugumar.com",
  link: "mailto:hello@dhivassugumar.com",
};

export const socialCards: SocialCardProps[] = [github, linkedin, email];
