"use client"

import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import Not from "./Not";

export default function Home() {

  const [not, setNot] = useState<number>(0);
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-neutral-200">
      <Not not={not} setNot={setNot} />
      <Keyboard not={not} setNot={setNot} />
    </section>
  );
}
