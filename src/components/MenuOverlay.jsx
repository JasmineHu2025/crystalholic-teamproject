import './MenuOverlay.css';
import { useUI } from '../context/UIContext';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import BgDarkBlock from './BgDarkBlock';

export default function MenuOverlay() {
  const { isLoggedIn } = useAuth();
  const { isMenuOpen, openMenu, closeMenu } = useUI();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleMemberClick = () => {
    closeMenu();  // 關閉側欄
    setShowAuthModal(true); // 顯示登入/註冊彈窗
  };

  return (
    <>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {/* <div className='menu-bg-img'> */}
        <div className="menu-wrapper"><BgDarkBlock /></div>
        <div className="menu-panel">
          <span className="menu-closebtn" onClick={closeMenu}>
            <img src="./images/S-NavBar/navicon_closebgrbtn.svg" alt="close" />
          </span>

          <nav className="menu-navigation">
            <div className="menu-searchbar">
              <input
                type="text"
                placeholder="搜尋水晶或系列名稱"
                className="menu-search-input"
              />
              <button className="menu-search-btn" onClick={() => console.log('搜尋觸發')}>
                <img
                  src="./images/S-NavBar/navicon_search.svg"
                  alt="search"
                  className="menu-search-icon"
                />
              </button>
            </div>

            <div className="menu-columns-wrapper">
              {/* 關於我們 */}
              <div className="menu-column">
                <div className='menu-title'>
                  <h3>關於我們</h3>
                  <h2>About us</h2>
                </div>
                <ul>
                  <li>
                    <Link to="/about" className="hover-link">
                      <p>品牌故事</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 水晶指南 */}
              <div className="menu-column">
                <div className='menu-title'>
                  <h3>水晶指南</h3>
                  <h2>Discoveries</h2>
                </div>
                <ul>
                  <li>
                    <Link to="/KnowledgeCrystal" className="hover-link">
                      <p>水晶小百科</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/KnowledgeCleanse" className="hover-link">
                      <p>使用與淨化指南</p>
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {/* 商品系列 */}
              <div className="menu-column">
                <div className="menu-title">
                  <h3>系列商品</h3>
                  <h2>Collections</h2>
                </div>
                <ul>
                  <li>
                    <Link to="/ProductCollection#blue" className="hover-link" onClick={() => closeMenu(false)}>
                      <p>澄語之藍</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductCollection#adventure" className="hover-link" onClick={() => closeMenu(false)}>
                      <p>秘境探光</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductCollection#seasons" className="hover-link" onClick={() => closeMenu(false)}>
                      <p>四季琉波</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductCollection#cocktail" className="hover-link" onClick={() => closeMenu(false)}>
                      <p>微醺晶釀</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 專屬水晶 */}
              <div className="menu-column">
                <div className="menu-title">
                  <h3>專屬水晶</h3>
                  <h2>Customized</h2>
                </div>
                <ul>
                  <li>
                    <Link to="/NumTest1" className="hover-link">
                      <p>生命靈數測驗</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Customize1" className="hover-link">
                      <p>開始客製</p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 會員專屬 */}
              <div className="menu-column1-box">
                <div className="menu-column1">
                  <div className="menu-title">
                    <h3>會員專屬</h3>
                    <h2>Membership</h2>
                  </div>
                  <ul>
                    <li>
                      <button
                        className="menu-member-btn"
                        onClick={handleMemberClick}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'none',
                          border: 'none',
                          fontFamily: 'inherit',
                          fontSize: 'inherit',
                          color: 'inherit',
                          cursor: 'pointer',
                          padding: '0',
                        }}
                      >
                        <p>註冊/登入</p>
                      </button>
                    </li>
                    <li>
                      <Link to="#" className="hover-link">
                        <p>會員中心</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover-link">
                        <p>訂單查詢</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover-link">
                        <p>收藏清單</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* 社群icon */}
                <div className="menu-footer">
                  <h3>FOLLOW US</h3>
                  <span className="scicon-box">
                    <div className="line"></div>
                    <div className="ig"></div>
                    <div className="fb"></div>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* </div> */}
      </div>

      {/* 登入/註冊彈窗放這裡 */}
      <LoginRegisterModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
