
import Card from "../componants/Card";
import useCart from "../hooks/useCart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
};

type CartItemProps = {
  product: Product;
  onRemove: (id: number) => void;
};

export default function CartItem({ product, onRemove }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <Card>
      <div className="flex items-center justify-between gap-4">

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded"
        />

        {/* Infos */}
        <div className="flex-1">
          <h2 className="font-bold">{product.name}</h2>
          <p>{product.price} FCFA</p>
          <p className="text-sm text-gray-500">
            Stock: {product.stock}
          </p>
        </div>

        {/* Quantité */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(product.id)}
            className="bg-gray-300 px-2 rounded"
          >
            -
          </button>

          <span>{product.quantity}</span>

          <button
            onClick={() => increaseQuantity(product.id)}
            className="bg-gray-300 px-2 rounded"
          >
            +
          </button>
        </div>

        {/* Total */}
        <div className="font-bold">
          {product.price * product.quantity} FCFA
        </div>

        {/* Supprimer */}
        
      </div>
    </Card>
  );
}