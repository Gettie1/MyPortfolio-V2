import { MouseEvent } from "react";
import DATA from "../data";
import AnimatedSection from "./AnimatedSection";

interface ContactProps {
  setHovering: (val: boolean) => void;
}

const SOCIAL_LINKS: [string, string][] = [
  ["GitHub", DATA.github],
  ["LinkedIn", DATA.linkedin],
];

export default function Contact({ setHovering }: ContactProps) {
  return (
    <section id="contact" style={{ padding: "8rem 3rem", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
      <AnimatedSection>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#FF4D00", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          05 — CONTACT
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem, 8vw, 7rem)", margin: "0 0 1rem", letterSpacing: "0.02em", lineHeight: 1 }}>
          Let's Build<br /><span style={{ color: "#FF4D00" }}>Something.</span>
        </h2>
        <p style={{ color: "#777", maxWidth: "480px", margin: "0 auto 3rem", lineHeight: 1.8, fontWeight: 300 }}>
          Got a project in mind? I'm always open to discussing new opportunities, collaborations, or just a good chat.
        </p>

        <a
          href={`mailto:${DATA.email}`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            display: "inline-block", padding: "1.1rem 3rem",
            background: "#FF4D00", color: "#fff", textDecoration: "none",
            fontFamily: "'Space Mono', monospace", fontSize: "0.85rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
            transition: "background 0.2s",
          }}
          onMouseOver={(e: MouseEvent<HTMLAnchorElement>) => ((e.target as HTMLAnchorElement).style.background = "#e03d00")}
          onMouseOut={(e: MouseEvent<HTMLAnchorElement>) => ((e.target as HTMLAnchorElement).style.background = "#FF4D00")}
        >
          Say Hello →
        </a>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "3rem" }}>
          {SOCIAL_LINKS.map(([label, url]) => (
            <a
              key={label}
              href={`https://${url}`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#555",
                textDecoration: "none", letterSpacing: "0.1em",
                borderBottom: "1px solid #333", paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseOver={(e: MouseEvent<HTMLAnchorElement>) => {
                const el = e.target as HTMLAnchorElement;
                el.style.color = "#FF4D00";
                el.style.borderColor = "#FF4D00";
              }}
              onMouseOut={(e: MouseEvent<HTMLAnchorElement>) => {
                const el = e.target as HTMLAnchorElement;
                el.style.color = "#555";
                el.style.borderColor = "#333";
              }}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
