import { useEffect, useState } from "react";
import { PRIMARY_NAV_PAGES } from "../app/pages";
import type { PageId } from "../app/pageTypes";

interface NavProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Nav({ activePage, onNavigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(13,107,59,0.12)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(13,107,59,0.15)"
          : "0 2px 16px rgba(13,107,59,0.08)",
        transition: "box-shadow 0.3s ease",
      }}
      data-ocid="main-nav"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 70,
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          data-ocid="nav-logo"
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(13,107,59,0.25)",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(13,107,59,0.18)",
            }}
          >
            <img
              src="/assets/images/logo.jfif"
              alt="Dr. Ritesh Clinic Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
          <div style={{ lineHeight: 1.2, textAlign: "left" }}>
            <strong
              style={{
                display: "block",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                color: "#0d6b3b",
              }}
            >
              Ritesh Homeopathic Clinic
            </strong>
            <span style={{ fontSize: "0.7rem", color: "#5c7a66" }}>
              Daltonganj, Jharkhand
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 6,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {PRIMARY_NAV_PAGES.map(({ label, id: page }) => (
            <li key={page}>
              <button
                type="button"
                onClick={() => handleNav(page)}
                data-ocid={`nav-link-${page}`}
                className={`nav-link-btn${activePage === page ? " nav-link-active" : ""}`}
                style={{
                  background: activePage === page ? "#f0faf5" : "transparent",
                  color: activePage === page ? "#0d6b3b" : "#2d4a38",
                  fontWeight: activePage === page ? 600 : 500,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => handleNav("appointment")}
              data-ocid="nav-cta-book"
              className="nav-cta-btn"
              style={{
                background: "#0d6b3b",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: 10,
                fontFamily: "'Poppins', sans-serif",
                transition: "background 0.2s, transform 0.2s",
              }}
            >
              📅 Book Appointment
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav-hamburger"
          className="flex md:hidden"
          style={{
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#0d6b3b",
              borderRadius: 2,
              transition: "all 0.3s",
              transform: mobileOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#0d6b3b",
              borderRadius: 2,
              transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#0d6b3b",
              borderRadius: 2,
              transition: "all 0.3s",
              transform: mobileOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="slide-down"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "12px 20px 20px",
            background: "white",
            borderTop: "1px solid rgba(13,107,59,0.12)",
          }}
          data-ocid="mobile-menu"
        >
          {PRIMARY_NAV_PAGES.map(({ mobileLabel, label, id: page }) => (
            <button
              key={page}
              type="button"
              onClick={() => handleNav(page)}
              style={{
                background: activePage === page ? "#f0faf5" : "transparent",
                color: activePage === page ? "#0d6b3b" : "#2d4a38",
                fontWeight: activePage === page ? 600 : 500,
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
                padding: "10px 12px",
                borderRadius: 8,
                textAlign: "left",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {mobileLabel ?? label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("appointment")}
            style={{
              background: "#0d6b3b",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 700,
              padding: "10px 12px",
              borderRadius: 8,
              textAlign: "left",
              fontFamily: "'Poppins', sans-serif",
              marginTop: 4,
            }}
          >
            📅 Book Appointment
          </button>
        </div>
      )}

      <style>{`
        .nav-link-btn:hover { background: #f0faf5 !important; color: #0d6b3b !important; }
        .nav-cta-btn:hover { background: #1a8a4e !important; transform: translateY(-1px) !important; }
      `}</style>
    </nav>
  );
}
