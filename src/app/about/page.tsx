import { AboutMeSection } from "@/about-me/src";
import { Header, PageContainer } from "@/design-system";
import { NavigationBarContainer } from "@/design-system/src/navigation-bar/NavigationBarContainer";
import { NightSkyBackground } from "@/design-system/src/particle/night-sky-background";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NightSkyBackground />
      <Header currentPage="About Me" />
      <main className="flex-grow flex items-center justify-center md:my-10 md:px-20 px-4 my-4">
        <AboutMeSection />
      </main>
      <NavigationBarContainer />
    </div>
  );
}
