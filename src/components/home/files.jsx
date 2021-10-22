import { useContext, useState, createContext } from "react";
import Draggable from "react-draggable";
import {
  BiX,
  BiMinus,
  BiSquare,
  BiSearch,
  BiListUl,
  BiMenu,
  BiHistory,
  BiTrash,
} from "react-icons/bi";
import { AiFillPicture, AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { RiSideBarFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { MdDownload } from "react-icons/md";
import { HiMusicNote } from "react-icons/hi";
import { FiFilm } from "react-icons/fi";

import { ProgramState } from ".";
import Control from "./control";
import Home from "./files/home";
import Path from "./files/path";

// export const FileLocationContext = createContext(null);

export default function Files() {
  // consume ProgramState context
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

  // folder path state
  const [fileLocation, setFileLocation] = useState("Home");

  return (
    <>
      {programMinimizeState.files ? (
        <></>
      ) : (
        <>
          {programFocusState.files || programOpenState.files ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-black border-opacity-20 w-files h-files overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.files ? "z-40" : "z-30"
                } ${
                  programFocusState.files
                    ? "bg-base-500"
                    : "bg-base-900 text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: true,
                    terminal: false,
                  });
                }}
              >
                {/* top */}
                <strong>
                  <Control window="Files" />

                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 ${
                      programFocusState.files ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                  >
                    {/* left */}
                    <div
                      className="flex space-x-3"
                      onClick={() => {
                        setProgramActiveState({
                          firefox: false,
                          files: true,
                          terminal: false,
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
                      <Path
                        fileLocation={fileLocation}
                        setFileLocation={setFileLocation}
                      />
                    </div>
                    {/* center */}
                    <div
                      className="flex flex-grow h-full"
                      onClick={() => {
                        setProgramActiveState({
                          firefox: false,
                          files: true,
                          terminal: false,
                        });
                      }}
                    />
                    {/* right */}
                    <div
                      className="flex space-x-5 text-gray-300"
                      onClick={() => {
                        setProgramActiveState({
                          firefox: false,
                          files: true,
                          terminal: false,
                        });
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                          <BiSearch className="text-xl" />
                        </div>
                        <div className="flex">
                          <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded-l border-t border-l border-b border-base-300 border-opacity-80 cursor-pointer">
                            <BiListUl className="text-2xl" />
                          </div>
                          <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded-r border border-base-300 border-opacity-80 cursor-pointer">
                            <GoTriangleDown />
                          </div>
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                          <BiMenu className="text-xl" />
                        </div>
                      </div>

                      {/* control button */}
                      <div className="w-28" />
                    </div>
                  </div>
                </strong>

                {/* body */}
                <div
                  className="flex h-full text-md border-t border-black border-opacity-30"
                  onClick={() => {
                    setProgramActiveState({
                      firefox: false,
                      files: true,
                      terminal: false,
                    });
                  }}
                >
                  {/* sidebar */}
                  <div
                    className={`flex flex-none flex-col w-56 overflow-auto border-r border-black border-opacity-30 space-y-0.5 pt-1.5 ${
                      programFocusState.files ? "bg-base-700" : "bg-base-800"
                    }`}
                  >
                    <SidebarButton type="Recent" />
                    <SidebarButton type="Starred" />
                    <SidebarButton type="Home" active={true} />
                    <SidebarButton type="Desktop" />
                    <SidebarButton type="Documents" />
                    <SidebarButton type="Download" />
                    <SidebarButton type="Music" />
                    <SidebarButton type="Picture" />
                    <SidebarButton type="Videos" />
                    <SidebarButton type="Trash" />
                  </div>
                  {/* content */}
                  <div className="flex w-full items-start py-2 px-3 overflow-y-auto">
                    <div className="flex flex-wrap -mr-6">
                      {/* <FileLocationContext.Provider
                        value={{ fileLocation, setFileLocation }}
                      > */}
                      <Home
                        fileLocation={fileLocation}
                        setFileLocation={setFileLocation}
                      />
                      {/* </FileLocationContext.Provider> */}
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

function SidebarButton({ active, type }) {
  return (
    <>
      {active ? (
        <div className="flex items-center justify-start w-full space-x-2 cursor-pointer bg-primary px-4 py-3 duration-300">
          {type === "Recent" && <BiHistory className="text-xl" />}
          {type === "Starred" && <AiFillStar className="text-xl" />}
          {type === "Home" && <AiOutlineHome className="text-xl" />}
          {type === "Desktop" && <RiSideBarFill className="text-xl" />}
          {type === "Documents" && <CgFileDocument className="text-xl" />}
          {type === "Download" && <MdDownload className="text-xl" />}
          {type === "Music" && <HiMusicNote className="text-xl" />}
          {type === "Picture" && <AiFillPicture className="text-xl" />}
          {type === "Videos" && <FiFilm className="text-xl" />}
          {type === "Trash" && <BiTrash className="text-xl" />}
          <p>{type}</p>
        </div>
      ) : (
        <div className="flex items-center justify-start w-full space-x-2 cursor-pointer hover:bg-white hover:bg-opacity-5 px-4 py-3 duration-300">
          {type === "Recent" && <BiHistory className="text-xl" />}
          {type === "Starred" && <AiFillStar className="text-xl" />}
          {type === "Home" && <AiOutlineHome className="text-xl" />}
          {type === "Desktop" && <RiSideBarFill className="text-xl" />}
          {type === "Documents" && <CgFileDocument className="text-xl" />}
          {type === "Download" && <MdDownload className="text-xl" />}
          {type === "Music" && <HiMusicNote className="text-xl" />}
          {type === "Picture" && <AiFillPicture className="text-xl" />}
          {type === "Videos" && <FiFilm className="text-xl" />}
          {type === "Trash" && <BiTrash className="text-xl" />}
          <p>{type}</p>
        </div>
      )}
    </>
  );
}
