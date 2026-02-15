import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Booking from "./pages/booking/Booking";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default App;
