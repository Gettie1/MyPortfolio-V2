import DATA from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#FF4D00", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          03 — EXPERIENCE
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "4rem", margin: "0 0 4rem", letterSpacing: "0.05em" }}>
          Where I've <span style={{ color: "#FF4D00" }}>Been</span>
        </h2>
      </AnimatedSection>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, #FF4D00, transparent)" }} />

        {DATA.experience.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div style={{ paddingLeft: "3rem", marginBottom: "4rem", position: "relative" }}>
              <div style={{
                position: "absolute", left: "-5px", top: "6px",
                width: "10px", height: "10px", borderRadius: "50%",
                background: "#FF4D00", boxShadow: "0 0 12px #FF4D00",
              }} />
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#555", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {exp.period}
              </div>
              <h3 style={{ margin: "0 0 0.3rem", fontSize: "1.4rem", fontWeight: 700 }}>{exp.role}</h3>
              <div style={{ color: "#FF4D00", fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", marginBottom: "0.8rem" }}>
                {exp.company}
              </div>
              <p style={{ color: "#888", lineHeight: 1.8, margin: 0, maxWidth: "600px", fontWeight: 300 }}>{exp.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
