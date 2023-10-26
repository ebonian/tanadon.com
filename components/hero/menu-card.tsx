import Link from "next/link";

export default function MenuCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}): JSX.Element {
  return (
    <Link
      className="w-full h-full rounded-[48px] overflow-hidden hover:bg-white/10 cursor-pointer flex flex-col justify-center items-center text-center group space-y-1 duration-300 ease-out select-none"
      href={href}
    >
      <h2 className="font-semibold text-2xl lg:text-xl tracking-wider group-hover:tracking-widest duration-300 ease-out opacity-95 group-hover:opacity-100">
        {title}
      </h2>
      <p className="opacity-40 group-hover:opacity-60 duration-300 ease-in-out text-sm lg:text-xs w-56">
        {description}
      </p>
    </Link>
  );
}
