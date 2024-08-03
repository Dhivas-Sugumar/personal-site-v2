import { Header } from "@/design-system";
import { headerPageName } from "./Constants";

export default function Page() {
  return (
    <div>
      <Header currentPage={headerPageName} />
    </div>
  );
}
