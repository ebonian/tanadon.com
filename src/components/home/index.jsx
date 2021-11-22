import { createContext, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Files from "./files";
import Firefox from "./firefox";
import Terminal from "./terminal";
import Code from "./code";
import Help from "./help";
import Text from "./text";
import Desktop from "./desktop";
import Document from "./document";

// import Desktop from "./desktop";

export const ProgramState = createContext();

export default function Index({ setLogin, login }) {
  const [programActiveState, setProgramActiveState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: true,
    document: false,
    image: false,
    text: false,
  });
  const [programOpenState, setProgramOpenState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: true,
    document: false,
    image: false,
    text: false,
  });
  const [programFocusState, setProgramFocusState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: true,
    document: false,
    image: false,
    text: false,
  });
  const [programMinimizeState, setProgramMinimizeState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: false,
    document: false,
    image: false,
    text: false,
  });
  const [activitiesActiveState, setActivitiesActiveState] = useState(false);
  const [systemDropdownState, setSystemDropdownState] = useState(false);

  // files system
  const [fileLocation, setFileLocation] = useState({
    Home: true,
  });

  // text editor system
  const [textLocation, setTextLocation] = useState({
    default: true,
  });

  // document system
  const [documentLocation, setDocumentLocation] = useState({
    default: true,
  });

  return (
    <ProgramState.Provider
      value={{
        programActiveState,
        setProgramActiveState,
        programOpenState,
        setProgramOpenState,
        programFocusState,
        setProgramFocusState,
        programMinimizeState,
        setProgramMinimizeState,
        activitiesActiveState,
        setActivitiesActiveState,
        systemDropdownState,
        setSystemDropdownState,
        fileLocation,
        setFileLocation,
        textLocation,
        setTextLocation,
        documentLocation,
        setDocumentLocation,
      }}
    >
      <div className="flex flex-col h-screen w-full bg-wallpaper bg-cover bg-center select-none font-ubuntu">
        {/* header */}
        <Header setLogin={setLogin} />
        <div
          className="flex flex-grow"
          onClick={() => {
            setSystemDropdownState(false);
          }}
        >
          {/* sidebar */}
          <Sidebar />
          {/* main component */}
          {activitiesActiveState ? (
            <div className="flex flex-grow bg-black bg-opacity-50 duration-300">
              App Drawer
            </div>
          ) : (
            <>
              <div className="flex absolute top-8 pl-16 -right-50 h-desktop w-desktop duration-300">
                <Files />
                <Firefox />
                <Terminal />
                <Code />
                <Help />
                <Document />
                <Text />
                <Desktop />
              </div>
            </>
          )}
        </div>
      </div>
    </ProgramState.Provider>
  );
}
