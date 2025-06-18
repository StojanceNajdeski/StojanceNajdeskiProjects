import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "../public/Background.jpg";
import PhotoOfMe from "../public/PhotoOfMe.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img
          src={Background}
          alt="backgroundImage"
          className="w-full shadow-2xl"
        />
      </div>
      <div className="pt-44 pb-15">
        <div className="w-[90%] mx-auto">
          <div className="flex pb-36">
            <div className="basis-2/5 z- animate__animated animate__bounceInLeft">
              <img src={PhotoOfMe} alt="PhotoOfMe" className="rounded-b-3xl" />
            </div>
            <div className="basis-3/5 z-10 pt-72 ml-15 animate__animated animate__bounceInRight">
              <h2 className="text-6xl mb-10 manropeFont">
                {t("stojancheNajdeski")} <br />
                Junior Front-End Developer
              </h2>
              <a
                href="https://www.linkedin.com/in/stojanche-najdeski-947891303/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="mr-5" />
              </a>
              <a
                href="https://github.com/StojanceNajdeski/StojanceNajdeskiProjects"
                target="blank"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="3x"
                  className="mt-2"
                />
                <p className="nunitoFont text-3xl items-center justify-center flex ml-5">
                  {t("location")}
                </p>
              </div>
              <div className="flex mt-2">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                <p className="nunitoFont text-3xl items-center justify-center flex ml-5">
                  stojancenajdeski@gmail.com
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faPhone} size="3x" className="mt-2" />
                <p className="nunitoFont text-3xl items-center justify-center flex ml-5">
                  +389-77-675-317
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
