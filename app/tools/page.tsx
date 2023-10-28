'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/header';

import ToolsList from './partials/tools-list';

export default function Tools(): JSX.Element {
    const pathname = usePathname();

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0 overflow-y-auto duration-300 ${
                pathname === '/tools' ? '' : 'pointer-events-none opacity-0'
            }`}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 space-y-5">
                <Header />
                <ToolsList />
            </div>
        </div>
    );
}
