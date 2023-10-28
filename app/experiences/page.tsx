'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/header';

import ExperiencesList from './partials/experiences-list';

export default function Experiences(): JSX.Element {
    const pathname = usePathname();

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0 overflow-y-auto duration-300 ${
                pathname === '/experiences'
                    ? ''
                    : 'pointer-events-none opacity-0'
            }`}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 space-y-4">
                <Header />
                <ExperiencesList />
            </div>
        </div>
    );
}
