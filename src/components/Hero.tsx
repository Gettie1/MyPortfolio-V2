import { MouseEvent } from "react";
import DATA from "../data";

interface HeroProps {
  onNav: (section: string) => void;
  setHovering: (val: boolean) => void;
}

export default function Hero({ onNav, setHovering }: HeroProps) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(255,77,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,0,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* MAIN FLEX CONTAINER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT SIDE (TEXT) */}
        <div style={{ flex: "1 1 500px" }}>
          {/* Name */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              lineHeight: 0.9,
              marginTop: 40,
              marginBottom: 0,
              letterSpacing: "0.02em",
            }}
          >
            {DATA.name.split(" ").map((word, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  color: i === 1 ? "#FF4D00" : "#f0f0f0",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "1.2rem",
              color: "#888",
              maxWidth: "520px",
              marginTop: "2rem",
              lineHeight: 1.7,
            }}
          >
            {DATA.tagline}
          </p>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => onNav("Projects")}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                padding: "0.9rem 2.2rem",
                background: "#FF4D00",
                color: "#fff",
                border: "none",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                transition: "background 0.2s",
                width: "fit-content",
              }}
              onMouseOver={(e: MouseEvent<HTMLButtonElement>) =>
                ((e.target as HTMLButtonElement).style.background = "#e03d00")
              }
              onMouseOut={(e: MouseEvent<HTMLButtonElement>) =>
                ((e.target as HTMLButtonElement).style.background = "#FF4D00")
              }
            >
              View Work
            </button>

            <button
              onClick={() => onNav("Contact")}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{
                padding: "0.9rem 2.2rem",
                background: "transparent",
                color: "#f0f0f0",
                border: "1px solid #333",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                width: "fit-content",
              }}
              onMouseOver={(e: MouseEvent<HTMLButtonElement>) => {
                const btn = e.target as HTMLButtonElement;
                btn.style.borderColor = "#FF4D00";
                btn.style.color = "#FF4D00";
              }}
              onMouseOut={(e: MouseEvent<HTMLButtonElement>) => {
                const btn = e.target as HTMLButtonElement;
                btn.style.borderColor = "#333";
                btn.style.color = "#f0f0f0";
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/pp.jpeg"
            alt="Profile"
            style={{
              width: "clamp(180px, 25vw, 280px)",
              height: "auto",
              aspectRatio: "2 / 3",
              objectFit: "cover",
              borderRadius: "50% / 40%",
              border: "3px solid #FF4D00",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </section>
  );
}