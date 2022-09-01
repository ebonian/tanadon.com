import type { NextPage } from "next";
import { useContext, useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { CommandState } from "../contexts/CommandContext";
import { getPath } from "../libs/GetPath";

interface Props {
  asComponent?: boolean;
}

const Terminal: NextPage<Props> = ({ asComponent = false }) => {
  const {
    output,
    setOutput,
    command,
    setCommand,
    commands,
    path,
    setOldCommand,
    oldCommand,
  } = useContext(CommandState);

  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current!.focus();
    ref.current?.scrollIntoView();
  };

  useEffect(() => handleClick(), []);

  useEffect(() => ref.current?.scrollIntoView(), [output]);

  return (
    <main
      onClick={handleClick}
      className={`p-5 text-white font-code w-full ${
        asComponent ? "min-h-full" : "bg-black min-h-screen"
      }`}
    >
      {output.map((data, idx) => {
        return <span key={idx}>{data}</span>;
      })}

      <div className="flex items-start space-x-2 w-full">
        <p>
          <span className="text-[#26A269]">tanadon@TANADON</span>
          <span className="text-[#26A269]">:</span>
          <span className="text-blue-500">{getPath(path)}</span>
          <span>$</span>
        </p>
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          value={command}
          ref={ref}
          spellCheck={false}
          onChange={(e) => {
            setCommand(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setOldCommand([command, ...oldCommand]);

              const c = command.split(" ")[0];
              const a = command.split(" ").slice(1);

              if (c in commands) {
                // @ts-ignore
                commands[c].exec(a);
              } else if (!e.target.value) {
                setOutput([
                  ...output,
                  <div key="key" className="flex space-x-2 w-full">
                    <p>
                      <span className="text-[#26A269]">tanadon@TANADON</span>
                      <span className="text-[#26A269]">:</span>
                      <span className="text-blue-500">{getPath(path)}</span>
                      <span>$</span>
                    </p>
                    <p>{command}</p>
                  </div>,
                  ,
                ]);
              } else {
                setOutput([
                  ...output,
                  <div key="key" className="flex space-x-2 w-full">
                    <p>
                      <span className="text-[#26A269]">tanadon@TANADON</span>
                      <span className="text-[#26A269]">:</span>
                      <span className="text-blue-500">{getPath(path)}</span>
                      <span>$</span>
                    </p>
                    <p>{command}</p>
                  </div>,
                  ,
                  `${command.split(" ")[0]}: command not found`,
                ]);
              }

              scroll.scrollToBottom({
                duration: 0,
              });
              setCommand("");
            }
          }}
        />
      </div>
    </main>
  );
};

export default Terminal;
