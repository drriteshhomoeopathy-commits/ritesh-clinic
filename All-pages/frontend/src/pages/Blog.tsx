import { useState } from "react";
import type { PageId } from "../app/pageTypes";

interface BlogProps {
  onNavigate: (page: PageId) => void;
}

const BLOG_POSTS = [
  {
    id: "hair-fall",
    videoId: "tC-WNBI1Y0M",
    icon: "",
    tag: "Hair Care",
    title: "Best Homeopathy Treatment for Hair Fall in Daltonganj",
    date: "March 2024",
    readTime: "5 min read",
    summary:
      "Hair fall is a common problem affecting both men and women. At Dr. Ritesh Homoeopathic Clinic, we provide natural and effective treatment for hair fall without any side effects.",
    content: `Hair fall is a common problem affecting both men and women. At Dr. Ritesh Homoeopathic Clinic, we provide natural and effective treatment for hair fall without any side effects. Homeopathy works by treating the root cause such as stress, hormonal imbalance, or nutritional deficiency. Unlike chemical treatments, it ensures long-term results. If you are facing hair loss, visit the best homoeopathy doctor in Daltonganj for safe and permanent solution.

**Why Does Hair Fall Happen?**
- Hormonal imbalances (thyroid, PCOD)
- Nutritional deficiencies (iron, B12, zinc)
- Chronic stress and anxiety
- Scalp infections and dandruff
- Autoimmune conditions (Alopecia Areata)
- Post-pregnancy hair loss

**How Homeopathy Helps**
Homeopathic medicines like Thuja, Natrum Mur, Lycopodium, Phosphorus and Silicea work by addressing the underlying constitutional imbalance. Our approach involves a thorough case-taking session to understand your unique triggers, lifestyle, and health history — then prescribing a personalized remedy.

**Results You Can Expect**
Most patients notice a significant reduction in hair fall within 6–8 weeks, with visible new growth appearing within 3–4 months. Unlike minoxidil or finasteride, homeopathic treatment has no side effects and does not require lifelong use.

Dr. Ritesh Kumar Tiwary (BHMS, MD Homeopathy) has treated over 500 cases of hair fall with a 90%+ success rate. If you're struggling with hair loss, book a consultation today.`,
  },
  {
    id: "skin",
    videoId: "brIbYr6ph2M",
    icon: "",
    tag: "Skin Health",
    title: "Permanent Treatment for Skin Diseases with Homeopathy",
    date: "February 2024",
    readTime: "6 min read",
    summary:
      "Skin problems like acne, eczema, and psoriasis can affect confidence. Homeopathy offers gentle and effective treatment by improving internal health.",
    content: `Skin problems like acne, eczema, and psoriasis can affect confidence. Homeopathy offers gentle and effective treatment by improving internal health. At Dr. Ritesh Clinic, patients receive customized treatment based on their body type and symptoms.

**Common Skin Conditions We Treat**
- Psoriasis (plaque, guttate, pustular)
- Atopic Dermatitis / Eczema
- Vitiligo (white patches)
- Acne Vulgaris and Rosacea
- Urticaria (hives) and Angioedema
- Lichen Planus
- Seborrheic Dermatitis

**The Homeopathic Approach**
Skin diseases are rarely just skin problems — they reflect deeper imbalances in the immune and endocrine systems. Dr. Tiwary uses classical constitutional prescribing to identify the core disturbance and select a remedy that stimulates healing from within.

Key remedies include Arsenicum Album, Sulphur, Graphites, Sepia, Mercurius and many others — chosen based on your unique symptom picture, not just the diagnosis.

**A Patient Story**
Arun Kumar Singh, 34, came to us with severe psoriasis covering 40% of his body. After 6 months of constitutional treatment, 90% of his skin cleared. Today, he is psoriasis-free and has been off all medication for 2 years.

If you have been told your skin disease is 'chronic' or 'incurable', we invite you to experience the difference that truly individualized homeopathic care can make.`,
  },
  {
    id: "homeopathy-vs-allopathy",
    icon: " ",
    videoId: "brIbYr6ph2M",

    tag: "Homeopathy Explained",
    title: "Why Choose Homeopathy Over Allopathy?",
    date: "January 2024",
    readTime: "7 min read",
    summary:
      "No side effects, Natural healing, Treats root cause, Safe for children and adults. Homeopathy is becoming the first choice for patients looking for safe and long-term treatment.",
    content: `No side effects, Natural healing, Treats root cause, Safe for children and adults. Homeopathy is becoming the first choice for patients looking for safe and long-term treatment.

**What Allopathy Does Well**
Conventional medicine excels in emergencies, acute infections, surgery and laboratory diagnostics. If you have a bacterial infection, a broken bone, or need surgery — allopathy is the right choice.

**Where Homeopathy Shines**
Homeopathy is particularly powerful for:
- Chronic and recurrent conditions (allergies, migraines, eczema, arthritis)
- Autoimmune disorders
- Conditions where conventional medicine only manages symptoms
- Cases where steroid dependency has become a problem
- Pediatric health without side effects
- Hormonal imbalances and PCOD

**Key Advantages of Homeopathy**
- No Side Effects — Medicines are prepared in nanodoses, stimulating the body's own healing response without toxicity
- Treats the Root Cause — Identifies and corrects the underlying constitutional imbalance instead of suppressing symptoms
- Individualized Treatment — Two people with psoriasis may need completely different remedies based on unique triggers
- Safe for All Ages — Suitable for newborns, pregnant women, elderly and those with multiple health conditions
- No Drug Dependency — Treatment aims to restore self-healing capacity so that medicines are no longer needed

At Ritesh Homeopathic Clinic, Dr. Tiwary always advises patients clearly about which conditions are best managed with conventional medicine and which respond better to homeopathy.`,
  },
];

export default function Blog({ onNavigate }: BlogProps) {
  const [activePost, setActivePost] = useState<string | null>(null);
  const post = BLOG_POSTS.find((p) => p.id === activePost);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <section
      style={{ padding: "80px 24px", background: "white", marginTop: 70 }}
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
          Health Articles
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
          Latest from Our <span style={{ color: "#0d6b3b" }}>Blog</span>
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
          Evidence-based insights on homeopathy, natural healing and common
          health conditions treated at our clinic.
        </p>

        {!activePost ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
            className="blog-grid"
          >
            {BLOG_POSTS.map(
              ({ id, icon, tag, videoId, title, date, readTime, summary }) => (
                <button
                  key={id}
                  type="button"

                  data-ocid={`blog-card-${id}`}
                  className="blog-card-hover"
                  style={{
                    background: "white",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(13,107,59,0.12)",
                    boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    textAlign: "left",
                    fontFamily: "'Poppins', sans-serif",
                    padding: 0,
                  }}
                >
                  <div onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(videoId);
                  }}
                    style={{
                      position: "relative",
                      height: 280,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {/* YouTube Background Video */}
                    {id === "hair-fall" ? (
                      <img
                        src="/assets/images/clinic-billboard-night.jpg"
                        alt="hair-fall"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "130%",
                          height: "130%",
                          transform: "translate(-50%, -50%)",
                          objectFit: "cover",
                          pointerEvents: "none",
                        }}
                      />

                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                        }}
                      />
                    )}
                    {id === "skin" ? (
                      <img
                        src="/assets/images/clinic-medicine-shelf.jpg"
                        alt="skin"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "130%",
                          height: "130%",
                          transform: "translate(-50%, -50%)",
                          objectFit: "cover",
                          pointerEvents: "none",
                        }}
                      />

                    ) : (
                      <div
                        style={{
                          position: "relative",
                          inset: 0,
                          background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                        }}
                      />
                    )}
                     {id === "homeopathy-vs-allopathy" ? (
                      <img
                        src="/assets/images/clinic-reception.jpg"
                        alt="homeopathy-vs-allopathy"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "130%",
                          height: "130%",
                          transform: "translate(-50%, -50%)",
                          objectFit: "cover",
                          pointerEvents: "none",
                        }}
                      />

                    ) : (
                      <div
                        style={{
                          position: "relative",
                          inset: 0,
                          background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                        }}
                      />
                    )}
                    {id === "hair-fall" && (
                      <div
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
                        {/* Play Icon */}
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
                     {id === "skin" && (
                      <div
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
                        {/* Play Icon */}
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
                     {id === "homeopathy-vs-allopathy" && (
                      <div
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
                        {/* Play Icon */}
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
                    {/* Overlay */}
                    {id === "hair-fall" && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0,0,0,0.4)",
                        }}
                      />
                    )}
                     {id === "skin" && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0,0,0,0.4)",
                        }}
                      />
                    )}
                     {id === "homeopathy-vs-allopathy" && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0,0,0,0.4)",
                        }}
                      />
                    )}
                    {/* Icon */}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontSize: "2.5rem",
                        color: id === "hair-fall" ? "white" : "inherit",
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        fontSize: "2.5rem",
                        color: id === "skin" ? "white" : "inherit",
                      }}
                    >
                      {icon}
                    </span>
                  </div>
                  <div onClick={() => setActivePost(id)} style={{ padding: "20px 24px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(13,107,59,0.08)",
                          color: "#0d6b3b",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: 100,
                        }}
                      >
                        {tag}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "#5c7a66" }}>
                        {date} · {readTime}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#0f2318",
                        marginBottom: 10,
                        lineHeight: 1.4,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#5c7a66",
                        lineHeight: 1.7,
                        margin: "0 0 16px",
                      }}
                    >
                      {summary}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#0d6b3b",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      Read Full Article →
                    </span>
                  </div>

                </button>

              ),

            )

            }
          </div>

        ) : post ? (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <button
              type="button"
              onClick={() => setActivePost(null)}
              data-ocid="blog-back-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "none",
                border: "1px solid rgba(13,107,59,0.2)",
                color: "#0d6b3b",
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                marginBottom: 32,
              }}
            >
              ← Back to Blog
            </button>
            <div
              style={{
                background: "white",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
                border: "1px solid rgba(13,107,59,0.12)",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #f0faf5, #d4f4e3)",
                  padding: "48px 40px 32px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>
                  {post.icon}
                </div>
                <span
                  style={{
                    background: "rgba(13,107,59,0.08)",
                    color: "#0d6b3b",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                  }}
                >
                  {post.tag}
                </span>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    color: "#0f2318",
                    marginTop: 16,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h1>
                <span style={{ fontSize: "0.78rem", color: "#5c7a66" }}>
                  {post.date} · {post.readTime}
                </span>
              </div>
              <div style={{ padding: "36px 40px" }}>
                {post.content.split("\n\n").map((para) => {
                  const paraKey = para.slice(0, 40);
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return (
                      <h3
                        key={paraKey}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.1rem",
                          color: "#0f2318",
                          margin: "28px 0 12px",
                        }}
                      >
                        {para.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (para.startsWith("- ")) {
                    const items = para
                      .split("\n")
                      .filter((l) => l.startsWith("- "));
                    return (
                      <ul
                        key={paraKey}
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 16px",
                        }}
                      >
                        {items.map((item) => (
                          <li
                            key={item}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              color: "#2d4a38",
                              fontSize: "0.9rem",
                              marginBottom: 8,
                              padding: "8px 12px",
                              background: "#f0faf5",
                              borderRadius: 8,
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
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={paraKey}
                      style={{
                        color: "#5c7a66",
                        fontSize: "0.92rem",
                        lineHeight: 1.9,
                        marginBottom: 16,
                      }}
                    >
                      {para.replace(/\*\*/g, "")}
                    </p>
                  );
                })}
                <div
                  style={{
                    background: "#f0faf5",
                    borderRadius: 16,
                    padding: 24,
                    marginTop: 32,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#0f2318",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      marginBottom: 16,
                    }}
                  >
                    Ready to experience natural healing? Book a consultation
                    with Dr. Ritesh Kumar Tiwary.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="https://wa.me/918210485109?text=Hello%20Dr.%20Ritesh%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="blog-wa-cta"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#25D366",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: 12,
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                      }}
                    >
                      💬 Book via WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setActivePost(null);
                        onNavigate("appointment");
                      }}
                      data-ocid="blog-book-cta"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#0d6b3b",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: 12,
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      📅 Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

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
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr !important; } }
        .blog-card-hover:hover { transform: translateY(-6px) !important; box-shadow: 0 12px 40px rgba(13,107,59,0.15) !important; }
      `}</style>
    </section>
  );
}
