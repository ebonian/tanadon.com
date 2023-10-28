import Link from 'next/link';

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
            className="group flex h-full w-full cursor-pointer select-none flex-col items-center justify-center space-y-1 overflow-hidden rounded-[48px] text-center duration-300 ease-out hover:bg-white/10"
            href={href}
        >
            <h2 className="text-2xl font-semibold tracking-wider opacity-95 duration-300 ease-out group-hover:tracking-widest group-hover:opacity-100 lg:text-xl">
                {title}
            </h2>
            <p className="w-56 text-sm opacity-40 duration-300 ease-in-out group-hover:opacity-60 lg:text-xs">
                {description}
            </p>
        </Link>
    );
}
