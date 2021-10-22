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

import DesktopFilesIcon from "../../images/desktop-files-icon.png";
import DocumentsFilesIcon from "../../images/documents-files-icon.png";
import DownloadsFilesIcon from "../../images/downloads-files-icon.png";
import MusicFilesIcon from "../../images/music-files-icon.png";
import PicturesFilesIcon from "../../images/pictures-files-icon.png";
import VideosFilesIcon from "../../images/videos-files-icon.png";
import FolderIcon from "../../images/folder-icon.png";

export default function Files({
  setProgramActiveState,
  programActiveState,
  setProgramOpenState,
  programOpenState,
  setProgramFocusState,
  programFocusState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <>
      {programMinimizeState.files ? (
        <></>
      ) : (
        <>
          {programFocusState.files || programOpenState.files ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute bg-base-500 text-white resize border border-black border-opacity-20 w-window h-window overflow-auto overflow-y-hidden overflow-x-hidden rounded-md shadow-lg ${
                  programFocusState.files ? "z-40" : "z-30"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: true,
                    terminal: false,
                  });
                }}
              >
                <strong>
                  <div className="flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 bg-base-600 rounded-t-md">
                    {/* left */}
                    <div className="flex space-x-3">
                      <div className="flex items-center">
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-l border-t border-l border-b border-base-300 border-opacity-80">
                          <BsChevronCompactLeft className="text-xl opacity-30" />
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80">
                          <BsChevronCompactRight className="text-xl opacity-30" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center h-9 w-32 bg-base-700 rounded border border-base-300 border-opacity-80 cursor-pointer space-x-3 text-gray-300">
                          <AiOutlineHome className="text-lg" />
                          <p className="font-normal">Home</p>
                          <GoTriangleDown />
                        </div>
                      </div>
                    </div>
                    {/* right */}
                    <div className="flex space-x-5 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <div className="flex justify-center items-center h-9 w-9 bg-base-700 rounded border border-base-300 border-opacity-80 cursor-pointer">
                          <BiSearch className="text-xl" />
                        </div>
                        <div className="flex">
                          <div className="flex justify-center items-center h-9 w-9 bg-base-700 rounded-l border-t border-l border-b border-base-300 border-opacity-80 cursor-pointer">
                            <BiListUl className="text-2xl" />
                          </div>
                          <div className="flex justify-center items-center h-9 w-9 bg-base-700 rounded-r border border-base-300 border-opacity-80 cursor-pointer">
                            <GoTriangleDown />
                          </div>
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-700 rounded border border-base-300 border-opacity-80 cursor-pointer">
                          <BiMenu className="text-xl" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-5 text-white">
                        <div
                          className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
                          onClick={() => {
                            setProgramFocusState({
                              ...programFocusState,
                              files: false,
                            });
                            setProgramActiveState({
                              ...programActiveState,
                              files: false,
                            });
                            setProgramMinimizeState({
                              ...programMinimizeState,
                              files: true,
                            });
                          }}
                        >
                          <BiMinus />
                        </div>
                        <div className="flex justify-center items-center w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-1.5 rounded-full cursor-pointer">
                          <BiSquare />
                        </div>
                        <div
                          className={`flex justify-center items-center w-6 h-6 rounded-full cursor-pointer ${
                            programFocusState.files
                              ? "bg-primary"
                              : "bg-white bg-opacity-10"
                          }`}
                          onClick={() => {
                            setProgramActiveState({
                              ...programActiveState,
                              files: false,
                            });
                            setProgramOpenState({
                              ...programOpenState,
                              files: false,
                            });
                            setProgramFocusState({
                              ...programFocusState,
                              files: false,
                            });
                            setProgramMinimizeState({
                              ...programMinimizeState,
                              files: false,
                            });
                          }}
                        >
                          <BiX className="text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </strong>

                {/* body */}
                <div className="flex h-full text-md border-t border-black border-opacity-30">
                  {/* sidebar */}
                  <div className="flex flex-none flex-col w-56 bg-base-700 overflow-auto border-r border-black border-opacity-30">
                    <SidebarButton type="Recent" />
                    <SidebarButton type="Starred" />
                    <SidebarButton type="Home" />
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
                      <Folder name="Coding" />
                      <Folder name="Desktop" />
                      <Folder name="Documents" />
                      <Folder name="Downloads" />
                      <Folder name="Music" />
                      <Folder name="Pictures" />
                      <Folder name="Portfolio" />
                      <Folder name="Videos" />
                      <Folder name="Works" />
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

function SidebarButton({ type }) {
  return (
    <div className="flex items-center justify-start w-full space-x-2 cursor-pointer hover:bg-primary px-4 py-3">
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
  );
}

function Folder({ name }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5">
      {name === "Coding" && <img src={FolderIcon} />}
      {name === "Desktop" && <img src={DesktopFilesIcon} />}
      {name === "Documents" && <img src={DocumentsFilesIcon} />}
      {name === "Downloads" && <img src={DownloadsFilesIcon} />}
      {name === "Music" && <img src={MusicFilesIcon} />}
      {name === "Pictures" && <img src={PicturesFilesIcon} />}
      {name === "Portfolio" && <img src={FolderIcon} />}
      {name === "Videos" && <img src={VideosFilesIcon} />}
      {name === "Works" && <img src={FolderIcon} />}
      <p>{name}</p>
    </div>
  );
}
