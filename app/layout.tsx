"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import MenuCard from "../components/hero/menu-card";
import Section from "../components/section";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>tanadon.</title>
      </head>
      <body className={poppins.className}>
        <main className="relative h-screen overflow-hidden">
          <div
            className={`absolute rounded-[48px] overflow-y-auto snap-y top-5 left-5 right-5 bottom-5 ${
              pathname === "/" ? "space-y-5" : "space-y-0"
            }`}
          >
            <Section screenHeight>
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div
                  className={`flex flex-col w-full h-full duration-300 ease-out ${
                    pathname === "/" ? "space-y-5" : "space-y-0"
                  }`}
                >
                  <div
                    className={`relative w-full rounded-[48px] overflow-hidden duration-300 ease-out ${
                      pathname === "/" ? "h-[70%]" : "h-[100%]"
                    }`}
                  >
                    <div className="overflow-y-auto h-full w-full">
                      {children}
                    </div>
                  </div>
                  <div
                    className={`w-full rounded-[48px] flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5 duration-300 ease-out ${
                      pathname === "/" ? "h-[45%] lg:h-[30%]" : "h-0"
                    }`}
                  >
                    <MenuCard
                      description="my work experiences"
                      href="/experiences"
                      title="experiences"
                    />
                    <MenuCard
                      description="explore my projects since 2019"
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
            <Section className={pathname === "/" ? "h-[30%]" : "h-0"}>
              <div className="flex flex-col w-full h-full space-y-5">
                <div className="w-full h-full rounded-[48px] flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5">
                  <MenuCard
                    description="coming very soon!"
                    href="/"
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
            <Section className={pathname === "/" ? "h-[10%]" : "h-0"}>
              <div className="flex flex-col items-center justify-center text-center h-full text-xs opacity-50">
                © Tanadon Santisan
              </div>
            </Section>
          </div>
        </main>
      </body>
    </html>
  );
}
