import Gradient from "@/components/gradient/gradient";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center select-none">
        <h1 className="font-semibold tracking-widest text-4xl">tanadon.</h1>
        <span>full-stack developer</span>
      </div>
      <Gradient dataJsDarkenTop />
    </>
  );
}
