"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

import ProjectsList from "./partials/projects-list";
import Header from "@/components/header";

export default function Projects(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-y-auto duration-300 ${
        pathname === "/projects" ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute z-10 top-0 left-0 right-0 bottom-0 space-y-5">
        <Header title="projects" />
        <ProjectsList />
      </div>
    </div>
  );
}
