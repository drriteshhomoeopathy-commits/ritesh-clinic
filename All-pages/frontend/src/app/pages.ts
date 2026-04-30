import type { ComponentType } from "react";
import About from "../pages/About";
import Appointment from "../pages/Appointment";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Reviews from "../pages/Reviews";
import Services from "../pages/Services";
import Why from "../pages/Why";
import type { PageComponentProps, PageId } from "./pageTypes";

export interface PageDefinition {
  id: PageId;
  label: string;
  mobileLabel?: string;
  showInPrimaryNav?: boolean;
}

export const PAGE_DEFINITIONS: PageDefinition[] = [
  { id: "home", label: "Home", mobileLabel: "🏠 Home", showInPrimaryNav: true },
  {
    id: "about",
    label: "About Doctor",
    mobileLabel: "👨‍⚕️ About Doctor",
    showInPrimaryNav: true,
  },
  {
    id: "services",
    label: "Services",
    mobileLabel: "🩺 Services",
    showInPrimaryNav: true,
  },
  {
    id: "why",
    label: "Why Choose Us",
    mobileLabel: "⭐ Why Choose Us",
    showInPrimaryNav: true,
  },
  {
    id: "reviews",
    label: "Patient Reviews",
    mobileLabel: "💬 Patient Reviews",
    showInPrimaryNav: true,
  },
  { id: "blog", label: "Blog", mobileLabel: "📝 Blog", showInPrimaryNav: true },
  {
    id: "appointment",
    label: "Book Appointment",
    mobileLabel: "📅 Book Appointment",
  },
  {
    id: "contact",
    label: "Contact",
    mobileLabel: "📍 Contact",
    showInPrimaryNav: true,
  },
];

export const PAGE_LABELS: Record<PageId, string> = Object.fromEntries(
  PAGE_DEFINITIONS.map(({ id, label }) => [id, label]),
) as Record<PageId, string>;

export const PRIMARY_NAV_PAGES = PAGE_DEFINITIONS.filter(
  ({ showInPrimaryNav }) => showInPrimaryNav,
);

export const PAGE_ORDER = PAGE_DEFINITIONS.map(({ id }) => id);

export const PAGE_COMPONENTS: Record<
  PageId,
  ComponentType<PageComponentProps>
> = {
  home: Home,
  about: About,
  services: Services,
  why: Why,
  reviews: Reviews,
  blog: Blog,
  appointment: Appointment,
  contact: Contact,
};
