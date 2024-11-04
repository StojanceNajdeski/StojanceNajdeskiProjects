import "./LandingPage.css";
import landPagePhoto from "../../public/landPageImage.jpg";
const LandingPage = () => {
  return (
    <div>
      <div className="landPageStyle">
        <img
          src={landPagePhoto}
          alt="landPagePhoto"
          className="landPagePhoto"
        />
        <div className="overlay"></div>
        <div className="landPageTitle">
          <h2>
            Безвременска љубов: <br />
            Каде што секој детал е важен
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
