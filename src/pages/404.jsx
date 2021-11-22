import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-portfolio-base-200 h-screen w-full font-sourcecode text-white space-y-5">
      <h1 className="font-bold text-5xl">
        404<span className="text-portfolio-primary animate-blink">_</span>
      </h1>
      <Link to="/">
        <p className="pr-9 hover:text-portfolio-primary duration-200 hover:tracking-wide">
          {"> cd ~"}
        </p>
      </Link>
    </div>
  );
}
