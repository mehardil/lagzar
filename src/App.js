import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Clutches from "./pages/Clutches";
import NewArrivals from "./pages/NewArrivals";
import BestSelling from "./pages/BestSelling";
import PearlCollection from "./pages/PearlCollection";
import Contact from "./pages/Contact";
import Customization from "./pages/Customization";
import GeneralQueries from "./pages/GeneralQueries";
import TrackOrder from "./pages/TrackOrder";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/clutches" element={<Clutches />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/pearl-collection" element={<PearlCollection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/general-queries" element={<GeneralQueries />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
};

export default App;
