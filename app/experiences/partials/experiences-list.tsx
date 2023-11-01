import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import experiences from '@/data/experiences.json';

export default function ExperiencesList() {
    return (
        <div className="grid w-full gap-5">
            {experiences.map((experience, index) => (
                <Link
                    href={`/projects?organization=${experience.slug}`}
                    className="group relative h-48 overflow-hidden rounded-[48px] bg-white/10"
                    key={index}
                >
                    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-between space-x-6 px-10 lg:px-14">
                        <div>
                            <h2 className="text-2xl font-semibold">
                                {experience.organization}
                            </h2>
                            <p className="font-medium text-white/30">
                                {experience.position}
                            </p>
                        </div>
                        <div className="text-3xl2 lg:hidden">
                            <FiArrowRight />
                        </div>
                    </div>
                    <p className="absolute -bottom-6 -right-2.5 z-10 hidden select-none bg-gradient-to-r from-[#c3e4ff] to-[#b9beff] bg-clip-text text-9xl font-bold text-transparent opacity-0 duration-1000 ease-out group-hover:opacity-100 lg:inline">
                        {experience.year}
                    </p>
                    <p className="absolute -bottom-6 -right-2.5 z-10 select-none text-9xl font-bold text-white/[2%] opacity-100 duration-1000 ease-out lg:text-white/[3%] lg:group-hover:opacity-0">
                        {experience.year}
                    </p>
                </Link>
            ))}
        </div>
    );
}
