import photoOfMe from "../../public/PhotoOfMe.png";
import Background from "../../public/Background.jpg";
import Resume from "../../public/StojancheNajdeski-CV.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderPlugin, KeenSliderInstance } from "keen-slider";

// TECHNOLOGIES
import HTML from "../../public/Technologies/HTML5.png";
import CSS from "../../public/Technologies/CSS.png";
import JAVASCRIPT from "../../public/Technologies/JAVASCRIPT.png";
import GITHUB from "../../public/Technologies/GITHUB.png";
import BOOTSTRAP from "../../public/Technologies/BOOTSTRAP.png";
import SASS from "../../public/Technologies/SASS.png";
import REACT from "../../public/Technologies/REACT.png";
import NEXT from "../../public/Technologies/NEXT.png";
import TYPESCRIPT from "../../public/Technologies/TYPESCRIPT.png";
import TAILWINDCSS from "../../public/Technologies/TAILWINDCSS.png";

const AutoplaySmooth: KeenSliderPlugin = (slider: KeenSliderInstance) => {
  let raf: number;
  let progress = 0;
  const speed = 1.5;

  const animate = () => {
    progress += speed;
    if (progress > 1) progress = 0;

    slider.animator.start([
      {
        distance: progress,
        duration: 0,
        easing: (t) => t,
      },
    ]);

    raf = requestAnimationFrame(animate);
  };

  slider.on("created", () => {
    raf = requestAnimationFrame(animate);
  });

  slider.on("destroyed", () => {
    cancelAnimationFrame(raf);
  });
};

const LandingPage = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 5,
        spacing: 10,
      },
    },
    [AutoplaySmooth]
  );

  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img
          src={Background}
          alt="backgroundImage"
          className="w-full shadow-2xl"
        />
        <img
          src={Background}
          alt="backgroundImage"
          className="w-full shadow-2xl"
        />
      </div>
      <div className="pt-44">
        <div className="w-[90%] mx-auto">
          <div className="flex pb-36">
            <div className="basis-2/5 z-10">
              <img
                src={photoOfMe}
                alt="PhotoOfMe"
                className="rounded-b-3xl animate__animated animate__bounceInLeft"
              />
            </div>
            <div className="block pt-55 pl-20">
              <div className="flex">
                <p className="manropeFont text-white z-10 text-5xl mb-10 animate__animated animate__bounceInRight">
                  Здраво, јас сум
                </p>
              </div>
              <div className="flex">
                <h1 className="nunitoFont text-white z-10 font-bold text-8xl mb-10 animate__animated animate__bounceInRight">
                  Стојанче Најдески
                </h1>
              </div>
              <div className="flex">
                <p className="manropeFont text-white z-10 text-5xl mb-20 animate__animated animate__bounceInRight">
                  Junior Front - End Developer
                </p>
              </div>
              <div className="flex">
                <div className="inline-flex items-center rounded-xl mr-5 gap-4">
                  <button className="text-2xl z-10 font-medium inline-flex items-center bg-sky-600 hover:bg-sky-800 transition duration-400 text-white px-4 py-2 rounded-xl animate__animated animate__bounceInRight">
                    <Link to="/projects">
                      <FontAwesomeIcon icon={faLink} className="mr-2" />
                      Explore my work
                    </Link>
                  </button>
                  <button className="text-2xl z-10 font-medium inline-flex items-center bg-sky-600 hover:bg-sky-800 transition duration-400 text-white px-4 py-2 rounded-xl animate__animated animate__bounceInRight">
                    <FontAwesomeIcon icon={faFile} className="mr-2" />
                    <a href={Resume} download="StojancheNajdeski-CV">
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="flex keen-slider">
        <img
          src={HTML}
          alt="HTMLLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide1"
        />
        <img
          src={CSS}
          alt="CSSLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide2"
        />
        <img
          src={JAVASCRIPT}
          alt="JAVASCRIPTLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide3"
        />
        <img
          src={BOOTSTRAP}
          alt="BOOTSTRAPLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide4"
        />
        <img
          src={GITHUB}
          alt="GITHUBLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide5"
        />
        <img
          src={SASS}
          alt="SASSLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide6"
        />
        <img
          src={TYPESCRIPT}
          alt="TYPESCRIPTLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide7"
        />
        <img
          src={REACT}
          alt="REACTLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide8"
        />
        <img
          src={NEXT}
          alt="NEXTLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide9"
        />
        <img
          src={TAILWINDCSS}
          alt="TAILWINDCSSLogo"
          className="z-10 w-10 h-60 object-contain keen-slider__slide number-slide10"
        />
      </div>
    </div>
  );
};

export default LandingPage;
