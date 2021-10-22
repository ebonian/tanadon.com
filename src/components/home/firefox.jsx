import Draggable from "react-draggable";

export default function Firefox({
  setProgramActiveState,
  programActiveState,
  setProgramOpenState,
  programOpenState,
  setProgramFocusState,
  programFocusState,
  setProgramMinimizeState,
  programMinimizeState,
}) {
  return (
    <>
      {programFocusState.firefox || programOpenState.firefox ? (
        <Draggable>
          <p
            className={`absolute ${
              programFocusState.firefox ? "z-40" : "z-30"
            }`}
            onClick={() => {
              setProgramFocusState({
                firefox: true,
                files: false,
                terminal: false,
              });
            }}
          >
            ffasdfdsafasdfasdfasdfadfsasdfsdaf
          </p>
        </Draggable>
      ) : (
        <></>
      )}
    </>
  );
}
