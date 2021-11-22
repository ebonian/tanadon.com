import { useContext } from "react";
import { ProgramState } from "./index";
import { BiX, BiMinus, BiSquare } from "react-icons/bi";

export default function Control({ window, setFileLocation }) {
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
          <Files setFileLocation={setFileLocation} />
        </>
      )}
      {window === "Terminal" && (
        <>
          <Terminal />
        </>
      )}
      {window === "Code" && (
        <>
          <Code />
        </>
      )}
      {window === "Help" && (
        <>
          <Help />
        </>
      )}
      {window === "Document" && (
        <>
          <Document />
        </>
      )}
      {window === "Text" && (
        <>
          <Text />
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
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.firefox ? "bg-base-600" : "bg-base-700"
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

function Files({ setFileLocation }) {
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
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.files ? "bg-base-600" : "bg-base-700"
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
          setFileLocation({
            Home: true,
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
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.terminal ? "bg-base-600" : "bg-base-700"
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

function Code() {
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
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.code ? "bg-base-600" : "bg-base-700"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            code: false,
          });
          setProgramActiveState({
            ...programActiveState,
            code: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            code: true,
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
          programFocusState.code ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setProgramActiveState({
            ...programActiveState,
            code: false,
          });
          setProgramOpenState({
            ...programOpenState,
            code: false,
          });
          setProgramFocusState({
            ...programFocusState,
            code: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            code: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}

function Help() {
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
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.help ? "bg-base-600" : "bg-base-700"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            help: false,
          });
          setProgramActiveState({
            ...programActiveState,
            help: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            help: true,
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
          programFocusState.help ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setProgramActiveState({
            ...programActiveState,
            help: false,
          });
          setProgramOpenState({
            ...programOpenState,
            help: false,
          });
          setProgramFocusState({
            ...programFocusState,
            help: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            help: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}

function Document() {
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
    <div
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.document ? "bg-base-600" : "bg-base-700"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            document: false,
          });
          setProgramActiveState({
            ...programActiveState,
            document: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            document: true,
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
          programFocusState.text ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setDocumentLocation({
            default: true,
          });
          setProgramActiveState({
            ...programActiveState,
            document: false,
          });
          setProgramOpenState({
            ...programOpenState,
            document: false,
          });
          setProgramFocusState({
            ...programFocusState,
            document: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            document: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}
function Text() {
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
  return (
    <div
      className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white ${
        programFocusState.text ? "bg-base-600" : "bg-base-700"
      }`}
    >
      <div
        className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer"
        onClick={() => {
          setProgramFocusState({
            ...programFocusState,
            text: false,
          });
          setProgramActiveState({
            ...programActiveState,
            text: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            text: true,
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
          programFocusState.text ? "bg-primary" : "bg-white bg-opacity-10"
        }`}
        onClick={() => {
          setTextLocation({
            default: true,
          });
          setProgramActiveState({
            ...programActiveState,
            text: false,
          });
          setProgramOpenState({
            ...programOpenState,
            text: false,
          });
          setProgramFocusState({
            ...programFocusState,
            text: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            text: true,
          });
        }}
      >
        <BiX className="text-lg" />
      </div>
    </div>
  );
}
