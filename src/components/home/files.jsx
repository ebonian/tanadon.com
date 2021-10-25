import { useContext, useState, createContext } from "react";
import Draggable from "react-draggable";
import { BiSearch, BiListUl, BiMenu, BiHistory, BiTrash } from "react-icons/bi";
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
import Empty from "./files/empty";
import Starred from "./files/starred";
import Desktop from "./files/desktop";
import Coding from "./files/coding";
import Works from "./files/works";

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
    fileLocation,
    setFileLocation,
  } = useContext(ProgramState);

  return (
    <>
      {programMinimizeState.files ? (
        <></>
      ) : (
        <>
          {programFocusState.files || programOpenState.files ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-black border-opacity-20 w-small h-terminal md:w-terminal lg:w-files lg:h-files overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
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
                    code: false,
                    help: false,
                    document: false,
                    image: false,
                    text: false,
                  });
                }}
              >
                {/* top */}
                <strong>
                  <Control window="Files" setFileLocation={setFileLocation} />

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
                          code: false,
                          help: false,
                          document: false,
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
                          code: false,
                          help: false,
                          document: false,
                          image: false,
                          text: false,
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
                          code: false,
                          help: false,
                          document: false,
                          image: false,
                          text: false,
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
                      code: false,
                      help: false,
                      document: false,
                      image: false,
                      text: false,
                    });
                  }}
                >
                  {/* sidebar */}
                  <div
                    className={`flex flex-none flex-col w-56 overflow-auto border-r border-black border-opacity-30 space-y-0.5 pt-1.5 pb-14 ${
                      programFocusState.files ? "bg-base-700" : "bg-base-800"
                    }`}
                  >
                    <div
                      onClick={() => {
                        setFileLocation({ Recent: true });
                      }}
                    >
                      <SidebarButton
                        type="Recent"
                        active={fileLocation.Recent}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Starred: true });
                      }}
                    >
                      <SidebarButton
                        type="Starred"
                        active={fileLocation.Starred}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Home: true });
                      }}
                    >
                      <SidebarButton type="Home" active={fileLocation.Home} />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Desktop: true });
                      }}
                    >
                      <SidebarButton
                        type="Desktop"
                        active={fileLocation.Desktop}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Documents: true });
                      }}
                    >
                      <SidebarButton
                        type="Documents"
                        active={fileLocation.Documents}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Downloads: true });
                      }}
                    >
                      <SidebarButton
                        type="Downloads"
                        active={fileLocation.Downloads}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Music: true });
                      }}
                    >
                      <SidebarButton type="Music" active={fileLocation.Music} />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Pictures: true });
                      }}
                    >
                      <SidebarButton
                        type="Pictures"
                        active={fileLocation.Pictures}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Videos: true });
                      }}
                    >
                      <SidebarButton
                        type="Videos"
                        active={fileLocation.Videos}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setFileLocation({ Trash: true });
                      }}
                    >
                      <SidebarButton type="Trash" active={fileLocation.Trash} />
                    </div>
                  </div>
                  {/* content */}

                  {fileLocation.Recent && <Empty />}
                  {fileLocation.Downloads && <Empty />}
                  {fileLocation.Trash && <Empty />}
                  <div className="flex w-full items-start py-2 px-3 overflow-y-auto">
                    <div className="flex flex-wrap -mr-6">
                      {fileLocation.Starred && (
                        <Starred
                          fileLocation={fileLocation}
                          setFileLocation={setFileLocation}
                        />
                      )}
                      {fileLocation.Home && (
                        <Home
                          fileLocation={fileLocation}
                          setFileLocation={setFileLocation}
                        />
                      )}
                      {fileLocation.Desktop && (
                        <Desktop
                          fileLocation={fileLocation}
                          setFileLocation={setFileLocation}
                        />
                      )}
                      {fileLocation.Documents && <></>}
                      {fileLocation.Music && <></>}
                      {fileLocation.Pictures && <></>}
                      {fileLocation.Coding && (
                        <Coding
                          fileLocation={fileLocation}
                          setFileLocation={setFileLocation}
                        />
                      )}
                      {fileLocation.Works && (
                        <Works
                          fileLocation={fileLocation}
                          setFileLocation={setFileLocation}
                        />
                      )}
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
          {type === "Downloads" && <MdDownload className="text-xl" />}
          {type === "Music" && <HiMusicNote className="text-xl" />}
          {type === "Pictures" && <AiFillPicture className="text-xl" />}
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
          {type === "Downloads" && <MdDownload className="text-xl" />}
          {type === "Music" && <HiMusicNote className="text-xl" />}
          {type === "Pictures" && <AiFillPicture className="text-xl" />}
          {type === "Videos" && <FiFilm className="text-xl" />}
          {type === "Trash" && <BiTrash className="text-xl" />}
          <p>{type}</p>
        </div>
      )}
    </>
  );
}
