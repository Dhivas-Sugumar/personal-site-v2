import { Header } from "@/design-system";
import { ProjectSection } from "@/project/src/components/ProjectSection";

export default function Page() {
  return (
    <>
      <Header currentPage="Projects" />
      <h1>Projects</h1>
      <ProjectSection />
    </>
  );
}
