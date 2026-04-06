import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Navbar from './componants/Navbar';
import CartProvider from "./context/CartContext";
import Footer from "./componants/Footer";
function App() {
 return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
         <Footer/>
      </Router>
        
    </CartProvider>
    
  );
}

export default App
