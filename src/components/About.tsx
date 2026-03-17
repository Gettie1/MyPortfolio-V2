import DATA from "../data";
import AnimatedSection from "./AnimatedSection";

const STATS: [string, string][] = [
  ["1+", "Years Experience"],
  ["3+", "Projects Shipped"],
  ["2+", "Happy Clients"],
];

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>
      <AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#FF4D00", letterSpacing: "0.2em", marginBottom: "1rem" }}>
              01 — ABOUT
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "4rem", margin: "0 0 1.5rem", letterSpacing: "0.05em", lineHeight: 1 }}>
              Who I<br /><span style={{ color: "#FF4D00" }}>Actually</span> Am
            </h2>
            <p style={{ color: "#999", lineHeight: 1.9, fontSize: "1.05rem", fontWeight: 300 }}>{DATA.about}</p>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "1",
              background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
              border: "1px solid #222", position: "relative", overflow: "hidden",
              clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,77,0,0.15) 0%, transparent 60%)",
              }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
                {STATS.map(([num, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "3.5rem", color: "#FF4D00", lineHeight: 1 }}>{num}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#666", letterSpacing: "0.1em" }}>{label.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "60%", height: "60%", border: "1px solid #FF4D00", zIndex: -1, opacity: 0.3 }} />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
