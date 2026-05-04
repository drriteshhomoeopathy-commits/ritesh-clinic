import type { PageId } from "../app/pageTypes";

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

const WA_NUMBER = "918210485109";
const WA_MSG = encodeURIComponent("Hello Dr. Ritesh, I need a consultation.");
const CALL_NUMBER = "+918210485109";

export default function Contact({ onNavigate: _onNavigate }: ContactProps) {
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
          Find Us
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
          Contact &amp; Location
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
          We are here for you — visit us, call us or chat with us on WhatsApp.
          Natural healing is just a message away.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="contact-grid"
        >
          {/* Address card — clickable */}
          <a
            href="https://maps.app.goo.gl/93hGLixa1Z1YRpXN9?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact-card-address"
            className="contact-card-hover"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: 28,
              textAlign: "center",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "block",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                margin: "0 auto 16px",
              }}
            >
              📍
            </div>
            <h3
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Address
            </h3>
            <p
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Ranchi Road Redma, Near Honda Showroom,
              <br />
              Opposite Ola Showroom, Daltonganj
              <br />
              Palamu, Jharkhand – 822101
            </p>
          </a>

          {/* Phone / WhatsApp card */}
          <div
            data-ocid="contact-card-phone"
            className="contact-card-hover"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: 28,
              textAlign: "center",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                margin: "0 auto 16px",
              }}
            >
              📞
            </div>
            <h3
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Phone / WhatsApp
            </h3>
            <p
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <a
                href={`tel:${CALL_NUMBER}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                +91 8210485109
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  marginTop: 4,
                }}
              >
                WhatsApp: +91 8210485109
              </a>
            </p>
          </div>

          {/* Hours card */}
          <div
            data-ocid="contact-card-hours"
            className="contact-card-hover"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: 28,
              textAlign: "center",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                margin: "0 auto 16px",
              }}
            >
              ⏰
            </div>
            <h3
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Clinic Hours
            </h3>
            <p
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 600,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Monday – Saturday
              <br />
              9:00 AM – 3:00 PM
              <br />
              Sunday: 10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          style={{
            marginTop: 48,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.906!2d84.0850028!3d24.0318906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c77ce127717ad%3A0xf96b507b4bab3c87!2sDr.%20Ritesh%20clinic%20Homoeopathy!5e0!3m2!1sen!2sin!4v1710000000000"
            style={{
              width: "100%",
              height: 300,
              border: "none",
              display: "block",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location on Map"
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 44,
            flexWrap: "wrap",
          }}
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact-wa-cta"
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
              minWidth: 200,
              justifyContent: "center",
            }}
          >
            💬 WhatsApp Dr. Tiwary
          </a>
          <a
            href={`tel:${CALL_NUMBER}`}
            data-ocid="contact-call-cta"
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
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(255,255,255,0.2)",
              transition: "all 0.3s",
              minWidth: 200,
              justifyContent: "center",
            }}
          >
            📞 Call the Clinic
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
        .contact-card-hover:hover { background: rgba(255,255,255,0.18) !important; transform: translateY(-4px) !important; }
        .btn-wa-hover:hover { background: #20bd5c !important; transform: translateY(-2px) !important; }
        .btn-white-hover:hover { background: #f0faf5 !important; transform: translateY(-2px) !important; }
      `}</style>
    </section>
  );
}
