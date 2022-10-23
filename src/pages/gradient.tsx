import { NextPage } from "next";
import { useEffect } from "react";
import { Gradient } from "../libs/Gradient";

const GradientPage: NextPage = () => {
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();

    // Call `initGradient` with the selector to your canvas
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative w-full">
      <div className="fixed w-full h-full grid place-content-center">
        <h1 className="text-white text-8xl font-poppins font-medium">Hello</h1>
        <canvas
          id="gradient-canvas"
          className="w-full h-screen absolute -z-10"
          data-transition-in
        />
      </div>
      <div className="min-h-screen w-full bg-black absolute top-[100vh]"></div>
    </div>
  );
};

export default GradientPage;
