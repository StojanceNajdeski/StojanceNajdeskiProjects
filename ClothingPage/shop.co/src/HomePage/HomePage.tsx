import Footer from "../Footer/Footer";
import DressStyle from "./DressStyle/DressStyle";
import HappyCustomers from "./HappyCustomers/HappyCustomers";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import NewArrivals from "./NewArrivals/NewArrivals";
import TopSelling from "./TopSelling/TopSelling";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <Footer />
    </div>
  );
};

export default HomePage;
