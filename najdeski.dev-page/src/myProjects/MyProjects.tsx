import RickAndMortyImage from "../../public/ProjectsImages/RickAndMortyCharactersImage.PNG.png";
import LoginRegister from "../../public/ProjectsImages/LoginRegister.png";
import LoginRegisterTRPC from "../../public/ProjectsImages/LoginRegisterTRPC.png";
import toDoList from "../../public/ProjectsImages/toDoList.png";
import BrainsterProject01 from "../../public/ProjectsImages/BrainsterProject01.png";
import BrainsterProject02 from "../../public/ProjectsImages/BrainsterProject02.png";
import BrainsterProject03 from "../../public/ProjectsImages/BrainsterProject03.png";
import Background from "../../public/Background.jpg";

const MyProjects = () => {
  return (
    <div className="bg-zinc-300 min-h-screen pt-24">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 flex flex-col">
        <img src={Background} alt="backgroundImage" className="w-full" />
      </div>
      <div className="w-[90%] mx-auto ">
        <h2 className="text-center nunitoFont text-5xl mt-15">My Projects</h2>
        <div className="flex gap-5 pt-10">
          <div className="basis-3/12 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <a
              href="https://github.com/StojanceNajdeski/StojanceNajdeskiProjects/tree/RickAndMortyApp"
              target="blank"
            >
              <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={RickAndMortyImage}
                  alt="Rick And Morty"
                  className="h-full w-full object-contain"
                />
              </div>
            </a>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                Rick And Morty Application
              </h3>
            </div>
          </div>
          <div className="basis-3/12 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={LoginRegister}
                alt="Login Register"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                Login-Register Application
              </h3>
            </div>
          </div>
          <div className="basis-3/12 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={LoginRegisterTRPC}
                alt="LoginRegisterTRPCImage"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                LoginRegisterTRPC
              </h3>
            </div>
          </div>
          <div className="basis-3/12 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={toDoList}
                alt="To-Do List Application"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                To-Do List Application
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-5 pt-18">
          <div className="basis-1/3 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={BrainsterProject01}
                alt="BrainsterProject01Image"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                Brainster Project 1 (Brainster Labs)
              </h3>
            </div>
          </div>
          <div className="basis-1/3 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={BrainsterProject02}
                alt="BrainsterProject02Image"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                Brainster Project 2 (Safe-B-Link)
              </h3>
            </div>
          </div>
          <div className="basis-1/3 z-10 scale-95 hover:scale-100 ease-in duration-300">
            <div className="h-full bg-white rounded-t-2xl flex items-center justify-center overflow-hidden">
              <img
                src={BrainsterProject03}
                alt="BrainsterProject03Image"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
              <h3 className="nunitoFont text-white text-xl">
                Brainster Project 3 (MHRA)
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
