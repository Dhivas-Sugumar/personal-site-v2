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
    <div className="flex flex-col w-full h-full">
      <NightSkyBackground />
      {displayHeader && <Header currentPage={currentPage} />}
      <div className="md:my-10 md:px-20 px-4 my-4">{children}</div>
      {displayNavBar && <NavigationBarContainer />}
    </div>
  );
};
