import { useState, useEffect } from "react";
import Index from "../components/home";
import Popup from "../components/home/popup";
import Loading from "../components/loading";
import Login from "../components/login";

export default function Home() {
  // disable back foward key press

  // useEffect(() => {
  //   var CapturePopStateHandler = function (e) {
  //     if (e.state && e.state._fileexplorer) {
  //       if (e.state._fileexplorer === "back") {
  //         window.history.forward();
  //       } else if (e.state._fileexplorer === "forward") {
  //         window.history.back();
  //       }
  //     }
  //   };

  //   // Sets up three history items and places the user in the middle of those three.
  //   window.history.pushState({ _fileexplorer: "back" }, document.title);
  //   window.history.pushState({ _fileexplorer: "main" }, document.title);
  //   window.history.pushState({ _fileexplorer: "forward" }, document.title);
  //   window.history.back();

  //   window.addEventListener("popstate", CapturePopStateHandler, true);
  // }, []);

  //

  // const [login, setLogin] = useState("not login");
  const [login, setLogin] = useState("success");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLogin("logging in");
  //   }, 1000);
  // }, []);
  return (
    <div className="h-screen w-full bg-black">
      {/* popup */}
      {login === "shutting down" && <Popup setLogin={setLogin} />}

      {/* main component */}
      {login === "logging in" && <Login setLogin={setLogin} />}
      {login === "logged in" && <Loading setLogin={setLogin} />}
      {login === "success" || login === "shutting down" ? (
        <Index setLogin={setLogin} login={login} />
      ) : (
        <></>
      )}
    </div>
  );
}
