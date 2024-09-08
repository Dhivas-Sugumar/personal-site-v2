import { SocialSection } from "@/contact/src/components/social-section";
import { PageContainer } from "@/design-system";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"Contact"}
    >
      <h1 className="text-accent300 header text-center mb-8">Contact Me</h1>
      <SocialSection />
    </PageContainer>
  );
}
