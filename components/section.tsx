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
      className={twMerge("relative rounded-[48px] overflow-hidden", className)}
      style={
        screenHeight
          ? {
              height: "calc(100vh - 2.5rem)",
            }
          : {}
      }
    >
      {children}
    </section>
  );
}
