import { useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

export default function Homepage() {
  const [selection, setSelection] = useState("Home");

  return (
    <section className="bg-neutral-900 grid md:grid-cols-2">
      <div className="h-screen sticky top-0 flex justify-center items-center">
        <Hero selection={selection} setSelection={setSelection} />
      </div>
      <Content selection={selection} />
    </section>
  );
}
