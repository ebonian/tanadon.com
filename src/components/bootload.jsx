import { useEffect } from "react";
import { FaUbuntu } from "react-icons/fa";
import { BarLoader } from "react-spinners";

export default function BootLoading({ setLogin }) {
  useEffect(() => {
    setTimeout(() => {
      setLogin("logging in");
    }, 4000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-900 text-white space-y-10 select-none font-ubuntu">
      <div className="flex absolute bottom-6 justify-center ml-8">
        <h1 className="text-6xl">ubuntu</h1>
        <FaUbuntu className="text-3xl" />
      </div>
      <BarLoader color={"#ffffff"} width={200} speedMultiplier={0.3} />
    </div>
  );
}
