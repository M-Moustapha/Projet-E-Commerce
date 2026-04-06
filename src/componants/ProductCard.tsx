import {motion} from "framer-motion"

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
};

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition ">

      <motion.img 
      initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9,  ease: "easeInOut" }}
        src={product.image}
        alt={product.name}
        className="object-cover rounded w-90 h-70"
      />

      <motion.h2 
      initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9,  ease: "easeInOut" }}
      className="font-bold mt-2">{product.name}</motion.h2>

      <p className="text-gray-600">{product.price} FCFA</p>

      <p className="text-sm text-gray-500">
        Stock: {product.stock}
      </p>

      <button
        onClick={onAddToCart}
        disabled={product.stock === 0}
        className={`mt-2 w-full py-2 rounded text-white ${
          product.stock === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {product.stock === 0 ? "Rupture ❌" : "Ajouter au panier 🛒"}
      </button>
    </div>
  );
}