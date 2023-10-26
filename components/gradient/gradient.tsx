"use client";

import { useEffect } from "react";
import { Gradient as GradientModule } from "./gradient-module.js";

export default function Gradient({
  dataJsDarkenTop = false,
  dataTransitionIn = true,
}: {
  dataJsDarkenTop?: boolean;
  dataTransitionIn?: boolean;
}): JSX.Element {
  useEffect(() => {
    const gradient = new GradientModule();
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      className="relative w-full h-full rounded-[48px]"
      data-js-darken-top={dataJsDarkenTop}
      data-transition-in={dataTransitionIn}
      id="gradient-canvas"
    />
  );
}
