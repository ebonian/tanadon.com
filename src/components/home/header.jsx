import { useEffect, useState } from "react";

import { RiShutDownLine } from "react-icons/ri";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BiWifi2 } from "react-icons/bi";
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
    <div className="flex justify-center items-center w-full h-8 bg-base-300 text-white">
      {activitiesActiveState ? (
        <div
          className="absolute left-0.5 px-2 top-0 pt-1 text-gray-300 h-8 font-medium border-b-2 border-primary cursor-pointer"
          onClick={() => {
            setActivitiesActiveState(false);
          }}
        >
          <p>Acitivities</p>
        </div>
      ) : (
        <div
          className="absolute left-1 px-2 top-0 pt-1 text-gray-300 h-8 cursor-pointer"
          onClick={() => {
            setActivitiesActiveState(true);
          }}
        >
          <p>Acitivities</p>
        </div>
      )}

      <div className="flex items-center text-gray-200">
        <p>{formatDate.format(new Date()) + " " + clockState}</p>
      </div>
      {/* utilities icon */}
      {systemDropdownState ? (
        <div className="flex flex-col absolute right-2 top-1.5 items-end text-lg z-50">
          <div
            className="flex space-x-3 items-center cursor-pointer"
            onClick={() => {
              setSystemDropdownState(false);
            }}
          >
            <MdSignalWifiStatusbarNull />
            <BsFillVolumeUpFill />
            <RiShutDownLine />
            <GoTriangleDown className="text-sm" />
          </div>
          <div className="flex flex-col justify-center items-end mt-4 shadow-lg">
            <div className="flex bg-base-500 w-4 h-4 rotate-45 mr-7 border-t border-l border-black border-opacity-20" />
            <div className="flex flex-col justify-start items-center py-4 px-5 bg-base-500 -mt-2 w-64 rounded-md border border-black border-opacity-20 space-y-4">
              {/* volume slider */}
              <div className="flex w-full justify-center items-center space-x-2">
                <MdVolumeDown className="text-2xl" />
                <input type="range" className="w-full h-1" />
              </div>
              {/* divider */}
              <div className="w-28 h-0.5 bg-black bg-opacity-25" />
              {/* settings */}
              <div className="flex flex-col items-center w-full text-sm space-y-4">
                <div className="flex w-full justify-between items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <MdSignalWifiStatusbarNull className="text-lg mr-0.5 pl-1" />
                    <p>Wireless Connected</p>
                  </div>
                  <GoTriangleRight className="text-sm" />
                </div>
                <div className="flex w-full justify-between items-center cursor-pointer">
                  <div className="flex space-x-2">
                    <FaUser className="text-lg pt-1 pb-0.5 ml-0.5" />
                    <p>Tanadon Santisan</p>
                  </div>
                  <GoTriangleRight className="text-sm" />
                </div>
              </div>
              {/* divider */}
              <div className="w-28 h-0.5 bg-black bg-opacity-25" />
              {/* button */}
              <div className="flex justify-between items-center text-sm space-x-7">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border border-black border-opacity-30 cursor-pointer hover:border-0 hover:bg-white hover:bg-opacity-10">
                  <FaTools />
                </div>
                <div
                  className="flex justify-center items-center h-10 w-10 rounded-full border border-black border-opacity-30 cursor-pointer hover:border-0 hover:bg-white hover:bg-opacity-10"
                  onClick={() => {
                    setLogin("logging in");
                  }}
                >
                  <FaLock />
                </div>
                <div
                  className="flex justify-center items-center h-10 w-10 rounded-full border border-black border-opacity-30 cursor-pointer hover:border-0 hover:bg-white hover:bg-opacity-10"
                  onClick={() => {
                    setLogin("");
                  }}
                >
                  <RiShutDownLine className="text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex absolute right-2 top-1.5 items-center text-lg">
          <div
            className="flex space-x-3 items-center cursor-pointer"
            onClick={() => {
              setSystemDropdownState(true);
            }}
          >
            <MdSignalWifiStatusbarNull />
            <BsFillVolumeUpFill />
            <RiShutDownLine />
            <GoTriangleDown className="text-sm" />
          </div>
        </div>
      )}
    </div>
  );
}
