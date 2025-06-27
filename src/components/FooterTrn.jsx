import './FooterTrn.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function FooterTrn() {
    return (
      <footer className="footertrn">
        <section className="footertrn_info">
          {/* COMPANY */}
          <div className="footertrn_company">
            <h4 className="footertrn_title">COMPANY</h4>
            <ul>
              <li><Link to="/about">關於品牌 About&nbsp;Us</Link></li>
            </ul>
          </div>
  
          {/* SERVICE */}
          <div className="footertrn_service">
            <h4 className="footertrn_title">SERVICE</h4>
            <ul>
              <li><Link to="/KnowledgeCrystal">水晶小百科 Crystal&nbsp;Discoveries</Link></li>
              <li><Link to="/knowledgecleanse">商品保養 Maintenance</Link></li>
              <li><a href="#">商品包裝 Packaging</a></li>
              <li><a href="#">售後服務 After-sales&nbsp;service</a></li>
              <li><a href="#">常見問題 FAQ</a></li>
              <li><a href="#">隱私權條款 Privacy</a></li>
            </ul>
          </div>

          <div className="footertrn_rwdbox">
            {/* CONTACT */}
            <div className="footertrn_contact">
              <h4 className="footertrn_title">CONTACT&nbsp; US</h4>
              <ul>
                <li>聯絡電話 / 0800&nbsp;000&nbsp;000</li>
                <li>MON&nbsp;-&nbsp;FRI / 9:00&nbsp;am&nbsp;-&nbsp;18:00&nbsp;pm</li>
              </ul>
            </div>
    
            {/* FOLLOW */}
            <div className="footertrn_follow">
              <h4 className="footertrn_title">FOLLOW&nbsp;US</h4>
              <ul className="footertrn_social_icon">
                <li><a className="footertrn-icon-line" href="https://www.line.me/tw/" aria-label="LINE"></a></li>
                <li><a className="footertrn-icon-ig" href="https://www.instagram.com/" aria-label="Instagram"></a></li>
                <li><a className="footertrn-icon-fb" href="https://www.facebook.com/?locale=zh_TW" aria-label="Facebook"></a></li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="footertrn_bottom">
          <hr />
          <small>2025&nbsp;&copy;&nbsp;Crystalholic&nbsp;ALL&nbsp;RIGHTS&nbsp;RESERVED.</small>
        </section>
      </footer>
    );
  }