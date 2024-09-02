import { AboutMeSection } from "@/about-me/src";
import { Header, PageContainer } from "@/design-system";
import { GlassMorphismContainer } from "@/design-system/src/glass-morphism/glass-morphism-container";

export default function Page() {
  return (
    <PageContainer
      displayHeader={true}
      displayNavBar={true}
      currentPage={"About"}
    >
      <GlassMorphismContainer>
        <p className="text-accent300">
          I'm a software engineer with a passion for building things. I'm
          currently working on a project that I'm excited to share with you
          soon!
        </p>
      </GlassMorphismContainer>
      <AboutMeSection />
    </PageContainer>
  );
}
