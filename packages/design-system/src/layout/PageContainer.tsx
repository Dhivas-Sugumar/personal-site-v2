import { PropsWithChildren } from "react";
import { NavigationBarContainer } from "../navigation-bar/NavigationBarContainer";
import { Header } from "@/design-system";

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
    <>
      {displayHeader && <Header currentPage={currentPage} />}
      <div className="flex min-h-screen w-full flex-col items-center justify-between px-20">
        {children}
      </div>
      {displayNavBar && <NavigationBarContainer />}
    </>
  );
};
