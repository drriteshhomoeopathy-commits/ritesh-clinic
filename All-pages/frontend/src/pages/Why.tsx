import { useEffect } from "react";
import type { PageId } from "../app/pageTypes";

interface WhyProps {
  onNavigate: (page: PageId) => void;
}

const WHY_ITEMS = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "All medicines are natural, non-toxic and completely free from side effects — safe for infants to elders.",
  },
  {
    icon: "🎯",
    title: "Root-Cause Healing",
    desc: "We treat the cause, not the symptom. Our approach ensures the problem doesn't return after treatment.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Safe for All Ages",
    desc: "Homeopathy is suitable for newborns, children, pregnant women, adults and the elderly alike.",
  },
  {
    icon: "🕐",
    title: "Flexible Timings",
    desc: "Open Monday to Saturday 9AM–7PM and Sunday 10AM–2PM. Emergency consultations available on WhatsApp.",
  },
  {
    icon: "💰",
    title: "Affordable Care",
    desc: "Quality healthcare should not be a luxury. We offer premium consultation at highly reasonable charges.",
  },
  {
    icon: "📞",
    title: "Online Consultation",
    desc: "Can't visit in person? Connect with Dr. Tiwary via WhatsApp or phone from anywhere in India.",
  },
  {
    icon: "📋",
    title: "Detailed Case Taking",
    desc: "Every patient receives a thorough 30-45 minute consultation to understand their unique health constitution.",
  },
  {
    icon: "❤️",
    title: "Compassionate Care",
    desc: "We treat patients like family. Your wellbeing and comfort are our highest priority at every visit.",
  },
];

export default function Why({ onNavigate }: WhyProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(".fade-up-scroll");
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(160deg, #0d6b3b 0%, #0a5430 100%)",
        marginTop: 70,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: 12,
          }}
        >
          Our Promise
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "white",
            marginBottom: 16,
          }}
        >
          Why Choose Ritesh Homeopathic Clinic?
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "rgba(255,255,255,0.4)",
            borderRadius: 2,
            margin: "0 auto 16px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto 56px",
          }}
        >
          We don't just treat diseases — we restore health, naturally and
          completely.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="why-grid"
        >
          {WHY_ITEMS.map(({ icon, title, desc }, i) => (
            <button
              key={title}
              type="button"
              onClick={() => onNavigate("appointment")}
              className="fade-up-scroll why-card-hover"
              data-ocid={`why-card-${i}`}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 20,
                padding: "28px 20px",
                textAlign: "center",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                backdropFilter: "blur(4px)",
                cursor: "pointer",
                opacity: 0,
                transform: "translateY(20px)",
                transitionDelay: `${i * 0.08}s`,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  margin: "0 auto 18px",
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 10,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button
            type="button"
            onClick={() => onNavigate("appointment")}
            data-ocid="why-book-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 36px",
              borderRadius: 14,
              fontWeight: 700,
              fontSize: "0.95rem",
              background: "white",
              color: "#0d6b3b",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(255,255,255,0.2)",
            }}
            className="btn-white-hover"
          >
            📅 Book an Appointment Today
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .why-grid { grid-template-columns: 1fr !important; } }
        .fade-up-scroll.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .why-card-hover:hover { background: rgba(255,255,255,0.15) !important; transform: translateY(-6px) !important; }
        .btn-white-hover:hover { background: #f0faf5 !important; transform: translateY(-2px) !important; }
      `}</style>
    </section>
  );
}
