import { useContext } from "react";
import { FiArrowDown, FiArrowLeft } from "react-icons/fi";
import { PortfolioContext } from "../../../pages/portfolio";
import Aspects from "./aspects";
import Cai from "./cai";
import Constructect from "./constructect";
import Doji from "./doji";
import Enneagram from "./enneagram";
import Personal from "./personal";
import Pps from "./pps";
import Recog from "./recog";
import Rood from "./rood";
import Zigma from "./zigma";

export default function ProjectDetail() {
  const { project, setProject, projectPage, setProjectPage } =
    useContext(PortfolioContext);
  return (
    <div
      className={`flex justify-center items-center left-0 h-screen w-full duration-300 ease-out text-white bg-portfolio-base-200 z-20 pt-20 px-5 sm:px-20 2xl:px-0 ${
        projectPage ? "absolute bottom-0" : "absolute -bottom-full"
      }`}
    >
      <div className="flex flex-col max-w-screen-xl flex-grow h-full">
        <div className="flex py-10 sm:pl-5 select-none">
          {/* navigation */}
          <div
            className="flex items-center cursor-pointer space-x-2 text-lg duration-300 hover:text-portfolio-primary hover:translate-y-2"
            onClick={() => {
              setProjectPage(false);
            }}
          >
            <FiArrowLeft className="block xl:hidden" />
            <FiArrowDown className="hidden xl:block" />
            <p>Back</p>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col items-center w-full h-full">
          {project.doji && <Doji />}
          {project.personal && <Personal />}
          {project.enneagram && <Enneagram />}
          {project.pps && <Pps />}
          {project.cai && <Cai />}
          {project.zigma && <Zigma />}
          {project.rood && <Rood />}
          {project.recog && <Recog />}
          {project.constructect && <Constructect />}
          {project.aspects && <Aspects />}
        </div>
      </div>
    </div>
  );
}
