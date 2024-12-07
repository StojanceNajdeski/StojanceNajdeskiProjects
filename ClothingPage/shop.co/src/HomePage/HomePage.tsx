import Header from "./Header/Header";
import "./HomePage.css";
import Navbar from "./Navbar/Navbar";
import NewArrivals from "./NewArrivals/NewArrivals";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
