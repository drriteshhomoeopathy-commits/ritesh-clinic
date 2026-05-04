import { PAGE_LABELS } from "../app/pages";
import type { PageId } from "../app/pageTypes";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const WA_NUMBER = "918210485109";
const WA_MSG = encodeURIComponent("Hello Dr. Ritesh, I need a consultation.");
const currentYear = new Date().getFullYear();

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks: PageId[] = [
    "about",
    "services",
    "why",
    "reviews",
    "blog",
    "appointment",
    "contact",
  ];

  const services = [
    "Skin Disorders",
    "Hair Problems",
    "Allergy & Asthma",
    "Migraine Treatment",
    "Child Care",
    "Chronic Diseases",
    "Joint & Bone Disorders",
    "Women's Health",
  ];

  return (
    <footer
      style={{
        background: "#0f2318",
        color: "rgba(255,255,255,0.8)",
        padding: "48px 24px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          paddingBottom: 40,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.3rem",
              color: "white",
              fontWeight: 700,
              marginBottom: 12,
              display: "block",
            }}
          >
            🌿 Dr. Ritesh Homeopathic Clinic
          </span>
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 280,
              margin: 0,
            }}
          >
            Bringing the power of natural homeopathic healing to Daltonganj and
            the Palamu region. Compassionate, effective and side-effect free
            care for your entire family.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            {[
              {
                href: "https://www.facebook.com/share/1792sFnYWf/",
                label: "Facebook",
                icon: (
                  <img
                    src="/assets/images/facebook-logo.png"
                    alt=""
                    aria-hidden="true"
                    style={{ width: 18, height: 18, display: "block" }}
                  />
                ),
                extraClass: "footer-social-btn",
              },
              {
                href: "https://www.instagram.com/ritesh_clinic_homoeopathy?igsh=MTVlM255aHN6dXd3Ng==",
                label: "Instagram",
                icon: "📸",
                extraClass: "footer-social-btn",
              },
              {
                href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
                label: "WhatsApp",
                icon: "💬",
                extraClass: "footer-social-wa",
              },
              {
                href: "https://www.youtube.com/@DrRiteshHOMOEOPATHYClinic/featured",
                label: "YouTube",
                icon: (
                  <img
                    src="/assets/images/youtube.jpg"
                    alt=""
                    aria-hidden="true"
                    style={{ width: 25, height: 15, display: "block" }}
                  />
                ),
                extraClass: "footer-social-btn",
              }
            ].map(({ href, label, icon, extraClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className={`footer-social-btn ${extraClass}`}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              color: "white",
              fontSize: "0.85rem",
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {quickLinks.map((page) => (
              <li key={page} style={{ marginBottom: 8 }}>
                <button
                  type="button"
                  onClick={() => onNavigate(page)}
                  className="footer-link-btn"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    fontFamily: "'Poppins', sans-serif",
                    padding: 0,
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                >
                  {page === "contact" ? "Contact Us" : PAGE_LABELS[page]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              color: "white",
              fontSize: "0.85rem",
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {services.map((service) => (
              <li key={service} style={{ marginBottom: 8 }}>
                <button
                  type="button"
                  onClick={() => onNavigate("services")}
                  className="footer-link-btn"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.82rem",
                    fontFamily: "'Poppins', sans-serif",
                    padding: 0,
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>
          © {currentYear} Dr. Ritesh Homeopathic Clinic. All rights reserved. | Dr.
          Ritesh Kumar Tiwary, Daltonganj, Jharkhand
        </span>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
      `}</style>
    </footer>
  );
}
