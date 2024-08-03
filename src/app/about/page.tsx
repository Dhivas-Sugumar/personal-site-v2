import { AboutMeSection } from "@/about-me/src";
import { Header } from "@/design-system";

export default function Page() {
  return (
    <>
      <Header currentPage={"About Me"} />
      <AboutMeSection />
    </>
  );
}
