import DATA from "../data";
import AnimatedSection from "./AnimatedSection";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 3rem", background: "#070707" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#FF4D00", letterSpacing: "0.2em", marginBottom: "1rem" }}>
            02 — SKILLS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "4rem", margin: "0 0 4rem", letterSpacing: "0.05em" }}>
            What I <span style={{ color: "#FF4D00" }}>Work With</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 6rem" }}>
          {DATA.skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
