"use client";

import { usePathname } from "next/navigation";

export default function Projects(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-auto duration-300 ${
        pathname === "/projects" ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={"absolute z-10 top-0 left-0 right-0 bottom-0"}>
        <div className="h-full w-full grid place-content-center">projects</div>
        <div className="h-full w-full bg-white"></div>
      </div>
    </div>
  );
}
