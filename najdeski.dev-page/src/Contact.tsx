import Background from "../public/Background.jpg";
import PhotoOfMe from "../public/PhotoOfMe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="relative bg-zinc-300 min-h-screen">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img src={Background} alt="backgroundImage" className="w-full" />
      </div>
      <div className="pt-44 pb-15">
        <div className="w-[90%] mx-auto">
          <div className="flex pb-36">
            <div className="basis-2/5 z-10">
              <img src={PhotoOfMe} alt="PhotoOfMe" className="rounded-b-3xl" />
            </div>
            <div className="basis-3/5 z-10 pt-72 ml-15">
              <h2 className="text-6xl mb-10 manropeFont">
                Стојанче Најдески <br />
                Junior Front-End Developer
              </h2>
              <i className="fa-brands fa-linkedin-in text-4xl nunitoFont"></i>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
