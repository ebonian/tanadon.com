import { useState } from "react";

import DojiImg01 from "../../../images/portfolio/doji02.jpg";

export default function Enneagram() {
  const [page, setPage] = useState({
    details: true,
    images: false,
  });
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">Enneagram</h1>
          <h4 className="font-medium text-xl">
            An Enneagram Online Exhibition
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
        During the era of COVID, a school must adapt teaching methods according
        to the situation. Every semester, my school will have an exhibition
        showcasing students' work. But when everything is all online, it makes
        it very difficult for the show. So I created our class's website to
        showcase what we've learned throughout the semester. We chose the topic
        of the enneagram to be a showcase.
      </p>
      <p>
        The site contains information about the enneagram test and the most
        challenging part, solving problems with enneagram. We can use the
        enneagram to understand others by first understanding their character.
        Use the information and data we have and ask a thought-provoking
        question. And solution after the process finish will store in the
        database for expanding our data and solution for those types and
        characters..
      </p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>
          This website is very challenging because I have only one week, and the
          problem-solving process is very complicated. However, being able to
          get through that tough week allowed me to push my limits. Working on
          tight deadlines was very challenging, but the results were very
          satisfying as well.
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
