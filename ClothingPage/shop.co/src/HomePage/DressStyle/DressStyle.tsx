import "./DressStyle.css";
import Casual from "../../../public/DressStyle/Casual.png";
import Formal from "../../../public/DressStyle/Formal.png";
import Party from "../../../public/DressStyle/Party.png";
import Gym from "../../../public/DressStyle/Gym.png";
import { Link } from "react-router-dom";

const DressStyle = () => {
  return (
    <div className="wrapper80">
      <div className="bgLightGray dressStyle">
        <h2 className="text-center">Browse by Dress Style</h2>
        <div className="d-flex wrapper90 style">
          <Link to="/casual">
            <div className="flex-40 smallerStyle styleCategory position-relative">
              <img src={Casual} alt="CasualStyleImage" />
              <h3 className="position-absolute smallerTitle">Casual</h3>
            </div>
          </Link>
          <div className="flex-60 biggerStyle styleCategory position-relative">
            <img src={Formal} alt="FormalStyleImage" />
            <h3 className="position-absolute biggerTitle">Formal</h3>
          </div>
        </div>
        <div className="d-flex wrapper90 style">
          <div className="flex-60 biggerStyle styleCategory position-relative">
            <img src={Party} alt="PartyStyleImage" />
            <h3 className="position-absolute biggerTitle">Party</h3>
          </div>
          <div className="flex-40 smallerStyle styleCategory position-relative">
            <img src={Gym} alt="GymStyleImage" />
            <h3 className="position-absolute smallerTitle">Gym</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
