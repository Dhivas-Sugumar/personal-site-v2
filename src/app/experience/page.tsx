import { Header } from "@/design-system";
import { TestCarousel } from "@/design-system/src/carousel/TestCarousel";
import { ExperienceSection } from "@/experience/src/components/ExperienceSection";

export default function Page() {
  return (
    <>
      <Header currentPage="Experience" />
      <h1>Experience</h1>
      <ExperienceSection />
      <TestCarousel />
    </>
  );
}
