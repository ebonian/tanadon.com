import { useState } from "react";
import Tag from "../tag";
import Images from "./images";
import { data } from "../../../static/index";

export default function Layout({ children, title, description, year, tag }) {
  const [page, setPage] = useState({
    details: true,
    images: false,
  });

  return (
    <div className="">
      {/* head */}
      <div className="flex justify-between">
        {/* left */}
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">
            {title}
            <span className="ml-5 text-base font-normal">{year}</span>
          </h1>
          <h4 className="font-medium text-xl">{description}</h4>
        </div>
        {/* right */}
        <div className="flex flex-col justify-end items-end text-left w-full select-none">
          <SwichContent
            title="Details"
            active={page.details}
            onClick={() => {
              setPage({ details: true });
            }}
          />
          <SwichContent
            title="Images"
            active={page.images}
            onClick={() => {
              setPage({ images: true });
            }}
          />
        </div>
      </div>
      <div className="w-32 h-1.5 rounded-full bg-portfolio-primary mt-5 mb-10" />
      {/* body */}
      {page.details && <Details children={children} />}
      {page.images && <Images title={title} />}
    </div>
  );
}

function SwichContent({ title, active, onClick }) {
  return (
    <p
      className={`cursor-pointer duration-200 hover:text-portfolio-primary ${
        active && "text-portfolio-primary"
      }`}
      onClick={onClick}
    >
      {title}
    </p>
  );
}

function Details({ children }) {
  return (
    <div className="max-w-screen-md space-y-7 h-120 pb-32 sm:pb-20 overflow-y-auto">
      {children}
    </div>
  );
}
