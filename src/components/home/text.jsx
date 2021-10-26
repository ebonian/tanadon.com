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
import { FiPlusSquare } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

export default function Text() {
  const {
    setProgramActiveState,
    programActiveState,
    setProgramOpenState,
    programOpenState,
    setProgramFocusState,
    programFocusState,
    setProgramMinimizeState,
    programMinimizeState,
    textLocation,
    setTextLocation,
  } = useContext(ProgramState);

  const [saveButton, setSaveButton] = useState(false);
  return (
    <>
      {programMinimizeState.text ? (
        <></>
      ) : (
        <>
          {programFocusState.text || programOpenState.text ? (
            <Draggable bounds="parent" handle="strong">
              <div
                className={`absolute text-white resize border border-gray-800 w-1/4 h-2/4 overflow-auto overflow-y-hidden overflow-x-hidden rounded-t-md shadow-xl ${
                  programFocusState.text ? "z-40" : "z-30"
                } ${
                  programFocusState.text
                    ? "bg-white"
                    : "bg-white text-opacity-40"
                }`}
                onClick={() => {
                  setProgramFocusState({
                    firefox: false,
                    files: false,
                    terminal: false,
                    code: false,
                    help: false,
                    document: false,
                    image: false,
                    text: true,
                  });
                }}
              >
                <strong>
                  <Control window="Text" />
                  <div
                    className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 text-white ${
                      programFocusState.text ? "bg-base-600" : "bg-base-700"
                    } rounded-t-md`}
                    onClick={() => {
                      setProgramActiveState({
                        firefox: false,
                        files: false,
                        terminal: false,
                        code: false,
                        help: false,
                        document: false,
                        image: false,
                        text: true,
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
                          document: false,
                          image: false,
                          text: true,
                        });
                      }}
                    >
                      <div className="flex items-center">
                        <div className="flex justify-center items-center h-9 w-16 bg-base-500 rounded-l border-t border-l border-b border-base-300 border-opacity-80 font-normal text-sm">
                          <p className="opacity-30">Open</p>
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80">
                          <GoTriangleDown className="opacity-30" />
                        </div>
                        <div className="flex justify-center items-center h-9 w-9 bg-base-500 rounded-r border border-base-300 border-opacity-80 ml-2">
                          <FiPlusSquare className="opacity-30" />
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
                          document: false,
                          image: false,
                          text: true,
                        });
                      }}
                    >
                      {textLocation.readme && (
                        <>
                          <p className="font-medium text-sm">README.md</p>
                          <p className="font-normal text-xs text-gray-400">
                            ~/Desktop
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
                          document: false,
                          image: false,
                          text: true,
                        });
                      }}
                    >
                      <div
                        className={`flex justify-center items-center h-9 w-16 rounded border border-base-300 border-opacity-80 font-normal text-sm ${
                          saveButton
                            ? "bg-base-500 text-gray-300"
                            : "cursor-pointer bg-base-700 hover:bg-base-1000"
                        }`}
                        onClick={() => {
                          setSaveButton(true);
                        }}
                      >
                        {saveButton ? <p>Saved</p> : <p>Save</p>}
                      </div>

                      <div className="flex justify-center items-center h-9 w-9 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer">
                        <BiMenu className="text-xl" />
                      </div>
                      <div className="w-32" />
                    </div>
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
