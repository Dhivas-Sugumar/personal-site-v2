import { SocialCardProps } from "./components/SocialCard";

const github : SocialCardProps = {
    name: "GitHub",
    iconVariant: "github",
    iconAlt: "GitHub",
    username: "Dhivas-Sugumar",
    link: "https://github.com/Dhivas-Sugumar",
}

const linkedin : SocialCardProps = {
    name: "LinkedIn",
    iconVariant: "linkedin",
    iconAlt: "LinkedIn",
    username: "Dhivas Sugumar",
    link: "https://www.linkedin.com/in/dhivas-sugumar/",
}

const email: SocialCardProps = {
    name: "Email",
    iconVariant: "mail",
    iconAlt: "Email",
    username: "hello@dhivassugumar.com",
    link: "mailto:hello@dhivassugumar.com"
}

export const socialCards : SocialCardProps[] = [
    github,
    linkedin,
    email
]