import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/landingPage";
import Navbar from "./Navbar";
import MyProjects from "./myProjects/MyProjects";
import Certificates from "./myCertificates/certificates";
import AboutMe from "./AboutMe/aboutMe";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
