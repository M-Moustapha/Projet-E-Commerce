import React, { createContext, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
 
};
type CartItem = Product & {
  quantity: number;
};
type CartContextType = {
  cart: CartItem [];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem []>([]);
 

 
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        
        if (exist.quantity >= exist.stock) {
          alert("Stock insuffisant !");
          return prevCart;
        }

        
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

  
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


 
  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? item.quantity < item.stock
            ? { ...item, quantity: item.quantity + 1 }
            : item
          : item
      )
    );
  };


 
  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
       
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
