import { useState } from "react";
import { FaCircle } from "react-icons/fa";

import FirefoxIcon from "../../images/firefox-logo.png";
import FilesIcon from "../../images/files-icon.png";
import TerminalIcon from "../../images/terminal-icon.png";

export default function Sidebar({
  setProgramActiveState,
  programActiveState,
  setProgramOpenState,
  programOpenState,
  activitiesActiveState,
  setActivitiesActiveState,
  setProgramFocusState,
  programFocusState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <div
      className={`flex flex-col justify-between items-center h-full w-16 bg-black z-50 ${
        activitiesActiveState ? "bg-opacity-60" : "bg-opacity-50"
      } duration-300`}
    >
      <div className="flex flex-col items-center w-16 flex-grow p-1 space-y-1">
        <FirefoxProgram
          open={programOpenState.firefox}
          active={programActiveState.firefox}
          setProgramActiveState={setProgramActiveState}
          setProgramOpenState={setProgramOpenState}
          programOpenState={programOpenState}
          setActivitiesActiveState={setActivitiesActiveState}
          setProgramFocusState={setProgramFocusState}
          programFocusState={programFocusState}
          setProgramMinimizeState={setProgramMinimizeState}
          programMinimizeState={programMinimizeState}
        />
        <FilesProgram
          open={programOpenState.files}
          active={programActiveState.files}
          setProgramActiveState={setProgramActiveState}
          setProgramOpenState={setProgramOpenState}
          programOpenState={programOpenState}
          setActivitiesActiveState={setActivitiesActiveState}
          setProgramFocusState={setProgramFocusState}
          programFocusState={programFocusState}
          setProgramMinimizeState={setProgramMinimizeState}
          programMinimizeState={programMinimizeState}
        />
        <TerminalProgram
          open={programOpenState.terminal}
          active={programActiveState.terminal}
          setProgramActiveState={setProgramActiveState}
          setProgramOpenState={setProgramOpenState}
          programOpenState={programOpenState}
          setActivitiesActiveState={setActivitiesActiveState}
          setProgramFocusState={setProgramFocusState}
          programFocusState={programFocusState}
          setProgramMinimizeState={setProgramMinimizeState}
          programMinimizeState={programMinimizeState}
        />
      </div>
      <div className="flex items-center justify-center w-16 h-16 p-1">
        <AppDrawer
          activitiesActiveState={activitiesActiveState}
          setActivitiesActiveState={setActivitiesActiveState}
        />
      </div>
    </div>
  );
}

function FirefoxProgram({
  active,
  open,
  setProgramActiveState,
  programActiveState,
  setProgramOpenState,
  programOpenState,
  setActivitiesActiveState,
  setProgramFocusState,
  programFocusState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <>
      {active ? (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-25 rounded-md cursor-pointer duration-300 group"
          onClick={() => {
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Firefox</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <FaCircle className="text-primary w-1 h-1" />
            <div>
              <img src={FirefoxIcon} alt="firefox icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-0 group hover:bg-opacity-10 duration-100 rounded-md cursor-pointer"
          onClick={() => {
            setProgramActiveState({
              firefox: true,
              files: false,
              terminal: false,
            });
            setProgramOpenState({ ...programOpenState, firefox: true });
            setProgramFocusState({
              firefox: true,
              files: false,
              terminal: false,
            });
            setProgramMinimizeState({
              ...programMinimizeState,
              firefox: false,
            });
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Firefox</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <>
              {open ? (
                <FaCircle className="text-primary w-1 h-1" />
              ) : (
                <FaCircle className="text-primary w-1 h-1 opacity-0" />
              )}
            </>
            <div>
              <img src={FirefoxIcon} alt="firefox icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilesProgram({
  active,
  open,
  setProgramActiveState,
  setProgramOpenState,
  programOpenState,
  setActivitiesActiveState,
  setProgramFocusState,
  programFocusState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <>
      {active ? (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-25 rounded-md cursor-pointer duration-300 group"
          onClick={() => {
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Files</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <FaCircle className="text-primary w-1 h-1" />
            <div>
              <img src={FilesIcon} alt="files icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-0 hover:bg-opacity-10 duration-100 rounded-md cursor-pointer group"
          onClick={() => {
            setProgramActiveState({
              firefox: false,
              files: true,
              terminal: false,
            });
            setProgramOpenState({ ...programOpenState, files: true });
            setProgramFocusState({
              firefox: false,
              files: true,
              terminal: false,
            });
            setProgramMinimizeState({
              ...programMinimizeState,
              files: false,
            });
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Files</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <>
              {open ? (
                <FaCircle className="text-primary w-1 h-1" />
              ) : (
                <FaCircle className="text-primary w-1 h-1 opacity-0" />
              )}
            </>
            <div>
              <img src={FilesIcon} alt="files icon" className="w-10 h-10" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TerminalProgram({
  active,
  open,
  setProgramActiveState,
  setProgramOpenState,
  programOpenState,
  setActivitiesActiveState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <>
      {active ? (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-25 rounded-md cursor-pointer duration-300 group"
          onClick={() => {
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Terminal</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <FaCircle className="text-primary w-1 h-1" />
            <div>
              <img
                src={TerminalIcon}
                alt="terminal icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-14 w-full bg-white bg-opacity-0 hover:bg-opacity-10 duration-100 rounded-md cursor-pointer group"
          onClick={() => {
            setProgramActiveState({
              firefox: false,
              files: false,
              terminal: true,
            });
            setProgramOpenState({ ...programOpenState, terminal: true });
            setActivitiesActiveState(false);
          }}
        >
          <div className="absolute left-16 ml-2 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
            <p>Terminal</p>
          </div>
          <div className="flex flex-grow justify-start items-center space-x-1">
            <>
              {open ? (
                <FaCircle className="text-primary w-1 h-1" />
              ) : (
                <FaCircle className="text-primary w-1 h-1 opacity-0" />
              )}
            </>
            <div>
              <img
                src={TerminalIcon}
                alt="terminal icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AppDrawer({ activitiesActiveState, setActivitiesActiveState }) {
  return (
    <div className="group">
      <div className="absolute left-16 ml-2 mt-4 duration-100 bg-black bg-opacity-25 py-0.5 px-3 rounded-md text-white text-sm hidden group-hover:block z-50">
        <p>Show Applications</p>
      </div>
      <div
        className="grid grid-cols-3 gap-1.5 bg-white p-3 bg-opacity-0 hover:bg-opacity-10 duration-100 rounded-md cursor-pointer"
        onClick={() => {
          setActivitiesActiveState(!activitiesActiveState);
        }}
      >
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
        <div className="h-1.5 w-1.5 bg-white rounded-sm" />
      </div>
    </div>
  );
}
