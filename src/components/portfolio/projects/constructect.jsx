import Layout from "./layout";
import { data } from "../../../static/index";

export default function Constructect() {
  return (
    <Layout
      title={data.project.constructect.title}
      description={data.project.constructect.description}
      year={data.project.constructect.year}
    >
      <p>{data.project.constructect.detail[0]}</p>
      <p>{data.project.constructect.detail[1]}</p>
      <p>{data.project.constructect.detail[2]}</p>
    </Layout>
  );
}
