import { NavigationBarProps } from "./NavigationBar";
import { NavigationBarTabProps } from "./NavigationBarTab";

const dhivasTab : NavigationBarTabProps = {
    title: "dhivas",
    icon: {
        variant: "dhivasLogo",
        size: "medium",
        iconAlt: "dhivas",
    },
    link: "/about",
};

export const experienceTab : NavigationBarTabProps = {
    title: "Experience",
    icon: {
        variant: "resume",
        size: "medium",
        iconAlt: "resume",
    },
    link: "/experience",
};

export const projectsTab : NavigationBarTabProps = {
    title: "Projects",
    icon: {
        variant: "build",
        size: "medium",
        iconAlt: "build",
    },
    link: "/project",
};

export const contactTab : NavigationBarTabProps = {
    title: "Contact",
    icon: {
        variant: "mail",
        size: "medium",
        iconAlt: "mail",
    },
    link: "/contact",
};

export const miscTab : NavigationBarTabProps = {
    title: "Misc",
    icon: {
        variant: "photo",
        size: "medium",
        iconAlt: "photo",
    },
    link: "/misc",
};


export const navigationBarTabs : NavigationBarProps = {
    tabs: [
        dhivasTab,
        experienceTab,
        projectsTab,
        contactTab,
        miscTab,
    ],
};
