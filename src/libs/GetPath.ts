export const getPath = (path: string[]) => {
  const fromHomeDir = path.join("/").substring(1).substring(13);
  const beforeHomeDir = path.slice(-1)[0];

  if (fromHomeDir) {
    return "~" + fromHomeDir;
  } else {
    return beforeHomeDir === "tanadon"
      ? "~"
      : beforeHomeDir === "/"
      ? "/"
      : "/" + beforeHomeDir;
  }
};
