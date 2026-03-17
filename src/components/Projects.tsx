import { MouseEvent } from "react";
import DATA from "../data";
import AnimatedSection from "./AnimatedSection";

interface ProjectsProps {
  setHovering: (val: boolean) => void;
}

export default function Projects({ setHovering }: ProjectsProps) {
  return (
    <section id="projects" style={{ padding: "8rem 3rem", background: "#070707" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "#FF4D00", letterSpacing: "0.2em", marginBottom: "1rem" }}>
            04 — PROJECTS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "4rem", margin: "0 0 4rem", letterSpacing: "0.05em" }}>
            Things I've <span style={{ color: "#FF4D00" }}>Built</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {DATA.projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                style={{
                  background: "#0d0d0d", border: "1px solid #1a1a1a",
                  padding: "2.5rem", position: "relative", overflow: "hidden",
                  cursor: "pointer", transition: "border-color 0.3s, transform 0.3s",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                }}
                onMouseOver={(e: MouseEvent<HTMLDivElement>) => {
                  const el = e.currentTarget;
                  el.style.borderColor = project.color;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e: MouseEvent<HTMLDivElement>) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#1a1a1a";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle at top right, ${project.color}18, transparent 70%)` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: project.color, letterSpacing: "0.15em", background: `${project.color}15`, padding: "0.3rem 0.7rem", border: `1px solid ${project.color}40` }}>
                    {project.tag.toUpperCase()}
                  </span>
                  <span style={{ color: "#333", fontSize: "1.2rem" }}>↗</span>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2rem", margin: "0 0 0.8rem", letterSpacing: "0.05em", color: "#f0f0f0" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 1.5rem", fontWeight: 300 }}>{project.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#555", border: "1px solid #222", padding: "0.25rem 0.6rem" }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: project.color, textDecoration: "none", fontFamily: "'Space Mono', monospace", fontSize: "0.9rem" }}>
                  Visit Project
                </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
