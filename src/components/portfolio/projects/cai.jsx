import Layout from "./layout";
import { data } from "../../../static/index";

export default function Cai() {
  return (
    <Layout
      title={data.project.cai.title}
      description={data.project.cai.description}
      year={data.project.cai.year}
    >
      <h1 className="text-xl font-bold">About the camp</h1>
      <p className="leading-relaxed">
        When I was in grade 12, I had the opportunity to attend the CAI
        Camp(Creative AI Camp). This camp was established to recruit young
        people from schools across the country to study AI and Go to grow to be
        a leader in technology, society, business, and further development of
        the country.
      </p>
      <p className="leading-relaxed">
        At the beginning of the camp, I studied the fundamentals of cloud
        services, project management, and the GO chess game. The lesson was very
        comprehensive and sparked my new ideas to bring AI to solve many
        problems.
      </p>
      <h1 className="text-xl font-bold">
        The Energy Consumption Evaluation and Predictor
      </h1>
      <p className="leading-relaxed">
        After the study session, the camp was divided into groups and assigned
        tasks to solve the CPALL company's problem. My group got the issue of
        energy overconsumption in a 7-Eleven. We had to use AI to help reduce
        the energy consumption of the store. We began by talking with the
        business unit, who gave us the task of gathering more information. We
        found out that the main problem of inflated electricity consumption is
        inefficient usage and unpredictable factors. So we came up with the idea
        to use the data from various branches, including past electricity usage,
        location, size, and many more, to train the machine learning model and
        predict electricity for each branch.
      </p>
      <p className="leading-relaxed">
        The outcome worked as we expected. The model can predict the best energy
        consumption to target energy consumption, and we can push our accuracy
        score to 73% for a prediction.
      </p>
      <p className="leading-relaxed">
        Moreover, we have created the software for both the branch staff and
        support teams to monitor and evaluate their consumption. We also
        developed a formula of efficiency score calculated by the usage and
        factor of each store and ranked it to create competition between those
        branches.
      </p>
      <h1 className="text-xl font-bold">Learning</h1>
      <p className="leading-relaxed">
        Being part of this camp made me learn a lot. From what I had the basic
        knowledge of AI, now I understand more about its fundamentals, the
        development in real-world usage, and the process of creating it. At that
        time, we have only a month for the project; therefore, planning,
        managing, communicating, and teamwork are crucial. On top of that, I
        have learned the sense of working in real-world business. Understand the
        client, think about the profit and investment, and present ideas and
        solutions for further development.
      </p>
      <p>
        {"Visit the Repository! -> "}
        <a
          href="https://github.com/Ebonian/CAI-Energy-Management"
          target="_blank"
          className="text-portfolio-primary hover:underline font-bold"
        >
          ECEP Github
        </a>
      </p>
      {/* <p>{data.project.cai.detail[0]}</p>
      <p>{data.project.cai.detail[1]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.cai.learning[0]}</p>
      </div> */}
    </Layout>
  );
}
