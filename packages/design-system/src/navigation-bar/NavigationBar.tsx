import { NavigationBarTab, NavigationBarTabProps } from "./NavigationBarTab";

export type NavigationBarProps = {
  tabs: NavigationBarTabProps[];
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ tabs }) => {
  return (
    <div className="flex justify-between">
      {tabs.map((tab) => (
        <NavigationBarTab key={tab.title} {...tab} />
      ))}
    </div>
  );
};
