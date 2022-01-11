import Layout from "./layout";
import { data } from "../../../static/index";

export default function Doji() {
  return (
    <Layout
      title={data.project.doji.title}
      description={data.project.doji.description}
      year={data.project.doji.year}
    >
      <p className="leading-relaxed">
        During the semester break in Grade 12, I got an opportunity from the 3rd
        year senior at BASCII faculty to co-found a startup company name Doji.
        My role is to be a development team to develop and maintain the
        applicatin we created. This Project is one of my big step in working as
        a professional team, involved with blockchain technology, and creating
        the real world application.
      </p>
      <h1 className="text-xl font-bold">The Product</h1>
      <p className="leading-relaxed">
        The pain point we discover is that traders spend almost 80% of their
        trading time searching through various selections of graphs just to find
        the coin with the best buy technical signal. For this reason, it made
        traders miss profitable opportunities in making a profit as they could
        not find the right coin at the right price.
      </p>
      <p className="leading-relaxed">
        To provide actionable information for traders with the discovery of
        potential coins, we decided to create the intelligent sorting tools with
        an algorithm to monitor the real-time market and pick the coins from
        technical indicators. The product we created is in the form of web
        application with NextJS to perform the web page and Node as a API for
        coins data.
      </p>
      <h1 className="text-xl font-bold">Learning</h1>
      <p className="leading-relaxed">
        It was my first time working with 3rd-year seniors in college that were
        much older, more professional, and serious about their work. Working as
        a team like this allowed me to experience and learn many more things
        that I can’t find in working for a school or other small project.
        Responsibility, collaboration, keeping track of work, and building the
        team’s relationship are essential to maintain the project.
      </p>
      <p className="leading-relaxed">
        Moreover, doing this project has allowed me to learn more about working
        as a front-end and back-end, understanding blockchain, and using a
        version control tool like Git. More importantly, this project led me to
        discover myself. I found out that I like working in this type of job.
        I’m immensely enjoying the process and very proud of the outcomes. What
        I learned from this project is not just technical knowledge, but it is a
        soft skill also, and I wish I could have more opportunities like this at
        the university.
      </p>
      <p>
        {"Visit the Doji site! -> "}
        <a
          href="https://doji.site"
          target="_blank"
          className="text-portfolio-primary hover:underline font-bold"
        >
          Doji Website
        </a>
      </p>
      {/* <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.doji.learning[0]}</p>
      </div> */}
    </Layout>
  );
}
