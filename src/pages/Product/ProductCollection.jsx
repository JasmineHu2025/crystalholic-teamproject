import './ProductCollection.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import BgDark from '../../components/BgDark';
import FooterTrn from '../../components/FooterTrn';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import productSeriesData from './productSeriesData';

export default function ProductCollection() {
  const [activeSeries, setActiveSeries] = useState('blue');
  const [favorites, setFavorites] = useState({});
  const [triangleX, setTriangleX] = useState(0);
  // 📱 手機版介紹收合
  const [showFullDesc, setShowFullDesc] = useState(false);   // true = 展開
  // const needsToggle = productSeriesData[activeSeries].description.length > 4;
  const introRef = useRef(null);                             // 取得 <section> DOM

  const location = useLocation();
  const iconRefs = useRef({});
  const iconAreaRef = useRef(null);

  const navigate = useNavigate();

  /* ---  icon 清單（id 必須對應資料檔 key） ----------------------------- */
  const iconList = [
    { id: 'blue', label: '澄語之藍', icon: './images/Product/icon_blue.svg', iconActive: './images/Product/icon_blue_click.svg' },
    { id: 'adventure', label: '秘境探光', icon: './images/Product/icon_adventure.svg', iconActive: './images/Product/icon_adventure_click.svg' },
    { id: 'seasons', label: '四季琉波', icon: './images/Product/icon_seasons.svg', iconActive: './images/Product/icon_seasons_click.svg' },
    { id: 'cocktail', label: '微醺晶釀', icon: './images/Product/icon_cocktail.svg', iconActive: './images/Product/icon_cocktail_click.svg' }
  ];

  /* 0812 */
  // 手機版左右切換用（依 iconList 順序）
  const seriesOrder = iconList.map(i => i.id);

  const goPrev = () => {
    const i = seriesOrder.indexOf(activeSeries);
    setActiveSeries(seriesOrder[(i - 1 + seriesOrder.length) % seriesOrder.length]);
  };

  const goNext = () => {
    const i = seriesOrder.indexOf(activeSeries);
    setActiveSeries(seriesOrder[(i + 1) % seriesOrder.length]);
  };

  // 切換系列時自動收起（僅影響手機版）
  useEffect(() => {
    setShowFullDesc(false);
  }, [activeSeries]);

  // 讓按鈕是否出現成為 state
  const [needsToggle, setNeedsToggle] = useState(false);

  /**
   * 收起狀態下，用 scrollHeight vs. clientHeight 判斷
   * 只要被 line-clamp 截斷，就顯示「查看完整介紹」
   */
  useLayoutEffect(() => {
    const textEl = introRef.current?.querySelector('.pc_intro_text');
    if (!textEl) {
      setNeedsToggle(false);          // 找不到節點就不顯示按鈕
      return;
    }

    // 判斷文字是否被 line-clamp 截斷
    const isOverflow = textEl.scrollHeight > textEl.clientHeight + 1;

    // ❶ 被截斷時：顯示「查看完整介紹 ▼」
    // ❷ 已展開時：仍保留按鈕，改顯示「收起 ▲」
    setNeedsToggle(isOverflow || showFullDesc);
  }, [activeSeries, showFullDesc]);



  /* --- 點擊商品卡片導頁 ---------------------------------------------- */
  const handleClickCard = (seriesKey, productIndex) => {
    navigate(`/Product/${seriesKey}/${productIndex}`);
  };

  /* --- 切換系列時移動三角形 ------------------------------------------ */
  useEffect(() => {
    const iconEl = iconRefs.current[activeSeries];
    const areaEl = iconAreaRef.current;
    if (iconEl && areaEl) {
      const iconRect = iconEl.getBoundingClientRect();
      const areaRect = areaEl.getBoundingClientRect();
      setTriangleX(iconRect.left + iconRect.width / 2 - areaRect.left);
    }
  }, [activeSeries]);

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash && productSeriesData[hash]) {
      setActiveSeries(hash);
    }
  }, [location.hash]);

  useEffect(() => {
    // 預載每個系列的主圖與水晶圖
    Object.values(productSeriesData).forEach(series => {
      series.products.forEach(product => {
        // 預載主圖
        const img = new Image();
        img.src = product.image;

        // 預載水晶圖
        if (Array.isArray(product.crystals)) {
          product.crystals.forEach(src => {
            const crystalImg = new Image();
            crystalImg.src = src;
          });
        }
      });
    });
  }, []);

  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="pc_main">
        {/* ─── 系列 icon 區 ───────────────────── */}
        <section className="pc_icon_area" ref={iconAreaRef} data-series={activeSeries}>
          {/* 手機版：上一個系列 */}
          <button className="pc_nav_btn pc_prev" onClick={goPrev} aria-label="上一個系列">
            <img className="pc_nav_icon" src="./images/S-Btn/btn_left.png" alt="" aria-hidden="true" />
          </button>

          {/* 桌機用三角形指示器（手機會被 CSS 隱藏） */}
          <div
            className={`pc_triangle_indicator triangle_${activeSeries}`}
            style={{ left: `${triangleX - 48}px` }}
          />

          {iconList.map(({ id, label, icon, iconActive }) => (
            <div
              key={id}
              className={`pc_icon_item ${activeSeries === id ? 'pc_active' : ''}`}
              onClick={() => setActiveSeries(id)}
              ref={el => (iconRefs.current[id] = el)}
            >
              <img src={activeSeries === id ? iconActive : icon} alt={label} />
              <span>{label}</span>
            </div>
          ))}

          {/* 手機版：下一個系列 */}
          <button className="pc_nav_btn pc_next" onClick={goNext} aria-label="下一個系列">
            {/* <span className="pc_nav_chev" aria-hidden>›</span> */}
            <img className="pc_nav_icon" src="./images/S-Btn/btn_right.png" alt="" aria-hidden="true" />
          </button>

        </section>

        {/* ─── 系列介紹 ─────────────────────── */}
        <section
          ref={introRef}
          className="pc_product_introduce_mobile"
        >
          <div
            className={`pc_intro_text ${showFullDesc ? 'expanded' : 'collapsed'}`}
          >
            {productSeriesData[activeSeries].description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {needsToggle && (
            <button
              type="button"
              className="pc_readmore_btn"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc
                ? '收起介紹'
                : '查看完整介紹'}
              <img
                src={
                  showFullDesc
                    ? './images/S-Btn/triangle_btn_close.svg'
                    : './images/S-Btn/triangle_btn_open.svg'
                }
                alt="展開收合按鈕"
                className="cart_toggle_icon"
              />
            </button>
          )}
        </section>



        {/* ─── 商品區 ─────────────────────────── */}
        <section className={`pc_product_area pc_bg_${activeSeries}`}>
          <section className="pc_products">
            {productSeriesData[activeSeries]?.products.map((p, idx) => (
              <div
                key={idx}
                className="pc_product_card"
                onClick={() => handleClickCard(activeSeries, idx)}
              >
                <div className={`pc_product_img_wrap pc_shadow_${activeSeries}`}>
                  <img className="pc_product_img" src={p.image} alt={p.name} />
                </div>

                <div className="pc_product_info">
                  <span className="pc_product_name">{p.name}</span>
                  <span className={`pc_product_price price_${activeSeries}`}>{p.price}</span>
                </div>

                <div className="pc_product_crystals">
                  {p.crystals.map((src, i) => (
                    <img key={i} className="pc_crystal_img" src={src} alt="" />
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* ─── 系列介紹 ─────────────────────── */}
          <section className="pc_product_introduce">
            <h5 className={`pc_intro_title pc_intro_title_${activeSeries}`}>
              {productSeriesData[activeSeries].name}
            </h5>
            <img
              className="pc_divider_line"
              src={`./images/Product/deco-divider_${activeSeries}.svg`}
              alt=""
            />
            {productSeriesData[activeSeries].description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </section>
        </section>
      </main>

      <footer className="pc_footer">
        <BgDark embed /> 
        <FooterTrn />
      </footer>
    </>
  );
}
