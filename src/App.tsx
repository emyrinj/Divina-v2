import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { CartProvider } from "./pages/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;