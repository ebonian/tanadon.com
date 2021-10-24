import { createContext, useContext, useState } from "react";

import FileLocationContext from "../files";

import DesktopFilesIcon from "../../../images/desktop-files-icon.png";
import DocumentsFilesIcon from "../../../images/documents-files-icon.png";
import DownloadsFilesIcon from "../../../images/downloads-files-icon.png";
import MusicFilesIcon from "../../../images/music-files-icon.png";
import PicturesFilesIcon from "../../../images/pictures-files-icon.png";
import VideosFilesIcon from "../../../images/videos-files-icon.png";
import FolderIcon from "../../../images/folder-icon.png";

const HomeSelectionContext = createContext(null);

export default function Home({ fileLocation, setFileLocation }) {
  const [homeSelection, setHomeSelection] = useState({
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

  // const { fileLocation, setFileLocation } = useContext(FileLocationContext);
  return (
    <HomeSelectionContext.Provider value={{ homeSelection, setHomeSelection }}>
      <div
        onDoubleClick={() => {
          setFileLocation({ Coding: true });
        }}
      >
        <Folder name="Coding" select={homeSelection.Coding} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Desktop: true });
        }}
      >
        <Folder name="Desktop" select={homeSelection.Desktop} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Documents: true });
        }}
      >
        <Folder name="Documents" select={homeSelection.Documents} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Downloads: true });
        }}
      >
        <Folder name="Downloads" select={homeSelection.Downloads} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Music: true });
        }}
      >
        <Folder name="Music" select={homeSelection.Music} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Pictures: true });
        }}
      >
        <Folder name="Pictures" select={homeSelection.Pictures} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Portfolio: true });
        }}
      >
        <Folder name="Portfolio" select={homeSelection.Portfolio} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Videos: true });
        }}
      >
        <Folder name="Videos" select={homeSelection.Videos} />
      </div>
      <div
        onDoubleClick={() => {
          setFileLocation({ Works: true });
        }}
      >
        <Folder name="Works" select={homeSelection.Works} />
      </div>
    </HomeSelectionContext.Provider>
  );
}

function Folder({ name, select }) {
  const { setHomeSelection } = useContext(HomeSelectionContext);
  return (
    <>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "Coding" && <img src={FolderIcon} />}
          {name === "Desktop" && <img src={DesktopFilesIcon} />}
          {name === "Documents" && <img src={DocumentsFilesIcon} />}
          {name === "Downloads" && <img src={DownloadsFilesIcon} />}
          {name === "Music" && <img src={MusicFilesIcon} />}
          {name === "Pictures" && <img src={PicturesFilesIcon} />}
          {name === "Portfolio" && <img src={FolderIcon} />}
          {name === "Videos" && <img src={VideosFilesIcon} />}
          {name === "Works" && <img src={FolderIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "Coding" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Coding: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Desktop" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Desktop: true });
              }}
            >
              <img src={DesktopFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Documents" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Documents: true });
              }}
            >
              <img src={DocumentsFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Downloads" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Downloads: true });
              }}
            >
              <img src={DownloadsFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Music" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Music: true });
              }}
            >
              <img src={MusicFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Pictures" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Pictures: true });
              }}
            >
              <img src={PicturesFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Portfolio" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Portfolio: true });
              }}
            >
              <img src={FolderIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Videos" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Videos: true });
              }}
            >
              <img src={VideosFilesIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Works" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setHomeSelection({ Works: true });
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
