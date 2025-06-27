
import './Product.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productSeriesData from './productSeriesData';
import { useCart } from '../Shopping/CartContext'; // 🛒 加入購物車功能

export default function Product() {
  const { seriesKey, productIndex } = useParams();
  const series = productSeriesData[seriesKey];
  const product = series?.products?.[Number(productIndex)];

  const [isFav, setIsFav] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [beadSize, setBeadSize] = useState('6');
  const [wristSize, setWristSize] = useState('14');
  const { addToCart } = useCart(); // 🛒 呼叫購物車方法
  const navigate = useNavigate();

  useEffect(() => {
    setIsFav(false);
  }, [seriesKey, productIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [seriesKey, productIndex]);

  if (!product) return <div>商品不存在</div>;

  const handleFavClick = (e) => {
    e.stopPropagation();
    setIsFav((prev) => !prev);
  };
  
  const MAX_QTY = 5;   // ➜ 每件商品最多 5 件
  // 數量遞增：達上限就不再加
  const handleIncreaseQty = () => setQuantity(prev => (prev < MAX_QTY ? prev + 1 : prev));
  // 數量遞減：下限仍維持 1
  const handleDecreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // 推薦商品：同系列最多兩個
  const sameSeriesProducts = series.products
    .filter((_, i) => i !== Number(productIndex))
    .slice(0, 2);

  // 隨機推薦商品（來自其他系列）
  const otherSeriesKeys = Object.keys(productSeriesData).filter(key => key !== seriesKey);
  const randomSeriesKey = otherSeriesKeys[Math.floor(Math.random() * otherSeriesKeys.length)];
  const randomProducts = productSeriesData[randomSeriesKey].products;
  const randomProduct = randomProducts[Math.floor(Math.random() * randomProducts.length)];

  // 推薦清單
  const recommendedProducts = [
    ...sameSeriesProducts.map((p, i) => ({
      ...p,
      seriesKey,
      index: series.products.findIndex(prod => prod.name === p.name),
    })),
    {
      ...randomProduct,
      seriesKey: randomSeriesKey,
      index: productSeriesData[randomSeriesKey].products.findIndex(prod => prod.name === randomProduct.name),
    },
  ];

  //加入購物車
  const currentIndex = series?.products.findIndex(p => p.name === product.name);
  const productId = `${seriesKey}-${currentIndex}`;   // ←最簡單用系列＋索引組合

  useEffect(() => {
    // 預載推薦商品圖片
    const preloadImages = () => {
      const allSeries = Object.values(productSeriesData);
      allSeries.forEach(series => {
        series.products.forEach(product => {
          const img = new Image();
          img.src = product.image;

          if (Array.isArray(product.crystals)) {
            product.crystals.forEach(src => {
              const crystalImg = new Image();
              crystalImg.src = src;
            });
          }
        });
      });
    };

    preloadImages();
  }, []);

  const handleAddToCart = () => {
    const currentIndex = series?.products.findIndex(p => p.name === product.name);
    // 將價格轉成數字方便計算
    const priceNum = Number(product.price.replace(/[^\d]/g, '')); // 🆕
    addToCart({
      productId,
      name: product.name,
      price: priceNum,  // 🆕 直接存數字
      image: product.image,
      quantity,
      size: `${beadSize}mm`,
      wrist: `${wristSize}cm`,
      seriesKey,
      productIndex: currentIndex
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // window.location.href = '/#/ShoppingCart';
    navigate('/ShoppingCart');
  };



  return (
    <>
      <NavBarWrapper variant="dark" />
      <main className="product_main">
        {/* 單一商品區 */}
        <section className="p_product_area">
          {/* 麵包屑導覽 */}
          <div className="breadcrumb">
            <span className="bc_text">
              <Link to="/cover0602" className="bc_link">首頁</Link>
              <span className="bc_sep">｜</span>
              <Link to="/ProductCollection" className="bc_link">全系列商品</Link>
              <span className="bc_sep">｜</span>
              <Link to={`/ProductCollection#${seriesKey}`} className="bc_link">{series?.name}</Link>
              <span className="bc_sep">-</span>
              <span className="bc_current">{product?.name}</span>
            </span>
          </div>

          <div className="p_product_box">
            <div className="p_product_img_left">
              <img className="p_product_img" src={product.image} alt={product.name} />
            </div>
            <div className="p_product_right">
              <div className="p_product_title_box">
                <div className="p_product_title">
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
                <div
                  className={`p_fav_icon ${isFav ? 'clicked' : ''}`}
                  onClick={handleFavClick}
                  onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
                />
              </div>

              <hr />

              <div className="p_product_description">
                {Array.isArray(product.description)
                  ? product.description.map((line, i) => <p key={i}>{line}</p>)
                  : <p>{product.description}</p>}
              </div>

              {/* 水晶資訊區 */}
              <div className="p_product_crystal_area">
                <div className="p_product_crystals">
                  {product.crystals.map((src, i) => (
                    <img key={i} className="p_crystal_img" src={src} alt="水晶" />
                  ))}
                </div>
                <p>主石：{Array.isArray(product.mainStone) ? product.mainStone.join('、') : product.mainStone}</p>
                <p>其他：{Array.isArray(product.otherStones) ? product.otherStones.join('、') : product.otherStones}</p>
              </div>

              {/* 選擇區 */}
              <div className="p_product_size">
                <span>串珠</span>
                <button onClick={() => setBeadSize('6')} className={beadSize === '6' ? 'active' : ''}>6</button>
                <button onClick={() => setBeadSize('8')} className={beadSize === '8' ? 'active' : ''}>8</button>
                <span>mm</span>
              </div>

              <div className="p_product_hand">
                <span>手圍</span>
                {['14', '16', '18'].map(size => (
                  <button
                    key={size}
                    onClick={() => setWristSize(size)}
                    className={wristSize === size ? 'active' : ''}
                  >{size}</button>
                ))}
                <span>cm</span>
              </div>

              <div className="p_product_qty">
                <button type="button" className="p_left" onClick={handleDecreaseQty}>-</button>
                <button type="button" className="p_center">{quantity}</button>
                <button type="button" className="p_right" onClick={handleIncreaseQty}>+</button>
              </div>

              {/* 購物按鈕 */}
              <div className="p_product_buy">
                <button className="p_btn_cart" onClick={handleAddToCart}>加入購物車</button>
                <button className="p_btn_buy" onClick={handleBuyNow}>立即購買</button>
              </div>
            </div>
          </div>
        </section>

        {/* 推薦商品區 */}
        <section className="p_collection">
          <BgDark />
          <h1 className="p_collection_title">✦&nbsp;&nbsp;Recommended&nbsp;&nbsp;✦</h1>

          <div className="p_collection_products">
            {recommendedProducts.map((item, idx) => (
              <Link
                to={`/Product/${item.seriesKey}/${item.index}`}
                className="p_product_card"
                key={idx}
              >
                <div className="p_product_img_wrap">
                  <img className="p_product_img" src={item.image} alt={item.name} />
                </div>
                <div className="p_product_info">
                  <span className="p_product_name">{item.name}</span>
                  <span className="p_product_price">{item.price}</span>
                </div>
                <div className="p_product_crystals">
                  {item.crystals.map((src, i) => (
                    <img key={i} className="ps_crystal_img" src={src} alt="水晶名稱" />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="p_footer">
        <FooterTrn />
      </footer>
    </>
  );
}
