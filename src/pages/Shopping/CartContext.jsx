import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 新增：若同款＋同規格已存在，就只改數量
const addToCart = (item) => {
  setCartItems(prev => {
    /* ❶ 客製化 → 直接 push */
    if (item.isCustom) return [...prev, item];

    /* ❷ 一般商品 → 用 productId + 規格找同列 */
    const idx = prev.findIndex(
      i => !i.isCustom &&
           i.productId === item.productId &&
           i.size      === item.size &&
           i.wrist     === item.wrist
    );
    if (idx !== -1) {
      /* 只改數量 */
      const newArr = [...prev];
      newArr[idx].quantity += item.quantity;
      return newArr;
    }
    return [...prev, item];
  });
};

  // 刪除整列
  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  // 🆕 調整數量（下拉選單用）
  const updateQuantity = (index, quantity) => {
    setCartItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
