import DojiImg01 from "../../../images/portfolio/doji02.jpg";

import EnneagramImg01 from "../../../images/portfolio/enneagram02.png";
import EnneagramImg02 from "../../../images/portfolio/enneagram03.png";
import EnneagramImg03 from "../../../images/portfolio/enneagram04.png";
import EnneagramImg04 from "../../../images/portfolio/enneagram05.png";

import ZigmaImg01 from "../../../images/portfolio/zigma02.jpg";

import RoodImg01 from "../../../images/portfolio/rood02.png";
import RoodImg02 from "../../../images/portfolio/rood03.png";

export default function Images({ title }) {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-screen-md h-120 pb-32 sm:pb-20 overflow-y-auto">
      {title === "Doji" && (
        <>
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg01} alt="Doji Team Image" />
        </>
      )}

      {title === "Enneagram" && (
        <>
          <img src={EnneagramImg01} alt="Enneagram Website Image" />
          <img src={EnneagramImg02} alt="Enneagram Website Image" />
          <img src={EnneagramImg03} alt="Enneagram Website Image" />
          <img src={EnneagramImg04} alt="Enneagram Website Image" />
        </>
      )}

      {title === "Zigma" && (
        <>
          <img src={ZigmaImg01} alt="Zigma Team Image" />
        </>
      )}

      {title === "Rood" && (
        <>
          <img src={RoodImg01} alt="Rood Team Image" />
          <img src={RoodImg02} alt="Rood Pithing Image" />
        </>
      )}
    </div>
  );
}
