import { PageContainer } from "@/design-system";
import { ProjectSection } from "@/project/src/components/ProjectSection";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"Projects"}
    >
      <ProjectSection />
    </PageContainer>
  );
}
