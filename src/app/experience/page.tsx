import { Header, PageContainer } from "@/design-system";
import { ExperienceSection } from "@/experience/src/components/ExperienceSection";

export default function Page() {
  return (
    <PageContainer displayHeader={true} displayNavBar={true} currentPage={"Experience"}>
      <h1 className="text-center">Resume</h1>
      <ExperienceSection />
    </PageContainer>
  );
}
