import Layout from "./layout";
import { data } from "../../../static/index";

export default function Pps() {
  return (
    <Layout
      title={data.project.pps.title}
      description={data.project.pps.description}
      year={data.project.pps.year}
    >
      <h1 className="text-xl font-bold">What is PPS Renovation Lab?</h1>
      <p className="leading-relaxed">
        Before I graduated Grade 12 and left the school, one of my goals was to
        use my knowledge and experience over the last six years to give back to
        the school and community.
      </p>
      <p className="leading-relaxed">
        As a student in boarding school, I found out that there are many
        problems in documentation including, name-checking, application form,
        and other evaluations.
        <br />
        Moreover, it isn't easy to gather and summarize data because it is
        scattered. This problem makes both teacher and student work harder and
        time consumable. So I decided to start a project to solve this problem
        by digitizing the school system.
      </p>
      <h1 className="text-xl font-bold">Development Process</h1>
      <p className="leading-relaxed">
        In the early stage of initiating, I started to create a prototype in the
        Notion program to demo teachers and student for a feedback and
        improvement. After that, in the development process, I started to bring
        the prototype to a real production. I chose to create the PWA
        application so it can work both on a computer and mobile platform for
        easy access to both students and teachers.
      </p>
      <p className="leading-relaxed">
        The program and application were successful, and I am incredibly proud
        of it. I turned most documents into an online form, stored student data
        into a database, and created a teachers' summary dashboard.
      </p>
      <h1 className="text-xl font-bold">Learning</h1>
      <p className="leading-relaxed">
        What I gained from this project is more than just the technical skills,
        but I learned and understood how to empathize with the users.
        Understanding the teacher from a different perceptive from being a
        student was one of the vital parts of my development of the solution and
        its suitability. Furthermore, this project led me to become a school
        prefect, which I am enormously proud of. I was responsible for upholding
        the standards and culture of the school, as well as solving conflicts
        between students and dealing with different types of situations within
        the dormitory and school.
      </p>
      {/* <p>{data.project.pps.detail[0]}</p>
      <p>{data.project.pps.detail[1]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.pps.learning[0]}</p>
      </div> */}
    </Layout>
  );
}
