import Layout from "./layout";
import { data } from "../../../static/index";

export default function Rood() {
  return (
    <Layout
      title={data.project.rood.title}
      description={data.project.rood.description}
      year={data.project.rood.year}
    >
      <p className="leading-relaxed">
        I started to see innovation and business clearer when I and my friend
        participated in a year-long skillful business management course. In
        collaboration with the School of Changemakers, my school gave us the
        opportunity to study and create our social enterprise. We did the
        project for the whole year using the design thinking method to generate
        user-centered ideas the whole year studying.
      </p>
      <p className="leading-relaxed">
        We researched and discovered that almost 56% of generation Y has credit
        card problems. Then we began the ‘empathizing’ stage to understand the
        stakeholders. We explored in detail with many teenagers, surveying via
        an online form and interviewing them across Bangkok to gain insight.
        This process helped us understand more about our users and the root
        cause of their problems. Moreover, we have used some of the tools we had
        studied, for instance, the ‘iceberg model’ and ‘user journey,’ to
        identify its problem.
      </p>
      <p className="leading-relaxed">
        In the ‘ideation’ stage, we created an application intended to reduce
        and prevent debt. We saw that most people with this problem have a
        pattern of behavior. They do have their goal, but most are discouraged
        and unable to find their way to reach it. So, we invented a program
        intended to enable users to fill in the amount of debt they have, their
        expenses, monthly and daily fixed costs, and their desired goal. The
        program will result in a limit for their spending each day. This method
        will help our users complete a little task one by one until they achieve
        their goal.
      </p>
      <p className="leading-relaxed">
        As a result, we tested the prototype by opening a booth in the
        innovation exhibition to take a feedbacks and it was turns out great.
        From the whole project, I learned a lot from the whole process, this
        project is my first step into programming. Moreover, doing project like
        this is very new to me, planning, developing, team work, or even
        financial plan is what I learn and experience from this project. But at
        last, it makes me feel passionate to learn and try more exploring on a
        project like this and more working on innovating and programming too!
      </p>
    </Layout>
  );
}
