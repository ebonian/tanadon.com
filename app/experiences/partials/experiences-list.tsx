import experiences from "@/data/experiences.json";

export default function ExperiencesList() {
  return (
    <div className="w-full grid gap-5">
      {experiences.map((experience, index) => (
        <div
          className="relative rounded-[48px] bg-white/10 h-48 overflow-hidden"
          key={index}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center px-14">
            <div>
              <h2 className="font-semibold text-2xl">
                {experience.organization}
              </h2>
              <p className="text-white/30 font-medium">{experience.position}</p>
            </div>
          </div>
          <p className="absolute z-10 -right-2.5 -bottom-6 text-9xl font-bold text-white/5 select-none">
            {experience.year}
          </p>
        </div>
      ))}
    </div>
  );
}
