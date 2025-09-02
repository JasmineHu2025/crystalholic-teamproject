import './About.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import BgDark from '../../components/BgDark';
// import BackToTopBtn from '../../components/BackToTopBtn'
// const base = import.meta.env.BASE_URL;

export default function About() {
  return (
    <>
      <NavBarWrapper variant="light"/>

      <main className="about-main">

        {/* 品牌 */}
        <section className="about-hero">
          <BgDark embed />
          <div className="about-hero-title">
            <h1 className="about-title">Crystalholic</h1>
            <p className="about-slogan">在忙碌世界中，找回屬於自己的寧靜</p>
            <p className="about-slogan-mobile">在忙碌世界中<br />找回屬於自己的寧靜</p>
          </div>
          <div className="about-hero-title-intro">
            <p className="about-intro">當日子忙碌又匆促，手腕上一串透光閃爍的水晶，讓我在慣常的焦慮中感受到難得的安定。</p>
            <p className="about-intro">經過多年探索，我不再滿足於市面上制式的設計與品質，<br />開始親手挑選、設計貼近內心的水晶飾品。</p>
            <p className="about-intro"><span>Crystalholic</span>就此誕生<br />我相信，水晶不只是裝飾，也是一種與自己連結的方式，溫柔且充滿力量。</p>
          </div>
        </section>

        {/* 介紹區 */}
        <section className="about-content-area">
          {/* 美感與靈性的完美融合 */}
          <section className="about-content">
            {/* 圖片 */}
            <img className="about-content-img" src="./images/About/aboutus-braclet.png" alt="設計款水晶手鍊" />

            {/* 介紹區 */}
            <div className="about-content-intro">
              {/* 標題 */}
              <h2 className="about-content-title">美感與靈性的完美融合</h2>

              {/* 裝飾線 */}
              <div className="about-deco">
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-left.svg" alt="左裝飾" />
                <hr />
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-right.svg" alt="右裝飾" />
              </div>

              {/* 敘述 */}
              <p className="about-content-depiction">市面上水晶飾品常見兩種極端－強調靈性但設計感不足，或是重視美觀卻缺乏靈魂。我們希望打破這種限制，創造出兼具美感、靈性與個人連結的水晶飾品。</p>

              {/* 列點 */}
              <div className="about-content-list">
                <p><span>Crystalholic</span>提供：</p>
                <ul>
                  <li>特色設計款飾品，每件都是有靈魂的水晶藝術品</li>
                  <li>精心挑選高質感水晶，不用再為品質煩惱</li>
                  <li>設計與靈性兼具，讓水晶成為你風格與心靈的象徵</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 讓水晶更貼近你的生活 */}
          <section className="about-content">
            {/* 圖片 */}
            <img className="about-content-img-mobile" src="./images/About/aboutus-gift.png" alt="水晶禮物傳遞" />

            {/* 介紹區 */}
            <div className="about-content-intro">
              {/* 標題 */}
              <h2 className="about-content-title">讓水晶更貼近你的生活</h2>

              {/* 裝飾線 */}
              <div className="about-deco">
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-left.svg" alt="左裝飾" />
                <hr />
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-right.svg" alt="右裝飾" />
              </div>

              {/* 敘述 */}
              <p className="about-content-depiction">
                我們不只販售水晶，更希望成為你了解水晶，並與之連結的嚮導。<br />
                除了經典設計款外，我們也提供水晶知識教學、生命靈數、客製化互動體驗，幫助你找到最適合自己的水晶。<br />
                無論是為自己，或是為重要的人挑選一份特別的禮物，在這裡都能找到專屬的存在。
              </p>

            </div>

            {/* 圖片 */}
            <img className="about-content-img-1" src="./images/About/aboutus-gift.png" alt="水晶禮物傳遞" />
          </section>

          {/* Crystalholic的品質保證 */}
          <section className="about-content">
            {/* 圖片 */}
            <img className="about-content-img" src="./images/About/aboutus-quality.png" alt="嚴選水晶品質" />

            {/* 介紹區 */}
            <div className="about-content-intro">
              {/* 標題 */}
              <h2 className="about-content-title">
                <span>Crystalholic</span>
                的品質保證
              </h2>

              {/* 裝飾線 */}
              <div className="about-deco">
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-left.svg" alt="左裝飾" />
                <hr />
                <img className="about-deco-img" src="./images/Custom/deco-divider_purple-right.svg" alt="右裝飾" />
              </div>

              {/* 敘述 */}
              <p className="about-content-depiction">
                闆娘對水晶很龜毛，堅持只選用天然且品質優良的水晶。<br />
                親自挑選每一顆礦石，確保品質穩定、色澤通透。<br />
                每款飾品皆由設計師手工製作，搭配高規格金屬材質，細節與能量兼顧，讓你能安心佩戴，時時刻刻長久相伴。
              </p>

            </div>
          </section>
        </section>


      </main>

      <footer className="about-footer">
        <BgDark embed />
        <FooterTrn />
      </footer>
    </>
  )
}
