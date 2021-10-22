import { useEffect, useState } from "react";
import { GoTriangleRight } from "react-icons/go";

import WindowsIcon from "../../images/windows-start-icon.png";
import DocumentsIcon from "../../images/document-icon.png";
import ProgramsIcon from "../../images/programs-icon.png";
import FindIcon from "../../images/find-icon.png";
import SettingsIcon from "../../images/settings-icon.png";
import ShutdownIcon from "../../images/shutdown-icon.ico";
import HelpIcon from "../../images/help-icon.png";
import MSDOSIcon from "../../images/ms-dos-logo.ico";
import InternetIcon from "../../images/internet-icon.png";
import MSNIcon from "../../images/MSN.ico";
import ExplorerIcon from "../../images/explorer-icon.ico";

export default function Taskbar() {
  // date state
  const [clockState, setClockState] = useState();

  // date format function
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  // update date
  useEffect(() => {
    setInterval(() => {
      setClockState(formatAMPM(new Date()));
    }, 1000);
  }, []);

  // start button state
  const [startButtonState, setStartButtonState] = useState(false);

  // start menu state
  const [startPrograms, setStartPrograms] = useState(false);
  const [startDocuments, setStartDocuments] = useState(false);
  const [startSettings, setStartSettings] = useState(false);
  const [startFind, setStartFind] = useState(false);

  return (
    <>
      {/* sub start menu */}
      {startPrograms === true && (
        <div
          className="flex absolute ml-60 mb-7 pl-1 bottom-64 z-50"
          onMouseEnter={() => {
            setStartPrograms(true);
          }}
          onMouseLeave={() => {
            setStartPrograms(false);
          }}
        >
          <div className="flex flex-col h-40 w-56 bg-primary border-2 border-darkActive select-none">
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={ProgramsIcon} alt="accessories" className="h-6" />
              <p>Accessories</p>
            </div>
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={ProgramsIcon} alt="startup" className="h-6" />
              <p>StartUp</p>
            </div>
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={InternetIcon} alt="internet" className="h-8 -mx-4" />
              <p>Internet Explorer</p>
            </div>
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={MSDOSIcon} alt="ms-dos" className="h-4 mx-1" />
              <p>MS-DOS Prompt</p>
            </div>
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={MSNIcon} alt="msn" className="h-4 ml-1 mr-0.5" />
              <p>The Microsoft Network</p>
            </div>
            <div className="flex justify-start items-center flex-grow hover:bg-secondary-200 hover:text-white cursor-pointer px-2 space-x-1">
              <img src={ExplorerIcon} alt="explorer" className="h-4 mx-1" />
              <p>Windows Explorer</p>
            </div>
          </div>
        </div>
      )}
      {startDocuments === true && (
        <div className="flex absolute ml-60 pl-1 bottom-56 z-50">
          <div className="flex h-40 w-52 bg-primary border-2 border-darkActive"></div>
        </div>
      )}
      {startSettings === true && (
        <div className="flex absolute ml-60 mb-2 pl-1 bottom-40 z-50">
          <div className="flex h-40 w-52 bg-primary border-2 border-darkActive"></div>
        </div>
      )}
      {startFind === true && (
        <div className="flex absolute ml-60 pl-1 bottom-28 z-50">
          <div className="flex h-40 w-52 bg-primary border-2 border-darkActive"></div>
        </div>
      )}

      {/* start menu */}
      {startButtonState === true && (
        <div
          className="fixed h-screen w-full"
          onClick={() => {
            setStartButtonState(false);
            setStartDocuments(false);
            setStartFind(false);
            setStartPrograms(false);
            setStartSettings(false);
          }}
        >
          <div className="absolute bottom-11 select-none">
            <div className="flex w-start h-start bg-primary border-t-4 border-l-4 border-r-2 border-b-2 border-darkActive">
              {/* sidebar */}
              <div className="flex justify-start items-end h-full w-10 bg-secondary-100">
                <h1 className="text-3xl text-primary font-bold -rotate-90 mb-20 -ml-16">
                  Windows<span className="text-white font-light">95</span>
                </h1>
              </div>
              {/* applications */}
              <div className="flex flex-col flex-grow justify-between space-y-0.5">
                <div
                  className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer"
                  onMouseEnter={() => {
                    setStartPrograms(true);
                  }}
                  onMouseLeave={() => {
                    setStartPrograms(false);
                  }}
                >
                  <div className="flex justify-start items-center space-x-2">
                    <img src={ProgramsIcon} alt="programs" className="h-12" />
                    <p>
                      <span className="underline">P</span>rograms
                    </p>
                  </div>
                  <GoTriangleRight />
                </div>
                <div
                  className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer"
                  onMouseEnter={() => {
                    setStartDocuments(true);
                  }}
                  onMouseLeave={() => {
                    setStartDocuments(false);
                  }}
                >
                  <div className="flex justify-start items-center space-x-2">
                    <img src={DocumentsIcon} alt="documents" className="h-12" />
                    <p>
                      <span className="underline">D</span>ocuments
                    </p>
                  </div>
                  <GoTriangleRight />
                </div>
                <div
                  className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer"
                  onMouseEnter={() => {
                    setStartSettings(true);
                  }}
                  onMouseLeave={() => {
                    setStartSettings(false);
                  }}
                >
                  <div className="flex justify-start items-center space-x-2">
                    <img src={SettingsIcon} alt="settings" className="h-12" />
                    <p>
                      <span className="underline">S</span>ettings
                    </p>
                  </div>
                  <GoTriangleRight />
                </div>
                <div
                  className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer"
                  onMouseEnter={() => {
                    setStartFind(true);
                  }}
                  onMouseLeave={() => {
                    setStartFind(false);
                  }}
                >
                  <div className="flex justify-start items-center space-x-2">
                    <img src={FindIcon} alt="find" className="h-12" />
                    <p>
                      <span className="underline">F</span>ind
                    </p>
                  </div>
                  <GoTriangleRight />
                </div>
                <div className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer">
                  <div className="flex justify-start items-center space-x-3">
                    <img src={HelpIcon} alt="help" className="h-9 ml-2" />
                    <p>
                      <span className="underline">H</span>elp
                    </p>
                  </div>
                </div>
                <div className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer">
                  <div className="flex justify-start items-center space-x-2">
                    <img src={DocumentsIcon} alt="run" className="h-12" />
                    <p>
                      <span className="underline">R</span>un
                    </p>
                  </div>
                </div>
                <div className="flex w-full h-2 bg-black" />
                <div className="flex w-full h-full justify-between items-center hover:bg-secondary-200 hover:text-white px-1 cursor-pointer">
                  <div className="flex justify-start items-center space-x-2">
                    <img src={ShutdownIcon} alt="shutdown" className="h-12" />
                    <p>
                      S<span className="underline">h</span>ut Down...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* task bar */}
      <div className="flex justify-between items-center h-12 w-full bg-primary border-t-4 border-white py-1 px-1 select-none">
        <div className="flex h-9 w-full items-center">
          {startButtonState === true ? (
            <div
              className="flex justify-center items-center h-full w-24 bg-primary border-2 border-darkInactive p-0.5 space-x-2 font-bold text-lg"
              onClick={() => {
                setStartButtonState(false);
              }}
            >
              <div className="flex space-x-2 justify-center items-center h-full w-24 border-2 border-dotted border-gray-800 p-0.5">
                <img src={WindowsIcon} alt="windows icon" className="h-full" />
                <p> Start</p>
              </div>
            </div>
          ) : (
            <div
              className="flex justify-center items-center h-full w-24 bg-primary border-2 border-darkActive py-1 px-2 space-x-2 font-bold text-lg"
              onClick={() => {
                setStartButtonState(true);
              }}
            >
              <img src={WindowsIcon} alt="windows icon" className="h-full" />
              <p> Start</p>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center w-20 h-full bg-primary border-2 border-lightInactive">
          <p>{clockState}</p>
        </div>
      </div>
    </>
  );
}
