import "@/styles/globals.css";
import "@/styles/hide-scroll-bar.css";
import "@/styles/gradient.css";

import { Poppins } from "next/font/google";
import Home from "./page";
import Experiences from "./experiences/page";
import Main from "@/layouts/main";
import type { Metadata } from "next";
import Projects from "./projects/page";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tanadon.",
  description: "full-stack developer",
};

export default function RootLayout(): JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Main>
          <Home />
          <Experiences />
          <Projects />
        </Main>
      </body>
    </html>
  );
}
