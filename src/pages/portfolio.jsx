import { useState, createContext } from "react";

import Body from "../components/portfolio/body";
import Header from "../components/portfolio/header";
import ProjectDetail from "../components/portfolio/projects/index";
import Popup from "../components/wip";

export const PortfolioContext = createContext(null);

export default function Portfolio() {
  const [activePage, setActivePage] = useState({
    about: false,
    projects: false,
    exp: false,
    contact: false,
  });
  const [openPage, setOpenPage] = useState({
    about: false,
    projects: false,
    exp: false,
    contact: false,
  });
  const [projectPage, setProjectPage] = useState(false);
  const [project, setProject] = useState({});

  const [lang, setLang] = useState("en");

  const [popup, setPopup] = useState(true);
  return (
    <PortfolioContext.Provider
      value={{
        activePage,
        setActivePage,
        openPage,
        setOpenPage,
        projectPage,
        setProjectPage,
        project,
        setProject,
        lang,
        setLang,
        popup,
        setPopup,
      }}
    >
      {/* temporary */}
      <Popup />
      {/* temporary */}

      <div
        className={`flex justify-center h-screen w-full bg-portfolio-base-200 px-5 sm:px-20 2xl:px-0 ${
          lang === "en" ? "font-sourcecode" : "font-kanit"
        }`}
      >
        <div className="flex flex-col flex-grow h-screen max-w-screen-xl">
          <Header />
          <Body />
          <ProjectDetail />
        </div>
      </div>
    </PortfolioContext.Provider>
  );
}
