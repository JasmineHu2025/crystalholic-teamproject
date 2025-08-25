import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { useRef, useEffect } from 'react';


/* 🆕 取得購物車內容 */
import { useCart } from '../pages/Shopping/CartContext.jsx';

import './NavBarDark2.css';

export default function NavBarDark() {
  const { isLoggedIn, logout, user } = useAuth();
  const { openMenu } = useUI();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  /* 🆕 計算購物車總件數 */
  const { cartItems } = useCart();
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleMemberClick = () => {
    setShowSearch(false); // 點會員 icon 時把搜尋匡關掉

    if (isLoggedIn) {
      setShowDropdown((prev) => !prev);
    } else {
      setShowAuthModal(true);
    }
  };



  const handleLoginSuccess = () => setShowAuthModal(false);

  //搜尋按鈕展開
  const [showSearch, setShowSearch] = useState(false);
  const searchBoxRef = useRef(null); // 指向搜尋匡外層關閉

  const handleToggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);




  return (
    <>
      <header id="navbar2">
        <Link className="logo2" to="/">
          <img src="./images/S-NavBar/logotext_nav2.svg" alt="首頁" />
        </Link>

        <nav className="navigation2">

          {/* 展開後的搜尋匡 */}
          {showSearch && (
            <div className="navbar-searchbox show" ref={searchBoxRef}>
              <input
                type="text"
                placeholder="搜尋商品或水晶名稱"
                className="navbar-search-input"
              />
              <button className="search-inner-btn">
                <img src="./images/S-NavBar/navicon_search.svg" alt="Search" />
              </button>
            </div>
          )}


          <ul className="icon2">
            {/* 搜尋 icon（點擊後觸發搜尋匡） */}
            <li className="search-li">
              {!showSearch && (
                <button onClick={handleToggleSearch} className="search-btn">
                  <img src="./images/S-NavBar/navicon_search.svg" alt="Search" />
                </button>
              )}
            </li>


            {/* 🆕 購物車 icon + 數量徽章 */}
            <li className="cart-li" style={{ position: 'relative' }}>
              <Link to="/ShoppingCart">
                <img src="./images/S-NavBar/navicon_cart.svg" alt="Cart" />
                {totalQty > 0 && (
                  <span className="cart-badge">
                    {totalQty > 99 ? '99+' : totalQty}
                  </span>
                )}
              </Link>
            </li>

            {/* 會員區 */}
            <li style={{ position: 'relative' }}>
              <button type="button" className="member-button2" onClick={handleMemberClick}>
                <img src="./images/S-NavBar/navicon_member.svg" alt="Member" />
              </button>

              {isLoggedIn && showDropdown && (
                <div className="member-dropdown">
                  <img
                    src="./images/Numtest/characters/numCharacter_s1.svg"
                    alt="avatar"
                    className="member-avatar"
                  />
                  <span className="member-name">{user?.name || "礦迷"}</span>
                  <button className="logout-button" onClick={logout}>登出</button>
                </div>
              )}
            </li>

            <li>
              <button
                className="icon-menu"
                onClick={() => {
                  console.log('✅ 漢堡選單點到了');
                  openMenu();
                }}
              >
                <img src="./images/S-NavBar/navicon_bgrbtn.svg" alt="menu" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <LoginRegisterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}