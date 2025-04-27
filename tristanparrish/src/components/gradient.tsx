import React, { useEffect, useState } from "react";

export default function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  const gradientStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none", // no casting needed when typed this way
    background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0, 231, 255, 0.1), transparent 80%)`,
    zIndex: 1,
  };

  return <div style={gradientStyle}></div>;
}
