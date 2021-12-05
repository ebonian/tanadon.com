import { useContext, useState } from "react";
import Draggable from "react-draggable";
import Control from "./control";
import { ProgramState } from ".";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { BiEditAlt, BiSidebar } from "react-icons/bi";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

import แบบสรุปอันดับ from "../../images/แบบสรุปอันดับ.jpg";
import Transcript1 from "../../images/Transcript_1.jpg";
import Transcript2 from "../../images/Transcript_2.jpg";
import ปพ11 from "../../images/ปพ.1_1.jpg";
import ปพ12 from "../../images/ปพ.1_2.jpg";

export default function Document() {
  const {
    setProgramActiveState,
    programActiveState,
    setProgramOpenState,
    programOpenState,
    setProgramFocusState,
    programFocusState,
    setProgramMinimizeState,
    programMinimizeState,
    documentLocation,
    setDocumentLocation,
  } = useContext(ProgramState);

  return (
    <>
      {programMinimizeState.document ? (
        <></>
      ) : (
        <>
          {programFocusState.document || programOpenState.document ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-gray-800 w-firefox h-firefox overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.document ? "z-40" : "z-30"
                } ${
                  programFocusState.document
                    ? "bg-base-500"
                    : "bg-base-900 text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
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
                <strong>
                  <Control window="Document" />
                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 text-white ${
                      programFocusState.document ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
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
                      <div className="flex items-center space-x-2 mr-52">
                        {/* <div className="flex justify-center items-center h-9 w-16 bg-base-500 rounded-l border-t border-l border-b border-base-300 border-opacity-80 font-normal text-sm">
                          <p className="opacity-30">Open</p>
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80">
                          <GoTriangleDown className="opacity-30" />
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80 ml-2">
                          <FiPlusSquare className="opacity-30" />
                        </div> */}
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded border border-base-300 border-opacity-80">
                          <BiSidebar className="opacity-30" />
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded border border-base-300 border-opacity-80">
                          <BiEditAlt className="opacity-30" />
                        </div>
                      </div>
                    </div>
                    {/* center */}
                    <div
                      className="flex flex-grow flex-col h-full items-center justify-center"
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
                      {documentLocation.แบบสรุปอันดับ && (
                        <>
                          <p className="font-medium text-sm">
                            แบบสรุปอันดับนักเรียน โครงการเรียนดี ช้างเผือก
                          </p>
                          <p className="font-normal text-xs text-gray-400">
                            แบบสรุปอันดับนักเรียน.pdf
                          </p>
                        </>
                      )}
                      {documentLocation.Transcript && (
                        <>
                          <p className="font-medium text-sm">
                            Tanadon Santisan Transcript
                          </p>
                          <p className="font-normal text-xs text-gray-400">
                            Transcript.pdf
                          </p>
                        </>
                      )}
                      {documentLocation.ปพ1 && (
                        <>
                          <p className="font-medium text-sm">
                            ระเบียนแสดงผลการเรียน ธนดล ศานติสรร (ปพ.1)
                          </p>
                          <p className="font-normal text-xs text-gray-400">
                            ปพ1.pdf
                          </p>
                        </>
                      )}
                    </div>
                    {/* right */}
                    <div
                      className="flex items-center space-x-2"
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
                      <div className="flex justify-between items-center h-9 w-24 bg-base-500 rounded border border-base-300 border-opacity-80 px-4">
                        <p className="font-normal opacity-30">100%</p>
                        <GoTriangleDown className="opacity-30" />
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
                <div
                  className="text-black select-text h-full overflow-y-auto pt-12 pb-24 flex flex-col justify-start items-center px-32 space-y-6"
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
                  {documentLocation.แบบสรุปอันดับ && (
                    <>
                      <img src={แบบสรุปอันดับ} className="shadow-xl" />
                    </>
                  )}
                  {documentLocation.Transcript && (
                    <>
                      <img src={Transcript1} className="shadow-xl" />
                      <img src={Transcript2} className="shadow-xl" />
                    </>
                  )}
                  {documentLocation.ปพ1 && (
                    <>
                      <img src={ปพ11} className="shadow-xl" />
                      <img src={ปพ12} className="shadow-xl" />
                    </>
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
