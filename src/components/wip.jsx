import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { PortfolioContext } from "../pages/portfolio";

export default function Popup() {
  const { popup, setPopup } = useContext(PortfolioContext);
  return (
    <>
      {popup && (
        <div className="absolute flex flex-col left-20 bottom-20 h-28 w-72 bg-yellow-50 rounded-md p-3 shadow-xl font-sourcecode space-y-2 z-100">
          <div className="flex justify-between">
            <h1 className="font-semibold">Work in Progress</h1>
            <div
              className="cursor-pointer"
              onClick={() => {
                setPopup(false);
              }}
            >
              <FiX />
            </div>
          </div>
          <p>This site is still in a development process.</p>
        </div>
      )}
    </>
  );
}
