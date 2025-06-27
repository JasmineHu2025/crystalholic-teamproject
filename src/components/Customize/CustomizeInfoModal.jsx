import { useEffect, useState } from 'react';
import './CustomizeInfoModal.css';
const base = import.meta.env.BASE_URL;
export default function CustomizeInfoModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      // 延遲移除，讓動畫能跑完
      const timeout = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div className={`customize-modal-overlay ${isOpen ? 'fade-in' : 'fade-out'}`} onClick={onClose}>
      <div className="customize-modal" onClick={(e) => e.stopPropagation()}>
        <div className="customize-title-box">
          <h2 className="customize-title">✦ 一步步打造專屬水晶手鍊 ✦</h2>
          <img src={`${base}images/Custom/deco-divider_purple.png`} alt="divider" />
        </div>
        <div className="customize-content">
          <p><strong className='top'>1｜選擇水晶大小</strong><br />8mm 精緻、10mm 俐落，挑選你喜歡的尺寸。</p>
          <p><strong className='top'>2｜確認手圍尺寸</strong><br />不確定怎麼量？<br />*右側欄有「手圍測量教學」可以參考唷！</p>
          <p><strong className='top'>3｜挑選手鍊配飾</strong><br />加點金屬配飾，讓整體更完整也更有個人感。</p>
          <p><strong className='top'>4｜放上水晶</strong><br />點選手鍊上的位置再點水晶，或是先點水晶再點位置，就能把喜歡的水晶套上去（先點選水晶位置可多選）<br />我們提供不同分類頁籤提供各種風格與色系的水晶，讓你慢慢探索<br />不知道什麼水晶適合? <br />*右側欄有「測驗結果」與「水晶百科」可供參考唷！</p>
          <p><strong className='top'>5｜想換水晶？</strong><br />點一下手鍊上想置換的水晶位置，選擇一顆新的就可以囉～<br />或是點選「刪除鍵」，就能一鍵清除，重新設計！</p>
          <p><strong className='top'>6｜完成後記得儲存</strong><br />吿一段落就按下「儲存鍵」，別讓你的靈感溜走～</p>
          <p><strong className='top'>7｜取個名字吧！</strong><br />一條專屬手鍊，也該有一個專屬名字</p>
          <p><strong className='top'>8｜加入購物車，完成訂購</strong><br />獨一無二的水晶手鍊，即將來到你身邊～ <br /><br />提醒您：客製化商品因具有專屬性質，設計完成並下單後將無法針對設計本身進行修改或退換，敬請理解與確認後再進行訂購。</p>
        </div>
        <button className="customize-close" onClick={onClose}>關閉說明</button>
      </div>
    </div>
  );
}
