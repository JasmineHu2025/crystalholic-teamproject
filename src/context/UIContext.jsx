import { createContext, useContext, useState } from 'react';


const UIContext = createContext();

export function UIProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // ✅ 新增登入彈窗控制

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <UIContext.Provider value={{
      isMenuOpen,
      openMenu,
      closeMenu,
      showAuthModal,
      openAuthModal,
      closeAuthModal
    }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
