import { useContext, useEffect, useRef } from "react";
import { PortfolioContext } from "../../pages/portfolio";
import About from "./about";
import Contact from "./contact";
import Exp from "./exp";
import Projects from "./projects";
import gsap from "gsap";
import { Power3 } from "gsap/all";

export default function Body() {
  const {
    activePage,
    setActivePage,
    openPage,
    setOpenPage,
    project,
    setProject,
    projectPage,
    setProjectPage,
    lang,
    setLang,
  } = useContext(PortfolioContext);

  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);
  let fourthItem = useRef(null);
  let fifthItem = useRef(null);

  let aboutItem = useRef(null);
  let projectsItem = useRef(null);
  let expItem = useRef(null);
  let contactItem = useRef(null);

  // useEffect(() => {
  //   gsap.from(firstItem, 1, { delay: 6, opacity: 0, y: 20, display: "none" });
  //   gsap.from(secondItem, 1, {
  //     delay: 6.5,
  //     opacity: 0,
  //     y: 20,
  //     display: "none",
  //   });
  //   gsap.from(thirdItem, 1, { delay: 7, opacity: 0, y: 20, display: "none" });
  //   gsap.from(fourthItem, 1, {
  //     delay: 7.5,
  //     opacity: 0,
  //     y: 20,
  //     display: "none",
  //   });
  //   gsap.from(fifthItem, 1, {
  //     delay: 8,
  //     opacity: 0,
  //     y: 20,
  //     display: "none",
  //   });
  // }, []);

  const clickAnim = (item) => {
    gsap.to(item, 0.5, {
      width: "384px",
      ease: Power3.easeOut,
    });
    // console.log("triggered");
  };

  return (
    <div
      className={`flex flex-col sm:flex-row flex-grow justify-center text-white space-x-5 mt-16 sm:mt-32 space-y-10 sm:space-y-0 z-10 duration-300 ease-out ${
        projectPage ? "-translate-y-full" : ""
      }`}
    >
      {/* nav */}
      <div
        className={`flex flex-col text-xl space-y-3 xl:space-y-1 select-none px-4 w-40 ${
          !activePage.about &&
          !activePage.projects &&
          !activePage.exp &&
          !activePage.contact
            ? "text-center"
            : "text-left sm:text-right"
        }`}
      >
        <div
          ref={(el) => {
            firstItem = el;
          }}
        >
          <ToggleList
            link="About Me"
            // link={`${lang === "en" ? "About Me" : "เกี่ยวกับผม"}`}
            active={activePage.about}
            onClick={() => {
              setActivePage({ about: true });
              setOpenPage({
                about: true,
                projects: false,
                exp: false,
                contact: false,
              });
              clickAnim(aboutItem);
            }}
          />
        </div>
        <div
          ref={(el) => {
            secondItem = el;
          }}
        >
          <ToggleList
            link="Projects"
            // link={`${lang === "en" ? "Projects" : "โปรเจกต์"}`}
            active={activePage.projects}
            onClick={() => {
              setActivePage({ projects: true });
              setOpenPage({
                about: false,
                projects: true,
                exp: false,
                contact: false,
              });
              clickAnim(projectsItem);
            }}
          />
        </div>
        <div
          ref={(el) => {
            thirdItem = el;
          }}
        >
          <ToggleList
            link="Education"
            // link={`${lang === "en" ? "Education" : "การศึกษา"}`}
            active={activePage.exp}
            onClick={() => {
              setActivePage({ exp: true });
              setOpenPage({
                about: false,
                projects: false,
                exp: true,
                contact: false,
              });
              clickAnim(expItem);
            }}
          />
        </div>
        <div
          ref={(el) => {
            fourthItem = el;
          }}
        >
          <ToggleList
            link="Contact"
            // link={`${lang === "en" ? "Contact" : "ติดต่อ"}`}
            active={activePage.contact}
            onClick={() => {
              setActivePage({ contact: true });
              setOpenPage({
                about: false,
                projects: false,
                exp: false,
                contact: true,
              });
              clickAnim(contactItem);
            }}
          />
        </div>
        {/* lang swap */}
        {/* <p
          className="text-base font-normal pt-4 font-sourcecode"
          ref={(el) => {
            fifthItem = el;
          }}
        >
          <span
            className={`mr-2 cursor-pointer hover:text-portfolio-primary ${
              lang === "en" && "text-portfolio-primary"
            }`}
            onClick={() => {
              setLang("en");
            }}
          >
            en
          </span>
          |
          <span
            className={`ml-2 cursor-pointer hover:text-portfolio-primary ${
              lang === "th" && "text-portfolio-primary"
            }`}
            onClick={() => {
              setLang("th");
            }}
          >
            th
          </span>
        </p> */}
      </div>

      {/* divider */}

      <div
        className={`duration-300 bg-white w-px hidden sm:block ${
          !activePage.about &&
          !activePage.projects &&
          !activePage.exp &&
          !activePage.contact
            ? "h-0"
            : "h-52 xl:h-44"
        }`}
      />

      {/* content */}
      <div className="h-120 xl:h-160 overflow-y-auto overflow-x-hidden">
        <div
          ref={(el) => {
            aboutItem = el;
          }}
          className="w-0"
        >
          {/* <About /> */}
          {activePage.about && <About />}
        </div>
        <div
          ref={(el) => {
            projectsItem = el;
          }}
          className="w-0"
        >
          {activePage.projects && <Projects />}
        </div>
        <div
          ref={(el) => {
            expItem = el;
          }}
          className="w-0"
        >
          {activePage.exp && <Exp />}
        </div>
        <div
          ref={(el) => {
            contactItem = el;
          }}
          className="w-0"
        >
          {activePage.contact && <Contact />}
        </div>
      </div>
    </div>
  );
}

function ToggleList({ link, active, onClick }) {
  return (
    <p
      className={`cursor-pointer duration-300 hover:translate-x-3 sm:hover:-translate-x-3 font-sourcecode ${
        active ? "text-portfolio-primary" : "hover:text-portfolio-primary"
      }`}
      onClick={onClick}
    >
      {link}
    </p>
  );
}
