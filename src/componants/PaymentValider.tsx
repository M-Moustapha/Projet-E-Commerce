import { useState } from "react";


type Props = {
  onClose: () => void;
  cart: any[];
  total: number;
  livraison: string;
  paiement: string;
};

export default function PaymentValider({
  onClose,
  cart,
  total,
  livraison,
  paiement,
}: Props) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  // ✅ vider panier

  // ✅ Paiement
  const handlePayment = () => {
    if (!phone || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setSuccess(true);

    // ✅ vider panier après paiement
   
  };

  // ✅ Télécharger PDF (simple via impression)
  const handleDownload = () => {
    window.print();
  };

  // 🧾 REÇU
  if (success) {
    return (
      <div id="receipt" className="p-2">

        <h2 className="text-xl font-bold mb-2 text-center">
          Reçu de paiement 🧾
        </h2>

        <div className="text-sm border p-3 rounded bg-gray-50">

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>{item.price * item.quantity} FCFA</span>
            </div>
          ))}

          <hr className="my-2" />

          <p>📦 Livraison: {livraison}</p>
          <p>💳 Paiement: {paiement}</p>

          <h3 className="font-bold mt-2">
            Total payé: {total} FCFA
          </h3>
        </div>

        <div className="flex flex-col gap-2 mt-3">

          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Télécharger reçu 📄
          </button>

          <button
            onClick={onClose}
            className="bg-green-500 text-white p-2 rounded"
          >
            Terminer
          </button>

        </div>
      </div>
    );
  }

  // 💳 FORMULAIRE
  return (
    <div className="flex flex-col gap-2">
      <input
        type="number"
        placeholder="Numéro"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handlePayment}
        className="bg-green-500 text-white p-2 rounded"
      >
        Valider paiement
      </button>
    </div>
  );
}