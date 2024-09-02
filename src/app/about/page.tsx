import { AboutMeSection } from "@/about-me/src";
import { PageContainer } from "@/design-system";

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
