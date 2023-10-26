import { twMerge } from "tailwind-merge";

export default function Section({
  children,
  className = "",
  screenHeight = false,
}: {
  children: React.ReactNode;
  className?: string;
  screenHeight?: boolean;
}): JSX.Element {
  return (
    <section
      className={twMerge(
        `${
          screenHeight ? "section" : ""
        } relative rounded-[48px] overflow-hidden`,
        className
      )}
    >
      {children}
    </section>
  );
}
