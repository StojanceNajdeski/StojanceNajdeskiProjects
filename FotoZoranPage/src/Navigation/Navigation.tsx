import "./Navigation.css";
import fotoZoranLogo from "../../public/fotoZoranLogo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="wrapper80">
      <nav>
        <div className="d-flex align-center justify-between">
          <div>
            <Link to="/">
              <img
                src={fotoZoranLogo}
                alt="fotoZoranLogo"
                className="fotoZoranLogo"
              />
            </Link>
          </div>
          <div className="navigateLinks d-flex liStyle">
            <div className="hovering navigationStyle d-flex align-center colorGray">
              <Link to="/" className="d-flex align-center">
                <i className="fa-solid fa-house"></i>
                <li>Почетна</li>
              </Link>
            </div>
            <div className="hovering navigationStyle d-flex align-center colorGray">
              <Link to="/gallery" className="d-flex align-center">
                <i className="fa-solid fa-image"></i>
                <li>Галерија</li>
              </Link>
            </div>
            <div className="hovering navigationStyle d-flex align-center colorGray">
              <Link to="/price-list" className="d-flex align-center">
                <i className="fa-solid fa-dollar-sign"></i>
                <li>Ценовник за свадби</li>
              </Link>
            </div>
            <div className="hovering d-flex align-center colorGray">
              <i className="fa-solid fa-users"></i>
              <li>За Нас</li>
            </div>
          </div>
          <div className="d-flex align-center">
            <button>MK</button>
            <span>/</span>
            <button>TR</button>
            <span>/</span>
            <button>AL</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
