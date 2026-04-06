import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex h-40 justify-between items-center">
        <div className="flex justify-between items-center gap-4">
            <img src={Logo} alt="" className="w-60 h-60  py-13 "/>
       
      <h1 className="text-4xl font-bold">YOMBLE-TECH</h1>
       </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline text-3xl">Home</Link>
        <Link to="/products" className="hover:underline text-3xl">Products</Link>
        <Link to="/cart" className="hover:underline text-3xl">Cart</Link>
        <Link to="/about" className="hover:underline text-3xl">About</Link>
      </div>
    </nav>
  );
}