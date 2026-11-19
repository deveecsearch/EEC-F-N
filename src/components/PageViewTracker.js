"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/components/lib/tracking";

// Delay so document.title has been updated for the new route
const TITLE_DELAY_MS = 300;

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => trackPageView(), TITLE_DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
