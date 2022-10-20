import Link from "next/link";
import { useRouter } from "next/router";
import { createContext, useEffect, useRef, useState } from "react";
import { FiArrowRight, FiChevronLeft } from "react-icons/fi";
import { Link as Scroll, animateScroll } from "react-scroll";
import gsap, { Power0, Power1, Power2, Power3, Power4 } from "gsap";

interface LandingContextProps {
  children: React.ReactNode;
}

const LandingState = createContext({});

const LandingContext: React.FC<LandingContextProps> = ({ children }) => {
  // router
  const router = useRouter();
  const path = router.pathname;

  // loaded
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // window sizing
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // routes to use the landing layout
  const providedRoute = ["/", "/portfolio", "/me", "/blog"];

  // ref for animation
  const backButtonRef = useRef(null);
  const tileContainerRef = useRef(null);
  const overflowContainerRef = useRef(null);
  const portfolioTileContainerRef = useRef<HTMLDivElement>(null);
  const portfolioTileRef = useRef(null);
  const gridTileRef = useRef(null);
  const blogTileRef = useRef(null);
  const meTileRef = useRef(null);
  const othersTileContainerRef = useRef(null);

  const portfolioTileLandingWidth =
    windowSize.width - 40 - windowSize.height / 2 + 10;
  const fullPageWidth = windowSize.width - 40;
  const gridTileWidth = windowSize.height / 2 - 30;

  // gsap animation
  useEffect(() => {
    if (path === "/portfolio") {
      gsap.fromTo(
        portfolioTileRef.current,
        { width: portfolioTileLandingWidth },
        { width: fullPageWidth, duration: 0 }
      );
    }
    if (path === "/me") {
      gsap.to(portfolioTileRef.current, {
        width: "0",
        duration: 0,
      });
      gsap.to(tileContainerRef.current, {
        gap: 0,
      });
      gsap.to(othersTileContainerRef.current, {
        height: "0",
      });
    } else if (path === "/") {
      gsap.to(portfolioTileRef.current, {
        width: portfolioTileLandingWidth,
        duration: 0,
      });
      gsap.to(tileContainerRef.current, {
        gap: 20,
      });
      gsap.to(othersTileContainerRef.current, {
        height: "100%",
      });
    }
  }, [path]);

  if (providedRoute.includes(path)) {
    return (
      <LandingState.Provider value={{}}>
        <Link href="/">
          <a
            className={`absolute text-white top-12 left-12 z-50 cursor-pointer p-3 text-2xl bg-white bg-opacity-[7%] rounded-full duration-700 opacity-0 ${
              path !== "/" && "opacity-100"
            }`}
          >
            <FiChevronLeft />
          </a>
        </Link>
        <div className="min-h-screen relative w-screen flex bg-[#111] text-white">
          <div
            ref={overflowContainerRef}
            className={`absolute top-0 bottom-0 w-full ${
              path === "/" ? "overflow-x-scroll" : "overflow-x-hidden"
            }`}
          >
            <div
              ref={tileContainerRef}
              className={`flex w-max h-full gap-5 p-5`}
            >
              {/* tile */}
              <div
                ref={portfolioTileContainerRef}
                className={`overflow-hidden rounded-2xl w-max`}
              >
                <div
                  ref={portfolioTileRef}
                  className={`group bg-black ease-in-out duration-500 ${
                    path === "/"
                      ? "overflow-y-hidden cursor-pointer"
                      : "overflow-y-auto"
                  }`}
                  style={{
                    width:
                      path === "/"
                        ? portfolioTileLandingWidth
                        : path === "/portfolio"
                        ? fullPageWidth
                        : portfolioTileLandingWidth,
                    height: "calc(100vh - 40px)",
                  }}
                  onClick={() => {
                    if (path === "/") router.push("/portfolio");
                  }}
                >
                  <div
                    className="flex w-full items-center justify-between p-10 whitespace-nowrap"
                    style={{
                      height: "calc(100vh - 40px)",
                    }}
                  >
                    <div>
                      <h1 className="text-5xl font-bold font-inter">
                        Lorem Ipsum
                      </h1>
                    </div>
                    <div className="bg-white bg-opacity-[7%] group-hover:bg-opacity-[10%] duration-700 rounded-full p-4 text-2xl cursor-pointer">
                      <FiArrowRight />
                    </div>
                  </div>
                  <div
                    className="flex w-full items-center justify-between bg-black"
                    style={{
                      height: "calc(100vh - 40px)",
                    }}
                  ></div>
                </div>
              </div>
              {/* tile */}
              <div
                ref={gridTileRef}
                className="h-full flex flex-col gap-5 overflow-hidden"
                style={{
                  width: "calc(100vh / 2 - 30px)",
                }}
              >
                <Link href={`/me`}>
                  <a
                    ref={meTileRef}
                    className={`w-full h-full bg-gray-300 rounded-2xl ${
                      path === "/" ? "cursor-pointer" : "cursor-default"
                    }`}
                  ></a>
                </Link>
                <div
                  ref={othersTileContainerRef}
                  className="w-full h-full rounded-2xl grid grid-cols-2 gap-5"
                >
                  <Link href={`/blog`}>
                    <a
                      className={`aspect-square w-full h-full from-[#007CF0] to-[#00DFD8] bg-gradient-to-t rounded-2xl grid place-content-center text-center font-code space-y-1`}
                    >
                      <span className="text-3xl">📰</span>
                      <p className="text-xl">Blogs</p>
                    </a>
                  </Link>
                  <a className="aspect-square w-full h-full from-[#7928CA] to-[#FF0080] bg-gradient-to-t rounded-2xl cursor-pointer grid place-content-center text-center font-code space-y-1">
                    <span className="text-3xl">🔨</span>
                    <p className="text-xl">Tools</p>
                  </a>
                  <a className="aspect-square w-full h-full from-[#FF4D4D] to-[#F9CB28] bg-gradient-to-t rounded-2xl cursor-pointer grid place-content-center text-center font-code space-y-1">
                    <span className="text-3xl">👨‍💻</span>
                    <p className="text-xl">Contact</p>
                  </a>
                  <Link href="/terminal">
                    <a className="aspect-square w-full h-full bg-[#0b0b0b] rounded-2xl cursor-pointer grid place-content-center text-center font-code space-y-1">
                      <span className="text-3xl">💻</span>
                      <p className="text-xl">Terminal</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingState.Provider>
    );
  } else {
    return <LandingState.Provider value={{}}>{children}</LandingState.Provider>;
  }
};

export default LandingContext;
