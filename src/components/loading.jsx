import { useEffect } from "react";
import { FaUbuntu } from "react-icons/fa";
import { BarLoader } from "react-spinners";

export default function Loading({ setLogin }) {
  useEffect(() => {
    setTimeout(() => {
      setLogin("success");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-base-200 text-white space-y-10 select-none font-ubuntu">
      <div className="flex justify-center ml-8">
        <h1 className="text-6xl">ubuntu</h1>
        <FaUbuntu className="text-3xl" />
      </div>
      <BarLoader color={"#ffffff"} width={200} speedMultiplier={0.8} />
    </div>
  );
}
