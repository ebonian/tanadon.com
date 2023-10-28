"use client";

import Header from "@/components/header";
import { usePathname } from "next/navigation";
import ToolsList from "./partials/tools-list";

export default function Tools(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-auto duration-300 ${
        pathname === "/tools" ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute z-10 top-0 left-0 right-0 bottom-0 space-y-5">
        <Header />
        <ToolsList />
      </div>
    </div>
  );
}
