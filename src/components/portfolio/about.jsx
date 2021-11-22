import ProfileImg from "../../images/portfolio/profile.jpg";

export default function About() {
  return (
    <div className="flex flex-col sm:w-96 space-y-7 pr-4 sm:pr-0 cursor-default">
      <div className="bg-white bg-opacity-5 rounded-xl py-3 px-4">
        It's me, Tanadon Santisan. A junior developer based in Thailand!
      </div>
      <div className="flex space-x-5">
        <img
          src={ProfileImg}
          className="rounded-full w-24 h-24 border-2 border-white select-none"
        />
        <div>
          <h1 className="font-semibold text-2xl">Tanadon Santisan</h1>
          <span className="text-lg text-portfolio-primary"> (Poon)</span>
          <p className="mt-2">Full Stack Developer </p>
        </div>
      </div>
      <p>
        Hello, I am Tanadon Santisan, but you can call me Poon. I am a
        12th-grade student from Panyaprateep School. I was born and raised in
        Thailand. I have been fascinated with computers and technology since
        childhood, and I love to innovate new things.
        <br />
        <br />
        I’m easily inspired and more than willing to follow my fascinations
        wherever they take me. I have very high energy and boundless enthusiasm
        for learning and developing myself.
      </p>
    </div>
  );
}
