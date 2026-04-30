export type PageId =
  | "home"
  | "about"
  | "services"
  | "why"
  | "reviews"
  | "blog"
  | "appointment"
  | "contact";

export interface PageComponentProps {
  onNavigate: (page: PageId) => void;
}
