import Header from "./Header/Header";
import "./HomePage.css";
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
    </div>
  );
};

export default HomePage;
