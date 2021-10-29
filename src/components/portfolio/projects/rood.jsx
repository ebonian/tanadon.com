import Layout from "./layout";
import { data } from "../../../static/index";

export default function Rood() {
  return (
    <Layout
      title={data.project.rood.title}
      description={data.project.rood.description}
      year={data.project.rood.year}
    >
      <p>{data.project.rood.detail[0]}</p>
      <p>{data.project.rood.detail[1]}</p>
      <p>{data.project.rood.detail[2]}</p>
    </Layout>
  );
}
