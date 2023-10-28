'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

import Header from '@/components/header';

import ProjectsList from './partials/projects-list';

export default function Projects(): JSX.Element {
    const pathname = usePathname();

    return (
        <div
            className={`absolute bottom-0 left-0 right-0 top-0 overflow-y-auto duration-300 ${
                pathname === '/projects' ? '' : 'pointer-events-none opacity-0'
            }`}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 space-y-5">
                <Header />
                <ProjectsList />
            </div>
        </div>
    );
}
