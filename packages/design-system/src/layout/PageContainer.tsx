import { PropsWithChildren } from "react";
import { NavigationBarContainer } from "../navigation-bar/NavigationBarContainer";
import { Header } from "@/design-system";
import { NightSkyBackground } from "../particle/night-sky-background";

export type PageContainerProps = PropsWithChildren & {
  displayHeader: boolean;
  displayNavBar: boolean;
  currentPage: string;
};
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  displayHeader = true,
  displayNavBar = true,
  currentPage,
}) => {
  return (
    <div>
      <NightSkyBackground />
      {displayHeader && <Header currentPage={currentPage} />}
      <div className="flex flex-col w-full px-20">{children}</div>
      {displayNavBar && <NavigationBarContainer />}
    </div>
  );
};
