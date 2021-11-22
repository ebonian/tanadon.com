import { useContext } from "react";
import { PortfolioContext } from "../../pages/portfolio";
import { Link } from "react-router-dom";
import Tag from "./tag";
import { data } from "../../static/index";

export default function Projects() {
  const { project, setProject, projectPage, setProjectPage, lang } =
    useContext(PortfolioContext);
  return (
    <div className="flex flex-col items-center sm:items-start space-y-8 sm:w-96 pr-4 sm:-mr-1 select-none top-0 pb-14">
      <WorkList
        name={
          lang === "en" ? data.project.doji.title : data.project.doji.th.title
        }
        description={
          lang === "en"
            ? data.project.doji.description
            : data.project.doji.th.description
        }
        year={data.project.doji.year}
        onClick={() => {
          setProjectPage(true);
          setProject({ doji: true });
        }}
      >
        <Tag
          tag={lang === "en" ? data.project.doji.tag : data.project.doji.th.tag}
        />
      </WorkList>
      <WorkList
        name={
          lang === "en"
            ? data.project.personal.title
            : data.project.personal.th.title
        }
        description={
          lang === "en"
            ? data.project.personal.description
            : data.project.personal.th.description
        }
        year={data.project.personal.year}
        link="/portfolio/personal"
        onClick={() => {
          setProjectPage(true);
          setProject({ personal: true });
        }}
      >
        <Tag
          tag={
            lang === "en"
              ? data.project.personal.tag
              : data.project.personal.th.tag
          }
        />
      </WorkList>
      <WorkList
        name={
          lang === "en"
            ? data.project.enneagram.title
            : data.project.enneagram.th.title
        }
        description={
          lang === "en"
            ? data.project.enneagram.description
            : data.project.enneagram.th.description
        }
        year={data.project.enneagram.year}
        link="/portfolio/enneagram"
        onClick={() => {
          setProjectPage(true);
          setProject({ enneagram: true });
        }}
      >
        <Tag
          tag={
            lang === "en"
              ? data.project.enneagram.tag
              : data.project.enneagram.th.tag
          }
        />
      </WorkList>
      <WorkList
        name={
          lang === "en" ? data.project.pps.title : data.project.pps.th.title
        }
        description={
          lang === "en"
            ? data.project.pps.description
            : data.project.pps.th.description
        }
        year={data.project.pps.year}
        link="/portfolio/ppsrenovation"
        onClick={() => {
          setProjectPage(true);
          setProject({ pps: true });
        }}
      >
        <Tag
          tag={lang === "en" ? data.project.pps.tag : data.project.pps.th.tag}
        />
      </WorkList>
      <WorkList
        name={
          lang === "en" ? data.project.cai.title : data.project.cai.th.title
        }
        description={
          lang === "en"
            ? data.project.cai.description
            : data.project.cai.th.description
        }
        year={data.project.cai.year}
        link="/portfolio/cai"
        onClick={() => {
          setProjectPage(true);
          setProject({ cai: true });
        }}
      >
        <Tag
          tag={lang === "en" ? data.project.cai.tag : data.project.cai.th.tag}
        />
      </WorkList>
      <WorkList
        name={data.project.zigma.title}
        description={data.project.zigma.description}
        year={data.project.zigma.year}
        link="/portfolio/zigma"
        onClick={() => {
          setProjectPage(true);
          setProject({ zigma: true });
        }}
      >
        <Tag tag={data.project.zigma.tag} />
      </WorkList>
      <WorkList
        name={data.project.rood.title}
        description={data.project.rood.description}
        year={data.project.rood.year}
        link="/portfolio/rood"
        onClick={() => {
          setProjectPage(true);
          setProject({ rood: true });
        }}
      >
        <Tag tag={data.project.rood.tag} />
      </WorkList>
      <WorkList
        name={data.project.recog.title}
        description={data.project.recog.description}
        year={data.project.recog.year}
        link="/portfolio/emorecog"
        onClick={() => {
          setProjectPage(true);
          setProject({ recog: true });
        }}
      >
        <Tag tag={data.project.recog.tag} />
      </WorkList>
      <WorkList
        name={data.project.constructect.title}
        description={data.project.constructect.description}
        year={data.project.constructect.year}
        link="/portfolio/constructect"
        onClick={() => {
          setProjectPage(true);
          setProject({ constructect: true });
        }}
      >
        <Tag tag={data.project.constructect.tag} />
      </WorkList>
      <WorkList
        name={data.project.aspects.title}
        description={data.project.aspects.description}
        year={data.project.aspects.year}
        link="/portfolio/aspects"
        onClick={() => {
          setProjectPage(true);
          setProject({ aspects: true });
        }}
      >
        <Tag tag={data.project.aspects.tag} />
      </WorkList>
    </div>
  );
}

function WorkList({ name, year, description, tag, onClick, children }) {
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
            (name === "โดจิ" && "bg-doji") ||
            (name === "Personal Website" && "bg-personal") ||
            (name === "เว็บไซต์ส่วนตัว" && "bg-personal") ||
            (name === "Enneagram" && "bg-enneagram") ||
            (name === "นพลักษณ์" && "bg-enneagram") ||
            (name === "Zigma" && "bg-zigma") ||
            (name === "Rood" && "bg-rood") ||
            (name === "Constructect" && "bg-constructect") ||
            (name === "The Aspects" && "bg-aspects")
          }`}
        >
          <div className="flex justify-end items-end py-2 px-4 h-full w-full bg-white rounded-2xl duration-200 bg-opacity-0 group-hover:bg-opacity-30"></div>
        </div>
        <div className="space-y-2 w-80 cursor-pointer">
          <h1 className="font-semibold text-xl group-hover:text-portfolio-primary duration-300">
            {name}
            <span className="text-lg">
              {"  | "}
              {year}
            </span>
          </h1>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </>
  );
}
