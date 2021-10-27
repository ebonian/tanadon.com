import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Boot({ setLogin }) {
  useEffect(() => {
    setTimeout(() => {
      setLogin("load boot");
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full font-sourcecode select-none bg-portfolio-base-200 overflow-hidden">
      <div className="flex flex-col flex-grow justify-start items-start h-screen max-w-screen-lg text-gray-200 text-xl px-5 lg:px-0">
        <div className="flex flex-col justify-between h-screen pt-20 pb-32">
          <Loading />
          <p className="text-sm opacity-40">
            This section will works best if open on a desktop browser.
          </p>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoad(1);
    }, 250);
    setTimeout(() => {
      setLoad(2);
    }, 500);
    setTimeout(() => {
      setLoad(3);
    }, 750);
    setInterval(() => {
      setLoad(0);
      setTimeout(() => {
        setLoad(1);
      }, 250);
      setTimeout(() => {
        setLoad(2);
      }, 500);
      setTimeout(() => {
        setLoad(3);
      }, 750);
    }, 1000);
  }, []);
  return (
    <div className="flex space-x-4">
      <div className="text-2xl font-bold">
        {load === 0 && <p>\</p>}
        {load === 1 && <p>|</p>}
        {load === 2 && <p>/</p>}
        {load === 3 && <p>-</p>}
      </div>
      <p>
        Boooting{load === 0 && <span></span>}
        {load === 1 && <span>.</span>}
        {load === 2 && <span>..</span>}
        {load === 3 && <span>...</span>}
      </p>
    </div>
  );
}
