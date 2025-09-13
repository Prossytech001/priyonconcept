// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const updateQuantity = (productId, size, newQty) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.productId === productId && item.size === size
//           ? { ...item, quantity: newQty }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, setCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Optional: Load from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const exists = cart.find(
      i => i.productId === item.productId && i.size === item.size
    );

    if (exists) {
      // Update quantity
      setCart(prev =>
        prev.map(i =>
          i.productId === item.productId && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      );
    } else {
      setCart(prev => [...prev, item]);
    }
  };

  const updateQuantity = (productId, size, qty) => {
    setCart(prev =>
      prev.map(item =>
        item.productId === productId && item.size === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const removeFromCart = (productId, size) => {
    setCart(prev =>
      prev.filter(item => !(item.productId === productId && item.size === size))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
