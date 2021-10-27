import { useState } from "react";

import DojiImg01 from "../../../images/portfolio/doji02.jpg";

export default function Doji() {
  const [page, setPage] = useState({
    details: true,
    images: false,
  });
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">Doji</h1>
          <h4 className="font-medium text-xl">
            A technical trading assistant platform for crypto traders.
          </h4>
        </div>
        <div className="flex flex-col justify-end items-end text-left w-full">
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
      {page.details && <Details />}
      {page.images && <Images />}
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

function Details() {
  return (
    <div className="max-w-screen-md space-y-7 h-120 pb-32 sm:pb-20 overflow-y-auto">
      <p>
        Doji project is a project that I have been part of the developer team of
        the startup company. I had the opportunity that besides doing production
        work, I was a part of thinking of ideas, designing, marketing, trying to
        think in terms of both Business and Tech at the same time.
      </p>
      <p>
        Doji's idea was inspired by our desire to make investment more
        accessible and easier for everyone. We want to create a tool that can be
        an assistant for traders, so we came up with an application that
        provides actionable information for traders to discover potential coins.
      </p>
      <p>
        It was my first time working with third-year seniors in college that
        were much older, more professional, and serious about their work.
        Working as a team like this allowed me to experience and learn many more
        things that I can't find in working for a school or other small project.
        Responsibility, collaboration, working as a sprint and keeping track and
        updating works.
      </p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>
          Doing this project has also allowed me to learn more about working as
          a full-stack, understanding Blockchain, and implementing much
          technology. The project is in the mid-development state, but we think
          our product will be launched very soon this year.
        </p>
      </div>
    </div>
  );
}

function Images() {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-screen-md h-120 pb-32 sm:pb-20 overflow-y-auto">
      <img src={DojiImg01} alt="Doji Team Image" />
      <img src={DojiImg01} alt="Doji Team Image" />
      <img src={DojiImg01} alt="Doji Team Image" />
      <img src={DojiImg01} alt="Doji Team Image" />
      <img src={DojiImg01} alt="Doji Team Image" />
      <img src={DojiImg01} alt="Doji Team Image" />
    </div>
  );
}
