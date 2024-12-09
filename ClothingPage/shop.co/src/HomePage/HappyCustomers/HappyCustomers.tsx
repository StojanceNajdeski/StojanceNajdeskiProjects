import "./HappyCustomers.css";
import verification from "../../../public/verification.png";

const HappyCustomers = () => {
  return (
    <div className="wrapper80">
      <div className="d-flex align-center justify-between">
        <h2 className="titleHappyCustomers">Our happy Customers</h2>
        <div className="arrows">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="d-flex customers">
        <div className="customer marginRight2Rem">
          <div className="starsCustomers">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="d-flex align-center">
            <h2>Sarah M.</h2>
            <img
              src={verification}
              alt="verification"
              className="verification"
            />
          </div>
          <p className="review">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="customer marginRight2Rem">
          <div className="starsCustomers">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="d-flex align-center">
            <h2>Alex K.</h2>
            <img
              src={verification}
              alt="verification"
              className="verification"
            />
          </div>
          <p className="review">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="customer marginRight2Rem">
          <div className="starsCustomers">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="d-flex align-center">
            <h2>James L.</h2>
            <img
              src={verification}
              alt="verification"
              className="verification"
            />
          </div>
          <p className="review">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
