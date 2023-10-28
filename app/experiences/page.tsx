"use client";

import Header from "@/components/header";
import { usePathname } from "next/navigation";
import ExperiencesList from "./partials/experiences-list";

export default function Experiences(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-auto duration-300 ${
        pathname === "/experiences" ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute z-10 top-0 left-0 right-0 bottom-0 space-y-4">
        <Header />
        <ExperiencesList />
      </div>
    </div>
  );
}
