// FinishedWindow.jsx
import { useEffect, useState } from 'react';
import './FinishedWindow.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

export default function FinishedWindow({ start }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useCart(); 

  const handleBackHome = () => {
    clearCart(); // 清空購物車
    navigate('/'); // 導回首頁
  };

  // 外部傳入 start 為 true 時觸發流程
  useEffect(() => {
    if (start) {
      setIsSubmitting(true);
      // 暫停看loading樣式
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 2000);
    }
  }, [start]);

  if (!isSubmitting && !isSubmitted) return null;

  return (
    <div className="order_popup_wrapper">
      {isSubmitting && (
        <div className="order_popup">
          <div className="order_loading_spinner"></div>
          <div className="order_loading_text">
            <h3>訂單送出中...</h3>
            <p>請稍候</p>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div className="order_popup">
          <div className="order_title">
            <h3>✦ 訂單已完成 ✦</h3>
            <img
              src="./images/ShoppingCart/finshed_deco.svg"
              alt="訂單已完成"
              className="order_success_icon"
            />
          </div>

          <div className="order_text">
            <p>感謝你的支持，我們將儘快安排出貨</p>
            <p>期待這份水晶為你帶來好運與療癒</p>
            <p>若有任何問題，歡迎加入 <a className="order_text_link" href="https://www.line.me/tw/" target="_blank" rel="noopener noreferrer">LINE</a> 與我們聯繫！</p>
          </div>

            <button className="back_home_btn" onClick={handleBackHome}>
              回到首頁
            </button>

        </div>
      )}
    </div>
  );
}
