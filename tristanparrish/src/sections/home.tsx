import { useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import CursorGradient from "../components/gradient";

export default function Homepage() {
  const [selection, setSelection] = useState("Home");

  return (
    <section className="bg-neutral-900 relative">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CursorGradient />
      </div>
      <div className="grid md:grid-cols-2 z-20 relative">
        <div className="h-screen sticky top-0 flex justify-center items-center border-neutral-700 border-1">
          <Hero selection={selection} setSelection={setSelection} />
        </div>
        <div className="border-neutral-700 border-1">
          <Content selection={selection} />
        </div>
      </div>
    </section>
  );
}
