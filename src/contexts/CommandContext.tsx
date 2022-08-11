import { createContext, useState } from "react";
import { findPath } from "../libs/FindPath";
import { getValueByKey } from "../libs/FindValueByKey";
import { getPath } from "../libs/GetPath";

interface Props {
  children: React.ReactNode;
}

export const CommandState = createContext({
  command: "",
  setCommand: (command: string) => {},
  args: [""],
  setArgs: (args: string[]) => {},
  oldCommand: [""],
  setOldCommand: (oldCommand: string[]) => {},
  output: [""],
  setOutput: (output: any[]) => {},
  commands: {},
  curDirName: "",
  path: [""],
});

const CommandContext: React.FC<Props> = ({ children }) => {
  const [command, setCommand] = useState<string>("");
  const [args, setArgs] = useState<string[]>([]);

  const [oldCommand, setOldCommand] = useState<string[]>([]);
  const [output, setOutput] = useState<any[]>([]);

  const directories = {
    "/": {
      bin: {},
      boot: {},
      dev: {},
      etc: {},
      home: {
        tanadon: {
          Documents: {},
          Projects: {
            carsup: {},
            doji: {
              webapp: {
                public: {},
                src: {
                  components: {},
                  contexts: {},
                  pages: {},
                },
              },
            },
          },
        },
      },
    },
  };

  const [curDir, setCurDir] = useState(directories["/"]["home"]["tanadon"]);
  const [curDirName, setCurDirName] = useState("tanadon");
  const [path, setPath] = useState(findPath(directories, curDirName));

  const setDirHandler = (dir: string) => {
    setCurDirName(dir);
    setPath(findPath(directories, dir));
    setCurDir(getValueByKey(directories, dir));
  };

  const changeDir = (arg: string) => {
    let currentDir = curDir;

    const dirs = arg === "/" ? ["/"] : arg.split("/").filter((n) => n);
    let previosDirCounts = 0;
    dirs.forEach((x) => {
      if (x === "..") {
        previosDirCounts = previosDirCounts + 1;
      }
    });

    const parentDir = path.slice(-1 - previosDirCounts, -1).reverse();

    if (arg.includes("../")) {
      dirs.forEach((dir) => {
        if (dir === "..") {
          for (let i = 0; i < previosDirCounts; i++) {
            setDirHandler(parentDir[i]);
            currentDir = getValueByKey(directories, parentDir[i]);
          }
        } else if (dir === "~") {
          setDirHandler(Object.keys(directories["/"]["home"])[0]);
        } else if (dir === ".") {
          setDirHandler(curDirName);
        } else {
          if (dir in currentDir) {
            setDirHandler(dir);
            for (let i = 0; i < previosDirCounts; i++) {
              // setDirHandler(parentDir[i]);
              currentDir = getValueByKey(directories, parentDir[i]);
            }
          } else {
            commands.cd.err(dir);
          }
        }
      });
    } else {
      dirs.forEach((dir) => {
        if (dir === "..") {
          for (let i = 0; i < previosDirCounts; i++) {
            setDirHandler(parentDir[i]);
          }
        } else if (dir === "~") {
          setDirHandler(Object.keys(directories["/"]["home"])[0]);
        } else if (dir === ".") {
          setDirHandler(curDirName);
        } else if (dir === "/") {
          setDirHandler("/");
        } else {
          if (dir in currentDir) {
            setDirHandler(dir);
            // @ts-ignore
            currentDir = getValueByKey(directories, dir);
          } else {
            commands.cd.err(dir);
          }
        }
      });
    }
  };

  const commands = {
    clear: { arg: null, func: () => setOutput([]) },
    ls: {
      arg: null,
      func: () =>
        setOutput([
          ...output,
          <div key="key" className="flex space-x-2 w-full">
            <p>
              <span>tanadon@TANADON</span>
              <span>:</span>
              {getPath(path)}
              <span>$</span>
            </p>
            <p>{command}</p>
          </div>,
          ,
          Object.getOwnPropertyNames(curDir).map((dir, idx) => (
            <span className="mr-4" key={idx}>
              {dir}
            </span>
          )),
        ]),
    },
    pwd: {
      arg: null,
      func: () =>
        setOutput([
          ...output,
          <div key="key" className="flex space-x-2 w-full">
            <p>
              <span>tanadon@TANADON</span>
              <span>:</span>
              {getPath(path)}
              <span>$</span>
            </p>
            <p>{command}</p>
          </div>,
          ,
          path.join("/") === "/" ? path.join("/") : path.join("/").substring(1),
        ]),
    },
    cd: {
      arg: "",
      func: (arg: string[]) => {
        setOutput([
          ...output,
          <div key="key" className="flex space-x-2 w-full">
            <p>
              <span>tanadon@TANADON</span>
              <span>:</span>
              {getPath(path)}
              <span>$</span>
            </p>
            <p>{command}</p>
          </div>,
        ]);
        arg.length && changeDir(arg[0]);
      },
      err: (dir: string) => {
        setOutput([
          ...output,
          <div key="key" className="flex space-x-2 w-full">
            <p>
              <span>tanadon@TANADON</span>
              <span>:</span>
              {getPath(path)}
              <span>$</span>
            </p>
            <p>{command}</p>
          </div>,
          `cd: no such file or directory: ${dir}`,
        ]);
      },
    },
  };

  return (
    <CommandState.Provider
      value={{
        command,
        setCommand,
        args,
        setArgs,
        oldCommand,
        setOldCommand,
        output,
        setOutput,
        commands,
        curDirName,
        path,
      }}
    >
      {children}
    </CommandState.Provider>
  );
};

export default CommandContext;
