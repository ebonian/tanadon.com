import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BiHistory, BiTrash } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

export default function Path({ fileLocation, setFileLocation }) {
  return (
    <div>
      {fileLocation.Home && (
        <div className="flex items-center justify-center h-9 w-32 bg-base-700 hover:bg-base-1000 rounded border border-base-300 border-opacity-80 cursor-pointer space-x-3 text-gray-300">
          <AiOutlineHome className="text-lg" />
          <p className="font-normal">Home</p>
          <GoTriangleDown />
        </div>
      )}
      {fileLocation.Coding && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Coding" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Desktop && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Desktop" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Documents && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Documents" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Downloads && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Downloads" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Music && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Music" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Pictures && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Pictures" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Portfolio && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Portfolio" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Videos && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Videos" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Projects && (
        <div className="flex">
          <div
            onClick={() => {
              setFileLocation({ Home: true });
            }}
          >
            <Button position="left" path="Home" triangle={false} />
          </div>
          <div>
            <Button position="right" path="Projects" triangle={true} />
          </div>
        </div>
      )}
      {fileLocation.Recent && (
        <div>
          <Button position="alone" path="Recent" triangle={true} />
        </div>
      )}
      {fileLocation.Starred && (
        <div>
          <Button position="alone" path="Starred" triangle={true} />
        </div>
      )}
      {fileLocation.Trash && (
        <div>
          <Button position="alone" path="Trash" triangle={true} />
        </div>
      )}
    </div>
  );
}

function Button({ position, path, triangle }) {
  return (
    <div
      className={`flex items-center justify-start px-3 h-9 bg-base-700 hover:bg-base-1000 border-base-300 border-opacity-80 cursor-pointer space-x-3 text-gray-300 ${
        position === "alone" && "rounded border"
      }
      ${position === "middle" && "border-t border-l border-b"}
      ${position === "left" && "rounded-l border-t border-l border-b"}
      ${position === "right" && "rounded-r border"}
      `}
    >
      {path === "Home" && <AiOutlineHome className="text-lg" />}
      {path === "Recent" && <BiHistory className="text-lg" />}
      {path === "Starred" && <AiFillStar className="text-lg" />}
      {path === "Trash" && <BiTrash className="text-lg" />}
      <p className="font-normal">{path}</p>
      {triangle && <GoTriangleDown />}
    </div>
  );
}
