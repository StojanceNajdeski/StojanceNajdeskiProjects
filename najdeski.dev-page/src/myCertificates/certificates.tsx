import HTMLCertificate from "../../public/Certificates/Html.jpg";
import CSSCertificate from "../../public/Certificates/Css.jpg";
import SassCertificate from "../../public/Certificates/Sass.jpg";
import UXUIDesignCertificate from "../../public/Certificates/UXUIDesign.jpg";
import GitCertificate from "../../public/Certificates/Git.jpg";
import JavaScriptCertificate from "../../public/Certificates/JavaScript.jpg";
import TypeScriptCertificate from "../../public/Certificates/Typescript.jpg";
import JQueryAjaxCertificate from "../../public/Certificates/JQueryAjax.jpg";
import ReactjsCertificate from "../../public/Certificates/React.js.jpg";
import NextjsCertificate from "../../public/Certificates/Next.js.jpg";
import AcademyDiploma1 from "../../public/Certificates/AcademyDiploma1.png";
import AcademyDiploma2 from "../../public/Certificates/AcademyDiploma2.png";
import NextDiploma from "../../public/Certificates/NextDiploma.png";
import Background from "../../public/Background.jpg";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img src={Background} alt="backgroundImage" className="w-full" />
        <img src={Background} alt="backgroundImage" className="w-full" />
      </div>
      <div className="pt-44">
        <div className="w-[90%] mx-auto">
          <h2 className="text-center nunitoFont text-5xl mb-8 z-10">
            {t("myCertificates")}
          </h2>
          <div className="flex">
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={HTMLCertificate}
                alt="HTMLCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                HTML {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={CSSCertificate}
                alt="CSSCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                CSS {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={SassCertificate}
                alt="SassCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                Sass {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={GitCertificate}
                alt="GitCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                GIT {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={UXUIDesignCertificate}
                alt="UXUIDesignCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                UX/UI Design {t("certificate")}
              </h2>
            </div>
          </div>
          <div className="flex">
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={JavaScriptCertificate}
                alt="JavaScriptCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                JavaScript {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={JQueryAjaxCertificate}
                alt="JQueryAjaxCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                JQuery & Ajax {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={TypeScriptCertificate}
                alt="TypeScriptCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                Typescript {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={ReactjsCertificate}
                alt="ReactjsCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                React.js {t("certificate")}
              </h2>
            </div>
            <div className="basis-1/4 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={NextjsCertificate}
                alt="NextjsCertificate"
                className="rounded-t-3xl"
              />
              <h2 className="text-center manropeFont text-2xl bg-sky-600 text-white rounded-b-3xl py-3">
                Next.js {t("certificate")}
              </h2>
            </div>
          </div>
          <h2 className="text-center nunitoFont text-5xl mb-8 mt-20 pb-10">
            {t("academyDiploma")}
          </h2>
          <div className="flex">
            <div className="basis-1/2 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={AcademyDiploma1}
                alt="AcademyDiploma1"
                className="rounded-3xl"
              />
            </div>
            <div className="basis-1/2 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={AcademyDiploma2}
                alt="AcademyDiploma2"
                className="rounded-3xl"
              />
            </div>
          </div>
          <h2 className="text-center nunitoFont text-5xl mb-8 mt-15 pb-10">
            {t("certificate")} {t("from")} Brainster Next Collage
          </h2>
          <div className="flex items-center justify-center">
            <div className="basis-1/2 scale-95 hover:scale-100 ease-in duration-300">
              <img
                src={NextDiploma}
                alt="NextDiploma"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
