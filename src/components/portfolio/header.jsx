import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { SteppedEase } from "gsap/all";

export default function Header() {
  let leftItem = useRef(null);
  let rightItem = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftItem,
      1.5,
      { width: "0px" },
      { delay: 2, width: "128px", ease: SteppedEase.config(7) }
    );
    // gsap.from(leftItem, 8, { delay: 3.5, width: "0" });
    gsap.to(rightItem, 2, { delay: 5, opacity: 1 });
    gsap.from(rightItem, 2, { delay: 5, x: 40 });
  }, []);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white select-none z-50 font-sourcecode">
      {/* left */}
      <div className="flex font-bold text-3xl group ">
        <a href="/">
          <p
            className="cursor-pointer group-hover:text-portfolio-primary whitespace-nowrap w-32 overflow-hidden"
            ref={(el) => {
              leftItem = el;
            }}
          >
            tanadon
          </p>
        </a>
        <p className="animate-blink text-portfolio-primary group-hover:text-white duration-300">
          _
        </p>
      </div>
      {/* right */}
      <div
        className="flex w- text-sm md:text-base space-x-1 group opacity-0"
        ref={(el) => {
          rightItem = el;
        }}
      >
        <Link
          to="/computer"
          className="group-hover:text-portfolio-primary group-hover:translate-x-3 duration-300 group-hover:tracking-wide"
        >
          Explore My Computer
        </Link>
        <Link
          to="/computer"
          className="group-hover:text-portfolio-primary group-hover:translate-x-5 duration-300 hidden sm:block"
        >
          {"->"}
        </Link>
      </div>
    </div>
  );
}
