import { createContext, useContext, useState } from "react";

import FolderIcon from "../../../images/folder-icon.png";

const StarredSelectionContext = createContext(null);

export default function Starred({ fileLocation, setFileLocation }) {
  const [starredSelection, setStarredSelection] = useState({
    Coding: false,
    Desktop: false,
    Documents: false,
    Downloads: false,
    Music: false,
    Pictures: false,
    Portfolio: false,
    Videos: false,
    Projects: false,
  });
  return (
    <StarredSelectionContext.Provider
      value={{ starredSelection, setStarredSelection }}
    >
      <div
        onDoubleClick={() => {
          setFileLocation({ Coding: true });
        }}
      >
        <Folder name="Coding" select={starredSelection.Coding} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Portfolio: true });
        }}
      >
        <Folder name="Portfolio" select={starredSelection.Portfolio} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Projects: true });
        }}
      >
        <Folder name="Projects" select={starredSelection.Projects} />
      </div>
    </StarredSelectionContext.Provider>
  );
}

function Folder({ name, select }) {
  const { setStarredSelection } = useContext(StarredSelectionContext);
  return (
    <>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "Coding" && <img src={FolderIcon} />}
          {name === "Portfolio" && <img src={FolderIcon} />}
          {name === "Projects" && <img src={FolderIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "Coding" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setStarredSelection({ Coding: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Portfolio" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setStarredSelection({ Portfolio: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Projects" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setStarredSelection({ Projects: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
