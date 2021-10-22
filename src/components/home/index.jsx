import { createContext, useState } from "react";
import Desktop from "./desktop";
import Header from "./header";
import Sidebar from "./sidebar";
import Files from "./files";
import Firefox from "./firefox";

export const ProgramState = createContext();

export default function Index({ setLogin }) {
  const [programActiveState, setProgramActiveState] = useState({
    firefox: false,
    files: false,
    terminal: false,
  });
  const [programOpenState, setProgramOpenState] = useState({
    firefox: false,
    files: false,
    terminal: false,
  });
  const [programFocusState, setProgramFocusState] = useState({
    firefox: false,
    files: false,
    terminal: false,
  });
  const [programMinimizeState, setProgramMinimizeState] = useState({
    firefox: false,
    files: false,
    terminal: false,
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
      <div className="flex flex-col h-screen w-full bg-wallpaper bg-cover bg-right select-none font-ubuntu">
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
              <div className="flex flex-grow duration-300">
                <div className="flex flex-grow pl-16 pt-8 -mr-96 -mb-96">
                  <Files />
                  <Firefox
                    setProgramActiveState={setProgramActiveState}
                    programActiveState={programActiveState}
                    setProgramOpenState={setProgramOpenState}
                    programOpenState={programOpenState}
                    setProgramFocusState={setProgramFocusState}
                    programFocusState={programFocusState}
                    setProgramMinimizeState={setProgramMinimizeState}
                    programMinimizeState={programMinimizeState}
                  />
                </div>
              </div>
              {/* 
            <div className="fixed flex flex-grow duration-300">
              <Desktop />
            </div> */}
            </>
          )}
        </div>
      </div>
    </ProgramState.Provider>
  );
}
