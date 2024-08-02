import { navigationBarTabs } from "./Constants";
import { NavigationBar } from "./NavigationBar";

export const NavigationBarContainer: React.FC = () => {
  return <NavigationBar {...navigationBarTabs} />;
};
