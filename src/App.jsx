import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import PrevEditions from "./pages/prevEditions";
import HallOfFame from "./pages/HallOfFame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/PreviousEditions" element={<PrevEditions />} />
        <Route path="/HallOfFame" element={<HallOfFame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;