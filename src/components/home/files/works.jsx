import { createContext, useContext, useState } from "react";

import FolderIcon from "../../../images/folder-icon.png";

const WorksSelectionContext = createContext(null);

export default function Works({ fileLocation, setFileLocation }) {
  const [worksSelection, setWorksSelection] = useState({
    Coding: false,
    Desktop: false,
    Documents: false,
    Downloads: false,
    Music: false,
    Pictures: false,
    Portfolio: false,
    Videos: false,
    Works: false,
  });
  return (
    <WorksSelectionContext.Provider
      value={{ worksSelection, setWorksSelection }}
    >
      <div
        onDoubleClick={() => {
          setFileLocation({ Doji: true });
        }}
      >
        <Folder name="Doji" select={worksSelection.Doji} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ School: true });
        }}
      >
        <Folder name="School" select={worksSelection.School} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Zigma: true });
        }}
      >
        <Folder name="Zigma" select={worksSelection.Zigma} />
      </div>
    </WorksSelectionContext.Provider>
  );
}

function Folder({ name, select }) {
  const { setWorksSelection } = useContext(WorksSelectionContext);
  return (
    <>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "School" && <img src={FolderIcon} />}
          {name === "Doji" && <img src={FolderIcon} />}
          {name === "Zigma" && <img src={FolderIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "School" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setWorksSelection({ School: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Doji" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setWorksSelection({ Doji: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Zigma" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setWorksSelection({ Zigma: true });
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