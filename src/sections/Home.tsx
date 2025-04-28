import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import CursorGradient from "../components/gradient";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Homepage() {
  const [selection, setSelection] = useState("Home");
  const [isSinglePage, setIsSinglePage] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSinglePage(window.innerWidth <= 1280);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-neutral-900 relative">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CursorGradient />
      </div>
      <div className="grid xl:grid-cols-2 z-20 relative">
        <div
          className={`h-screen ${
            !isSinglePage ? "xl:sticky top-0" : ""
          } flex justify-center items-center border-neutral-700 border-1`}
        >
          <Hero
            selection={selection}
            setSelection={setSelection}
            isMobile={isSinglePage}
          />
        </div>
        <div className="border-neutral-700 border-1">
          <Content selection={selection} isMobile={isSinglePage} />
        </div>
      </div>
      <SpeedInsights />
    </section>
  );
}
