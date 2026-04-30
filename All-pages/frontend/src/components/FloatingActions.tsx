import { useState } from "react";

const WA_NUMBER = "918210485109";
const CALL_NUMBER = "+916207962161";
const WA_MSG = encodeURIComponent("Hello Dr. Ritesh, I need a consultation.");

export default function FloatingActions() {
  const [hoveredCall, setHoveredCall] = useState(false);
  const [hoveredWa, setHoveredWa] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        right: 24,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
      data-ocid="floating-actions"
    >
      {/* Call Button */}
      <div style={{ position: "relative" }}>
        <a
          href={`tel:${CALL_NUMBER}`}
          aria-label="Call the clinic"
          data-ocid="fab-call"
          onMouseEnter={() => setHoveredCall(true)}
          onMouseLeave={() => setHoveredCall(false)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#4285F4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(66,133,244,0.4)",
            transition: "transform 0.3s, box-shadow 0.3s",
            transform: hoveredCall
              ? "scale(1.12) translateY(-2px)"
              : "scale(1)",
          }}
        >
          📞
        </a>
        {hoveredCall && (
          <span
            style={{
              position: "absolute",
              right: 70,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.75)",
              color: "white",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: 8,
              whiteSpace: "nowrap",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Call Us
          </span>
        )}
      </div>

      {/* WhatsApp Button */}
      <div style={{ position: "relative" }}>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp consultation"
          data-ocid="fab-whatsapp"
          onMouseEnter={() => setHoveredWa(true)}
          onMouseLeave={() => setHoveredWa(false)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
            transition: "transform 0.3s, box-shadow 0.3s",
            transform: hoveredWa ? "scale(1.12) translateY(-2px)" : "scale(1)",
          }}
        >
          💬
        </a>
        {hoveredWa && (
          <span
            style={{
              position: "absolute",
              right: 70,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.75)",
              color: "white",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "5px 10px",
              borderRadius: 8,
              whiteSpace: "nowrap",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            WhatsApp
          </span>
        )}
      </div>
    </div>
  );
}
