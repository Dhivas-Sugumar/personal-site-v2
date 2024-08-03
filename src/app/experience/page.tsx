import { Header } from "@/design-system";
import { ExperienceSection } from "@/experience";

export default function Page() {
  return (
    <>
      <Header currentPage={"Experience"} />
      <ExperienceSection />
    </>
  );
}
