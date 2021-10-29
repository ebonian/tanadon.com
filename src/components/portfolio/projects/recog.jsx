import Layout from "./layout";
import { data } from "../../../static/index";

export default function Recog() {
  return (
    <Layout
      title={data.project.recog.title}
      description={data.project.recog.description}
      year={data.project.recog.year}
    >
      <p>{data.project.recog.detail[0]}</p>
      <p>{data.project.recog.detail[1]}</p>
      <p>{data.project.recog.detail[2]}</p>
    </Layout>
  );
}
