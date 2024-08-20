import { AboutMeSection } from "@/about-me/src";
import { Header, PageContainer } from "@/design-system";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"About"}
    >
      <AboutMeSection />
    </PageContainer>
  );
}
