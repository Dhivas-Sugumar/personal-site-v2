import { useMediaQuery } from "usehooks-ts";
export type Breakpoint = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): Breakpoint {
  const isMobile = useMediaQuery("(min-width: 480px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return "desktop";
  if (isTablet) return "tablet";
  if (isMobile) return "mobile";

  return "mobile";
}
