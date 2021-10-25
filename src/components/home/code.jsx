import { useContext, useState } from "react";
import Draggable from "react-draggable";
import Control from "./control";
import { ProgramState } from ".";

export default function Code() {
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
      {programMinimizeState.code ? (
        <></>
      ) : (
        <>
          {programFocusState.code || programOpenState.code ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-gray-800 w-firefox h-firefox overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.code ? "z-40" : "z-30"
                } ${
                  programFocusState.code
                    ? "bg-base-500"
                    : "bg-base-900 text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: false,
                    terminal: false,
                    code: true,
                    help: false,
                    document: false,
                    image: false,
                    text: false,
                  });
                }}
              >
                <strong>
                  <Control window="Code" />
                  <div
                    className={`flex justify-center items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 font-medium text-white ${
                      programFocusState.code ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: false,
                        files: false,
                        terminal: false,
                        code: true,
                        help: false,
                        document: false,
                        image: false,
                        text: false,
                      });
                    }}
                  >
                    <p>Get Started - tanadon-portfolio - Visual Studio Code</p>
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
