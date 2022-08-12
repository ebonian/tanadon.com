import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";

const Maintenance: React.FC = () => {
  return (
    <div className="grid place-content-center min-h-screen bg-[#121212] text-white font-code p-10">
      <span className="sm:hidden text-6xl mb-3 -ml-2">👨‍💻</span>
      <h1 className="font-semibold text-4xl md:text-5xl">
        <span className="hidden sm:inline">👨‍💻</span>
        {" Site under maintenance"}
      </h1>
      <div className="sm:ml-[4.5rem] md:ml-24 mt-3 sm:mt-1.5 space-y-10">
        <p>Will be right back very soon ⚡</p>
        <div className="flex items-center space-x-8 select-none">
          <a
            href="https://github.com/Ebonian"
            target="_blank"
            rel="noreferrer"
            className="opacity-30 hover:opacity-80 duration-200 flex items-center space-x-2"
          >
            <FiGithub />
            <span>Github</span>
          </a>
          <a
            href="https://www.instagram.com/poonisnotconcrete/"
            target="_blank"
            rel="noreferrer"
            className="opacity-30 hover:opacity-80 duration-200 flex items-center space-x-2"
          >
            <FiInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:tanadon.santisan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="opacity-30 hover:opacity-80 duration-200 flex items-center space-x-2"
          >
            <FiMail />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
