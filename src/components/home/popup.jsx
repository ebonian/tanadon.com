import { Link } from "react-router-dom";

export default function Popup({ setLogin }) {
  return (
    <div className="absolute flex justify-center items-center h-screen w-full z-100 text-gray-700 bg-black bg-opacity-70 font-ubuntu select-none">
      <div className="flex flex-col w-popup h-48 bg-base-100 rounded-md shadow-popup">
        <div className="flex flex-col flex-grow justify-center items-center text-center space-y-2">
          <h1 className="text-2xl text-gray-800">Power Off</h1>
          <p>The system will power off automatically in 40 seconds.</p>
        </div>
        <div className="flex justify-between h-11 w-full rounded-b text-gray-800">
          <div
            className="flex flex-grow items-center justify-center rounded-bl border-t border-l border-b border-black border-opacity-25 bg-black bg-opacity-0 hover:bg-opacity-6 cursor-pointer"
            onClick={() => {
              setLogin("success");
            }}
          >
            Cancel
          </div>
          <div
            className="flex flex-grow items-center justify-center border border-black border-opacity-25 bg-black bg-opacity-0 hover:bg-opacity-6 cursor-pointer"
            onClick={() => {
              setLogin("booting");
            }}
          >
            Restart
          </div>
          <Link
            className="flex flex-grow items-center justify-center rounded-br border-t border-r border-b border-black border-opacity-25 bg-black bg-opacity-0 hover:bg-opacity-6 cursor-pointer"
            to="/"
          >
            Power Off
          </Link>
        </div>
      </div>
    </div>
  );
}
