import type { PageId } from "../app/pageTypes";
import { useState } from "react";

interface ReviewsProps {
  onNavigate: (page: PageId) => void;
}

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "My 8-year-old son had recurring tonsillitis every month for 3 years. After just 4 months with Dr. Tiwary, he has had zero infections. We are truly grateful for this miracle!",
    name: "Rekha Devi",
    loc: "Daltonganj, Jharkhand",
    initial: "R",
    videoId: "tC-WNBI1Y0M",
    id: "RekhaDevi"
    
  },
  {
    stars: "★★★★★",
    text: "I had severe psoriasis covering 40% of my body. Conventional doctors said it was incurable. Dr. Tiwary's treatment cleared 90% of my skin in 6 months. I feel like a new person!",
    name: "Arun Kumar Singh",
    loc: "Medininagar, Jharkhand",
    initial: "A",
    videoId: "brIbYr6ph2M",
    id: "ArunKumarSingh"
  },
  {
    stars: "★★★★★",
    text: "I was suffering from severe joint pain that made daily activities very difficult. After 2 months of homeopathic treatment, my pain has reduced significantly and I can move comfortably again. Dr. Tiwary's approach is truly holistic.",
    name: "Dhanesh yadav",
    loc: "Chianki , Daltonganj",
    initial: "P",
    videoId: "EbzHP-Riops",
    id: "Dhanesh yadav"
  },
  
];

export default function Reviews({ onNavigate }: ReviewsProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <section
      style={{ padding: "80px 24px", background: "#f0faf5", marginTop: 70 }}
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
          Patient Stories
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
          What Our <span style={{ color: "#0d6b3b" }}>Patients Say</span>
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
          Real recoveries. Real gratitude. Hear from those who've experienced
          the healing power of homeopathy.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map(({ stars, text, id,videoId, name, loc, initial }) => (
            <div
              key={name}
              data-ocid={`testimonial-${initial}`}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 10,
                border: "1px solid rgba(13,107,59,0.12)",
                boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="test-card-hover"
            >
              <div
                style={{
                  marginBottom: 16,
                  position: "relative",
                  height: 160,
                  overflow: "hidden",
                  borderRadius: "10px"
                }}
              >
                {(() => {
                  let imageSrc = "";

                  if (id === "RekhaDevi") {
                    imageSrc = "/assets/images/clinic-billboard-night.jpg";
                  } else if (id === "ArunKumarSingh") {
                    imageSrc = "/assets/images/clinic-medicine-shelf.jpg";
                  } else if (id === "Dhanesh yadav") {
                    imageSrc = "/assets/images/clinic-reception.jpg";
                  }

                  return imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={id}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                      }}
                    />
                  );
                })()}
                {id === "RekhaDevi" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(videoId);
                  }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "16px solid black",
                        marginLeft: "4px",
                      }}
                    />
                  </div>
                )}
                 {id === "ArunKumarSingh" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(videoId);
                  }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "16px solid black",
                        marginLeft: "4px",
                      }}
                    />
                  </div>
                )}
                 {id === "Dhanesh yadav" && (
                  <div onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(videoId);
                  }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "16px solid black",
                        marginLeft: "4px",
                      }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{ color: "#c9a84c", fontSize: "1rem", marginBottom: 16 }}
              >
                {stars}
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#2d4a38",
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d6b3b, #25a563)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {initial}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: "#0f2318",
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: "0.73rem", color: "#5c7a66" }}>
                    {loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "#5c7a66", fontSize: "0.9rem", marginBottom: 24 }}>
            Trusted by 5000+ patients across Daltonganj and Palamu district
          </p>
          <button
            type="button"
            onClick={() => onNavigate("appointment")}
            data-ocid="reviews-book-btn"
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
            📅 Start Your Healing Journey
          </button>
        </div>
      </div>
        {/* ✅ SINGLE MODAL OUTSIDE */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "80%",
              maxWidth: "800px",
              background: "#000",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {/* Close */}
            <span
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 15,
                fontSize: "24px",
                color: "#fff",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ✕
            </span>

            {/* Dynamic Video */}
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        .test-card-hover:hover { transform: translateY(-4px) !important; box-shadow: 0 8px 32px rgba(13,107,59,0.13) !important; }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; }
      `}</style>
    </section>
    
  );
}
