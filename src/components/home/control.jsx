import { useContext } from "react";
import { ProgramState } from "./index";
import { BiX, BiMinus, BiSquare } from "react-icons/bi";

export default function Control({ window }) {
  return (
    <>
      {window === "Firefox" && (
        <>
          <Firefox />
        </>
      )}
      {window === "Files" && (
        <>
          <div className="w-28" />
          <Files />
        </>
      )}
      {window === "Terminal" && (
        <>
          <Terminal />
        </>
      )}
    </>
  );
}

function Firefox() {
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
    <div
      className={`flex absolute right-0 top-0 pr-4 rounded-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.firefox ? "bg-base-600" : "bg-base-400"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            firefox: false,
          });
          setProgramActiveState({
            ...programActiveState,
            firefox: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            firefox: true,
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
          programFocusState.firefox ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setProgramActiveState({
            ...programActiveState,
            firefox: false,
          });
          setProgramOpenState({
            ...programOpenState,
            firefox: false,
          });
          setProgramFocusState({
            ...programFocusState,
            firefox: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            firefox: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}

function Files() {
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
    <div
      className={`flex absolute right-0 top-0 pr-4 rounded-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.files ? "bg-base-600" : "bg-base-400"
      }`}
    >
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
          programFocusState.files ? "bg-primary" : "bg-white bg-opacity-10"
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
            files: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}

function Terminal() {
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
    <div
      className={`flex absolute right-0 top-0 pr-4 rounded-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.terminal ? "bg-base-600" : "bg-base-400"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            terminal: false,
          });
          setProgramActiveState({
            ...programActiveState,
            terminal: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            terminal: true,
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
          programFocusState.terminal ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setProgramActiveState({
            ...programActiveState,
            terminal: false,
          });
          setProgramOpenState({
            ...programOpenState,
            terminal: false,
          });
          setProgramFocusState({
            ...programFocusState,
            terminal: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            terminal: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}
