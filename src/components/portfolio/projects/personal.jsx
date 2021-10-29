import Layout from "./layout";
import { data } from "../../../static/index";

export default function Personal() {
  return (
    <Layout
      title={data.project.personal.title}
      description={data.project.personal.description}
      year={data.project.personal.year}
    >
      <p>{data.project.personal.detail[0]}</p>
      <p>{data.project.personal.detail[1]}</p>
      <p>{data.project.personal.detail[2]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.personal.learning[0]}</p>
      </div>
    </Layout>
  );
}
