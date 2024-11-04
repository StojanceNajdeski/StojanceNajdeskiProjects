import "./Gallery.css";
import wedding2023 from "../../public/wedding2023.jpg";
import wedding2024 from "../../public/wedding2024.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="position-relative gallery">
      <div className="position-relative d-flex">
        <img src={wedding2023} alt="wedding2023" className="wedding2023" />
        <div className="position-absolute weddingLeft hovering">
          <Link to="/gallery/wedding2023">
            <span>Кликни за</span>
            <p>Свадби 2023</p>
          </Link>
        </div>
        <div className="overlayGallery"></div>
        <img src={wedding2024} alt="wedding2024" className="wedding2024" />
        <div className="position-absolute weddingRight hovering">
          <Link to="/gallery/wedding2024">
            <span>Кликни за</span>
            <p>Свадби 2024</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
