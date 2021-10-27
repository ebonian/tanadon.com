import { useState, useEffect, createContext } from "react";

import Body from "../components/portfolio/body";
import Header from "../components/portfolio/header";
import ProjectDetail from "../components/portfolio/projects/index";

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
      }}
    >
      <div className="flex justify-center h-screen w-full bg-portfolio-base-200 font-sourcecode px-5 sm:px-20 2xl:px-0">
        <div className="flex flex-col flex-grow h-screen max-w-screen-xl">
          <Header />
          <Body />
          <ProjectDetail />
        </div>
      </div>
    </PortfolioContext.Provider>
  );
}
