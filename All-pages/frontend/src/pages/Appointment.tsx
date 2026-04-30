import { useState } from "react";
import type { PageId } from "../app/pageTypes";

interface AppointmentProps {
  onNavigate: (page: PageId) => void;
}

const WA_NUMBER = "918210485109";
const CALL_NUMBER = "+916207962161";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function Appointment({
  onNavigate: _onNavigate,
}: AppointmentProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const waText = `Hello Dr. Ritesh,\n\n📋 New Appointment Request\n━━━━━━━━━━━━━━━━\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}${form.email ? `\n📧 Email: ${form.email}` : ""}\n🩺 Concern: ${form.service || "Not specified"}\n💬 Message: ${form.message || "No additional message"}\n━━━━━━━━━━━━━━━━\nSent from Ritesh Homeopathic Clinic website`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`,
      "_blank",
    );
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid rgba(13,107,59,0.12)",
    borderRadius: 12,
    background: "white",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.88rem",
    color: "#0f2318",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#2d4a38",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };

  return (
    <section
      style={{ padding: "80px 24px", background: "white", marginTop: 70 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 56,
            alignItems: "start",
          }}
          className="appt-grid"
        >
          {/* Info */}
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
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                color: "#0f2318",
                marginBottom: 16,
              }}
            >
              Book Your Consultation Today
            </h2>
            <p
              style={{
                color: "#5c7a66",
                fontSize: "0.92rem",
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Take the first step towards natural healing. Fill in the form and
              we will confirm your appointment via WhatsApp. You can also reach
              us directly by phone.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href={`tel:${CALL_NUMBER}`}
                data-ocid="appt-call-chip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#f0faf5",
                  borderRadius: 14,
                  padding: "16px 18px",
                  border: "1px solid rgba(13,107,59,0.12)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                className="contact-chip-hover"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#4285F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}
                >
                  📞
                </div>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#0f2318",
                      fontWeight: 600,
                    }}
                  >
                    Call Us Directly
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "#5c7a66" }}>
                    +91 6207962161 · Mon–Sat 9AM–7PM
                  </span>
                </div>
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Dr. Ritesh, I want to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="appt-wa-chip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#f0faf5",
                  borderRadius: 14,
                  padding: "16px 18px",
                  border: "1px solid rgba(13,107,59,0.12)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                className="contact-chip-hover"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#25D366",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}
                >
                  💬
                </div>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#0f2318",
                      fontWeight: 600,
                    }}
                  >
                    WhatsApp Consultation
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "#5c7a66" }}>
                    Message us for quick response
                  </span>
                </div>
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  background: "#f0faf5",
                  borderRadius: 14,
                  padding: "16px 18px",
                  border: "1px solid rgba(13,107,59,0.12)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#0d6b3b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}
                >
                  ⏰
                </div>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#0f2318",
                      fontWeight: 600,
                    }}
                  >
                    Clinic Hours
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "#5c7a66" }}>
                    Mon–Sat: 9AM–7PM &nbsp;|&nbsp; Sun: 10AM–2PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "#f0faf5",
              borderRadius: 24,
              padding: 36,
              border: "1px solid rgba(13,107,59,0.12)",
              boxShadow: "0 8px 32px rgba(13,107,59,0.13)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                color: "#0f2318",
                marginBottom: 24,
              }}
            >
              📋 Appointment Request Form
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 18,
              }}
              className="form-row"
            >
              <div>
                <label style={labelStyle} htmlFor="f-name">
                  Your Name *
                </label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  data-ocid="form-name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name
                      ? "#e53e3e"
                      : "rgba(13,107,59,0.12)",
                  }}
                />
                {errors.name && (
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#e53e3e",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label style={labelStyle} htmlFor="f-phone">
                  Phone Number *
                </label>
                <input
                  id="f-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  data-ocid="form-phone"
                  style={{
                    ...inputStyle,
                    borderColor: errors.phone
                      ? "#e53e3e"
                      : "rgba(13,107,59,0.12)",
                  }}
                />
                {errors.phone && (
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#e53e3e",
                      marginTop: 4,
                      display: "block",
                    }}
                  >
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle} htmlFor="f-email">
                Email Address
              </label>
              <input
                id="f-email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                data-ocid="form-email"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle} htmlFor="f-service">
                Health Concern
              </label>
              <select
                id="f-service"
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                data-ocid="form-service"
                style={{ ...inputStyle, resize: undefined }}
              >
                <option value="">Select condition / service</option>
                <option>Skin Disorder (Eczema, Psoriasis, Acne, etc.)</option>
                <option>Hair Problems (Hair Fall, Alopecia, etc.)</option>
                <option>Allergy / Asthma</option>
                <option>Migraine / Headache</option>
                <option>Child Care</option>
                <option>Chronic Disease (Diabetes, Thyroid, etc.)</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle} htmlFor="f-msg">
                Message / Symptoms
              </label>
              <textarea
                id="f-msg"
                placeholder="Briefly describe your symptoms or health concern..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                data-ocid="form-message"
                style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              data-ocid="form-submit"
              className="btn-primary-hover"
              style={{
                width: "100%",
                background: "#0d6b3b",
                color: "white",
                border: "none",
                padding: 14,
                borderRadius: 12,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 20px rgba(13,107,59,0.3)",
              }}
            >
              Send Appointment Request 📨
            </button>
            <p
              style={{
                textAlign: "center",
                marginTop: 12,
                fontSize: "0.72rem",
                color: "#5c7a66",
              }}
            >
              Your information is 100% private and confidential. We will respond
              within a few hours.
            </p>
            {submitted && (
              <div
                style={{
                  background: "#f0faf5",
                  border: "1px solid #25a563",
                  color: "#0d6b3b",
                  borderRadius: 12,
                  padding: 16,
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  marginTop: 12,
                }}
              >
                ✅ Thank you! Your appointment request has been sent via
                WhatsApp. We will contact you shortly.
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .appt-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 768px) { .form-row { grid-template-columns: 1fr !important; } }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; box-shadow: 0 8px 28px rgba(13,107,59,0.4) !important; }
        .contact-chip-hover:hover { background: #d4f4e3 !important; transform: translateX(4px) !important; }
        input:focus, select:focus, textarea:focus { border-color: #25a563 !important; box-shadow: 0 0 0 3px rgba(37,165,99,0.1) !important; }
      `}</style>
    </section>
  );
}
