import { SocialCardProps } from "./components/SocialCard";

const github : SocialCardProps = {
    name: "GitHub",
    iconVariant: "github",
    iconAlt: "GitHub",
    username: "Dhivas-Sugumar",
    link: "www.github.com",
}

const linkedin : SocialCardProps = {
    name: "LinkedIn",
    iconVariant: "linkedin",
    iconAlt: "LinkedIn",
    username: "Dhivas Sugumar",
    link: "www.linkedin.com",
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