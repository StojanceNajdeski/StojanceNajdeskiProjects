import "./Footer.css";
import fotozoranLogo from "../../public/fotoZoranLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="wrapper80 footerStyle">
      <footer>
        <hr />
        <Link to="/">
          <img
            src={fotozoranLogo}
            alt="fotozoranLogo"
            className="footerLogo hovering"
          />
        </Link>
        <p>Информации за контакт</p>
        <br />
        <br />
        <p>+389-72-259-811</p>
        <p>045</p>
      </footer>
    </div>
  );
};

export default Footer;
