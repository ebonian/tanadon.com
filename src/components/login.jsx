import { useEffect, useState } from "react";
import { FiChevronLeft, FiUser } from "react-icons/fi";
import { FaUbuntu, FaNetworkWired } from "react-icons/fa";
import { RiSettingsLine, RiShutDownLine } from "react-icons/ri";
import { MdAccessibility } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { BsFillVolumeUpFill } from "react-icons/bs";

export default function Login({ setLogin }) {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-full bg-base-200 text-white select-none font-ubuntu">
      <Header />
      <Body setLogin={setLogin} />
      <Footer />
    </div>
  );
}

function Header() {
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
    <div>
      {/* clock */}
      <div className="mt-2">
        <p>{formatDate.format(new Date()) + " " + clockState}</p>
      </div>
      {/* utilities icon */}
      <div className="flex absolute right-6 top-3 items-center space-x-8 text-lg">
        <div className="flex space-x-2 items-center">
          <MdAccessibility className="cursor-pointer" />
          <GoTriangleDown className="cursor-pointer text-sm" />
        </div>
        <div className="flex space-x-2 items-center">
          <FaNetworkWired className="cursor-pointer" />
          <BsFillVolumeUpFill className="cursor-pointer" />
          <RiShutDownLine className="cursor-pointer" />
          <GoTriangleDown className="cursor-pointer text-sm" />
        </div>
      </div>
    </div>
  );
}

function Body({ setLogin }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      {/* profile pic */}
      <div className="flex justify-center items-center h-28 w-28 rounded-full bg-white bg-opacity-5">
        <FiUser className="text-6xl text-gray-200" />
      </div>
      {/* username */}
      <div>
        <h1 className="text-xl text-gray-100">Tanadon Santisan</h1>
      </div>
      {/* login form */}
      <div className="flex items-center space-x-2">
        <div className="flex justify-center items-center h-8 w-8 rounded-full bg-white bg-opacity-90">
          <FiChevronLeft className="text-gray-400 text-2xl" />
        </div>
        <div>
          <input
            type="password"
            value="Welcome!"
            readOnly={true}
            className="w-56 text-black outline-none border-2 border-white focus:border-2 focus:border-base-200 focus:border-opacity-30 text-xl mr-8 px-2"
          />
        </div>
      </div>
      {/* login button */}
      <div
        className="flex justify-center items-center bg-white bg-opacity-5 w-20 h-10 cursor-pointer"
        onClick={() => {
          setLogin("logged in");
        }}
      >
        <p className="">Sign In</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mb-6">
      {/* ubuntu logo */}
      <div className="flex justify-center ml-8">
        <h1 className="text-6xl">ubuntu</h1>
        <FaUbuntu className="text-3xl" />
      </div>
      {/* settings icon */}
      <div className="absolute flex justify-center items-center p-2 bottom-8 right-8 rounded-full bg-white cursor-pointer">
        <RiSettingsLine className="text-xl text-gray-600" />
      </div>
    </div>
  );
}
