import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Shop from "./pages/ProductPage/Shop.jsx";
import Clutches from "./pages/ProductPage/Clutches.jsx";
import NewArrivals from "./pages/ProductPage/NewArrivals.jsx";
import BestSelling from "./pages/ProductPage/BestSelling.jsx";
import PearlCollection from "./pages/ProductPage/PearlCollection.jsx";
import Contact from "./pages/GeneralPage/Contact";
import Customization from "./pages/GeneralPage/Customization";
import GeneralQueries from "./pages/GeneralPage/GeneralQueries";

import TrackOrder from "./pages/TrackOrder";
import ProductPage from "./pages/ProductPage.jsx";

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
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
