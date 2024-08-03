import { Header } from "@/design-system";
import { headerPageName } from "./Constants";

export default function Page() {
  return (
    <>
      <Header currentPage={headerPageName} />
    </>
  );
}
