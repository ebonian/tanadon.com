import Layout from "./layout";
import { data } from "../../../static/index";

export default function Doji() {
  return (
    <Layout
      title={data.project.doji.title}
      description={data.project.doji.description}
      year={data.project.doji.year}
    >
      <p>{data.project.doji.detail[0]}</p>
      <p>{data.project.doji.detail[1]}</p>
      <p>{data.project.doji.detail[2]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.doji.learning[0]}</p>
      </div>
    </Layout>
  );
}
