import Layout from "./layout";
import { data } from "../../../static/index";

export default function Enneagram() {
  return (
    <Layout
      title={data.project.enneagram.title}
      description={data.project.enneagram.description}
      year={data.project.enneagram.year}
    >
      <p>{data.project.enneagram.detail[0]}</p>
      <p>{data.project.enneagram.detail[1]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.enneagram.learning[0]}</p>
      </div>
    </Layout>
  );
}
