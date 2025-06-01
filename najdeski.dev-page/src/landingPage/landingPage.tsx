import photoOfMe from "../../public/PhotoOfMe.png";
import Background from "../../public/Background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
const LandingPage = () => {
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
            <div className="basis-2/5 z-10">
              <img src={photoOfMe} alt="PhotoOfMe" className="rounded-b-3xl" />
            </div>
            <div className="block">
              <div className="flex">
                <div className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded-xl mr-5">
                  <FontAwesomeIcon icon={faLink} size="2x" className="mr-2" />
                  <p className="text-2xl font-medium">Explore my work</p>
                </div>
                <div>
                  <button className="text-2xl font-medium inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded-xl">
                    <FontAwesomeIcon icon={faFile} className="mr-2" />
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
