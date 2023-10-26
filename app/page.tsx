"use client";

import Gradient from "@/components/gradient/gradient";
import { usePathname } from "next/navigation";

export default function Home(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-auto duration-300 ${
        pathname === "/" || pathname === "/about"
          ? ""
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={
          "absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center select-none"
        }
      >
        <h1 className="font-semibold tracking-widest text-4xl">tanadon.</h1>
        <p>full-stack developer</p>
      </div>
      <Gradient dataJsDarkenTop />
    </div>
  );
}
