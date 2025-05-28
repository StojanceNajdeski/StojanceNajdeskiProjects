import RickAndMortyImage from "../../public/ProjectsImages/RickAndMortyCharactersImage.PNG.png";

const MyProjects = () => {
  return (
    <div className="bg-zinc-300 min-h-screen pt-24">
      <h2 className="text-center nunitoFont text-5xl mt-15">My Projects</h2>
      <div className="w-4xl">
        <img
          src={RickAndMortyImage}
          alt="RickAndMortyImage"
          className="basis-1/4 rounded-t-2xl"
        />
        <div className="bg-sky-600 p-3 text-center rounded-b-2xl">
          <h3 className="nunitoFont text-white text-xl">
            Rick And Morty Application
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
