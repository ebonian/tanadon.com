'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

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
            className={`grid h-24 select-none grid-cols-3 rounded-full duration-1000 ease-out ${
                absolute && 'absolute'
            } ${
                showOnPath
                    ? showOnPath === pathname
                        ? ''
                        : 'pointer-events-none opacity-0'
                    : ''
            }`}
        >
            <Link
                href="/"
                className={`relative flex h-full w-24 items-center justify-start rounded-full pl-9 text-white duration-300 ease-out ${
                    hideBack ? '' : 'group hover:bg-white/10 lg:hover:w-44'
                }`}
            >
                <FiArrowLeft className="text-2xl" />
                <span className="absolute left-20 hidden w-0 -translate-x-4 overflow-hidden text-lg font-medium duration-200 ease-out group-hover:w-20 group-hover:translate-x-0 group-hover:tracking-widest lg:inline">
                    back
                </span>
            </Link>
            <div className="flex w-full flex-col items-center justify-center">
                {title && (
                    <h1 className="text-xl font-semibold tracking-widest">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="text-xs text-white/40">{description}</p>
                )}
            </div>
        </div>
    );
}
