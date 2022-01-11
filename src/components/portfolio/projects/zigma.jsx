import Layout from "./layout";
import { data } from "../../../static/index";

export default function Zigma() {
  return (
    <Layout
      title={data.project.zigma.title}
      description={data.project.zigma.description}
      year={data.project.zigma.year}
    >
      <p className="leading-relaxed">
        After I finished the Rood project, I was invited by some of my seniors
        and friends to join the team and continue our passion for money
        management applications. We discover that many money management
        applications are hard to use and spend too much time tracking expenses.
      </p>
      <p className="leading-relaxed">
        So we came up with the idea to solve this pain point by creating an
        application intended to make record income and expenses easier by
        implementing AI. We used machine learning technology for image
        processing and OCR to record a receipt and voice recognition for rapid
        recording. Furthermore, we take the transactions data and analyze it by
        bringing some future from my past project, “Rood,” to help our users
        reach their goals.
      </p>
      <p className="leading-relaxed">
        Innovation, technology, marketing, and management are the criteria of
        competition we have to care about. Moreover, the process of design
        thinking is the vital key too. Empathizing our user is one of the
        essential parts to make it easy and comprehend.
      </p>
      <p className="leading-relaxed">
        The project is still in the development process, and we believe it will
        release within this next year. We had also attended an incubator program
        named TECHBITE and Microsoft Azure Hackathon for funding and mentoring.
        This led me to experience both in the technical and business field.
      </p>
      <p className="leading-relaxed">
        Speaking of the technical field, AI and machine learning are very new to
        me. This project opened up the opportunity for me to develop my
        programming skills understand more about the usage of machine learning
        and, the process of development. It is very enjoying for me to work in
        this project. I love to communicate and working as a team, thinking and
        create new innovation, develop the prototype, and seeing that it is work
        and able to solve the painpoint we have.
      </p>
      <p>
        {"Test the Prototype! -> "}
        <a
          href="https://xd.adobe.com/view/1d835182-99dc-46f3-af40-1440ab01f817-48d0/?fullscreen"
          target="_blank"
          className="text-portfolio-primary hover:underline font-bold"
        >
          Zigma Prototype
        </a>
      </p>
    </Layout>
  );
}
