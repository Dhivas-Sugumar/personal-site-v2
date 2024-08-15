import { Header } from "@/design-system";
import { ExperienceSection } from "@/experience/src/components/ExperienceSection";

export default function Page() {
  return (
    <>
      <Header currentPage="Experience" />
      <h1>Experience</h1>
      <ExperienceSection />
    </>
  );
}
