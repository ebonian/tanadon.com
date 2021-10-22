import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Index from "../components/home";
import Taskbar from "../components/home/Taskbar";
import Loading from "../components/loading";
import Login from "../components/login";

import MyComputerIcon from "../images/computer-icon.png";

export default function Home() {
  const [login, setLogin] = useState("not login");

  useEffect(() => {
    setTimeout(() => {
      setLogin("logging in");
    }, 1000);
  }, []);
  return (
    <div className="h-screen w-full bg-black">
      {login === "logging in" && <Login setLogin={setLogin} />}
      {login === "logged in" && <Loading setLogin={setLogin} />}
      {login === "success" && <Index setLogin={setLogin} />}
    </div>

    // <div className="flex justify-center items-center h-screen w-full bg-black select-none">
    //   <div className="flex flex-col flex-grow justify-end h-screen max-w-screen-xl bg-base-100">
    //     <div className="flex justify-start h-full w-full items py-5 px-8">
    //       {/* programs icon */}
    //       <Program />
    //     </div>

    //     <Taskbar />
    //   </div>
    // </div>
  );
}

function Program() {
  const [selectProgram, setSelectProgram] = useState({ MyComputer: false });
  const [openProgram, setOpenProgam] = useState({ MyComputer: false });
  return (
    <>
      {selectProgram.MyComputer === true ? (
        <div>
          <div
            className="flex flex-col items-center space-y-0.5 text-center text-white"
            onClick={() => {
              setSelectProgram({ MyComputer: false });
            }}
            onDoubleClick={() => {
              setOpenProgam({ MyComputer: true });
            }}
          >
            <div className="flex p-2 border-2 border-dotted border-gray-400 opacity-80">
              <img
                src={MyComputerIcon}
                alt="Tanadon's Computer"
                className="h-14"
              />
            </div>
            <div className="p-0.5 bg-secondary-200 text-white">
              <p>My Computer</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="flex flex-col items-center space-y-0.5 text-center text-white"
            onClick={() => {
              setSelectProgram({ MyComputer: true });
            }}
            onDoubleClick={() => {
              setOpenProgam({ MyComputer: true });
            }}
          >
            <div className="flex p-2 border-2 border-transparent">
              <img
                src={MyComputerIcon}
                alt="Tanadon's Computer"
                className="h-14"
              />
            </div>
            <div className="p-0.5 text-white">
              <p>My Computer</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
