import { findPath } from "./FindPath";

export const getValueByKey = (dirs: {}, dir: string) => {
  const path = findPath(dirs, dir);

  let obj = dirs;
  var i;
  for (i = 0; i < path.length - 1; i++) {
    // @ts-ignore
    obj = obj[path[i]];
  }

  // @ts-ignore
  return obj[path[i]];
};
