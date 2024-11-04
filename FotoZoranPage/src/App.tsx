import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import LandingPage from "./LandingPage/LandingPage";
import Gallery from "./Gallery/Gallery";
import Wedding2024 from "./Wedding2024/Wedding2024";
import Wedding2023 from "./Wedding2023/Wedding2023";
import PriceList from "./PriceList/PriceList";
import Footer from "./Footer/Footer";
import MajaIlija from "./Wedding2024/Maja&Ilija/Maja&Ilija";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/wedding2024" element={<Wedding2024 />} />
          <Route path="/gallery/wedding2023" element={<Wedding2023 />} />
          <Route path="/price-list" element={<PriceList />} />
          <Route
            path="/gallery/wedding2024/maja-ilija"
            element={<MajaIlija />}
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
