import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Casual from "./Casual/Casual";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/casual" element={<Casual />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
