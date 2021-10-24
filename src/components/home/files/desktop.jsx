import { createContext, useContext, useState } from "react";

import FolderShortcutIcon from "../../../images/folder-shortcut-icon.png";

const DesktopSelectionContext = createContext(null);

export default function Desktop({ fileLocation, setFileLocation }) {
  const [desktopSelection, setDesktopSelection] = useState({
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
    <DesktopSelectionContext.Provider
      value={{ desktopSelection, setDesktopSelection }}
    >
      <div
        onDoubleClick={() => {
          setFileLocation({ Coding: true });
        }}
      >
        <Folder name="Coding" select={desktopSelection.Coding} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Portfolio: true });
        }}
      >
        <Folder name="Portfolio" select={desktopSelection.Portfolio} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Works: true });
        }}
      >
        <Folder name="Works" select={desktopSelection.Works} />
      </div>
    </DesktopSelectionContext.Provider>
  );
}

function Folder({ name, select }) {
  const { setDesktopSelection } = useContext(DesktopSelectionContext);
  return (
    <>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "Coding" && <img src={FolderShortcutIcon} />}
          {name === "Portfolio" && <img src={FolderShortcutIcon} />}
          {name === "Works" && <img src={FolderShortcutIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "Coding" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDesktopSelection({ Coding: true });
              }}
            >
              <img src={FolderShortcutIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Portfolio" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDesktopSelection({ Portfolio: true });
              }}
            >
              <img src={FolderShortcutIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Works" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDesktopSelection({ Works: true });
              }}
            >
              <img src={FolderShortcutIcon} />
              <p>{name}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
