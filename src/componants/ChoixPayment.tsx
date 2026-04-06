import { useState } from "react";
import PaymentValider from "./PaymentValider";
import useCart from "../hooks/useCart";
import {motion} from "framer-motion"

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ChoixPayment({ isOpen, onClose }: Props) {
  const [method, setMethod] = useState("");
  const [livraison, setLivraison] = useState("");

  const { cart } = useCart();

  if (!isOpen) return null;

  // 💰 calcul total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const livraisonFee = livraison === "livraison" ? 2000 : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">

        <h2 className="text-xl font-bold mb-4">
          Paiement & Livraison
        </h2>

        {/* ETAPE 1 : LIVRAISON */}
        {!livraison ? (
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Choisir livraison 🚚</p>

            <button
              onClick={() => setLivraison("retrait")}
              className="bg-gray-200 p-2 rounded"
            >
              🏪 Retrait (gratuit)
            </button>

            <button
              onClick={() => setLivraison("livraison")}
              className="bg-gray-200 p-2 rounded"
            >
              🚚 Livraison (+2000 FCFA)
            </button>

            <button onClick={onClose} className="text-gray-500 p-2 rounded">
              Annuler
            </button>
          </div>
        ) : !method ? (
          // ETAPE 2 : PAIEMENT
          <motion.div 
          initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9,  ease: "easeInOut" }}
          className="flex flex-col gap-2">
            <p className="font-semibold">Choisir paiement 💳</p>

            <button
              onClick={() => setMethod("wave")}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Wave
            </button>

            <button
              onClick={() => setMethod("orange")}
              className="bg-orange-500 text-white p-2 rounded"
            >
              Orange Money
            </button>

            <button onClick={() => setLivraison("")} className="text-gray-500">
              ← Retour
            </button>
          </motion.div>
        ) : (
          // ETAPE 3 : VALIDATION
          <PaymentValider
            onClose={onClose}
            cart={cart}
            total={total + livraisonFee}
            livraison={livraison}
            paiement={method}
          />
        )}

        {/* 💰 RÉCAP */}
        <div className="mt-4 text-sm text-gray-600">
          <p>Total produits: {total} FCFA</p>
          <p>Livraison: {livraisonFee} FCFA</p>
          <p className="font-bold">
            Total: {total + livraisonFee} FCFA
          </p>
        </div>

      </div>
    </div>
  );
}