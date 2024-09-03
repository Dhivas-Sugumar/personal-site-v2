import { NavigationBarProps } from "./NavigationBar";
import { NavigationBarTabProps } from "./NavigationBarTab";

const dhivasTab: NavigationBarTabProps = {
  title: "Dhivas",
  link: "/about",
  //   iconVariant: "dhivasLogo",
};

const experienceTab: NavigationBarTabProps = {
  title: "Experience",
  link: "/experience",
  //   iconVariant: "resume",
};

const projectsTab: NavigationBarTabProps = {
  title: "Projects",
  link: "/project",
  //   iconVariant: "project",
};

const contactTab: NavigationBarTabProps = {
  title: "Contact",
  link: "/contact",
  //   iconVariant: "email",
};

// const miscTab : NavigationBarTabProps = {
//     title: "Misc",
//     icon: {
//         variant: "photo",
//         size: "medium",
//         iconAlt: "photo",
//     },
//     link: "/misc",
// };

export const navigationBarTabs: NavigationBarProps = {
  tabs: [
    dhivasTab,
    experienceTab,
    projectsTab,
    contactTab,
    // miscTab, // TODO: Release this tab with an update
  ],
};
