import { navigationBarTabs } from "./Constants";
import { NavigationBar } from "./NavigationBar";

export const NavigationBarContainer: React.FC = () => {
  return (
    <div className="w-full fixed bottom-0">
      <NavigationBar {...navigationBarTabs} />
    </div>
  );
};
