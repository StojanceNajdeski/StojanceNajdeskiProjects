import "./Header.css";
import headerPhoto from "../../../public/headerPhoto.png";
import star from "../../../public/star.png";
import blackLine from "../../../public/blackLine.png";
import Versace from "../../../public/Versace.png";
import Zara from "../../../public/Zara.png";
import Gucci from "../../../public/Gucci.png";
import Prada from "../../../public/Prada.png";
import CalvinKlein from "../../../public/CalvinKlein.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="wrapper80 d-flex">
          <div className="title flex-50">
            <h1>
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
            <button className="btn">Shop Now</button>
            <div className="d-flex">
              <div className="flex-33 storeInfo borderRight">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="flex-33 storeInfo marginLeft borderRight">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </div>
              <div className="flex-33 storeInfo marginLeft">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="flex-50 position-relative">
            <img
              src={headerPhoto}
              alt="headerPhoto"
              className="position-absolute headerPhoto"
            />
            <img src={star} alt="star" className="position-absolute bigStar" />
            <img
              src={star}
              alt="star"
              className="position-absolute smallStar"
            />
          </div>
        </div>
      </div>
      <div className="position-relative">
        <img src={blackLine} alt="blackLine" className="blackLine" />
        <div className="d-flex position-absolute brands wrapper80">
          <div className="flex-20">
            <img src={Versace} alt="VersaceLogo" />
          </div>
          <div className="flex-20">
            <img src={Zara} alt="ZaraLogo" />
          </div>
          <div className="flex-20">
            <img src={Gucci} alt="GucciLogo" />
          </div>
          <div className="flex-20">
            <img src={Prada} alt="PradaLogo" />
          </div>
          <div className="flex-20">
            <img src={CalvinKlein} alt="CalvinKleinLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
