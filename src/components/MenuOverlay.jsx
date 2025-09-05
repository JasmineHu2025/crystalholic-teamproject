import './MenuOverlay.css';
import { useUI } from '../context/UIContext';
import { Link } from 'react-router-dom';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';

import LoginRegisterModal from './LoginRegisterModal/LoginRegisterModal';
import BgDark from './BgDark';


export default function MenuOverlay() {

  // 取得開關狀態與關閉方法
  const { isMenuOpen, closeMenu } = useUI();

  // 控制登入/註冊彈窗
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 搜尋框 ref：選單開啟時自動聚焦
  const searchInputRef = useRef(null);

  // 點「註冊/登入」
  const handleMemberClick = useCallback(() => {
    closeMenu();                // 關選單
    setShowAuthModal(true);     // 開啟登入/註冊
  }, [closeMenu]);

  // 送出搜尋
  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('搜尋觸發');
  }, []);

  // ESC 關閉、開啟時鎖捲動、自動聚焦搜尋框
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    // 鎖 body 捲動
    document.body.style.overflow = 'hidden';

    // 自動聚焦搜尋（若搜尋列在該斷點顯示）
    setTimeout(() => {
      if (searchInputRef.current) searchInputRef.current.focus();
    }, 0);

    // 按 ESC 關閉
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);

    // 清理
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, closeMenu]);

  // 選單內容
  const columns = useMemo(() => ([
    {
      id: 'about',
      zh: '關於我們',
      en: 'About us',
      links: [{ to: '/about', label: '品牌故事' }]
    },
    {
      id: 'discover',
      zh: '水晶指南',
      en: 'Discoveries',
      links: [
        { to: '/KnowledgeCrystal', label: '水晶小百科' },
        { to: '/KnowledgeCleanse', label: '使用與淨化指南' },
      ]
    },
    {
      id: 'products',
      zh: '所有商品',
      en: 'Products',
      links: [
        { to: '/ProductCollection#blue', label: '澄語之藍' },
        { to: '/ProductCollection#adventure', label: '秘境探光' },
        { to: '/ProductCollection#seasons', label: '四季琉波' },
        { to: '/ProductCollection#cocktail', label: '微醺晶釀' },
      ]
    },
    {
      id: 'custom',
      zh: '專屬水晶',
      en: 'Customized',
      links: [
        { to: '/NumTest1', label: '生命靈數測驗' },
        { to: '/Customize1', label: '開始客製' },
      ]
    },
  ]), []);

  // 單一欄元件
  const Column = ({ id, zh, en, links }) => (
    <section className="menu-column" aria-labelledby={`${id}-title`}>
      <div className="menu-title">
        <h3 id={`${id}-title`}>{zh}</h3>
        <h2>{en}</h2>
      </div>
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="hover-link" onClick={closeMenu}>
              <p>{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );


  return (
    <>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="主選單" >

        {/* 關閉按鈕 */}
        <button className="menu-closebtn" type="button" onClick={closeMenu} aria-label="關閉選單" >
          <img src="./images/S-Btn/btn_close.svg" alt="" aria-hidden="true" />
        </button>

        {/* 背景 */}
        <BgDark />

        {/* 顯示內容 */}
        <div className="menu-panel" role="document">

          {/* 主選單區域 */}
          <nav className="menu-navigation" aria-label="網站主選單" >

            {/* 搜尋列：平板以下顯示 */}
            <form className="menu-searchbar" role="search" onSubmit={handleSearchSubmit} >
              <input className="menu-search-input" type="text" ref={searchInputRef} placeholder="搜尋水晶或商品名稱" aria-label="搜尋關鍵字" autoComplete="off" />
              <button className="menu-search-btn" type="submit" aria-label="送出搜尋" >
                <img className="menu-search-icon" src="./images/S-NavBar/navicon_search.svg" alt="" aria-hidden="true" />
              </button>
            </form>

            {/* 欄位區 */}
            <div className="menu-columns-wrapper">

              {/* === 四欄區 === */}
              {columns.map((c) => (
                <Column key={c.id} {...c} />
              ))}

              {/* 會員、社群欄位區 */}
              <section className="menu-column1-box">

                {/* 會員專屬區 */}
                <section className="menu-column1" aria-labelledby="member-title">
                  {/* 標題區 */}
                  <div className="menu-title">
                    <h3 id="member-title">會員專屬</h3>
                    <h2>Membership</h2>
                  </div>
                  {/* 欄位列表區 */}
                  <ul>
                    <li>
                      <button className="menu-member-btn" type="button" onClick={handleMemberClick} >
                        <p>註冊/登入</p>
                      </button>
                    </li>
                    <li>
                      <Link to="#" className="hover-link" onClick={closeMenu}>
                        <p>會員中心</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover-link" onClick={closeMenu}>
                        <p>訂單查詢</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover-link" onClick={closeMenu}>
                        <p>收藏清單</p>
                      </Link>
                    </li>
                  </ul>
                </section>

                {/* 社群icon區 */}
                <div className="menu-follow" aria-label="追蹤我們">
                  <h3>FOLLOW US</h3>
                  <ul className="menu-icon">
                    <li><a className="menu-icon-line" href="https://www.line.me/tw/" aria-label="LINE" /></li>
                    <li><a className="menu-icon-ig" href="https://www.instagram.com/" aria-label="Instagram" /></li>
                    <li><a className="menu-icon-fb" href="https://www.facebook.com/?locale=zh_TW" aria-label="Facebook" /></li>
                  </ul>
                </div>

              </section>

            </div>
          </nav>
        </div>

      </div>

      {/* 登入/註冊彈窗 */}
      <LoginRegisterModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
