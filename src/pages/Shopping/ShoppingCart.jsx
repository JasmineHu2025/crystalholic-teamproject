/* ────────── import 區 ────────── */
import './ShoppingCart.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../components/BgLight.css';
import BgDark from '../../components/BgDark';
import { useAuth } from '../../context/AuthContext';
import { useUI } from '../../context/UIContext';
import LoginRegisterModal from '../../components/LoginRegisterModal/LoginRegisterModal';
import { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { TW_COUNTIES, genStores } from './twDistricts';
import FinishedWindow from './FinishedWindow';


/* ───────────────────────────────────────────── */
/* DeliveryOptions 元件                           */
/* ───────────────────────────────────────────── */
function DeliveryOptions({
  onPlaceChange,
  onMethodChange,           // 🆕 讓父層同步獲得配送方式
}) {
  /* ---------- state ---------- */
  const [place, setPlace] = useState('台灣');
  const [method, setMethod] = useState('宅配（貨到付款）');
  const [county, setCounty] = useState('');
  const [stores, setStores] = useState([]);
  const [store, setStore] = useState('');
  const [zip, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  /* ---------- 地點／方式變動 ---------- */
  useEffect(() => {
    if (place === '海外') {
      setMethod('國際快遞（關稅另計）');
      setCounty('');
      setStore('');
      setZip('');
      setAddress('');
    } else if (method === '宅配（貨到付款）') {
      setCounty('');
      setStore('');
    }
    onPlaceChange?.(place);
    onMethodChange?.(method);      // 🆕 回傳目前配送方式
  }, [place, method]);

  /* ---------- 縣市變動 → 產生門市 ---------- */
  useEffect(() => {
    if (!county) {
      setStores([]);
      return;
    }
    const brand = method.includes('7-ELEVEN')
      ? '7-11'
      : method.includes('全家')
        ? 'Family'
        : '';
    setStores(brand ? genStores(brand, county) : []);
    setStore('');
  }, [county, method]);

  /* ---------- JSX ---------- */
  return (
    <form className="cart_info_card">
      {/* 表頭 */}
      <div className="cart_table_head">
        <div className="cart_diamond">
          <img
            src="./images/ShoppingCart/shoppingcart_ diamond.svg"
            alt="送貨及付款方式"
          />
        </div>
        <h2>送貨及付款方式</h2>
      </div>

      {/* 內容 */}
      <div className="cart_options_area">
        {/* 1. 送貨地點 */}
        <label>*送貨地點
          <select value={place} onChange={(e) => setPlace(e.target.value)} required>
            <option>台灣</option>
            <option>海外</option>
          </select>
        </label>

        {/* 2. 送貨方式 */}
        {place === '台灣' && (
          <label>*送貨方式
            <select value={method} onChange={(e) => setMethod(e.target.value)} required>
              <option>宅配（貨到付款）</option>
              <option>7-ELEVEN（貨到付款）</option>
              <option>全家（貨到付款）</option>
            </select>
          </label>
        )}
        {place === '海外' && (
          <label>*送貨方式
            <input value="國際快遞（關稅另計）" disabled />
          </label>
        )}

        {/* 3A. 台灣 → 宅配 */}
        {place === '台灣' && method === '宅配（貨到付款）' && (
          <>
            <label>*郵遞區號
              <input
                type="text"
                placeholder="例如：100"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </label>

            {zip && (
              <label>*詳細地址
                <input
                  type="text"
                  placeholder="例如：台北市中正區水晶路一段8號"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            )}
          </>
        )}

        {/* 3B. 台灣 → 超商 */}
        {place === '台灣' && method !== '宅配（貨到付款）' && (
          <>
            <label>*縣市
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                required
              >
                <option value="" disabled>請選擇縣市</option>
                {TW_COUNTIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            {county && (
              <label>*門市
                <select
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  required
                >
                  <option value="" disabled>請選擇門市</option>
                  {stores.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            )}
          </>
        )}

        {/* 3C. 海外 */}
        {place === '海外' && (
          <>
            <label>*收件國家
              <input
                type="text"
                placeholder="e.g. Japan, USA, Singapore"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </label>

            {country && (
              <label>*收件地址
                <input
                  type="text"
                  placeholder="Please enter full address in English"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            )}
          </>
        )}
      </div>
    </form>
  );
}

/* ───────────────────────────────────────────── */
/* ShoppingCart 主元件                            */
/* ───────────────────────────────────────────── */
export default function ShoppingCart() {
  /* context & modal */
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { isLoggedIn } = useAuth();
  const { showAuthModal, openAuthModal, closeAuthModal } = useUI();

  /* 展開控制 */
  const [showAllItems, setShowAllItems] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [readyToCheckout, setReadyToCheckout] = useState(false);

  /* 收件人 & 發票 */
  const [placeState, setPlaceState] = useState('台灣');
  const [invoiceType, setInvoiceType] = useState('');
  const [invoiceValue, setInvoiceValue] = useState('');

  /* 🆕 配送方式 & 優惠碼 */
  const [deliveryMethod, setDeliveryMethod] = useState('宅配（貨到付款）'); // 由 DeliveryOptions 直接更新
  const [couponCode, setCouponCode] = useState('');                // 使用者輸入的代碼

  const navigate = useNavigate();

  /* 付款流程效應 */
  useEffect(() => {
    if (isLoggedIn && readyToCheckout) {
      setShowSuccessMsg(true);
      setReadyToCheckout(false);
    }
  }, [isLoggedIn, readyToCheckout]);

  /* 🆕 全域事件委派 → 清除錯誤 */
  useEffect(() => {
    const clearError = (e) => {
      const el = e.target;
      if (el.classList.contains('error')) {
        el.classList.remove('error');

        const label = el.closest('label');
        if (label) {
          const msg = label.querySelector('.error-msg');
          if (msg) label.removeChild(msg);
        }

        // 若所有錯誤都已清除，隱藏表單總體錯誤提示（若你有放）
        if (!document.querySelector('.cart_options_area .error')) {
          const generalMsg = document.getElementById('form-error-msg');
          if (generalMsg) generalMsg.style.display = 'none';
        }
      }
    };

    // 捕獲階段監聽，確保動態新增的欄位也能被偵測
    document.addEventListener('input', clearError, true);
    document.addEventListener('focusin', clearError, true);

    return () => {
      document.removeEventListener('input', clearError, true);
      document.removeEventListener('focusin', clearError, true);
    };
  }, []); // 只需掛一次即可

  /* 結帳驗證 */
  const handleCheckout = () => {
    if (!cartItems.length) return;

    // 先重設所有既有錯誤
    document.querySelectorAll('.error').forEach(el => {
      el.classList.remove('error');
      const label = el.closest('label');
      if (label) {
        const msg = label.querySelector('.error-msg');
        if (msg) label.removeChild(msg);
      }
    });

    let firstError = null;
    const requiredFields = Array.from(
      document.querySelectorAll('.cart_options_area input, .cart_options_area select')
    ).filter(el => !el.disabled && el.hasAttribute('required'));

    requiredFields.forEach(el => {
      if (!el.value.trim()) {
        el.classList.add('error');

        // 若同 label 已經有錯誤訊息就不重複加
        const label = el.closest('label');
        if (label && !label.querySelector('.error-msg')) {
          const msg = document.createElement('div');
          msg.className = 'error-msg';
          msg.textContent = '！此為必填';
          label.appendChild(msg);
        }

        if (!firstError) firstError = el;
      }
    });

    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (!isLoggedIn) {
      openAuthModal();
      setReadyToCheckout(true);
    } else if (!showSuccessMsg) {
      setShowSuccessMsg(true);
    }
  };

  /* 金額計算 */
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🆕 運費費率表
  const SHIPPING_FEE = {
    '宅配（貨到付款）': 130,
    '7-ELEVEN（貨到付款）': 60,
    '全家（貨到付款）': 60,
    '國際快遞（關稅另計）': 350,
  };

  const shipping = subtotal ? (SHIPPING_FEE[deliveryMethod] ?? 0) : 0;    // 🆕
  const discount = couponCode.trim().toLowerCase() === 'crystalholic' ? 100 : 0; // 🆕

  const total = subtotal + shipping - discount; // 🆕
  const formatCurrency = (num) => `NT$${num.toLocaleString('zh-TW')}`;

  /* 發票 placeholder & label */
  const invoicePlaceholder =
    invoiceType === '個人發票'
      ? '例如：/ABCD123'
      : invoiceType === '公司用發票'
        ? '例如：20250620'
        : invoiceType === '捐贈發票'
          ? '例如：09958'
          : '';
  const invoiceLabel =
    invoiceType === '個人發票'
      ? '*手機條碼載具'
      : invoiceType === '公司用發票'
        ? '*統一編號'
        : invoiceType === '捐贈發票'
          ? '*捐贈碼'
          : '*請選擇發票類型';

  /* ────────── JSX ────────── */
  return (
    <>
      <NavBarWrapper variant="dark" />

      <main className="cart_main">
        {/* 標題區 */}
        <div className="cart_title">
          <img
            className="cart_decorate-left"
            src="./images/ShoppingCart/shoppingcart_deco-left.svg"
            alt="左裝飾"
          />
          <h3 className="cart_decorate-title">購物車</h3>
          <img
            className="cart_decorate-right"
            src="./images/ShoppingCart/shoppingcart_deco-right.svg"
            alt="右裝飾"
          />
        </div>

        {/* 內容大區塊 */}
        <section className="cart_point">
          {/* ===== 左側：商品清單 + 表單 ===== */}
          <section className="cart_left">
            {/* 購物車清單 */}
            <section className="cart_purchase_items">
              {/* 表頭 */}
              <div className="cart_card">
                <div className="cart_table_head_1">
                  <span>商品</span>
                  <span>尺寸</span>
                  <span>價格</span>
                  <span>數量</span>
                  <span>小計</span>
                </div>
              </div>

              {/* 商品列 */}
              {(showAllItems ? cartItems : cartItems.slice(0, 3)).map(
                (item, index) => (

                  <div className="cart_table_row" key={index}>
                    {/* 0. 圖片＋名稱（一般商品可點、客製化不可點） */}
                    {!item.isCustom ? (
                      <Link
                        to={`/Product/${item.seriesKey}/${item.productIndex}`}
                        className="cart_product_info clickable"
                        title="查看商品頁"
                      >
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </Link>
                    ) : (
                      /* ===== 客製化：純 div，沒有 hover、沒有指標 ===== */
                      <div className="cart_product_info no-hover">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    )}

                    {/* 1. 尺寸 */}
                    <div className="cart_product_size">
                      {/* 串珠尺寸 */}
                      串珠&nbsp;
                      {typeof item.size === 'number'      // 客製化 → 數字
                        ? `${item.size}mm`
                        : item.size                       // 其他商品 → 已含 mm
                      }
                      <br />

                      {/* 手圍尺寸 */}
                      手圍&nbsp;
                      {typeof item.wrist === 'number'
                        ? `${item.wrist}cm`
                        : item.wrist
                      }
                    </div>

                    {/* 2. 單價 */}
                    <div className="cart_product_price">
                      NT${item.price.toLocaleString()}
                    </div>

                    {/* 3. 數量 */}
                    <select
                      className="cart_qty_select"
                      value={item.quantity}
                      onChange={e => updateQuantity(index, Number(e.target.value))}
                    >
                      {[...Array(5)].map((_, n) =>
                        <option key={n + 1} value={n + 1}>{n + 1}</option>
                      )}
                    </select>

                    {/* 4. 小計 */}
                    <div className="cart_subtotal">
                      NT${(item.price * item.quantity).toLocaleString()}
                    </div>

                    {/* 5. 刪除 */}
                    <div
                      className="cart_cross_btn"
                      onClick={() => removeFromCart(index)}
                      title="刪除"
                    >
                      <img
                        src="./images/ShoppingCart/shoppingcart-btn_cross.svg"
                        alt="刪除"
                      />
                    </div>
                  </div>
                )
              )}


              {/* 空購物車 */}
              {!cartItems.length && (
                <div className="cart_shopping_tip">
                  <p>購物車目前是空的喔！</p>
                </div>
              )}

              {/* 展開／收合 */}
              {cartItems.length > 3 && (
                <div className="cart_toggle">
                  <button
                    className="cart_toggle_btn"
                    onClick={() => setShowAllItems(!showAllItems)}
                  >
                    {showAllItems
                      ? '收起購物清單'
                      : `查看完整購物清單（共 ${cartItems.length} 件）`}
                    <img
                      src={
                        showAllItems
                          ? './images/ShoppingCart/shoppingcart-btn_accordion-open.svg'
                          : './images/ShoppingCart/shoppingcart-btn_accordion-close.svg'
                      }
                      alt="展開收合按鈕"
                      className="cart_toggle_icon"
                    />
                  </button>
                </div>
              )}
            </section>

            {/* 送貨 & 收件表單 */}
            <section className="cart_info_area">
              {/* 送貨及付款方式 */}
              <DeliveryOptions
                onPlaceChange={setPlaceState}
                onMethodChange={setDeliveryMethod}  /* 🆕 */
              />

              {/* 收件人資料 */}
              <form className="cart_info_card">
                <div className="cart_table_head">
                  <div className="cart_diamond">
                    <img
                      src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                      alt="收件人資料"
                    />
                    <img
                      src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                      alt="收件人資料"
                    />
                  </div>
                  <h2>收件人資料</h2>
                </div>

                <div className="cart_options_area">
                  {/* 姓名 */}
                  <label>*收件人姓名
                    <input
                      type="text"
                      placeholder={
                        placeState === '海外'
                          ? 'Please enter your full name in English'
                          : '例如：張美美'
                      }
                      required
                    />
                  </label>

                  {/* 電話 */}
                  <label>*聯絡電話
                    <input
                      type="tel"
                      placeholder={
                        placeState === '海外'
                          ? 'e.g. +1-234-567-8901'
                          : '例如：0912345678'
                      }
                      required
                    />
                  </label>

                  {/* 發票資訊 */}
                  {placeState === '台灣' ? (
                    <>
                      <label>*發票資訊
                        <select
                          value={invoiceType}
                          onChange={(e) => {
                            setInvoiceType(e.target.value);
                            setInvoiceValue('');
                          }}
                          required
                        >
                          <option value="" disabled>請選擇發票類型</option>
                          <option>個人發票</option>
                          <option>公司用發票</option>
                          <option>捐贈發票</option>
                        </select>
                      </label>

                      {invoiceType && (
                        <label>{invoiceLabel}
                          <input
                            type="text"
                            placeholder={invoicePlaceholder}
                            value={invoiceValue}
                            onChange={(e) => setInvoiceValue(e.target.value)}
                            required
                          />
                        </label>
                      )}
                    </>
                  ) : (
                    <label>＊發票資訊
                      <input
                        type="text"
                        value="No invoice available for international orders"
                        disabled
                      />
                    </label>
                  )}
                </div>
              </form>
            </section>
          </section>

          {/* ===== 右側：訂單資訊 ===== */}
          <section className="cart_right">
            <div className="cart_table_head">
              <div className="cart_diamond">
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
                <img
                  src="./images/ShoppingCart/shoppingcart_ diamond.svg"
                  alt="訂單資訊"
                />
              </div>
              <h2>訂單資訊</h2>
            </div>

            <div className="cart_detail_area">
              <ul>
                <li className="cart_subtotal">
                  <span>小計：</span>
                  <span>{formatCurrency(subtotal)}</span>
                </li>
                <li className="cart_fee">
                  <span>運費：</span>
                  <span>{formatCurrency(shipping)}</span>
                </li>

                {/* 🆕 優惠輸入 */}
                <li>
                  <label htmlFor="coupon">
                    優惠代碼：
                    <input
                      id="coupon"
                      type="text"
                      placeholder="請輸入代碼"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </label>
                </li>

                {/* 🆕 折扣列（僅輸入正確代碼時顯示） */}
                {discount > 0 && (
                  <li className="cart_discount">
                    <span>優惠折抵：</span>
                    <span>-{formatCurrency(discount)}</span>
                  </li>
                )}

                <hr />
                <li className="cart_total">
                  <span>合計：</span>
                  <span className="cart_totalnum">
                    {formatCurrency(total)}
                  </span>
                </li>
              </ul>

              <button
                className="cart_btn_checkout"
                onClick={handleCheckout}
                disabled={!cartItems.length}
              >
                確認結帳
              </button>
            </div>
          </section>
        </section>

        {/* 結帳完成彈窗 */}
        {showSuccessMsg && <FinishedWindow start={true} />}

        {/* 登入 / 註冊 Modal */}
        <LoginRegisterModal
          isOpen={showAuthModal}
          onClose={closeAuthModal}
        />
      </main>

      {/* Footer */}
      <footer className="cart_footer">
        <BgDark />
        <FooterTrn />
      </footer>
    </>
  );
}
