import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="flex flex-col sm:w-96 pr-4 sm:pr-0">
      <div className="flex flex-col space-y-10 select-none">
        {/* github */}
        <a
          className="flex items-center space-x-4 group"
          href="https://github.com/Ebonian/"
          target="_blank"
        >
          <SocialButton type="Github" link="https://github.com/Ebonian/" />
          <div>
            <h1 className="font-semibold text-lg">Github</h1>
            <p>https://github.com/Ebonian/</p>
          </div>
        </a>

        {/* linkedin */}
        {/* <a
          className="flex items-center space-x-4 group"
          href="/"
          target="_blank"
        >
          <SocialButton type="Linkedin" link="" />
          <div>
            <h1 className="font-semibold text-lg">Linkedin</h1>
            <p>???</p>
          </div>
        </a> */}

        {/* facebook */}
        <a
          className="flex items-center space-x-4 group"
          href="https://www.facebook.com/tanadon.santisan"
          target="_blank"
        >
          <SocialButton
            type="Facebook"
            link="https://www.facebook.com/tanadon.santisan"
          />
          <div>
            <h1 className="font-semibold text-lg">Facebook</h1>
            <p>https://github.com/Ebonian/</p>
          </div>
        </a>
        {/* gmail */}
        <a
          className="flex items-center space-x-4 group"
          href="mailto:tanadon.santisan@gmail.com"
        >
          <SocialButton type="Mail" link="mailto:tanadon.santisan@gmail.com" />
          <div>
            <h1 className="font-semibold text-lg">E-Mail</h1>
            <p>tanadon.santisan@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function SocialButton({ type, link }) {
  return (
    <div className="text-white text-4xl duration-300 group-hover:text-portfolio-primary">
      <a href={link} target="_blank">
        {type === "Github" && <FiGithub />}
        {type === "Facebook" && <FiFacebook />}
        {type === "Mail" && <FiMail />}
        {type === "Linkedin" && <FiLinkedin />}
      </a>
    </div>
  );
}
