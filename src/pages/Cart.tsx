import { useState } from "react";
import CartItem from "../componants/CartItem";
import CartSummary from "../componants/CartSummary";
import ChoixPayment from "../componants/ChoixPayment";
import useCart from "../hooks/useCart";
import {motion} from "framer-motion"

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-4">
      <motion.h1
       initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9,  ease: "easeInOut" }}
      className="text-2xl font-bold mb-4">Votre Panier</motion.h1>
      {cart.length === 0 ? (
        <motion.p 
       initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8,  ease: "easeInOut" }}
        >Votre panier est vide.</motion.p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          <CartSummary cart={cart} />       
          <motion.button
           initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8,  ease: "easeInOut" }}
            onClick={() => setShowModal(true)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Valider panier
          </motion.button>
        </>
      )}     
      <ChoixPayment
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}