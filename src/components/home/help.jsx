import { useContext, useState } from "react";
import Draggable from "react-draggable";
import Control from "./control";
import { ProgramState } from ".";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Help() {
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
  return (
    <>
      {programMinimizeState.help ? (
        <></>
      ) : (
        <>
          {programFocusState.help || programOpenState.help ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute left-1/10 top-10 text-white resize border border-gray-800 w-2/6 h-2/4 overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.help ? "z-40" : "z-30"
                } ${
                  programFocusState.help
                    ? "bg-portfolio-base-200"
                    : "bg-portfolio-base-100 text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: false,
                    terminal: false,
                    code: false,
                    help: true,
                    document: false,
                    image: false,
                    text: false,
                  });
                }}
              >
                {/* header */}
                <strong>
                  <Control window="Help" />
                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 text-white ${
                      programFocusState.help ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: false,
                        files: false,
                        terminal: false,
                        code: false,
                        help: true,
                        document: false,
                        image: false,
                        text: false,
                      });
                    }}
                  >
                    {/* left*/}
                    <div
                      className="flex space-x-3"
                      onClick={() => {
                        setProgramActiveState({
                          firefox: false,
                          files: false,
                          terminal: false,
                          code: false,
                          help: false,
                          document: true,
                          image: false,
                          text: false,
                        });
                      }}
                    >
                      <div className="flex items-center">
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-l border-t border-l border-b border-base-300 border-opacity-80">
                          <BsChevronCompactLeft className="text-xl opacity-30" />
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80">
                          <BsChevronCompactRight className="text-xl opacity-30" />
                        </div>
                      </div>
                    </div>
                    {/* center */}
                    <div
                      className="flex flex-grow h-full items-center justify-center"
                      onClick={() => {
                        setProgramActiveState({
                          firefox: false,
                          files: false,
                          terminal: false,
                          code: false,
                          help: true,
                          document: false,
                          image: false,
                          text: false,
                        });
                      }}
                    >
                      <p className="pl-12 lg:pl-48">Help</p>
                    </div>
                    {/* right */}
                    <div className="flex items-center space-x-2">
                      <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                        <BsJournalBookmarkFill className="text-xl" />
                      </div>
                      <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                        <BiSearch className="text-xl" />
                      </div>
                      <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                        <BiMenu className="text-xl" />
                      </div>
                      <div className="w-32" />
                    </div>
                  </div>
                </strong>
                {/* body */}
                <div
                  className="flex flex-col text-center h-full flex-grow bg-portfolio-base-200 font-sourcecode overflow-y-auto select-text"
                  onClick={() => {
                    setProgramActiveState({
                      firefox: false,
                      files: false,
                      terminal: false,
                      code: false,
                      help: true,
                      document: false,
                      image: false,
                      text: false,
                    });
                  }}
                >
                  <div className="mt-10 w-full px-10">
                    <h1 className="font-bold text-xl">
                      Hi, welcome to my computer!
                    </h1>
                    <br />
                    <br />
                    <h3 className="text-md">
                      My name is Tanadon, and this is the fully interactive
                      simulation of my computer to showcase my works and
                      portfolio.
                    </h3>
                    <br />
                    <h3 className="text-sm text-gray-400">
                      This site will works best if open on a desktop browser.
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-14 mt-16 w-full px-10 mb-18">
                    <div className="row-span-2">
                      <h1 className="font-bold text-lg">~/works</h1>
                      <p>
                        All of my works and experiences are ready for you to
                        browse and explore inside this computer's file system.
                      </p>
                      <br />
                      <p>
                        Getting start by open the Files Explorer above the dock
                        on the left side of the screen.
                      </p>
                      <br />
                      <p>
                        Everythings are sorted in a comprehended name, shortcuts
                        on the dekstop are ready for redirect to the specific
                        files.
                      </p>
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">~/contact</h1>
                      <p>
                        My contact informations are provided in the Firefox
                        browser above the dock on the left side of the screen.
                      </p>
                    </div>
                    <div>
                      <h1 className="font-bold text-lg">~/about\ me</h1>
                      <p>
                        Learn more about myself by the ABOUTME.md file on a
                        desktop, or a documents folder by open the Files
                        Explorer above the dock on the left side of the screen.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2 mb-7 text-sm text-gray-400">
                    <p>
                      Visit my full portfolio {"->"}{" "}
                      <a
                        href="/"
                        target="_blank"
                        className="hover:underline hover:text-portfolio-primary"
                      >
                        here
                      </a>
                    </p>
                  </div>
                  <div className="flex justify-center items-center text-2xl space-x-4">
                    <FiGithub />
                    <FiFacebook />
                    <FiMail />
                    <FiLinkedin />
                  </div>
                  <div className="flex justify-center mt-2 mb-20">
                    <p>Tanadon Santisan</p>
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
