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
import Control from "./control";

export default function Firefox({
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
      {programMinimizeState.firefox ? (
        <></>
      ) : (
        <>
          {programFocusState.firefox || programOpenState.firefox ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute bg-base-500 text-white resize border border-black border-opacity-20 w-firefox h-firefox overflow-auto overflow-y-hidden overflow-x-hidden rounded-md shadow-lg ${
                  programFocusState.firefox ? "z-40" : "z-30"
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
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 ${
                      programFocusState.firefox ? "bg-base-600" : "bg-base-400"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: true,
                        files: false,
                        terminal: false,
                      });
                    }}
                  >
                    <div>dfasd</div>
                  </div>
                </strong>
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
