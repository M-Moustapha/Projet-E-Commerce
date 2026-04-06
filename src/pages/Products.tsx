import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../componants/ProductCard";
import Input from "../componants/Formulaire";
import Loader from "../componants/Loader";
import useCart from "../hooks/useCart";
import productsData from "../data/productsData";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
};

export default function Products() {
  const { addToCart, cart } = useCart();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>(productsData);

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newStock, setNewStock] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

 
  const handleAddToCart = (id: number) => {
    const product = products.find((p) => p.id === id);

    if (!product) return;

    if (product.stock <= 0) {
      alert("Stock épuisé ❌");
      return;
    }

  
    addToCart(product);

   
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

 
  const handleAddProduct = () => {
    if (!newProductName || newProductPrice <= 0 || newStock <= 0) return;

    const newProduct: Product = {
      id: Date.now(),
      name: newProductName,
      price: newProductPrice,
      image: "https://via.placeholder.com/150",
      stock: newStock,
    };

    setProducts((prev) => [...prev, newProduct]);

    setNewProductName("");
    setNewProductPrice(0);
    setNewStock(0);
  };

  if (loading) return <Loader />;

  return (
    <div className="p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Produits</h1>

        <Link
          to="/cart"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Panier ({cart.length})
        </Link>
      </div>

      
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un produit..."
      />

      {/* ADD PRODUCT */}
      <div className="my-4 p-4 border rounded bg-gray-50">
        <h2 className="font-semibold mb-2">Ajouter produit</h2>

        <input
          type="text"
          placeholder="Nom"
          className="border p-2 mr-2 rounded"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Prix"
          className="border p-2 mr-2 rounded w-24"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Stock"
          className="border p-2 mr-2 rounded w-24"
          value={newStock}
          onChange={(e) => setNewStock(Number(e.target.value))}
        />

        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
}