import Layout from "./layout";
import { data } from "../../../static/index";

export default function Pps() {
  return (
    <Layout
      title={data.project.pps.title}
      description={data.project.pps.description}
      year={data.project.pps.year}
    >
      <p>{data.project.pps.detail[0]}</p>
      <p>{data.project.pps.detail[1]}</p>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Learning</h1>
        <p>{data.project.pps.learning[0]}</p>
      </div>
    </Layout>
  );
}
