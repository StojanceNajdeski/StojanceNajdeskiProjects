import {
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative z-50 bg-sky-950 text-center text-white text-2xl manropeFont py-18">
      <p className="text-5xl font-extrabold">
        <Link to="/">
          najdeski<span className="text-zinc-300">.Dev</span>
        </Link>
      </p>

      <ul className="flex list-none justify-center items-center mt-5">
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to="/projects">{t("projects")}</Link>
        </li>
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to="/certificates">{t("certificates")}</Link>
        </li>
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to="/aboutme">{t("aboutMe")}</Link>
        </li>
        <li className="hover:text-zinc-300 transition-colors duration-400">
          <Link to="/contact">{t("contact")}</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center mt-10">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <FontAwesomeIcon icon={faSquareXTwitter} size="2x" className="ml-5" />
        <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="ml-5" />
      </div>

      <div className="mt-10 text-lg">
        <p>Copyright &copy; 2025 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
