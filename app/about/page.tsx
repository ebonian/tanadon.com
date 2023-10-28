'use client';

import { usePathname } from 'next/navigation';

import Gradient from '@/components/gradient/gradient';
import Header from '@/components/header';

export default function About(): JSX.Element {
    const pathname = usePathname();

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0 duration-300 ${
                pathname === '/'
                    ? 'overflow-hidden'
                    : pathname === '/about'
                    ? 'overflow-y-auto'
                    : 'pointer-events-none opacity-0'
            }`}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10">
                <Header absolute hideBack showOnPath="/about" />
                <div className="flex h-full w-full select-none flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold tracking-widest">
                        tanadon.
                    </h1>
                    <p>full-stack developer</p>
                </div>
                <div className="h-full w-full"></div>
            </div>
            <Gradient dataJsDarkenTop />
        </div>
    );
}
