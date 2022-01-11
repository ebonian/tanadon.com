import { useContext, useState } from "react";
import Draggable from "react-draggable";
import Control from "./control";
import { ProgramState } from ".";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBell,
  FiBook,
  FiBookOpen,
  FiBox,
  FiGitCommit,
  FiGitMerge,
  FiGitPullRequest,
  FiLayout,
  FiLock,
  FiMapPin,
  FiMenu,
  FiPlus,
  FiPocket,
  FiSearch,
  FiShield,
  FiSmile,
  FiStar,
  FiX,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import FacebookIcon from "../../images/Facebook_f_logo_(2021).svg";
import GmailIcon from "../../images/Gmail_icon_(2020).svg";
import { MdRefresh } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";

import DojiLogo from "../../images/dojiSymbol.jpg";

export default function Firefox() {
  const {
    setProgramActiveState,
    programActiveState,
    setProgramOpenState,
    programOpenState,
    setProgramFocusState,
    programFocusState,
    setProgramMinimizeState,
    programMinimizeState,
  } = useContext(ProgramState);

  const [activeTab, setActiveTab] = useState({
    Github: true,
    Facebook: false,
    Gmail: false,
  });
  const [openTab, setOpenTab] = useState({
    Github: true,
    Facebook: true,
    Gmail: true,
  });
  console.log(activeTab);
  return (
    <>
      {programMinimizeState.firefox ? (
        <></>
      ) : (
        <>
          {programFocusState.firefox || programOpenState.firefox ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-black border-opacity-20 w-small h-terminal md:w-terminal md:h-terminal lg:w-firefox lg:h-firefox overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.firefox ? "z-40" : "z-30"
                } ${
                  programFocusState.firefox
                    ? "bg-base-500"
                    : "bg-base-900 text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: true,
                    files: false,
                    terminal: false,
                    code: false,
                    help: false,
                    document: false,
                    image: false,
                    text: false,
                  });
                }}
              >
                {/* header */}
                <strong>
                  <Control window="Firefox" />

                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 font-normal text-white ${
                      programFocusState.firefox ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: true,
                        files: false,
                        terminal: false,
                        code: false,
                        help: false,
                        document: false,
                        image: false,
                        text: false,
                      });
                    }}
                  >
                    {/* browser tab */}
                    <div className="flex flex-grow items-center h-full pl-7 py-1 space-x-1">
                      {openTab.Github && (
                        <Tab
                          name="Github"
                          active={activeTab.Github}
                          onClick={() => {
                            setActiveTab({
                              Github: true,
                              Facebook: false,
                              Gmail: false,
                            });
                          }}
                          openTab={openTab}
                          activeTab={activeTab}
                          setOpenTab={setOpenTab}
                          setActiveTab={setActiveTab}
                        />
                      )}
                      {openTab.Facebook && (
                        <Tab
                          name="Facebook"
                          active={activeTab.Facebook}
                          onClick={() => {
                            setActiveTab({
                              Github: false,
                              Facebook: true,
                              Gmail: false,
                            });
                          }}
                          openTab={openTab}
                          activeTab={activeTab}
                          setOpenTab={setOpenTab}
                          setActiveTab={setActiveTab}
                        />
                      )}
                      {openTab.Gmail && (
                        <Tab
                          name="Gmail"
                          active={activeTab.Gmail}
                          onClick={() => {
                            setActiveTab({
                              Github: false,
                              Facebook: false,
                              Gmail: true,
                            });
                          }}
                          openTab={openTab}
                          activeTab={activeTab}
                          setOpenTab={setOpenTab}
                          setActiveTab={setActiveTab}
                        />
                      )}
                      <div
                        className="flex justify-center items-center w-10 h-full text-gray-300 bg-white bg-opacity-0 hover:bg-opacity-10 rounded text-lg"
                        onClick={() => {
                          setOpenTab({
                            Github: true,
                            Facebook: true,
                            Gmail: true,
                          });
                        }}
                      >
                        <FiPlus />
                      </div>
                    </div>
                  </div>
                </strong>
                {/* body */}
                {/* top bar */}
                <div className="flex w-full flex-col">
                  <div className="flex items-center justify-between h-10 w-full bg-base-1100 border-b border-t border-black border-opacity-20 px-4 py-1">
                    {/* back foward refresh */}
                    <div className="flex text-gray-200 space-x-2 text-lg text-center mr-10">
                      <div className="flex justify-center items-center rounded w-7 h-7 bg-white bg-opacity-0 hover:bg-opacity-10">
                        <FiArrowLeft />
                      </div>
                      <div className="flex justify-center items-center rounded w-7 h-7 bg-white bg-opacity-0 hover:bg-opacity-10">
                        <FiArrowRight />
                      </div>
                      <div className="flex justify-center items-center rounded w-7 h-7 bg-white bg-opacity-0 hover:bg-opacity-10 text-xl">
                        <MdRefresh />
                      </div>
                    </div>
                    {/* url */}
                    <div className="flex flex-grow justify-between items-center h-full bg-base-600 px-1.5 select-text text-gray-300 rounded">
                      <div className="flex items-center space-x-3 whitespace-nowrap">
                        {!activeTab.Github &&
                        !activeTab.Facebook &&
                        !activeTab.Gmail ? (
                          <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center rounded w-6 h-6">
                              <FiSearch />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                              <FiShield />
                            </div>
                            <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                              <FiLock />
                            </div>
                          </div>
                        )}
                        {!activeTab.Github &&
                        !activeTab.Facebook &&
                        !activeTab.Gmail ? (
                          <input
                            type="text"
                            className="text-sm outline-none bg-base-600 w-96"
                            placeholder="Search with Google or enter address"
                          />
                        ) : (
                          <></>
                        )}

                        {activeTab.Github && openTab.Github ? (
                          <a
                            href="https://github.com/Ebonian"
                            target="_blank"
                            className="text-sm"
                          >
                            https://
                            <span className="text-white">github.com</span>
                            /Ebonian
                          </a>
                        ) : (
                          <></>
                        )}
                        {activeTab.Facebook && openTab.Facebook ? (
                          <a
                            href="https://www.facebook.com/tanadon.santisan/"
                            target="_blank"
                            className="text-sm"
                          >
                            https://
                            <span className="text-white">www.facebook.com</span>
                            /tanadon.santisan/
                          </a>
                        ) : (
                          <></>
                        )}
                        {activeTab.Gmail && openTab.Gmail ? (
                          <a
                            href="mailto:tanadon.santisan@gmail.com"
                            target="_blank"
                            className="text-sm"
                          >
                            https://
                            <span className="text-white">mail.google.com</span>
                            /mail/u/0/#inbox?compose=new
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div>
                        {!activeTab.Github &&
                        !activeTab.Facebook &&
                        !activeTab.Gmail ? (
                          <></>
                        ) : (
                          <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                            <FiStar />
                          </div>
                        )}
                      </div>
                    </div>
                    {/* menu */}
                    <div className="flex text-gray-200 space-x-2 text-lg text-center ml-10">
                      <div className="flex justify-center items-center rounded w-7 h-7 bg-white bg-opacity-0 hover:bg-opacity-10">
                        <FiPocket />
                      </div>
                      <div className="flex justify-center items-center rounded w-7 h-7 bg-white bg-opacity-0 hover:bg-opacity-10">
                        <FiMenu />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`select-text h-full overflow-y-auto pb-24 flex flex-col justify-start items-center ${
                    activeTab.Github && openTab.Github ? "bg-github-bg" : ""
                  }`}
                  onClick={() => {
                    setProgramActiveState({
                      firefox: true,
                      files: false,
                      terminal: false,
                      code: false,
                      help: false,
                      document: false,
                      image: false,
                      text: false,
                    });
                  }}
                >
                  {/* github */}
                  {activeTab.Github && openTab.Github ? <Github /> : <></>}
                  {/* facebook */}
                  {activeTab.Facebook && openTab.Facebook ? (
                    <div>
                      <h1>Facebook</h1>
                    </div>
                  ) : (
                    <></>
                  )}
                  {/* gmail */}
                  {activeTab.Gmail && openTab.Gmail ? (
                    <div>
                      <h1>Gmail</h1>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Draggable>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

function Github() {
  const cont = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="w-full h-full">
      {/* header */}
      <div className="flex justify-between items-center w-full h-16 bg-github-header px-8 font-segoe">
        {/* left */}
        <div className="flex items-center space-x-5">
          {/* icon */}
          <FaGithub className="text-4xl cursor-pointer" />
          {/* search */}
          <div className="flex items-center bg-github-bg border border-gray-700 rounded-lg px-1.5 py-0.5">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-github-bg outline-none w-60 text-sm"
            />
            <div className="flex justify-center items-center rounded border border-gray-700 w-5 h-5 my-1 text-gray-400 text-xs">
              <p>/</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm font-semibold text-gray-100">
            <p className="cursor-pointer hover:text-gray-400">Pull requests</p>
            <p className="cursor-pointer hover:text-gray-400">Issues</p>
            <p className="cursor-pointer hover:text-gray-400">Marketplace</p>
            <p className="cursor-pointer hover:text-gray-400">Explore</p>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center space-x-5">
          <FiBell className="cursor-pointer" />
          <div className="flex items-center space-x-1 cursor-pointer">
            <FiPlus className="text-xl" />
            <GoTriangleDown className="text-xs" />
          </div>
          <div className="flex items-center cursor-pointer space-x-1">
            {/* profile pic */}
            <div className="w-5 h-5 bg-white rounded-full" />
            <GoTriangleDown className="text-xs" />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col flex-grow pb-20 font-segoe">
        {/* profile info */}
        <div className="flex px-8">
          <div className="flex flex-col justify-start items-center mt-10">
            <div className="relative">
              {/* profile */}
              <div className="w-72 h-72 bg-githubProfile bg-cover rounded-full" />
              <div className="bg-github-bg absolute w-10 h-10 rounded-full border border-gray-700 bottom-5 right-5 cursor-pointer flex justify-center items-center text-xl text-gray-400">
                <FiSmile />
              </div>
            </div>
            <div className="w-full font-segoe mt-5">
              <h1 className="font-semibold text-2xl">Tanadon Santisan</h1>
              <h3 className="text-xl text-gray-400 font-light">Ebonian</h3>
              <p className="font-ligth text-gray-200 mt-4">
                12th-grade junior developer.
              </p>
              <div className="mt-5 flex justify-center items-center px-0.5 text-sm py-1.5 rounded-lg border-gray-700 bg-white bg-opacity-10 border cursor-pointer hover:bg-opacity-15 hover:border-gray-400 duration-200 select-none">
                <p>Edit profile</p>
              </div>
              <div className="flex items-center space-x-2 text-sm font-ligth mt-6 text-gray-300">
                <FiMapPin />
                <p>Bangkok, Thailand</p>
              </div>
              <div className="h-px w-full bg-gray-700 my-4" />
              <h3 className="font-semibold text-gray-300">Organizations</h3>
              {/* doji link */}
              <a href="https://doji.site" target="_blank">
                <img
                  src={DojiLogo}
                  alt="Doji Orginization"
                  className="rounded w-8 h-8 cursor-pointer mt-2"
                />
              </a>
            </div>
          </div>
          {/* right section */}
          <div className="w-full mt-7 ml-6">
            {/* nav */}
            <div className="flex items-center font-normal">
              <a className="flex items-center cursor-pointer space-x-2 py-3 px-4 border-b-2 border-github-primary">
                <FiBookOpen />
                <p>Overview</p>
              </a>
              <a
                href="https://github.com/Ebonian?tab=repositories"
                target="_blank"
                className="flex items-center space-x-2 py-3 px-4 border-b-2 text-gray-300 border-github-bg hover:border-gray-600"
              >
                <FiBook className="text-gray-600" />
                <p>Repositories</p>
                <div className="flex justify-center items-center h-6 w-6 text-xs rounded-full bg-white bg-opacity-10">
                  5
                </div>
              </a>
              <a
                href="https://github.com/Ebonian?tab=projects"
                target="_blank"
                className="flex items-center space-x-2 py-3 px-4 border-b-2 text-gray-300 border-github-bg hover:border-gray-600"
              >
                <FiLayout className="text-gray-600" />
                <p>Projects</p>
              </a>
              <a
                href="https://github.com/Ebonian?tab=packages"
                target="_blank"
                className="flex items-center space-x-2 py-3 px-4 border-b-2 text-gray-300 border-github-bg hover:border-gray-600"
              >
                <FiBox className="text-gray-600" />
                <p>Packages</p>
              </a>
            </div>
            {/* popular repo */}
            <div className="w-full mt-7 text-gray-200">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-gray-200">Popular repositories</h3>
                <p className="cursor-pointer text-sm font-light text-gray-400 hover:text-blue-400 select-none">
                  Customize your pins
                </p>
              </div>
            </div>
            {/* repo blocks */}
            <div className="grid grid-cols-2 gap-4 pt-3">
              <GithubRepo
                name="doji-interview"
                lang="Javascript"
                link="https://github.com/Ebonian/doji-interview"
              />
              <GithubRepo
                name="enneagram-website"
                lang="Javascript"
                link="https://github.com/Ebonian/enneagram-website"
              />
              <GithubRepo
                name="emotion-detection-v1"
                desc="Emotion detection with Tensorflow and OpenCV."
                lang="Python"
                link="https://github.com/Ebonian/emotion-detection-v1"
              />
            </div>
            {/* contribution */}
            <div className="w-full mt-7 mb-2 text-gray-200">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-gray-200">
                  74 contributions in the last year
                </h3>
                <p className="cursor-pointer text-sm font-light text-gray-400 hover:text-blue-400 select-none">
                  Contribution settings
                </p>
              </div>
            </div>
            {/* contribution table */}
            <div className="w-full h-48 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between px-10 pt-3 space-x-12 text-xs text-gray-300">
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
                <p>Sep</p>
                <p>Oct</p>
                <p>Nov</p>
              </div>
              <div className="grid grid-rows-7 grid-flow-col gap-1 px-2 pt-2">
                {cont.map(() => (
                  <div className="w-3 h-3 rounded-sm bg-white bg-opacity-5" />
                ))}
                <div className="w-3 h-3 rounded-sm bg-github-cont" />
                <div className="w-3 h-3 rounded-sm bg-github-cont opacity-15" />
                <div className="w-3 h-3 rounded-sm bg-github-cont opacity-20" />
                <div className="w-3 h-3 rounded-sm bg-github-cont opacity-25" />
              </div>
              <div className="flex items-center justify-between w-full px-10 py-4">
                <p className="text-xs text-gray-400 cursor-pointer hover:text-blue-400">
                  Learn how we count contributions
                </p>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <p>Less</p>
                  <div className="w-3 h-3 rounded-sm bg-github-cont opacity-5" />
                  <div className="w-3 h-3 rounded-sm bg-github-cont opacity-25" />
                  <div className="w-3 h-3 rounded-sm bg-github-cont opacity-50" />
                  <div className="w-3 h-3 rounded-sm bg-github-cont opacity-75" />
                  <div className="w-3 h-3 rounded-sm bg-github-cont opacity-100" />
                  <p>More</p>
                </div>
              </div>
            </div>
            {/* contribution activity */}
            <div className="w-full flex justify-start items-start mt-8">
              {/* left */}
              <div className="w-full pr-10">
                <h3 className="text-gray-200">Contribution activity</h3>
                <div className="flex items-center mt-6">
                  <p className="font-semibold text-xs">November </p>
                  <p className="font-normal text-xs text-gray-400 pl-2 pr-4">
                    2021
                  </p>
                  <div className="w-full h-px bg-gray-700" />
                </div>
                <div className="flex items-start mt-4 pl-3">
                  <div className="relative">
                    <div className="rounded-full w-6 h-6 flex justify-center items-center text-sm text-gray-300 bg-gray-700 absolute top-5 -left-2.5">
                      <FiGitCommit />
                    </div>
                    <div className="rounded-full w-6 h-6 flex justify-center items-center text-sm text-gray-300 bg-gray-700 absolute top-28 -left-2.5">
                      <FiGitPullRequest />
                    </div>
                    <div className="h-48 w-0.5 bg-gray-800" />
                  </div>
                  <div className="w-full pl-5 pt-4">
                    <h4 className="mb-2 text-gray-200 select-none">
                      Created 5 commits in 2 repositories
                    </h4>
                    <div className="flex justify-between w-full mb-1">
                      <a
                        href="https://github.com/Ebonian/pps-renovation-lab"
                        className="text-sm"
                        target="_blank"
                      >
                        <span className="text-blue-400 hover:underline">
                          Ebonian/pps-renovation-lab
                        </span>
                        <span className="pl-2 text-gray-400 hover:text-blue-400 text-xs">
                          3 commits
                        </span>
                      </a>
                      <div className="rounded-full h-2 w-28 bg-github-bg mt-2">
                        <div className="h-2 w-20 bg-github-cont rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between w-full">
                      <a
                        href="https://github.com/Ebonian/portfolio"
                        className="text-sm"
                        target="_blank"
                      >
                        <span className="text-blue-400 hover:underline">
                          Ebonian/portfolio
                        </span>
                        <span className="pl-2 text-gray-400 hover:text-blue-400 text-xs">
                          2 commits
                        </span>
                      </a>
                      <div className="rounded-full h-2 w-28 bg-github-bg mt-2">
                        <div className="h-2 w-12 bg-github-cont rounded-full" />
                      </div>
                    </div>
                    <h4 className="mt-5 mb-2 text-gray-200 select-none  ">
                      Opened 4 pull requests in 2 repositories
                    </h4>
                    <div className="flex justify-between w-full mb-1">
                      <a className="text-sm cursor-pointer">
                        <span className="text-blue-400 hover:underline">
                          Doji-Team/fronten...
                        </span>
                      </a>
                      <div className="flex items-center space-x-1 text-xs">
                        <div className="bg-purple-500 px-2 rounded-full py-px font-semibold">
                          2
                        </div>
                        <p className="text-gray-400">merged</p>
                      </div>
                    </div>
                    <div className="flex justify-between w-full mb-1">
                      <a className="text-sm cursor-pointer">
                        <span className="text-blue-400 hover:underline">
                          Ebonian/renovatio...
                        </span>
                      </a>
                      <div className="flex items-center space-x-1 text-xs">
                        <div className="bg-purple-500 px-2 rounded-full py-px font-semibold">
                          2
                        </div>
                        <p className="text-gray-400">merged</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full py-2.5 text-xs border border-gray-700 rounded-lg mt-8 text-blue-400 bg-white bg-opacity-0 hover:bg-opacity-5 cursor-pointer duration-200 select-none">
                  <p>Show more activity</p>
                </div>
                <p className="mt-6 text-xs text-gray-400">
                  Seeing something unexpected? Take a look at the{" "}
                  <span className="text-blue-400 hover:underline cursor-pointer">
                    GitHub profile guide.
                  </span>
                </p>
              </div>
              {/* right */}
              <div className="w-24 text-xs space-y-2">
                <div className="w-24 bg-blue-600 rounded-lg cursor-pointer py-3 pl-4">
                  2021
                </div>
                <div className="w-24 bg-github-bg hover:bg-white hover:bg-opacity-5 rounded-lg cursor-pointer py-3 pl-4">
                  2020
                </div>
                <div className="w-24 bg-github-bg hover:bg-white hover:bg-opacity-5 rounded-lg cursor-pointer py-3 pl-4">
                  2019
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full mt-20 h-32 bg-whtie flex justify-between items-center px-5 border-t border-gray-800 text-xs text-blue-400">
          <p className="text-gray-400">© 2021 GitHub, Inc.</p>
          <p className="hover:underline cursor-pointer">Terms</p>
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Security</p>
          <p className="hover:underline cursor-pointer">Status</p>
          <p className="hover:underline cursor-pointer">Docs</p>
          <FaGithub className="text-2xl text-gray-700 cursor-pointer hover:text-gray-500" />
          <p className="hover:underline cursor-pointer">Contact Github</p>
          <p className="hover:underline cursor-pointer">Pricing</p>
          <p className="hover:underline cursor-pointer">API</p>
          <p className="hover:underline cursor-pointer">Training</p>
          <p className="hover:underline cursor-pointer">Blog</p>
          <p className="hover:underline cursor-pointer">About</p>
        </div>
      </div>
    </div>
  );
}

function GithubRepo({ name, desc, lang, link }) {
  return (
    <div className="border rounded-lg h-28 w-full border-gray-700 p-4 text-sm flex flex-col justify-between">
      <div className="flex w-full justify-between items-center">
        <a
          href={link}
          target="_blank"
          className="text-blue-400 font-medium cursor-pointer hover:underline"
        >
          {name}
        </a>
        <div className="text-xs rounded-full border border-gray-700 py-0.5 px-2 text-gray-400">
          Public
        </div>
      </div>
      <div className="font-light text-xs text-gray-400 -mt-2">{desc}</div>
      <div className="flex items-center space-x-1 text-gray-400">
        <div
          className={`h-3 w-3 rounded-full ${
            lang === "Javascript" && "bg-yellow-300"
          } ${lang === "Python" && "bg-blue-500 bg-opacity-70"}`}
        />
        <p>{lang}</p>
      </div>
    </div>
  );
}

function Tab({
  name,
  active,
  onClick,
  activeTab,
  openTab,
  setOpenTab,
  setActiveTab,
}) {
  return (
    <div
      className={`${
        active
          ? "flex h-full w-48 items-center pl-2 pr-1 rounded justify-between bg-base-1100 bg-opacity-100 hover:bg-white hover:bg-opacity-30"
          : "flex h-full w-48 items-center pl-2 pr-1 rounded justify-between bg-white bg-opacity-0 hover:bg-opacity-10"
      }`}
      onClick={onClick}
    >
      <div className="flex whitespace-nowrap items-center space-x-2">
        {/* favicon */}
        {name === "Github" && <FaGithub />}
        {name === "Facebook" && <img src={FacebookIcon} className="w-4 h-4" />}
        {name === "Gmail" && <img src={GmailIcon} className="w-4 h-4" />}

        {/* title */}
        {name === "Github" && <p className="text-sm">Ebonian (Tanadon S..</p>}
        {name === "Facebook" && <p className="text-sm">Poon Tanadon | Fac..</p>}
        {name === "Gmail" && <p className="text-sm">Inbox (513) - tanad..</p>}
      </div>
      {}
      {activeTab.Github && (
        <div
          className="flex items-center justify-center w-6 h-6 p-1 bg-white bg-opacity-0 hover:bg-opacity-15 rounded cursor-pointer"
          onClick={async () => {
            await setOpenTab({ ...openTab, Github: false });
            setActiveTab({ ...activeTab, Github: false });
          }}
        >
          <FiX />
        </div>
      )}
      {activeTab.Facebook && (
        <div
          className="flex items-center justify-center w-6 h-6 p-1 bg-white bg-opacity-0 hover:bg-opacity-15 rounded cursor-pointer"
          onClick={async () => {
            await setOpenTab({ ...openTab, Facebook: false });
            setActiveTab({ ...activeTab, Facebook: false });
          }}
        >
          <FiX />
        </div>
      )}
      {activeTab.Gmail && (
        <div
          className="flex items-center justify-center w-6 h-6 p-1 bg-white bg-opacity-0 hover:bg-opacity-15 rounded cursor-pointer"
          onClick={async () => {
            await setOpenTab({ ...openTab, Gmail: false });
            setActiveTab({ ...activeTab, Gmail: false });
          }}
        >
          <FiX />
        </div>
      )}
    </div>
  );
}
