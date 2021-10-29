import Layout from "./layout";
import { data } from "../../../static/index";

export default function Aspects() {
  return (
    <Layout
      title={data.project.aspects.title}
      description={data.project.aspects.description}
      year={data.project.aspects.year}
    >
      <p>{data.project.aspects.detail[0]}</p>
      <p>{data.project.aspects.detail[1]}</p>
      <p>{data.project.aspects.detail[2]}</p>
    </Layout>
  );
}
