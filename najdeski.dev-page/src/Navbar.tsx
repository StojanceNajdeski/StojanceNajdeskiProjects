import macedoniaFlag from "../public/macedoniaFlag.png";
import usaFlag from "../public/usaFlag.png";
import germanFlag from "../public/germanFlag.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-sky-950 fixed top-4 left-1/2 -translate-x-1/2 z-50 py-4 w-2/4 rounded-full cursor-pointer text-white manropeFont flex justify-between text-2xl">
      <div className="ml-6 hover:text-zinc-300 transition-colors duration-400">
        <p>
          <Link to="/">
            najdeski<span className="text-zinc-300">.Dev</span>
          </Link>
        </p>
      </div>
      <div className="flex list-none">
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to="/projects">{t("projects")}</Link>
        </li>
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to="/certificates">{t("certificates")}</Link>
        </li>
        <li className="mr-2 hover:text-zinc-300 transition-colors duration-400">
          <Link to={"/aboutme"}>{t("aboutMe")}</Link>
        </li>
        <li className="hover:text-zinc-300 transition-colors duration-400">
          <Link to={"/contact"}>{t("contact")}</Link>
        </li>
      </div>
      <div className="flex mr-6">
        <img
          src={macedoniaFlag}
          alt="macedonianFlag"
          className="mr-2 w-10 h-8"
          onClick={() => i18n.changeLanguage("mk")}
        />
        <img
          src={usaFlag}
          alt="usaFlag"
          className="mr-2 w-10 h-8"
          onClick={() => i18n.changeLanguage("en")}
        />
        <img
          src={germanFlag}
          alt="germanFlag"
          className="w-10 h-8"
          onClick={() => i18n.changeLanguage("de")}
        />
      </div>
    </div>
  );
};

export default Navbar;
