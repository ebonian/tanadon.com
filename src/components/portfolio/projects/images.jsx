import DojiImg01 from "../../../images/portfolio/doji02.jpg";
import DojiImg02 from "../../../images/portfolio/doji04.jpg";
import DojiImg03 from "../../../images/portfolio/doji05.jpg";
import DojiImg04 from "../../../images/portfolio/doji06.jpg";

import EnneagramImg01 from "../../../images/portfolio/enneagram02.png";
import EnneagramImg02 from "../../../images/portfolio/enneagram03.png";
import EnneagramImg03 from "../../../images/portfolio/enneagram04.png";
import EnneagramImg04 from "../../../images/portfolio/enneagram05.png";

import ZigmaImg01 from "../../../images/portfolio/zigma02.jpg";
import ZigmaImg02 from "../../../images/portfolio/zigma03.jpg";
import ZigmaImg03 from "../../../images/portfolio/zigma04.jpg";
import ZigmaImg04 from "../../../images/portfolio/zigma05.jpg";

import RoodImg01 from "../../../images/portfolio/rood02.png";
import RoodImg02 from "../../../images/portfolio/rood03.png";
import RoodImg03 from "../../../images/portfolio/rood04.jpg";
import RoodImg04 from "../../../images/portfolio/rood05.png";

import CaiImg01 from "../../../images/portfolio/cai02.jpeg";
import CaiImg02 from "../../../images/portfolio/cai03.jpeg";
import CaiImg03 from "../../../images/portfolio/cai04.jpeg";
import CaiImg04 from "../../../images/portfolio/cai05.jpeg";

import PpsImg01 from "../../../images/portfolio/pps02.png";
import PpsImg02 from "../../../images/portfolio/pps03.png";

export default function Images({ title }) {
  return (
    <div className="grid grid-cols-2 gap-5 max-w-screen-md h-120 pb-32 sm:pb-20 overflow-y-auto">
      {title === "Doji" && (
        <>
          <img src={DojiImg01} alt="Doji Team Image" />
          <img src={DojiImg02} alt="Doji Team Image" />
          <img src={DojiImg03} alt="Doji Team Image" />
          <img src={DojiImg04} alt="Doji Team Image" />
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
          <img src={ZigmaImg02} />
          <img src={ZigmaImg03} />
          <img src={ZigmaImg04} />
        </>
      )}

      {title === "Rood" && (
        <>
          <img src={RoodImg01} alt="Rood Team Image" />
          <img src={RoodImg02} alt="Rood Pithing Image" />
          <img src={RoodImg03} alt="School of Changemaker Certificate" />
          <img src={RoodImg04} alt="School of Changemaker Certificate" />
        </>
      )}

      {title === "Creative AI Camp" && (
        <>
          <img src={CaiImg01} />
          <img src={CaiImg02} />
          <img src={CaiImg03} />
          <img src={CaiImg04} />
        </>
      )}

      {title === "PPS Renovation Lab" && (
        <>
          <img src={PpsImg01} />
          <img src={PpsImg02} />
        </>
      )}
    </div>
  );
}
