type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartSummaryProps = {
  cart: Product[];
};

export default function CartSummary({ cart }: CartSummaryProps) {

  // 💰 Total général
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🧾 Nombre total d’articles
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-4 rounded mt-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">Résumé du panier</h2>

      <p>Nombre d'articles : <span className="font-semibold">{totalItems}</span></p>

      <p className="mt-2 text-xl font-bold">
        Total : {total} FCFA
      </p>
    </div>
  );
}