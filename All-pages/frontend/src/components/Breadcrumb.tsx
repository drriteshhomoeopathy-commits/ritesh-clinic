import { PAGE_LABELS } from "../app/pages";
import type { PageId } from "../app/pageTypes";

interface BreadcrumbProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Breadcrumb({
  activePage,
  onNavigate,
}: BreadcrumbProps) {
  if (activePage === "home") return null;

  return (
    <div
      style={{
        background: "#f0faf5",
        borderBottom: "1px solid rgba(13,107,59,0.12)",
        padding: "10px 24px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: "0.8rem",
        color: "#5c7a66",
        position: "sticky",
        top: 70,
        zIndex: 99,
      }}
      data-ocid="breadcrumb-bar"
    >
      <button
        type="button"
        onClick={() => onNavigate("home")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#5c7a66",
          fontSize: "0.8rem",
          fontFamily: "'Poppins', sans-serif",
          padding: 0,
          textDecoration: "underline",
        }}
        className="breadcrumb-home-btn"
      >
        🏠 Home
      </button>
      <span>›</span>
      <span style={{ color: "#0d6b3b", fontWeight: 600 }}>
        {PAGE_LABELS[activePage]}
      </span>
    </div>
  );
}
