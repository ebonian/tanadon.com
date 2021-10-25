import { useRef, useEffect } from "react";
import { gsap } from "gsap";

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
  let eleventhItem = useRef(null);
  let twelvthItem = useRef(null);
  let thirdteenthItem = useRef(null);
  let fourteenthItem = useRef(null);
  let fifteenthItem = useRef(null);
  let firstMainItem = useRef(null);

  let firstIntro = useRef(null);
  let secondIntro = useRef(null);
  let thirdIntro = useRef(null);
  let fourthIntro = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLogin("load boot");
    }, 24000);
    gsap
      .timeline()
      .to(firstItem, 1, { delay: 3, display: "none" })
      .from(secondItem, 0.001, { opacity: 0 })
      .from(thirdItem, 0.001, { delay: 1, opacity: 0 })
      .from(fourthItem, 0.001, { opacity: 0 })
      .to(thirdItem, { delay: 0.2, display: "none" })
      .to(secondItem, { delay: -0.5, display: "none" })
      .to(fourthItem, { delay: -1, display: "none" })
      .from(fifthItem, 0.001, { delay: 0.5, opacity: 0 })
      .from(sixthItem, 0.001, { delay: 0.1, opacity: 0 })
      .from(seventhItem, 0.001, { delay: 0.1, opacity: 0 })
      .from(eighthItem, 0.001, { delay: 0.2, opacity: 0 })
      .from(ninthItem, 0.001, { delay: 0.1, opacity: 0 })
      .from(tenthItem, 0.001, { delay: 1, opacity: 0 })
      .from(eleventhItem, 0.001, { delay: 1, opacity: 0 })
      .from(twelvthItem, 0.001, { delay: 0.1, opacity: 0 })
      .from(thirdteenthItem, 0.001, { delay: 0.1, opacity: 0 })
      .from(fourteenthItem, 0.001, { delay: 0.2, opacity: 0 })
      .from(fifteenthItem, 0.001, { delay: 0.1, opacity: 0 })
      .to(firstMainItem, 0.001, { delay: 0.5, display: "none" })
      .from(firstIntro, 0.001, { delay: 1, opacity: 0 })
      .from(secondIntro, 0.001, { delay: 3, opacity: 0 })
      .from(thirdIntro, 0.001, { delay: 3.5, opacity: 0 })
      .from(fourthIntro, 0.001, { delay: 2, opacity: 0 });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full font-sourcecode select-none">
      <div className="flex flex-col flex-grow justify-start items-start h-screen max-w-screen-lg text-white text-xl">
        <p
          className="font-black animate-blink"
          ref={(el) => {
            firstItem = el;
          }}
        >
          _
        </p>
        <p
          ref={(el) => {
            secondItem = el;
          }}
        >
          /dev/sda5: clean, 242899/622592 files, 2159414/2489600 blocks
        </p>
        <p
          ref={(el) => {
            thirdItem = el;
          }}
        >
          [{" "}
          <span className="ml-18">
            4.413069] [drm:vmw_host_log [vmwgfx]] *ERROR* Failed to send host
            log message.
          </span>
        </p>
        <p
          ref={(el) => {
            fourthItem = el;
          }}
        >
          [{" "}
          <span className="ml-18">
            4.414492] [drm:vmw_host_log [vmwgfx]] *ERROR* Failed to send host
            log message.
          </span>
        </p>
        {/* first main item */}
        <div
          className="pt-10"
          ref={(el) => {
            firstMainItem = el;
          }}
        >
          <p
            ref={(el) => {
              fifthItem = el;
            }}
          >
            AMIBIOS (C) 2012 American Megatrends, Inc.
          </p>
          <p
            ref={(el) => {
              sixthItem = el;
            }}
          >
            BIOS Date 26/10/21 00:26:02 Ver:08.00.15
          </p>
          <p
            ref={(el) => {
              seventhItem = el;
            }}
          >
            CPU: Inter(R) CPU i7-7700 @ 2800 MHz
          </p>
          <p
            ref={(el) => {
              eighthItem = el;
            }}
          >
            Speed: 2800 MHz
          </p>
          <p
            ref={(el) => {
              ninthItem = el;
            }}
          >
            This VGA/PCI Bios is released under the GNU LGPL
          </p>
          <br />
          <p
            ref={(el) => {
              tenthItem = el;
            }}
          >
            Memory Clock: 2400 Mhz, Tcl:7 Tred:4 Trp:8 Tras:20 (2T Timing) 16
            bit
          </p>
          <p
            ref={(el) => {
              eleventhItem = el;
            }}
          >
            Memory Test: 7956100K OK
          </p>
          <p
            ref={(el) => {
              twelvthItem = el;
            }}
          >
            Initializing USB Controllers.. Done.
          </p>
          <p
            ref={(el) => {
              thirdteenthItem = el;
            }}
          >
            1024MB OK
          </p>
          <p
            ref={(el) => {
              fourteenthItem = el;
            }}
          >
            USB Device(s): 1 Keyboard, 1 Mouse, 1 Storage Device
          </p>
          <p
            ref={(el) => {
              fifteenthItem = el;
            }}
          >
            Booting from Solid State Drive...
          </p>
        </div>
        {/* second main item */}
        <div className="pt-10">
          <p
            ref={(el) => {
              firstIntro = el;
            }}
          >
            Now you are currently booting into Tanadon's Computer.
          </p>
          <p
            ref={(el) => {
              secondIntro = el;
            }}
          >
            This is just the simulation of my computer to show case my
            Portfolio.
          </p>
          <p
            ref={(el) => {
              thirdIntro = el;
            }}
          >
            P.S. If you get lost, there will be a help button on a sidebar.
          </p>
          <br />
          <p
            ref={(el) => {
              fourthIntro = el;
            }}
          >
            Enjoy browsing :)<span className="animate-blink font-bold"> _</span>
          </p>
        </div>
      </div>
    </div>
  );
}
