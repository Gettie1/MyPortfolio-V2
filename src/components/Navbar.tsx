import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data";

interface NavbarProps {
  activeNav: string;
  onNav: (section: string) => void;
  setHovering: (val: boolean) => void;
}

export default function Navbar({ activeNav, onNav, setHovering }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 3rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.6rem", letterSpacing: "0.15em", color: "#FF4D00" }}>
        Getrude<span style={{ color: "#f0f0f0" }}>.dev</span>
      </div>
      <div style={{ display: "block"}}  >
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => onNav(item)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
              background: "none", border: "none",
              color: activeNav === item ? "#FF4D00" : "#888",
              fontFamily: "'Space Mono', monospace", fontSize: "0.78rem",
              letterSpacing: "0.1em", cursor: "pointer", textTransform: "uppercase",
              borderBottom: activeNav === item ? "1px solid #FF4D00" : "1px solid transparent",
              paddingBottom: "2px", transition: "color 0.2s",
            }}
          >
            {item}
          </button>
        ))}
        </div>
        
      </div>
    </nav>
  );
}
