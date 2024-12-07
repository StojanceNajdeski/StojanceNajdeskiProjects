import "./NewArrivals.css";
import blackTShirt from "../../../public/blackT-Shirt.png";
import skinnyJeans from "../../../public/skinnyJeans.png";
import shirt from "../../../public/shirt.png";
import orangeShirt from "../../../public/orangeShirt.png";
const NewArrivals = () => {
  return (
    <div className="newArrivals position-relative">
      <h2>New Arrivals</h2>
      <div className="wrapper80">
        <div className="d-flex newArrivalsCards">
          <div className="flex-25">
            <img src={blackTShirt} alt="blacktShirtPhoto" />
            <p>T-shirt with Tape Details</p>
            <div className="d-flex stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h3>120 &#36;</h3>
          </div>
          <div className="flex-25">
            <img src={skinnyJeans} alt="skinnyJeansPhoto" />
            <p>Skinny Fit Jeans</p>
            <div className="d-flex stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="d-flex align-center">
              <h3>240 &#36;</h3>
              <s>260 &#36;</s>
            </div>
          </div>
          <div className="flex-25">
            <img src={shirt} alt="shirtPhoto" />
          </div>
          <div className="flex-25">
            <img src={orangeShirt} alt="orangeShirtPhoto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
