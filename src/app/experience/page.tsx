import { PageContainer } from "@/design-system";
import { ExperienceSection } from "@/experience/src/components/experience-section";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"Experience"}
    >
      <h1 className="text-center mb-8">Resume</h1>
      <ExperienceSection />
    </PageContainer>
  );
}
