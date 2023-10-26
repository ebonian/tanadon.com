"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function Header({
  title,
  description,
  absolute = false,
  hideBack = false,
  showOnPath,
}: {
  title?: string;
  description?: string;
  absolute?: boolean;
  hideBack?: boolean;
  showOnPath?: string;
}): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={`h-24 rounded-full grid grid-cols-3 duration-1000 ease-out ${
        absolute && "absolute"
      } ${
        showOnPath
          ? showOnPath === pathname
            ? ""
            : "opacity-0 pointer-events-none"
          : ""
      }`}
    >
      <Link
        href="/"
        className={`relative rounded-full w-24 h-full text-white flex justify-start items-center text-2xl ease-out duration-300 pl-9 ${
          hideBack ? "" : "group hover:w-[184px] hover:bg-white/10"
        }`}
      >
        <FiArrowLeft />
        <span className="absolute left-20 duration-200 -translate-x-4 group-hover:translate-x-0 w-0 group-hover:w-20 ease-out overflow-hidden font-medium group-hover:tracking-widest">
          back
        </span>
      </Link>
      <div className="w-full flex flex-col justify-center items-center">
        {title && <h1 className="font-semibold tracking-widest">{title}</h1>}
        {description && <p className="text-xs text-white/40">{description}</p>}
      </div>
    </div>
  );
}
