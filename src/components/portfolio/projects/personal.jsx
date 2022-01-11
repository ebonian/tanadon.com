import Layout from "./layout";
import { data } from "../../../static/index";

export default function Personal() {
  return (
    <Layout
      title={data.project.personal.title}
      description={data.project.personal.description}
      year={data.project.personal.year}
    >
      <p className="leading-relaxed">
        Tanadon Site is one of my exceptionally proud projects to create my
        portfolio's interactive version.
        <br />
        This website is the alternative way of viewing my portfolio by browsing
        through the interactive version of my portfolio through my website. The
        site will be divided into two sections.
        <br />
        The first is the usual site containing all of my projects, experiences,
        and activities throughout high school. This section is built explicitly
        for viewing from mobile.{" "}
      </p>
      <p className="leading-relaxed">
        The second section is the highlight. I have created the clone version of
        the Linux Ubuntu operating system into my website. This will let
        visitors simulate using and browsing my computer through a file system,
        seeing my project, and reading through my documents in the form of an
        interactive portfolio.
      </p>
    </Layout>
  );
}
