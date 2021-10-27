import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="flex flex-col sm:w-96 pr-4 sm:pr-0">
      <div className="flex space-x-4">
        <SocialButton type="Github" link="https://github.com/Ebonian/" />
        <SocialButton type="Linkedin" link="" />
        <SocialButton
          type="Facebook"
          link="https://www.facebook.com/tanadon.santisan"
        />
        <SocialButton type="Mail" link="mailto:tanadon.santisan@gmail.com" />
      </div>
    </div>
  );
}

function SocialButton({ type, link }) {
  return (
    <div className="text-white text-2xl duration-300 hover:text-portfolio-primary">
      <a href={link} target="_blank">
        {type === "Github" && <FiGithub />}
        {type === "Facebook" && <FiFacebook />}
        {type === "Mail" && <FiMail />}
        {type === "Linkedin" && <FiLinkedin />}
      </a>
    </div>
  );
}
