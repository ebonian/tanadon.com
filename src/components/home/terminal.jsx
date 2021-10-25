import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { ProgramState } from ".";
import Control from "./control";

export default function Terminal() {
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
      {programMinimizeState.terminal ? (
        <></>
      ) : (
        <>
          {programFocusState.terminal || programOpenState.terminal ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-gray-800 w-terminal h-terminal overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.terminal ? "z-40" : "z-30"
                } ${
                  programFocusState.terminal
                    ? "bg-base-terminalFocus"
                    : "bg-base-terminalUnfocus text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: false,
                    terminal: true,
                  });
                }}
              >
                {/* header */}
                <strong>
                  <Control window="Terminal" />
                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 font-normal text-white ${
                      programFocusState.terminal ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: false,
                        files: false,
                        terminal: true,
                      });
                    }}
                  >
                    {/* new tab */}
                    <div className="flex items-center">
                      <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                        <FiPlusSquare className="text-xl" />
                      </div>
                    </div>
                    {/* terminal name */}
                    <div className="pl-12 md:pl-36 whitespace-nowrap">
                      <h1>tanadon@tanadon: ~</h1>
                    </div>
                    {/* find & menu */}
                    <div className="flex items-center space-x-2">
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
                  className="flex h-full w-full overflow-auto select-text px-1"
                  onClick={() => {
                    setProgramActiveState({
                      firefox: false,
                      files: false,
                      terminal: true,
                    });
                  }}
                >
                  <p>
                    <span className="font-medium">
                      <span className="text-secondary-500">
                        tanadon@tanadon:
                      </span>
                      <span className="text-blue-500">~</span>
                    </span>
                    $
                  </p>
                  {/* <div className="w-2.5 h-5 mt-0.5 ml-2.5 bg-white animate-blink" /> */}
                  <textarea
                    className={`outline-none ml-1 w-full ${
                      programFocusState.terminal
                        ? "bg-base-terminalFocus"
                        : "bg-base-terminalUnfocus text-opacity-40"
                    }`}
                  />
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
