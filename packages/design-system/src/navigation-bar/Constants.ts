import { NavigationBarProps } from "./NavigationBar";
import { NavigationBarTabProps } from "./NavigationBarTab";

const dhivasTab : NavigationBarTabProps = {
    title: "Dhivas",
    icon: {
        variant: "dhivasLogo",
        size: "medium",
        iconAlt: "dhivas",
    },
    link: "/about",
};

const experienceTab : NavigationBarTabProps = {
    title: "Experience",
    icon: {
        variant: "resume",
        size: "medium",
        iconAlt: "resume",
    },
    link: "/experience",
};

const projectsTab : NavigationBarTabProps = {
    title: "Projects",
    icon: {
        variant: "project",
        size: "medium",
        iconAlt: "project icon",
    },
    link: "/project",
};

const contactTab : NavigationBarTabProps = {
    title: "Contact",
    icon: {
        variant: "mail",
        size: "medium",
        iconAlt: "mail",
    },
    link: "/contact",
};

const miscTab : NavigationBarTabProps = {
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
        // miscTab, // TODO: Release this tab with an update
    ],
};
