"use client";

import Gradient from "@/components/gradient/gradient";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Page({
  children,
  path,
  gradient,
  className = "",
}: {
  children: React.ReactNode;
  path: string | string[];
  gradient?: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-auto duration-300 ${
        pathname === path || (Array.isArray(path) && path.includes(pathname))
          ? ""
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={twMerge(
          "absolute z-10 top-0 left-0 right-0 bottom-0",
          className
        )}
      >
        {children}
      </div>
      {gradient && <Gradient dataJsDarkenTop />}
    </div>
  );
}
