import { useContext, createContext, useState } from "react";
import { ProgramState } from ".";

import HomeFolderIcon from "../../images/user-home.png";
import TrashIcon from "../../images/user-trash.png";
import FolderShortcutIcon from "../../images/folder-shortcut-icon.png";
import TextIcon from "../../images/text.png";

const DesktopSelectionContext = createContext(null);

export default function Desktop() {
  const {
    fileLocation,
    setFileLocation,
    programActiveState,
    setProgramActiveState,
    programOpenState,
    setProgramOpenState,
    programFocusState,
    setProgramFocusState,
    programMinimizeState,
    setProgramMinimizeState,
  } = useContext(ProgramState);

  const [desktopSelection, setDesktopSelection] = useState({
    home: false,
    trash: false,
    coding: false,
    portfolio: false,
    works: false,
    readme: false,
  });
  return (
    <div className="flex w-full">
      <div className="flex flex-col flex-wrap p-4 h-screen z-10">
        <DesktopSelectionContext.Provider
          value={{ desktopSelection, setDesktopSelection }}
        >
          <Files
            name="tanadon"
            select={desktopSelection.home}
            onDoubleClick={() => {
              setFileLocation({ Home: true });
              setProgramActiveState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramOpenState({ ...programOpenState, files: true });
              setProgramFocusState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramMinimizeState({
                ...programMinimizeState,
                files: false,
              });
            }}
          />
          <Files
            name="Trash"
            select={desktopSelection.trash}
            onDoubleClick={() => {
              setFileLocation({ Trash: true });
              setProgramActiveState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramOpenState({ ...programOpenState, files: true });
              setProgramFocusState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramMinimizeState({
                ...programMinimizeState,
                files: false,
              });
            }}
          />
          <Files
            name="Coding"
            select={desktopSelection.coding}
            onDoubleClick={() => {
              setFileLocation({ Coding: true });
              setProgramActiveState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramOpenState({ ...programOpenState, files: true });
              setProgramFocusState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramMinimizeState({
                ...programMinimizeState,
                files: false,
              });
            }}
          />
          <Files
            name="Portfolio"
            select={desktopSelection.portfolio}
            onDoubleClick={() => {
              setFileLocation({ Portfolio: true });
              setProgramActiveState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramOpenState({ ...programOpenState, files: true });
              setProgramFocusState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramMinimizeState({
                ...programMinimizeState,
                files: false,
              });
            }}
          />
          <Files
            name="Works"
            select={desktopSelection.works}
            onDoubleClick={() => {
              setFileLocation({ Works: true });
              setProgramActiveState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramOpenState({ ...programOpenState, files: true });
              setProgramFocusState({
                firefox: false,
                files: true,
                terminal: false,
                code: false,
                help: false,
                document: false,
                image: false,
                text: false,
              });
              setProgramMinimizeState({
                ...programMinimizeState,
                files: false,
              });
            }}
          />
          <Files
            name="README.md"
            select={desktopSelection.readme}
            onDoubleClick={() => {
              setFileLocation({ readme: true });
            }}
          />
        </DesktopSelectionContext.Provider>
      </div>
      <div
        className="flex h-screen w-full"
        onClick={() => {
          setDesktopSelection({
            home: false,
            trash: false,
            coding: false,
            portfolio: false,
            works: false,
            readme: false,
          });
          setProgramFocusState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: false,
            image: false,
            text: false,
          });
          setProgramActiveState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: false,
            image: false,
            text: false,
          });
        }}
      ></div>
    </div>
  );
}

function Files({ name, select, onDoubleClick }) {
  const { setDesktopSelection } = useContext(DesktopSelectionContext);
  return (
    <div onDoubleClick={onDoubleClick}>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5 text-white">
          {name === "tanadon" && <img src={HomeFolderIcon} className="h-14" />}
          {name === "Trash" && <img src={TrashIcon} className="h-14" />}
          {name === "Coding" && (
            <img src={FolderShortcutIcon} className="h-14" />
          )}
          {name === "Portfolio" && (
            <img src={FolderShortcutIcon} className="h-14" />
          )}
          {name === "Works" && (
            <img src={FolderShortcutIcon} className="h-14" />
          )}
          {name === "README.md" && <img src={TextIcon} className="h-14" />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "tanadon" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ home: true });
              }}
            >
              <img src={HomeFolderIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
          {name === "Trash" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ trash: true });
              }}
            >
              <img src={TrashIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
          {name === "Coding" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ coding: true });
              }}
            >
              <img src={FolderShortcutIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
          {name === "Portfolio" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ portfolio: true });
              }}
            >
              <img src={FolderShortcutIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
          {name === "Works" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ works: true });
              }}
            >
              <img src={FolderShortcutIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
          {name === "README.md" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5 text-white"
              onClick={() => {
                setDesktopSelection({ readme: true });
              }}
            >
              <img src={TextIcon} className="h-14" />
              <p>{name}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
