import "./TopSelling.css";
import VerticalShirt from "../../../public/TopSellings/VerticalShirt.png";
import GraphicTShirt from "../../../public/TopSellings/GraphicTShirt.png";
import LooseFitBermuda from "../../../public/TopSellings/LooseFitBermuda.png";
import FadedJeans from "../../../public/TopSellings/FadedJeans.png";
const TopSelling = () => {
  return (
    <>
      <div className="newArrivals position-relative">
        <h2>Top Sellings</h2>
        <div className="wrapper80">
          <div className="d-flex newArrivalsCards">
            <div className="flex-25 marginRight2Rem">
              <img src={VerticalShirt} alt="VerticaStripedShirtPhoto" />
              <p>Vertical Striped Shirt</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex align-center">
                <h3 className="marginRight1Rem">&#36;212</h3>
                <s className="discount marginRight1Rem">&#36;232</s>
                <small className="percentageDiscount">-20%</small>
              </div>
            </div>
            <div className="flex-25 marginRight2Rem">
              <img src={GraphicTShirt} alt="GraphicTShirtPhoto" />
              <p>Courage Graphic T-shirt</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>&#36;145</h3>
            </div>
            <div className="flex-25 marginRight2Rem">
              <img src={LooseFitBermuda} alt="LooseFitBermudaPhoto" />
              <p>Loose Fit Bermuda Shorts</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex align-center">
                <h3>&#36;80</h3>
              </div>
            </div>
            <div className="flex-25">
              <img src={FadedJeans} alt="FadedJeansPhoto" />
              <p>Faded Skinny Jeans</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>&#36;210</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="viewAllBtn">
        <button>View All</button>
      </div>
    </>
  );
};

export default TopSelling;
