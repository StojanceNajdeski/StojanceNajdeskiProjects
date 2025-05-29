import Background from "../../public/Background.jpg";
import PhotoOfMe from "../../public/PhotoOfMe.png";
import brainsterLogo from "../../public/brainsterLogo.png";
import programingLanguages from "../../public/programingLanguage.jpg";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img src={Background} alt="backgroundImage" className="w-full" />
        <img src={Background} alt="backgroundImage" className="w-full" />
      </div>
      <div className="pt-32 pb-44">
        <div className="w-[90%] mx-auto">
          <div className="flex pb-36">
            <div className="basis-2/5 z-10">
              <img src={PhotoOfMe} alt="PhotoOfMe" />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                {t("stojancheNajdeski")} <br />
                Junior Front-End Developer
              </p>
            </div>
            <div className="basis-3/5 z-10 pt-72 ml-15">
              <h2 className="text-6xl mb-10 manropeFont">{t("aboutMe")}</h2>
              <p className="text-4xl nunitoFont ">{t("aboutMeDesc")}</p>
            </div>
          </div>
          <div className="flex pb-36">
            <div className="basis-3/5 z-10 pt-64 mr-15">
              <p className="text-4xl nunitoFont ">{t("brainsterDesc")}</p>
            </div>
            <div className="basis-2/5 z-10">
              <img
                src={brainsterLogo}
                alt="brainsterLogo"
                className="rounded-t-3xl"
              />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                Brainster <br />
                Front-End {t("academy")}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="basis-2/5 z-10">
              <img
                src={programingLanguages}
                alt="programingLanguages"
                className="rounded-t-3xl w-full"
              />
              <p className="text-center manropeFont text-3xl bg-sky-600 text-white rounded-b-3xl py-3">
                {t("skillsAndTools")}
              </p>
            </div>
            <div className="basis-3/5 z-10 pt-32 ml-15">
              <p className="text-4xl nunitoFont ">{t("academyExperience")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
