import { useEffect, useRef } from "react";
import type { PageId } from "../app/pageTypes";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const WA_NUMBER = "918210485109";
const WA_MSG = encodeURIComponent("Hello Dr. Ritesh, I need a consultation.");

const STATS = [
  { num: "5+", label: "Years Experience" },
  { num: "5000+", label: "Patients Treated" },
  { num: "95%", label: "Success Rate" },
  { num: "100%", label: "Natural Medicines" },
];

const SERVICES_PREVIEW = [
  {
    icon: "🧴",
    title: "Skin Disorders",
    desc: "Eczema, psoriasis, acne, vitiligo — treated from the root.",
    image: "assets/images/skindisorder.png",
    
  },
  {
    icon: "💇",
    title: "Hair Problems",
    desc: "Hair fall, alopecia, dandruff — natural regrowth therapy.",
    image: "/assets/images/hairprob.png",
    
  },
  {
    icon: "🤧",
    title: "Allergy & Asthma",
    desc: "Long-term immune correction for lasting relief.",
    image: "/assets/images/allergy.png",
  },
  {
    icon: "🧠",
    title: "Migraine",
    desc: "Reduce frequency and severity without painkillers.",
    image: "/assets/images/migrane.png"
  },
  {
    icon: "👶",
    title: "Child Care",
    desc: "Safe, gentle treatment for children of all ages.",
    image: "/assets/images/childcare.png",
  },
  {
    icon: "🩺",
    title: "Chronic Diseases",
    desc: "Diabetes, thyroid, arthritis — holistic management.",
    image: "/assets/images/chronic.png",
  },
];

const CAROUSEL_ITEMS = [
  { src: "/assets/images/joint-pain-flyer.png", label: "Hair Fall Treatment" },
  { src: "/assets/images/diabetes-flyer.jpg", label: "Diabetes Management" },
  { src: "/assets/images/piles2-flyer.jpg", label: "Piles & Fistula Care" },
  //{ src: "/assets/images/piles2-flyer.jpg", label: "Anorectal Disorders" },
  { src: "/assets/images/piles-flyer.png", label: "Joint Pain Relief" },
  { src: "/assets/images/doctor-consulting.png", label: "Paediatric Care" },
];


function useFadeUpObserver() {
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
}

export default function Home({ onNavigate }: HomeProps) {
  useFadeUpObserver();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let frame: number;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    el.addEventListener("mouseenter", () => {
      paused = true;
    });
    el.addEventListener("mouseleave", () => {
      paused = false;
    });
    el.addEventListener(
      "touchstart",
      () => {
        paused = true;
      },
      { passive: true },
    );
    el.addEventListener(
      "touchend",
      () => {
        paused = false;
      },
      { passive: true },
    );

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(37,165,99,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(13,107,59,0.1) 0%, transparent 60%), linear-gradient(160deg, #f0faf5 0%, #e8f7f0 40%, #d4f4e3 100%)",
          display: "flex",
          alignItems: "center",
          padding: "100px 24px 60px",
          position: "relative",
          overflow: "hidden",
          marginTop: 70,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,165,99,0.12) 0%, transparent 70%)",
            right: -150,
            top: -100,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            left: -80,
            bottom: 50,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(13,107,59,0.08)",
                border: "1px solid rgba(13,107,59,0.2)",
                color: "#0d6b3b",
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 100,
                marginBottom: 20,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              🌿 Modern Homeopathic Care Since 2022
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#0f2318",
                marginBottom: 8,
              }}
            >
              <em
                style={{
                  fontStyle: "normal",
                  background: "linear-gradient(135deg, #0d6b3b, #25a563)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ritesh
              </em>
              <br />
              Homeopathic
              <br />
              Clinic
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "#c9a84c",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              — Heal Naturally. Live Completely. —
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#5c7a66",
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              Experience the gentle power of homeopathy under the expert
              guidance of Dr. Ritesh Kumar Tiwary. Safe, holistic &amp;
              side-effect free treatment for all ages in Daltonganj, Jharkhand.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 44,
              }}
            >
              <button
                type="button"
                onClick={() => onNavigate("appointment")}
                data-ocid="hero-cta-book"
                className="btn-primary-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#0d6b3b",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(13,107,59,0.3)",
                  transition: "all 0.3s",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                📅 Book Appointment
              </button>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero-cta-wa"
                className="btn-wa-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#25D366",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  transition: "all 0.3s",
                }}
              >
                💬 WhatsApp Now
              </a>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {STATS.map(({ num, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#0d6b3b",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "#5c7a66",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="float-card"
              style={{
                background: "white",
                borderRadius: 24,
                padding: 36,
                boxShadow: "0 20px 60px rgba(13,107,59,0.18)",
                border: "1px solid rgba(13,107,59,0.12)",
                position: "relative",
                maxWidth: 380,
                width: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: 28,
                  background: "#c9a84c",
                  color: "white",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "5px 14px",
                  borderRadius: 100,
                  letterSpacing: "0.05em",
                }}
              >
                ✨ Senior Homeopath
              </div>
              {/* Doctor photo */}
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  border: "4px solid #f0faf5",
                  boxShadow: "0 8px 24px rgba(13,107,59,0.25)",
                }}
              >
                <img
                  src="/assets/images/rdoct.jpg"
                  alt="Dr. Ritesh Kumar Tiwary"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textAlign: "center",
                  fontSize: "1.3rem",
                  color: "#0f2318",
                  marginBottom: 6,
                }}
              >
                Dr. Ritesh Kumar Tiwary
              </h3>
              <div
                style={{
                  textAlign: "center",
                  color: "#0d6b3b",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                B.H.M.S (Govt. Homoeopathic Medical College and Hospital Godda, Jharkhand)
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  {
                    icon: "🎓",
                    text: "Qualified & Certified Homeopathic Physician and Consultant",
                  },
                  { icon: "📍", text: "Daltonganj, Jharkhand, India" },
                  { icon: "⏰", text: "Mon–Sat: 9AM–3PM | Sun: 10AM–7PM" },
                  {
                    icon: "💊",
                    text: "Holistic & Side-Effect Free Treatments",
                  },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      background: "#f0faf5",
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <span style={{ fontSize: "1rem" }}>{icon}</span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "#2d4a38",
                        fontWeight: 500,
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+916207962161"
                className="btn-primary-hover"
                data-ocid="hero-call-cta"
                style={{
                  marginTop: 20,
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                  background: "#0d6b3b",
                  color: "white",
                  padding: 12,
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                📞 Call for Appointment
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Conditions Carousel */}
      <section
        style={{
          padding: "72px 0 80px",
          background: "linear-gradient(160deg, #f7fdf9 0%, #e8f7f0 100%)",
          overflow: "hidden",
        }}
        data-ocid="conditions-carousel"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#25a563",
              marginBottom: 12,
            }}
          >
            Proven Results
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              fontWeight: 700,
              textAlign: "center",
              color: "#0f2318",
              marginBottom: 8,
            }}
          >
            Conditions We{" "}
            <span style={{ color: "#0d6b3b" }}>Treat Successfully</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #0d6b3b, #25a563)",
              borderRadius: 2,
              margin: "0 auto 40px",
            }}
          />
        </div>

        {/* Scrollable carousel */}
        <div style={{ position: "relative" }}>
          {/* Fade edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(90deg, #f0faf5, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(270deg, #f0faf5, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: 20,
              overflowX: "auto",
              scrollbarWidth: "none",
              padding: "12px 80px 20px",
              cursor: "grab",
            }}
          >
            {/* Duplicate for seamless loop */}
            {[
              ...CAROUSEL_ITEMS.map((item) => ({
                ...item,
                uid: `a-${item.label}`,
              })),
              ...CAROUSEL_ITEMS.map((item) => ({
                ...item,
                uid: `b-${item.label}`,
              })),
            ].map(({ src, label, uid }) => (
              <div
                key={uid}
                style={{
                  flex: "0 0 200px",
                  height: 280,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(13,107,59,0.15)",
                  border: "2px solid rgba(13,107,59,0.12)",
                  position: "relative",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                className="carousel-card"
              >
                <img
                  src={src}
                  alt={label}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 12px 12px",
                    background:
                      "linear-gradient(0deg, rgba(13,107,59,0.85) 0%, transparent 100%)",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      fontFamily: "'Poppins', sans-serif",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <button
            type="button"
            onClick={() => onNavigate("services")}
            data-ocid="carousel-view-all"
            className="btn-primary-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#0d6b3b",
              color: "white",
              padding: "12px 28px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 4px 20px rgba(13,107,59,0.3)",
            }}
          >
            View All Treatments →
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#25a563",
              marginBottom: 12,
            }}
          >
            What We Treat
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              fontWeight: 700,
              textAlign: "center",
              color: "#0f2318",
              marginBottom: 16,
            }}
          >
            Our <span style={{ color: "#0d6b3b" }}>Specialised Services</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #0d6b3b, #25a563)",
              borderRadius: 2,
              margin: "0 auto 16px",
            }}
          />
          <p
            style={{
              textAlign: "center",
              color: "#5c7a66",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto 56px",
            }}
          >
            We provide holistic homeopathic treatment for a wide range of
            conditions — addressing the root cause, not just the symptoms.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="services-preview-grid"
          >
            {SERVICES_PREVIEW.map(({ icon, title, desc, image }, i) => (
              <button
                key={title}
                type="button"
                onClick={() => onNavigate("services")}
                className="fade-up-scroll service-card-hover"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 0,
                  border: "1px solid rgba(13,107,59,0.12)",
                  boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: `${i * 0.08}s`,
                  opacity: 0,
                  transform: "translateY(20px)",
                  textAlign: "left",
                  fontFamily: "'Poppins', sans-serif",
                  overflow: "hidden",
                }}
              >
                {image ? (
                  <div
                    style={{
                      height: 160,
                      overflow: "hidden",
                      borderRadius: "20px 20px 0 0",
                    }}
                  >
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      className="card-img-zoom"
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      height: 80,
                      background: "#f0faf5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.4rem",
                      borderRadius: "20px 20px 0 0",
                    }}
                  >
                    {icon}
                  </div>
                )}
                <div style={{ padding: "20px 24px 28px" }}>
                  {image && (
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "#f0faf5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                        marginBottom: 12,
                      }}
                    >
                      {icon}
                    </div>
                  )}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0f2318",
                      marginBottom: 10,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#5c7a66",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 16,
                      color: "#0d6b3b",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    Learn More →
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button
              type="button"
              onClick={() => onNavigate("services")}
              data-ocid="home-all-services-btn"
              className="btn-primary-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0d6b3b",
                color: "white",
                padding: "14px 32px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(13,107,59,0.3)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        style={{
          padding: "60px 24px",
          background: "linear-gradient(160deg, #0d6b3b 0%, #0a5430 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 3vw, 2.2rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Ready to Experience Natural Healing?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.95rem",
              maxWidth: 560,
              margin: "0 auto 32px",
            }}
          >
            Join 5000+ patients who have found lasting relief through homeopathy
            at Dr. Ritesh Kumar Tiwary's clinic in Daltonganj.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate("appointment")}
              data-ocid="home-strip-book-btn"
              className="btn-white-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 32px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: "0.95rem",
                background: "white",
                color: "#0d6b3b",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                transition: "all 0.3s",
              }}
            >
              📅 Book Appointment
            </button>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 32px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: "0.95rem",
                background: "#25D366",
                color: "white",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                transition: "all 0.3s",
              }}
            >
              💬 WhatsApp Dr. Tiwary
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .services-preview-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .services-preview-grid { grid-template-columns: 1fr !important; gap: 14px !important; } }
        .fade-up-scroll.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; box-shadow: 0 8px 30px rgba(13,107,59,0.4) !important; }
        .btn-wa-hover:hover { background: #20bd5c !important; transform: translateY(-2px) !important; }
        .btn-white-hover:hover { background: #f0faf5 !important; transform: translateY(-2px) !important; }
        .service-card-hover:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 60px rgba(13,107,59,0.18) !important; border-color: rgba(13,107,59,0.25) !important; opacity: 1 !important; }
        .service-card-hover:hover .card-img-zoom { transform: scale(1.06) !important; }
        div[ref] { scrollbar-width: none; }
        div[ref]::-webkit-scrollbar { display: none; }
        .carousel-card:hover { transform: translateY(-4px) !important; box-shadow: 0 10px 32px rgba(13,107,59,0.22) !important; }
      `}</style>
    </div>
  );
}
