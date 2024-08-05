import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
