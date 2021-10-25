import { useContext, useState } from "react";
import Draggable from "react-draggable";
import Control from "./control";
import { ProgramState } from ".";

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
                className={`absolute text-white resize border border-gray-800 w-terminal h-terminal overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.help ? "z-40" : "z-30"
                } ${
                  programFocusState.help
                    ? "bg-base-500"
                    : "bg-base-900 text-opacity-40"
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
                <strong>
                  <Control window="Help" />
                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 font-normal text-white ${
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
                    <p>Help</p>
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
