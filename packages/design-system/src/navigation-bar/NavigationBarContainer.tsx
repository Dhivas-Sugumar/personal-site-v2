import { navigationBarTabs } from "./Constants";
import { NavigationBar } from "./NavigationBar";

export const NavigationBarContainer: React.FC = () => {
  return (
    <div className="flex fixed bottom-5 w-full justify-center">
      <NavigationBar {...navigationBarTabs} />
    </div>
  );
};
