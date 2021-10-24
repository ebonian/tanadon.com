import { useContext, useState } from "react";
import Draggable from "react-draggable";
import {
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiMenu,
  FiPlus,
  FiPocket,
  FiShield,
  FiStar,
  FiX,
} from "react-icons/fi";
import Control from "./control";
import { FaGithub } from "react-icons/fa";
import FacebookIcon from "../../images/Facebook_f_logo_(2021).svg";
import GmailIcon from "../../images/Gmail_icon_(2020).svg";
import { MdRefresh } from "react-icons/md";
import { ProgramState } from ".";

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
  return (
    <>
      {programMinimizeState.firefox ? (
        <></>
      ) : (
        <>
          {programFocusState.firefox || programOpenState.firefox ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-black border-opacity-20 w-firefox h-firefox overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
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
                  });
                }}
              >
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
                {/* header top bar */}
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
                        <div className="flex items-center space-x-2">
                          <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                            <FiShield />
                          </div>
                          <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                            <FiLock />
                          </div>
                        </div>
                        {activeTab.Github && (
                          <a
                            href="https://github.com/Ebonian"
                            target="_blank"
                            className="text-sm"
                          >
                            https://github.com/Ebonian
                          </a>
                        )}
                        {activeTab.Facebook && (
                          <a
                            href="https://www.facebook.com/tanadon.santisan/"
                            target="_blank"
                            className="text-sm"
                          >
                            https://www.facebook.com/tanadon.santisan/
                          </a>
                        )}
                        {activeTab.Gmail && (
                          <a
                            href="mailto:tanadon.santisan@gmail.com"
                            target="_blank"
                            className="text-sm"
                          >
                            https://mail.google.com/mail/u/0/#inbox?compose=new
                          </a>
                        )}
                      </div>
                      <div>
                        <div className="flex justify-center items-center rounded w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10">
                          <FiStar />
                        </div>
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

function Tab({ name, active, onClick, activeTab, openTab, setOpenTab }) {
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
          onClick={() => {
            setOpenTab({ ...openTab, Github: false });
          }}
        >
          <FiX />
        </div>
      )}
      {activeTab.Facebook && (
        <div
          className="flex items-center justify-center w-6 h-6 p-1 bg-white bg-opacity-0 hover:bg-opacity-15 rounded cursor-pointer"
          onClick={() => {
            setOpenTab({ ...openTab, Facebook: false });
          }}
        >
          <FiX />
        </div>
      )}
      {activeTab.Gmail && (
        <div
          className="flex items-center justify-center w-6 h-6 p-1 bg-white bg-opacity-0 hover:bg-opacity-15 rounded cursor-pointer"
          onClick={() => {
            setOpenTab({ ...openTab, Gmail: false });
          }}
        >
          <FiX />
        </div>
      )}
    </div>
  );
}
