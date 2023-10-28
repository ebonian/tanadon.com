'use client';

import '@/styles/globals.css';
import '@/styles/hide-scroll-bar.css';
import '@/styles/gradient.css';

import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

import MenuCard from '@/components/hero/menu-card';
import Section from '@/components/section';

import Experiences from './experiences/page';
import Home from './page';
import Projects from './projects/page';
import Tools from './tools/page';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export default function RootLayout(): JSX.Element {
    const pathname = usePathname();

    return (
        <html lang="en">
            <head>
                <title>tanadon.</title>
            </head>
            <body className={poppins.className}>
                <main className="main relative overflow-hidden">
                    <div
                        className={`absolute bottom-5 left-5 right-5 top-5 snap-y overflow-y-auto rounded-[48px] ${
                            pathname === '/' ? 'space-y-5' : 'space-y-0'
                        }`}
                    >
                        <Section screenHeight>
                            <div className="absolute bottom-0 left-0 right-0 top-0">
                                <div
                                    className={`flex h-full w-full flex-col duration-300 ease-out ${
                                        pathname === '/'
                                            ? 'space-y-5'
                                            : 'space-y-0'
                                    }`}
                                >
                                    <div
                                        className={`relative w-full overflow-hidden rounded-[48px] duration-300 ease-out ${
                                            pathname === '/'
                                                ? 'h-[70%]'
                                                : 'h-[100%]'
                                        }`}
                                    >
                                        <div className="h-full w-full">
                                            <Home />
                                            <Experiences />
                                            <Projects />
                                            <Tools />
                                        </div>
                                    </div>
                                    <div
                                        className={`flex w-full flex-col justify-between space-y-5 rounded-[48px] duration-300 ease-out lg:flex-row lg:space-x-5 lg:space-y-0 ${
                                            pathname === '/'
                                                ? 'h-[45%] lg:h-[30%]'
                                                : 'h-0'
                                        }`}
                                    >
                                        <MenuCard
                                            description="my work experiences"
                                            href="/experiences"
                                            title="experiences"
                                        />
                                        <MenuCard
                                            description="since 2019"
                                            href="/projects"
                                            title="projects"
                                        />
                                        <MenuCard
                                            description="all about me"
                                            href="/about"
                                            title="about"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section
                            className={pathname === '/' ? 'h-[30%]' : 'h-0'}
                        >
                            <div className="flex h-full w-full flex-col space-y-5">
                                <div className="flex h-full w-full flex-col justify-between space-y-5 rounded-[48px] lg:flex-row lg:space-x-5 lg:space-y-0">
                                    <MenuCard
                                        description="coming very soon!"
                                        href="https://blog.tanadon.com"
                                        title="blogs"
                                    />
                                    <MenuCard
                                        description="all the tools you need"
                                        href="/tools"
                                        title="tools"
                                    />
                                </div>
                            </div>
                        </Section>
                        <Section
                            className={pathname === '/' ? 'h-[10%]' : 'h-0'}
                        >
                            <div className="flex h-full flex-col items-center justify-center text-center text-xs opacity-50">
                                © Tanadon Santisan
                            </div>
                        </Section>
                    </div>
                </main>
            </body>
        </html>
    );
}
