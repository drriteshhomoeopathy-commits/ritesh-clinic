import { useEffect } from "react";
import type { PageId } from "../app/pageTypes";

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

const CLINIC_GALLERY = [
  {
    src: "/assets/images/clinic-billboard-night.jpg",
    caption: "Our Clinic on Daltonganj Road",
  },
  {
    src: "/assets/images/clinic-signboard-night.jpg",
    caption: "Illuminated Clinic Signboard",
  },
  {
    src: "/assets/images/certificates-wall.jpg",
    caption: "Our Medicine Pharmacy",
  },
  {
    src: "/assets/images/clinic-reception.jpg",
    caption: "Clinic Reception Area",
  },
];

export default function About({ onNavigate }: AboutProps) {
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
    <div>
      {/* About Doctor */}
      <section
        style={{ padding: "80px 24px", background: "white", marginTop: 70 }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 64,
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Doctor photos column */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                  borderRadius: 24,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid rgba(13,107,59,0.12)",
                  boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
                }}
              >
                {/* Primary doctor photo */}
                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: 14,
                    border: "4px solid white",
                    boxShadow: "0 12px 36px rgba(13,107,59,0.3)",
                  }}
                >
                  <img
                    src="/assets/images/rdoct.jpg"
                    alt="Dr. Ritesh Kumar Tiwary at desk"
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
                    fontSize: "1.4rem",
                    color: "#0f2318",
                    textAlign: "center",
                    marginBottom: 6,
                  }}
                >
                  Dr. Ritesh Kumar Tiwary
                </h3>
                <div
                  style={{
                    color: "#0d6b3b",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  Senior Homeopathic Physician
                </div>
                {/* Secondary doctor photo */}
                <div
                  style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: 16,
                    border: "2px solid rgba(13,107,59,0.15)",
                  }}
                >
                  <img
                    src="/assets/images/rdoct.jpg"
                    alt="Dr. Ritesh Kumar Tiwary in traditional attire"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
                  {[
                    "BHMS",
                     "Homoeopathic Physician & Consultant",
                    "5+ Years Exp.",
                    "5000+ Patients",
                  ].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "white",
                        border: "1px solid rgba(13,107,59,0.12)",
                        color: "#0d6b3b",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "5px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Floating badge top-right */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  right: -20,
                  background: "white",
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
                  border: "1px solid rgba(13,107,59,0.12)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    color: "#0d6b3b",
                    fontWeight: 700,
                  }}
                >
                  5+
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#5c7a66",
                    fontWeight: 500,
                  }}
                >
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
              {/* Floating badge bottom-left */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: -20,
                  background: "white",
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
                  border: "1px solid rgba(13,107,59,0.12)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    color: "#0d6b3b",
                    fontWeight: 700,
                  }}
                >
                  5K+
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#5c7a66",
                    fontWeight: 500,
                  }}
                >
                  Happy
                  <br />
                  Patients
                </div>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#25a563",
                  marginBottom: 12,
                }}
              >
                About the Doctor
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                  color: "#0f2318",
                  marginBottom: 20,
                }}
              >
                Meet Dr. Ritesh Kumar Tiwary — Your Trusted Healing Guide
              </h2>
              <p
                style={{
                  color: "#5c7a66",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                Dr. Ritesh Kumar Tiwary is a highly experienced and
                compassionate homeopathic physician based in Daltonganj,
                Jharkhand. Holding a BHMS degree from Govt. Homoeopathic Medical
                College &amp; Hospital, Godda, Jharkhand, he brings over a decade of dedicated practice to
                every consultation.
              </p>
              <p
                style={{
                  color: "#5c7a66",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  marginBottom: 24,
                }}
              >
                Dr. Tiwary specializes in chronic and complex conditions that
                have often found no relief through conventional medicine. His
                patient-first approach — combining classical homeopathy with a
                deep understanding of each individual's constitution — makes him
                one of the most sought-after homeopathic doctors in the Palamu
                region.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {[
                  "Deep expertise in constitutional and classical homeopathy",
                  "Specialized in chronic diseases, skin disorders & child health",
                  "Personalized treatment plans for every patient",
                  "Regular follow-ups to ensure lasting recovery",
                  "Medicines sourced from trusted, certified pharmacies",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      color: "#2d4a38",
                      fontSize: "0.9rem",
                      marginBottom: 10,
                      padding: "10px 14px",
                      background: "#f0faf5",
                      borderRadius: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#0d6b3b",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onNavigate("appointment")}
                data-ocid="about-book-btn"
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
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all 0.3s",
                }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(160deg, #fdf9f0 0%, #fff8e8 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
        data-ocid="awards-section"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: 12,
            }}
          >
            Recognition & Credentials
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
              fontWeight: 700,
              textAlign: "center",
              color: "#0f2318",
              marginBottom: 12,
            }}
          >
            Awards &amp; <span style={{ color: "#c9a84c" }}>Achievements</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #c9a84c, #e8c96a)",
              borderRadius: 2,
              margin: "0 auto 48px",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
            }}
            className="awards-grid"
          >
            {/* Trophy */}
            <div
              className="fade-up-scroll awards-card"
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.12)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s ease",
              }}
            >
              <div
                style={{
                  height: 260,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/images/trophy-topper.jpg"
                  alt="College Topper Trophy — BHMS 2016-17"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.4s ease",
                  }}
                  className="awards-img"
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#a07828",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                    marginBottom: 10,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  🏆 Academic Excellence
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#0f2318",
                    marginBottom: 8,
                  }}
                >
                  College Topper — BHMS 2016–17
                </h4>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "#5c7a66",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Dr. Tiwary graduated as a college topper in his BHMS batch,
                  reflecting his deep academic commitment and clinical acumen
                  from the very beginning of his career.
                </p>
              </div>
            </div>

            {/* Certificates wall */}
            <div
              className="fade-up-scroll awards-card"
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.12)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s 0.12s ease",
              }}
            >
              <div style={{ height: 260, overflow: "hidden" }}>
                <img
                  src="/assets/images/clinic-reception.jpg"
                  alt="Dr. Ritesh Tiwary's wall of certificates and credentials"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.4s ease",
                  }}
                  className="awards-img"
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#a07828",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                    marginBottom: 10,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  📜 Certifications
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#0f2318",
                    marginBottom: 8,
                  }}
                >
                  Degrees, Certifications &amp; Recognitions
                </h4>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "#5c7a66",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  A proud display of degrees, continuing medical education
                  certificates and professional recognitions earned throughout
                  Dr. Tiwary's distinguished career in homoeopathic medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Clinic */}
      <section style={{ padding: "80px 24px", background: "#f0faf5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
            className="clinic-grid"
          >
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#25a563",
                  marginBottom: 12,
                }}
              >
                About Our Clinic
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                  color: "#0f2318",
                  marginBottom: 20,
                }}
              >
                A Sanctuary of Natural Healing in Daltonganj
              </h2>
              <p
                style={{
                  color: "#5c7a66",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                Ritesh Homeopathic Clinic is a modern, well-equipped homeopathic
                healthcare centre located in Daltonganj, Jharkhand. Established
                with a mission to provide accessible, effective and
                compassionate homeopathic care, we serve patients from across
                the Palamu district and beyond.
              </p>
              <p
                style={{
                  color: "#5c7a66",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  marginBottom: 24,
                }}
              >
                Our clinic provides a calm, hygienic and welcoming environment
                where patients can discuss their health concerns openly. We
                believe healing begins with trust, and we strive to build a
                long-lasting doctor-patient relationship based on transparency,
                empathy and expertise.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginTop: 24,
                }}
                className="clinic-features-grid"
              >
                {[
                  {
                    icon: "🏥",
                    title: "Modern Infrastructure",
                    desc: "Hygienic, air-conditioned clinic with modern examination facilities",
                  },
                  {
                    icon: "💊",
                    title: "Certified Medicines",
                    desc: "Quality-assured medicines from certified homeopathic pharmacies",
                  },
                  {
                    icon: "🔒",
                    title: "Complete Privacy",
                    desc: "Strict confidentiality for all patient records and consultations",
                  },
                  {
                    icon: "📱",
                    title: "Online Consultation",
                    desc: "Available via WhatsApp & phone for remote patients",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="fade-up-scroll clinic-feat-hover"
                    style={{
                      background: "white",
                      borderRadius: 14,
                      padding: 18,
                      border: "1px solid rgba(13,107,59,0.12)",
                      boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                      transition: "all 0.3s",
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>
                      {icon}
                    </div>
                    <h4
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#0f2318",
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#5c7a66",
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "white",
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
                  border: "1px solid rgba(13,107,59,0.12)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.906!2d84.0850028!3d24.0318906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c77ce127717ad%3A0xf96b507b4bab3c87!2sDr.%20Ritesh%20clinic%20Homoeopathy!5e0!3m2!1sen!2sin!4v1710000000000"
                  style={{
                    width: "100%",
                    height: 280,
                    border: "none",
                    display: "block",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location Map"
                />
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{ fontSize: "1.3rem", flexShrink: 0, marginTop: 2 }}
                  >
                    📍
                  </div>
                  <div>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "0.88rem",
                        color: "#0f2318",
                        marginBottom: 4,
                      }}
                    >
                      Ritesh Homeopathic Clinic
                    </strong>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#5c7a66",
                        lineHeight: 1.6,
                      }}
                    >
                      Ranchi Road Redma, Near Honda Showroom,
                      <br />
                      Opposite Ola Showroom, Daltonganj,
                      <br />
                      Palamu, Jharkhand 822101
                    </span>
                    <a
                      href="https://maps.app.goo.gl/93hGLixa1Z1YRpXN9?g_st=am"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: 8,
                        fontSize: "0.75rem",
                        color: "#0d6b3b",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Photo Gallery */}
      <section
        style={{
          padding: "72px 24px 80px",
          background: "white",
        }}
        data-ocid="clinic-gallery"
      >
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
            Our Facility
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
              fontWeight: 700,
              textAlign: "center",
              color: "#0f2318",
              marginBottom: 12,
            }}
          >
            Inside <span style={{ color: "#0d6b3b" }}>Our Clinic</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #0d6b3b, #25a563)",
              borderRadius: 2,
              margin: "0 auto 48px",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
            className="gallery-grid"
          >
            {CLINIC_GALLERY.map(({ src, caption }) => (
              <div
                key={caption}
                className="fade-up-scroll gallery-card"
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  position: "relative",
                  border: "2px solid rgba(13,107,59,0.12)",
                  boxShadow: "0 4px 20px rgba(13,107,59,0.1)",
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.4s ease",
                  cursor: "default",
                }}
              >
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img
                    src={src}
                    alt={caption}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      display: "block",
                    }}
                    className="gallery-img"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 16px 14px",
                    background:
                      "linear-gradient(0deg, rgba(13,107,59,0.88) 0%, transparent 100%)",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { .about-grid, .clinic-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .awards-grid, .gallery-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .clinic-features-grid { grid-template-columns: 1fr !important; } }
        .fade-up-scroll.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; }
        .clinic-feat-hover:hover { transform: translateY(-4px) !important; box-shadow: 0 8px 32px rgba(13,107,59,0.13) !important; }
        .gallery-card:hover { border-color: rgba(13,107,59,0.3) !important; box-shadow: 0 12px 40px rgba(13,107,59,0.18) !important; }
        .gallery-card:hover .gallery-img { transform: scale(1.07) !important; }
        .awards-card:hover { transform: translateY(-6px) !important; box-shadow: 0 12px 40px rgba(201,168,76,0.22) !important; }
        .awards-card:hover .awards-img { transform: scale(1.05) !important; }
      `}</style>
    </div>
  );
}