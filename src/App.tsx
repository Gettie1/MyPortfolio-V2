import { useState, useEffect } from "react";
import DATA from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

interface CursorPos {
  x: number;
  y: number;
}

export default function App() {
  const [activeNav, setActiveNav] = useState<string>("About");
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: -100, y: -100 });
  const [hovering, setHovering] = useState<boolean>(false);

  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id: string): void => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#f0f0f0", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap" rel="stylesheet" />

      {/* Custom cursor */}
      <div style={{
        position: "fixed", top: cursorPos.y - 10, left: cursorPos.x - 10,
        width: 20, height: 20, borderRadius: "50%",
        background: hovering ? "#FF4D00" : "transparent",
        border: "2px solid #FF4D00",
        pointerEvents: "none", zIndex: 9999,
        transition: "width 0.2s, height 0.2s, background 0.2s, top 0.05s, left 0.05s",
        transform: hovering ? "scale(2)" : "scale(1)",
      }} />

      <Navbar activeNav={activeNav} onNav={scrollTo} setHovering={setHovering} />
      <Hero onNav={scrollTo} setHovering={setHovering} />
      <About />
      <Skills />
      <Experience />
      <Projects setHovering={setHovering} />
      <Contact setHovering={setHovering} />

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #111", padding: "2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#333" }}>© 2026 {DATA.name}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#333" }}>FULL-STACK DEVELOPER</span>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #FF4D00; }
      `}</style>
    </div>
  );
}
