import MajaIlija from "./Maja&Ilija/Maja&Ilija";
import "./Wedding2024.css";
import thumbnailMajaIlija from "../../public/Maja i Ilija 26.05.2024/thumbnail.jpg";
import { Link } from "react-router-dom";

const Wedding2024 = () => {
  return (
    <div className="wedding2024 wrapper80">
      <h2>Свадби 2024</h2>
      <div className="d-flex weddingPhotos">
        <Link to="/gallery/wedding2024/maja-ilija">
          <div className="flex-25 wedding hovering">
            <img
              src={thumbnailMajaIlija}
              alt="thumbnailMajaIlija"
              className="thumbnailPhoto"
            />
            <h3>Maja & Ilija 26.05.2024</h3>
          </div>
        </Link>
        <Link to="/gallery/wedding2024/maja-ilija">
          <div className="flex-25 wedding hovering">
            <img
              src={thumbnailMajaIlija}
              alt="thumbnailMajaIlija"
              className="thumbnailPhoto"
            />
            <h3>Maja & Ilija 26.05.2024</h3>
          </div>
        </Link>
        <Link to="/gallery/wedding2024/maja-ilija">
          <div className="flex-25 wedding hovering">
            <img
              src={thumbnailMajaIlija}
              alt="thumbnailMajaIlija"
              className="thumbnailPhoto"
            />
            <h3>Maja & Ilija 26.05.2024</h3>
          </div>
        </Link>
        <Link to="/gallery/wedding2024/maja-ilija">
          <div className="flex-25 wedding hovering">
            <img
              src={thumbnailMajaIlija}
              alt="thumbnailMajaIlija"
              className="thumbnailPhoto"
            />
            <h3>Maja & Ilija 26.05.2024</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Wedding2024;
