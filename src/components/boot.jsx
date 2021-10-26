import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Boot({ setLogin }) {
  let firstItem = useRef(null);
  let secondItem = useRef(null);
  let thirdItem = useRef(null);
  let fourthItem = useRef(null);
  let fifthItem = useRef(null);
  let sixthItem = useRef(null);
  let seventhItem = useRef(null);
  let eighthItem = useRef(null);
  let ninthItem = useRef(null);
  let tenthItem = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   setLogin("load boot");
    // }, 24000);
    gsap
      .timeline()
      .from(firstItem, 0.001, { delay: 2.9, display: "none" })
      .to(secondItem, 0.001, { delay: 3.5, display: "none" })
      .from(thirdItem, 0.001, { delay: 0, display: "none" })
      .to(fourthItem, 0.001, { delay: 6, display: "none" })
      .from(fifthItem, 0.001, { delay: 0, display: "none" })
      .to(sixthItem, 0.001, { delay: 5, display: "none" })
      .from(seventhItem, 0.001, { delay: 0, display: "none" })
      .to(eighthItem, 0.001, { delay: 3, display: "none" })
      .from(ninthItem, 0.001, { delay: 0, display: "none" })
      .from(tenthItem, 0.001, { delay: 5, display: "none" });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full font-sourcecode select-none bg-gray-900 overflow-hidden">
      <div className="flex flex-col flex-grow justify-start items-start h-screen max-w-screen-lg text-gray-200 text-xl px-5 lg:px-0">
        <div className="flex flex-col justify-between h-screen pt-20 pb-32">
          <div className="space-y-10 md:space-y-20">
            <div className="flex">
              <p ref={(el) => (firstItem = el)}>
                Hello, welcome to my computer!
              </p>
              <p
                className="font-black animate-blink"
                ref={(el) => (secondItem = el)}
              >
                _
              </p>
            </div>
            <p ref={(el) => (thirdItem = el)}>
              My name is Tanadon, and this is the fully interactive simulation
              of my computer to showcase my works.
              <span
                className="font-black animate-blink"
                ref={(el) => (fourthItem = el)}
              >
                _
              </span>
            </p>
            <p ref={(el) => (fifthItem = el)}>
              All of my works, experience and more are ready for you to browse!
              <span
                className="font-black animate-blink"
                ref={(el) => (sixthItem = el)}
              >
                _
              </span>
            </p>
            <p ref={(el) => (seventhItem = el)}>
              Enjoy browsing :)
              <span
                className="font-black animate-blink"
                ref={(el) => (eighthItem = el)}
              >
                _
              </span>
            </p>
            <div
              className="w-32 text-2xl"
              ref={(el) => (ninthItem = el)}
              onClick={() => {
                setLogin("load boot");
              }}
            >
              <p className="cursor-pointer hover:text-primary hover:underline">
                [continue]
                <span className="font-black animate-blink">_</span>
              </p>
            </div>
          </div>
          <p className="text-gray-400" ref={(el) => (tenthItem = el)}>
            There's also another site of my portfolio you can check out later
            <a
              href="https://tanadon.com/main/"
              target="_blank"
              className="ml-3 underline hover:text-primary"
            >
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
