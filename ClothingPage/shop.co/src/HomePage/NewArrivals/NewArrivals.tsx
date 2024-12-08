import "./NewArrivals.css";
import blackTShirt from "../../../public/blackT-Shirt.png";
import skinnyJeans from "../../../public/skinnyJeans.png";
import shirt from "../../../public/shirt.png";
import orangeShirt from "../../../public/orangeShirt.png";
const NewArrivals = () => {
  return (
    <>
      <div className="newArrivals position-relative">
        <h2>New Arrivals</h2>
        <div className="wrapper80">
          <div className="d-flex newArrivalsCards">
            <div className="flex-25">
              <img src={blackTShirt} alt="blacktShirtPhoto" />
              <p>T-shirt with Tape Details</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>120 &#36;</h3>
            </div>
            <div className="flex-25">
              <img src={skinnyJeans} alt="skinnyJeansPhoto" />
              <p>Skinny Fit Jeans</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex align-center">
                <h3>240 &#36;</h3>
                <s className="discount">260 &#36;</s>
                <small className="percentageDiscount">-20%</small>
              </div>
            </div>
            <div className="flex-25">
              <img src={shirt} alt="shirtPhoto" />
              <p>Checkered Shirt</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex align-center">
                <h3>180 &#36;</h3>
              </div>
            </div>
            <div className="flex-25">
              <img src={orangeShirt} alt="orangeShirtPhoto" />
              <p>Sleeve Striped T-shirt</p>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex align-center">
                <h3>130 &#36;</h3>
                <s className="discount">160 &#36;</s>
                <small className="percentageDiscount">-30%</small>
              </div>
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

export default NewArrivals;
