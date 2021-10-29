import Layout from "./layout";
import { data } from "../../../static/index";

export default function Cai() {
  return (
    <Layout
      title={data.project.cai.title}
      description={data.project.cai.description}
      year={data.project.cai.year}
    >
      <p>{data.project.cai.detail[0]}</p>
      <p>{data.project.cai.detail[1]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.cai.learning[0]}</p>
      </div>
    </Layout>
  );
}
