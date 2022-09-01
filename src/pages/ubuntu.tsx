import { NextPage } from "next";
import { useContext } from "react";
import Draggable from "react-draggable";
import { BiMenu, BiMinus, BiSearch, BiSquare, BiX } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { CommandState } from "../contexts/CommandContext";
import { getPath } from "../libs/GetPath";
import Terminal from "./terminal";

const Ubuntu: NextPage = () => {
  const { path } = useContext(CommandState);
  return (
    <div className="w-full min-h-screen bg-[#121212] overflow-hidden relative">
      {/* window frame */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        {/* terminal window */}
        <Draggable handle="#head" bounds="parent">
          <div
            className="absolute resize border border-black border-opacity-20 w-[990px] h-[600px] min-w-[495px] min-h-[300px] rounded-lg overflow-hidden"
            style={{
              top: "calc((100vh / 2) + -300px)",
              left: "calc((100vw / 2) - 175px)",
            }}
          >
            {/* window head */}
            <div id="head" className="fixed top-0 left-0 right-0 select-none">
              {/* terminal name */}
              <div className="absolute left-0 right-0 top-3 text-center text-white whitespace-nowrap">
                <span>tanadon@tanadon: {getPath(path)}</span>
              </div>
              {/* control button */}
              <div
                className={`flex absolute right-0 top-0 pr-4 rounded-r-md h-12 border-t-2 border-white border-opacity-5 bg-base-600 items-center space-x-5 text-white bg-[#2c2c2c]`}
              >
                <div className="flex justify-center items-end w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-0.5 rounded-full cursor-pointer">
                  <BiMinus />
                </div>
                <div className="flex justify-center items-center w-6 h-6 bg-white bg-opacity-0 hover:bg-opacity-10 duration-75 p-1.5 rounded-full cursor-pointer">
                  <BiSquare />
                </div>
                <div
                  className={`flex justify-center items-center w-6 h-6 rounded-full cursor-pointer bg-[#E95420]`}
                >
                  <BiX className="text-lg" />
                </div>
              </div>
              {/*  */}
              <div
                className={`flex justify-between items-center h-12 border-t-2 border-white border-opacity-5 pr-4 pl-3 font-normal text-white rounded-t-md bg-[#2c2c2c]`}
              >
                {/* new tab */}
                <div className="flex items-center">
                  <div className="flex justify-center items-center h-9 w-9 bg-[#3e3e3e] hover:bg-base-1000 rounded border border-[#1d1d1d] border-opacity-80 cursor-pointer">
                    <FiPlusSquare className="text-xl" />
                  </div>
                </div>

                {/* find & menu */}
                <div className="flex items-center space-x-2">
                  <div className="flex justify-center items-center h-9 w-9 bg-[#3e3e3e] hover:bg-base-1000 rounded border border-[#1d1d1d] border-opacity-80 cursor-pointer">
                    <BiSearch className="text-xl" />
                  </div>
                  <div className="flex justify-center items-center h-9 w-9 bg-[#3e3e3e] hover:bg-base-1000 rounded border border-[#1d1d1d] border-opacity-80 cursor-pointer">
                    <BiMenu className="text-xl" />
                  </div>
                  <div className="w-32" />
                </div>
              </div>
            </div>

            {/* window body */}
            <div className="pt-12 w-full h-full">
              <div className="w-full h-full bg-[#300A24] overflow-y-auto overflow-x-hidden">
                <Terminal asComponent />
              </div>
            </div>
          </div>
        </Draggable>
        <div className="flex w-full h-full justify-center items-center text-white"></div>
      </div>
    </div>
  );
};

export default Ubuntu;
