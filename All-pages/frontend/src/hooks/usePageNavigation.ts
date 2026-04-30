import { useState } from "react";
import type { PageId } from "../app/pageTypes";

export function usePageNavigation(initialPage: PageId = "home") {
  const [activePage, setActivePage] = useState<PageId>(initialPage);

  const navigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { activePage, navigate };
}
