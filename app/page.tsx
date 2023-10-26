import Page from "@/layouts/page";

export default function Home(): JSX.Element {
  return (
    <Page
      path={["/", "/about"]}
      gradient
      className="flex flex-col items-center justify-center select-none"
    >
      <h1 className="font-semibold tracking-widest text-4xl">tanadon.</h1>
      <p>full-stack developer</p>
    </Page>
  );
}
