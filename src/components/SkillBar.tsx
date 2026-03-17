import { useInView } from "../hooks/useInView";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

export default function SkillBar({ name, level, delay }: SkillBarProps) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", color: "#ccc", letterSpacing: "0.02em" }}>
          {name}
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "#FF4D00" }}>
          {level}%
        </span>
      </div>
      <div style={{ height: "4px", background: "#1a1a1a", borderRadius: "2px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: inView ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #FF4D00, #FF8C42)",
            borderRadius: "2px",
            transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}
