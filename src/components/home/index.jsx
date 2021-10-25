import { createContext, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Files from "./files";
import Firefox from "./firefox";
import Terminal from "./terminal";

// import Desktop from "./desktop";

export const ProgramState = createContext();

export default function Index({ setLogin, login }) {
  const [programActiveState, setProgramActiveState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: false,
    document: false,
    image: false,
    text: false,
  });
  const [programOpenState, setProgramOpenState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: false,
    document: false,
    image: false,
    text: false,
  });
  const [programFocusState, setProgramFocusState] = useState({
    firefox: false,
    files: false,
    terminal: false,
    code: false,
    help: false,
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
      }}
    >
      <div className="flex flex-col h-screen w-full bg-wallpaper bg-cover bg-center select-none font-ubuntu">
        {/* header */}
        <Header
          activitiesActiveState={activitiesActiveState}
          setActivitiesActiveState={setActivitiesActiveState}
          systemDropdownState={systemDropdownState}
          setSystemDropdownState={setSystemDropdownState}
          setLogin={setLogin}
        />
        <div
          className="flex flex-grow"
          onClick={() => {
            setSystemDropdownState(false);
          }}
        >
          {/* sidebar */}
          <Sidebar
            setProgramActiveState={setProgramActiveState}
            programActiveState={programActiveState}
            setProgramOpenState={setProgramOpenState}
            programOpenState={programOpenState}
            setProgramFocusState={setProgramFocusState}
            programFocusState={programFocusState}
            setProgramMinimizeState={setProgramMinimizeState}
            programMinimizeState={programMinimizeState}
            setActivitiesActiveState={setActivitiesActiveState}
            activitiesActiveState={activitiesActiveState}
          />
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
              </div>
            </>
          )}
        </div>
      </div>
    </ProgramState.Provider>
  );
}
