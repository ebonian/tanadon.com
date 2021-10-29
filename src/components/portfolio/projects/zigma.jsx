import Layout from "./layout";
import { data } from "../../../static/index";

export default function Zigma() {
  return (
    <Layout
      title={data.project.zigma.title}
      description={data.project.zigma.description}
      year={data.project.zigma.year}
    >
      <p>{data.project.zigma.detail[0]}</p>
      <p>{data.project.zigma.detail[1]}</p>
      <p>{data.project.zigma.detail[2]}</p>
      <p>{data.project.zigma.detail[3]}</p>
    </Layout>
  );
}
