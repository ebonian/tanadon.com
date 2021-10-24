import { createContext, useContext, useState } from "react";

import FolderIcon from "../../../images/folder-icon.png";

const CodingSelectionContext = createContext(null);

export default function Coding({ fileLocation, setFileLocation }) {
  const [codingSelection, setCodingSelection] = useState({
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
    <CodingSelectionContext.Provider
      value={{ codingSelection, setCodingSelection }}
    >
      <div
        onDoubleClick={() => {
          setFileLocation({ Blockchain: true });
        }}
      >
        <Folder name="Blockchain" select={codingSelection.Blockchain} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Python: true });
        }}
      >
        <Folder name="Python" select={codingSelection.Python} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Website: true });
        }}
      >
        <Folder name="Website" select={codingSelection.Website} />
      </div>
    </CodingSelectionContext.Provider>
  );
}

function Folder({ name, select }) {
  const { setCodingSelection } = useContext(CodingSelectionContext);
  return (
    <>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "Blockchain" && <img src={FolderIcon} />}
          {name === "Python" && <img src={FolderIcon} />}
          {name === "Website" && <img src={FolderIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "Blockchain" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setCodingSelection({ Blockchain: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Python" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setCodingSelection({ Python: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Website" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setCodingSelection({ Website: true });
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
