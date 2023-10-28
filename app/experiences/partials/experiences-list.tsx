import experiences from '@/data/experiences.json';

export default function ExperiencesList() {
    return (
        <div className="grid w-full gap-5">
            {experiences.map((experience, index) => (
                <div
                    className="relative h-48 overflow-hidden rounded-[48px] bg-white/10"
                    key={index}
                >
                    <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center px-14">
                        <div>
                            <h2 className="text-2xl font-semibold">
                                {experience.organization}
                            </h2>
                            <p className="font-medium text-white/30">
                                {experience.position}
                            </p>
                        </div>
                    </div>
                    <p className="absolute -bottom-6 -right-2.5 z-10 select-none text-9xl font-bold text-white/5">
                        {experience.year}
                    </p>
                </div>
            ))}
        </div>
    );
}
