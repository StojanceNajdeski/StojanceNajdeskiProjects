import "./Navbar.css";
import cartImage from "../../../public/cartImage.png";
import atLogo from "../../../public/atLogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className={isActive ? "close" : "discount position-relative"}>
        <p>
          Sign up and get 20% off to your first order. <u>Sign Up Now</u>
        </p>
        <i
          className="fa-solid fa-x position-absolute"
          onClick={handleClick}
        ></i>
      </div>
      <div className="wrapper80 navbar d-flex align-center position-relative">
        <div>
          <h2>Shop.co</h2>
        </div>
        <ul className="navigationLinks align-center">
          <li>
            Shop <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="input position-relative">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search for products..."
          />
          <i className="fa-solid fa-magnifying-glass position-absolute"></i>
        </div>
        <div className="icons d-flex align-center">
          <img src={cartImage} alt="cartImage" className="cartImage" />
          <img src={atLogo} alt="atLogo" className="atLogo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
