import "./Footer.css";
import Envelope from "../../public/envelope.png";
import Visa from "../../public/visa.png";
import MasterCard from "../../public/masterCard.png";
import PayPal from "../../public/payPal.png";
import ApplePay from "../../public/applePay.png";
import GooglePay from "../../public/googlePay.png";
const Footer = () => {
  return (
    <footer>
      <div className="wrapper80">
        <div className="upToDate">
          <div className="d-flex justify-between">
            <h2>
              Stay upto date about <br /> our latest offers
            </h2>
            <div className="position-relative">
              <input type="text" placeholder="Enter your email address" />
              <img
                src={Envelope}
                alt="envelope"
                className="position-absolute envelope"
              />
              <br />
              <button className="subscribe">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
        <div className="d-flex shopCoStyles">
          <div className="flex-20">
            <h2>Shop.co</h2>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="socialMediaLinks">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="flex-20">
            <p className="footerTitle">Company</p>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Carrer</p>
          </div>
          <div className="flex-20">
            <p className="footerTitle">Help</p>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex-20">
            <p className="footerTitle">FAQ</p>
            <p>Account</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
          <div className="flex-20">
            <p className="footerTitle">Resources</p>
            <p>Free eBooks</p>
            <p>Development Tutorial</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>
        <hr />
        <div className="copyrightShop d-flex align-center justify-between">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="d-flex">
            <img src={Visa} alt="VisaLogo" />
            <img src={MasterCard} alt="MasterCardLogo" />
            <img src={PayPal} alt="PayPalLogo" />
            <img src={ApplePay} alt="ApplePayLogo" />
            <img src={GooglePay} alt="GooglePayLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
