import Layout from "./layout";
import { data } from "../../../static/index";
import { useContext } from "react";
import { PortfolioContext } from "../../../pages/portfolio";

export default function Enneagram() {
  const { lang } = useContext(PortfolioContext);
  return (
    <Layout
      title={
        lang === "en"
          ? data.project.enneagram.title
          : data.project.enneagram.th.title
      }
      description={
        lang === "en"
          ? data.project.enneagram.description
          : data.project.enneagram.th.description
      }
      year={data.project.enneagram.year}
    >
      <p className="leading-relaxed">
        {lang === "en"
          ? "During this time of COVID, schools must adapt their teaching methods according to the situation. Every semester, my school will have an exhibition showcasing students' work. But when everything is all online, it is challenging for the show. So I proposed the idea to create a class website to showcase what we've learned throughout the semester, and it was chosen."
          : data.project.enneagram.th.detail[0]}
      </p>
      <p className="leading-relaxed">
        We decided to showcase our enneagram work. As I have the most
        programming experience, I was assigned to lead the development team.
        Working in this type of exhibition was new to my friends, so having the
        same picture was necessary, and I needed to communicate my vision
        clearly for others. My other role was to bring each section together and
        gather pieces from other groups to continue production.
      </p>
      <p className="leading-relaxed">
        As a result, the site contains information about the enneagram, the
        test, and solving problems with the enneagram. We can use the enneagram
        to understand others by first understanding their character. We use the
        information and data we have and ask a thought-provoking question. After
        the process is finished, the solution will be stored in the database for
        expanding our data and solutions for those character types. This project
        was very challenging because I had only one week, and the
        problem-solving process was very complicated. However, getting through
        that tough week allowed me to push my limits.
      </p>
      <p className="leading-relaxed">
        Moreover, being a leader was something I rarely had the opportunity to
        do. I learned that communication is crucial for teamwork and getting the
        job done. Working on tight deadlines and being a leader was very
        challenging, but I immensely enjoyed it and hope to do more like this in
        there future.
      </p>
      <p>
        {"Visit the Exhibition! -> "}
        <a
          href="https://cicada-website.web.app/"
          target="_blank"
          className="text-portfolio-primary hover:underline font-bold"
        >
          Enneagram Online Exhibition
        </a>
      </p>
      {/* <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.enneagram.learning[0]}</p>
      </div> */}
    </Layout>
  );
}
