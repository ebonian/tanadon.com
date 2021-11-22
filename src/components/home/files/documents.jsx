import { createContext, useContext, useState } from "react";
import { ProgramState } from "..";

import TextIcon from "../../../images/text.png";

const DocumentsSelectionContext = createContext(null);

export default function Documents({ setFileLocation }) {
  const {
    programActiveState,
    setProgramActiveState,
    programOpenState,
    setProgramOpenState,
    programFocusState,
    setProgramFocusState,
    programMinimizeState,
    setProgramMinimizeState,
    documentLocation,
    setDocumentLocation,
  } = useContext(ProgramState);
  const [documentsSelection, setDocumentsSelection] = useState({
    แบบสรุปอันดับ: false,
    Transcript: false,
    ปพ1: false,
  });
  return (
    <DocumentsSelectionContext.Provider
      value={{ documentsSelection, setDocumentsSelection }}
    >
      <Folder
        name="Transcript.pdf"
        select={documentsSelection.Transcript}
        onDoubleClick={() => {
          setDocumentLocation({ Transcript: true });
          setProgramActiveState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramOpenState({ ...programOpenState, document: true });
          setProgramFocusState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            document: false,
          });
        }}
      />
      <Folder
        name="ปพ1.pdf"
        select={documentsSelection.ปพ1}
        onDoubleClick={() => {
          setDocumentLocation({ ปพ1: true });
          setProgramActiveState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramOpenState({ ...programOpenState, document: true });
          setProgramFocusState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            document: false,
          });
        }}
      />
      <Folder
        name="แบบสรุปอันดับนักเรียน.pdf"
        select={documentsSelection.แบบสรุปอันดับ}
        onDoubleClick={() => {
          setDocumentLocation({ แบบสรุปอันดับ: true });
          setProgramActiveState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramOpenState({ ...programOpenState, document: true });
          setProgramFocusState({
            firefox: false,
            files: false,
            terminal: false,
            code: false,
            help: false,
            document: true,
            image: false,
            text: false,
          });
          setProgramMinimizeState({
            ...programMinimizeState,
            document: false,
          });
        }}
      />
    </DocumentsSelectionContext.Provider>
  );
}

function Folder({ name, select, onDoubleClick }) {
  const { setDocumentsSelection } = useContext(DocumentsSelectionContext);
  return (
    <div onDoubleClick={onDoubleClick}>
      {select ? (
        <div className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-20 hover:bg-opacity-25 rounded-md px-4 py-1.5">
          {name === "แบบสรุปอันดับนักเรียน.pdf" && <img src={TextIcon} />}
          {name === "Transcript.pdf" && <img src={TextIcon} />}
          {name === "ปพ1.pdf" && <img src={TextIcon} />}
          <p>{name}</p>
        </div>
      ) : (
        <>
          {name === "แบบสรุปอันดับนักเรียน.pdf" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDocumentsSelection({ แบบสรุปอันดับ: true });
              }}
            >
              <img src={TextIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "Transcript.pdf" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDocumentsSelection({ Transcript: true });
              }}
            >
              <img src={TextIcon} />
              <p>{name}</p>
            </div>
          )}
          {name === "ปพ1.pdf" && (
            <div
              className="flex flex-col items-center justify-center text-center mb-5 w-24 mr-4 bg-white bg-opacity-0 hover:bg-opacity-5 rounded-md px-4 py-1.5"
              onClick={() => {
                setDocumentsSelection({ ปพ1: true });
              }}
            >
              <img src={TextIcon} />
              <p>{name}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
