import { useEffect, useState } from "react";

import { RiSettingsLine, RiShutDownLine } from "react-icons/ri";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BiLockAlt, BiWifi2 } from "react-icons/bi";
import { MdSignalWifiStatusbarNull, MdVolumeDown } from "react-icons/md";
import { FaLock, FaTools, FaUser } from "react-icons/fa";

export default function Header({
  activitiesActiveState,
  setActivitiesActiveState,
  systemDropdownState,
  setSystemDropdownState,
  setLogin,
}) {
  // date state
  const [clockState, setClockState] = useState();

  // date format function
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes;
    return strTime;
  }

  // update date
  useEffect(() => {
    setClockState(formatAMPM(new Date()));
    setInterval(() => {
      setClockState(formatAMPM(new Date()));
    }, 1000);
  }, []);

  const formatDate = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
  });

  return (
    <div className="flex justify-center items-center w-full h-8 bg-base-300 text-white z-50">
      <div
        className={`absolute left-0 px-3 top-0 pt-1 text-gray-300 h-8 cursor-pointer ${
          activitiesActiveState && "border-b-2 border-primary"
        }`}
        onClick={() => {
          setActivitiesActiveState(!activitiesActiveState);
        }}
      >
        <p>Acitivities</p>
      </div>

      <div className="flex items-center text-gray-200">
        <p>{formatDate.format(new Date()) + " " + clockState}</p>
      </div>
      {/* utilities icon */}
      <div className="flex flex-col absolute right-0 top-1 items-end text-lg z-50">
        <div
          className={`flex space-x-3 items-center cursor-pointer pb-0.5 px-3 ${
            systemDropdownState && "border-b-2 border-primary"
          }`}
          onClick={() => {
            setSystemDropdownState(!systemDropdownState);
          }}
        >
          <BiWifi2 className="mb-1 text-xl" />
          <BsFillVolumeUpFill />
          <RiShutDownLine />
          <GoTriangleDown className="text-sm" />
        </div>
        <div className="flex flex-col justify-center items-end mt-4 shadow-lg text-gray-700">
          {/* dropdown */}
          {systemDropdownState && (
            <ActionCenter page="home" setLogin={setLogin} setSystemDropdownState={setSystemDropdownState} />
          )}
        </div>
      </div>
    </div>
  );
}

function ActionCenter({ setLogin, page, setSystemDropdownState }) {
  const [menuDropdownState, setMenuDropdownState] = useState({
    connection: false,
    user: false,
    power: false,
  });
  return (
    <>
      <div className="flex bg-base-100 w-4 h-4 rotate-45 mr-7 border-t border-l border-black border-opacity-20" />
      <div className="flex flex-col justify-start items-center pt-4 pb-6 px-5 bg-base-100 -mt-2 w-72 rounded-md border border-black border-opacity-20 space-y-4 duration-300">
        {/* volume slider */}
        <div className="flex w-full justify-center items-center space-x-2">
          <MdVolumeDown className="text-2xl" />
          <input
            type="range"
            defaultValue={30}
            className="w-full h-1"
            id="volume-slider"
          />
        </div>
        {/* divider */}
        <div className="w-28 h-px bg-black bg-opacity-25" />
        {/* settings */}
        <div className="flex flex-col items-center w-full text-sm space-y-4">
          {/* connection menu */}
          <div
            className={`flex w-full justify-between items-center cursor-pointer ${
              menuDropdownState.connection && "pb-16"
            }`}
            onClick={() => {
              setMenuDropdownState({
                connection: !menuDropdownState.connection,
              });
            }}
          >
            <div className="flex space-x-2 items-center">
              <BiWifi2 className="text-xl " />
              <p>Wireless Connected</p>
            </div>
            {menuDropdownState.connection ? (
              <GoTriangleDown className="text-sm" />
            ) : (
              <GoTriangleRight className="text-sm" />
            )}
          </div>
          {menuDropdownState.connection && (
            <div className="flex absolute w-72 justify-start items-start pt-3">
              <div className="flex flex-col space-y-3 w-72 flex-grow bg-black border-t border-b border-black border-opacity-15 bg-opacity-3 px-12 py-1.5">
                <p className="cursor-pointer">Turn Off</p>
                <p className="cursor-pointer">Wireless Settings</p>
              </div>
            </div>
          )}

          {/* user menu */}
          <div
            className={`flex w-full justify-between items-center cursor-pointer ${
              menuDropdownState.user && "pb-10"
            }`}
            onClick={() => {
              setMenuDropdownState({
                user: !menuDropdownState.user,
              });
            }}
          >
            <div className="flex space-x-2">
              <FaUser className="text-lg pt-1 pb-0.5 ml-0.5" />
              <p>Tanadon Santisan</p>
            </div>
            {menuDropdownState.user ? (
              <GoTriangleDown className="text-sm" />
            ) : (
              <GoTriangleRight className="text-sm" />
            )}
          </div>
          {menuDropdownState.user && (
            <div className="flex absolute w-72 justify-start items-start top-40 pt-3">
              <div className="flex flex-col space-y-3 w-72 flex-grow bg-black border-t border-b border-black border-opacity-15 bg-opacity-3 px-12 py-1.5">
                <p className="cursor-pointer">Account Settings</p>
              </div>
            </div>
          )}
        </div>
        {/* divider */}
        <div className="w-28 h-px bg-black bg-opacity-25" />
        {/* button */}
        <div className="flex flex-col items-center w-full text-sm space-y-4">
          <div className="flex w-full justify-between items-center cursor-pointer">
            <div className="flex space-x-2 items-center">
              <RiSettingsLine className="text-xl mr-0.5 pl-0.5" />
              <p>Settings</p>
            </div>
          </div>
          <div className="flex w-full justify-between items-center cursor-pointer">
            <div className="flex space-x-2 items-center">
              <BiLockAlt className="text-xl mr-0.5 pl-0.5" />
              <p>Lock</p>
            </div>
          </div>

          {/* power menu */}
          <div
            className={`flex w-full justify-between items-center cursor-pointer ${
              menuDropdownState.power && "pb-28"
            }`}
            onClick={() => {
              setMenuDropdownState({
                power: !menuDropdownState.power,
              });
            }}
          >
            <div className="flex space-x-2">
              <RiShutDownLine className="text-xl pl-0.5 mr-0.5" />
              <p>Power Off / Log Out</p>
            </div>
            {menuDropdownState.power ? (
              <GoTriangleDown className="text-sm" />
            ) : (
              <GoTriangleRight className="text-sm" />
            )}
          </div>
          {menuDropdownState.power && (
            <div className="flex absolute w-72 justify-start items-start top-72 pt-3">
              <div className="flex flex-col space-y-3 w-72 flex-grow bg-black border-t border-b border-black border-opacity-15 bg-opacity-3 px-12 py-1.5">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setLogin("logging in");
                  }}
                >
                  Log Out
                </p>
                <div className="flex justify-center items-center w-full py-0.5">
                  <div className="w-28 h-px bg-black bg-opacity-25" />
                </div>
                <p className="cursor-pointer">Suspend</p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setLogin("shutting down");
                    setSystemDropdownState(false)
                  }}
                >
                  Power Off...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
