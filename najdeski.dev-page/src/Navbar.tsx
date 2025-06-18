import macedoniaFlag from "../public/macedoniaFlag.png";
import usaFlag from "../public/usaFlag.png";
import germanFlag from "../public/germanFlag.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-sky-950 fixed animate__animated animate__bounceInDown top-4 left-1/2 -translate-x-1/2 z-50 py-4 px-6 w-4/5 max-w-6xl rounded-full cursor-pointer text-white manropeFont flex items-center justify-between text-lg md:text-2xl">
      {/* Logo */}
      <div className="font-extrabold">
        <Link to="/">
          najdeski<span className="text-zinc-300">.Dev</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 list-none">
        <li className="hover:text-zinc-300 transition-colors duration-300">
          <Link to="/projects">{t("projects")}</Link>
        </li>
        <li className="hover:text-zinc-300 transition-colors duration-300">
          <Link to="/certificates">{t("certificates")}</Link>
        </li>
        <li className="hover:text-zinc-300 transition-colors duration-300">
          <Link to="/aboutme">{t("aboutMe")}</Link>
        </li>
        <li className="hover:text-zinc-300 transition-colors duration-300">
          <Link to="/contact">{t("contact")}</Link>
        </li>
      </ul>

      {/* Language Switcher */}
      <div className="flex space-x-2">
        <img
          src={macedoniaFlag}
          alt="Macedonian Flag"
          className="w-8 h-6 hover:scale-110 transition-transform"
          onClick={() => i18n.changeLanguage("mk")}
        />
        <img
          src={usaFlag}
          alt="USA Flag"
          className="w-8 h-6 hover:scale-110 transition-transform"
          onClick={() => i18n.changeLanguage("en")}
        />
        <img
          src={germanFlag}
          alt="German Flag"
          className="w-8 h-6 hover:scale-110 transition-transform"
          onClick={() => i18n.changeLanguage("de")}
        />
      </div>
    </div>
  );
};

export default Navbar;
