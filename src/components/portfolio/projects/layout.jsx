import Header from "../header";

export default function Layout({ children }) {
  return (
    <div className="flex justify-center h-screen w-full bg-portfolio-base-200 font-sourcecode px-5 sm:px-20 2xl:px-0">
      <div className="flex flex-col flex-grow h-screen max-w-screen-xl text-white">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
