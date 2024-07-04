import React, { createContext, useContext, useState, useEffect,  ReactNode } from 'react';
import { CartContextProps, CartItem, MenuItem } from '../types/types';


// interface CartProviderProps {
//     children: ReactNode;
// }
const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialValue = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const [cartItems, setCartItems] = useState<CartItem[]>(initialValue);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

    // Calculate the total whenever cartItems change
    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
        setTotal(newTotal);
    }, [cartItems]);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    console.log('Saving cart items to local storage:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: MenuItem) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      const updatedCart = cartItems.map((cartItem, index) =>
        index === existingItemIndex ? { ...cartItem, count: cartItem.count + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
    showSuccessModal();
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const updateItemCount = (index: number, count: number) => {
    const updatedCart = cartItems.map((item, i) => (i === index ? { ...item, count } : item));
    setCartItems(updatedCart);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openSummary = () => setIsSummaryOpen(true);
  const closeSummary = () => setIsSummaryOpen(false);

  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
    setTimeout(() => {
      setIsSuccessModalVisible(false);
    }, 2000);
  };

  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false);
  };

  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
    // return cartItems.length;
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemCount, isCartOpen, openCart, closeCart, getTotalItemCount, total, openSummary, closeSummary, isSuccessModalVisible, showSuccessModal, isSummaryOpen, hideSuccessModal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
