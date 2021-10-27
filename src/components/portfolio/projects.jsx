import { useContext } from "react";
import { PortfolioContext } from "../../pages/portfolio";
import { Link } from "react-router-dom";
import Tag from "./tag";

export default function Projects() {
  const { project, setProject, projectPage, setProjectPage } =
    useContext(PortfolioContext);
  return (
    <div className="flex flex-col items-center sm:items-start space-y-8 sm:w-96 pr-4 sm:-mr-1">
      <WorkList
        name="Doji"
        year="2021"
        desc="A technical trading assistant platform for crypto traders."
        link="/portfolio/doji"
        onClick={() => {
          setProjectPage(true);
          setProject({ doji: true });
        }}
      >
        <Tag tag={{ programming: true, collaboration: true, business: true }} />
      </WorkList>
      <WorkList
        name="Enneagram"
        year="2021"
        desc="An Enneagram Online Exhibition"
        link="/portfolio/enneagram"
        onClick={() => {
          setProjectPage(true);
          setProject({ enneagram: true });
        }}
      >
        <Tag tag={{ programming: true }} />
      </WorkList>
      <WorkList
        name="PPS Renovation"
        year="2021"
        desc="Digitizing our school!"
        link="/portfolio/ppsrenovation"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ programming: true, collaboration: true }} />
      </WorkList>
      <WorkList
        name="CAI Project"
        year="2021"
        desc="Lorem Ipsum"
        link="/portfolio/cai"
        onClick={() => {
          setProjectPage(true);
        }}
      />
      <WorkList
        name="Zigma"
        year="2020-2021"
        desc="The complete all in one application for money management."
        link="/portfolio/zigma"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ programming: true, collaboration: true }} />
      </WorkList>
      <WorkList
        name="Emotion Recognition"
        year="2021"
        desc="Emotion Detection from face with Tensorflow and OpenCV."
        link="/portfolio/emorecog"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ programming: true }} />
      </WorkList>
      <WorkList
        name="Rood"
        year="2019"
        desc="The application to get rid of your credit card debt."
        link="/portfolio/rood"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ programming: true, collaboration: true, business: true }} />
      </WorkList>
      <WorkList
        name="Constructect"
        year="2018"
        desc="The Universal Designed Home for Disabled & Eldery."
        link="/portfolio/constructect"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ collaboration: true, media: true }} />
      </WorkList>
      <WorkList
        name="The Aspects"
        year="2020"
        desc="Lorem Ipsum"
        link="/portfolio/aspects"
        onClick={() => {
          setProjectPage(true);
        }}
      >
        <Tag tag={{ media: true }} />
      </WorkList>
    </div>
  );
}

function WorkList({ name, year, desc, link, onClick, children }) {
  const { project, setProject, projectPage, setProjectPage } =
    useContext(PortfolioContext);
  return (
    <>
      <div
        className="flex flex-col space-y-4 group cursor-pointer"
        onClick={onClick}
      >
        <div
          className={`h-28 w-80 rounded-2xl cursor-pointer bg-cover bg-no-repeat ${
            (name === "Doji" && "bg-doji") ||
            (name === "Enneagram" && "bg-enneagram") ||
            (name === "Zigma" && "bg-zigma") ||
            (name === "Rood" && "bg-rood")
          }`}
        >
          <div className="flex justify-end items-end py-2 px-4 h-full w-full bg-white rounded-2xl duration-200 bg-opacity-0 hover:bg-opacity-30"></div>
        </div>
        <div className="space-y-2 w-80 cursor-pointer">
          <h1 className="font-semibold text-xl group-hover:text-portfolio-primary duration-300">
            {name}
            <span className="text-lg">
              {"  | "}
              {year}
            </span>
          </h1>
          <p>{desc}</p>
        </div>
        {children}
      </div>
    </>
  );
}
