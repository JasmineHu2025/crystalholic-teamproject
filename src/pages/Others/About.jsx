// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
const base = import.meta.env.BASE_URL;
import '../../css/fonts.css';
import './About.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterBgc from '../../components/FooterBgc'
import BgDark1 from '../../components/BgDarkBlock'
import BackToTopBtn from '../../components/BackToTopBtn'
// import CustomizeInfoModal from '../../components/Customize/CustomizeInfoModal';

export default function About() {

  // const [showInfo, setShowInfo] = useState(true);

  // useEffect(() => {
  //   setShowInfo(true);
  // }, []);

  return (
    <div className="font-style">
      <div className="about-page">
        {/* <CustomizeInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} /> */}

        <NavBarWrapper variant="light" />

        <main className="about-main">
          <section className="about-hero" id='about-hero'>
            <BgDark1/>
            <div className="about-hero-content">
              <h1 className="about-hero-title">Crystalholic</h1>
              <p className="about-hero-subtitle">在忙碌世界中，找回屬於自己的寧靜</p>
              <p className="about-hero-description">
                當日子忙碌又匆促，手腕上一串透光閃爍的水晶，讓我在慣常的焦慮中感受到難得的安定。<br />
                <br />
                經過多年探索，我不再滿足於市面上制式的設計與品質，<br />
                開始親手挑選、設計貼近內心的水晶飾品。<br />
                <br />
                Crystalholic 就此誕生。<br />
                我相信，水晶不只是裝飾，也是一種與自己連結的方式，溫柔且充滿力量。
              </p>
            </div>
          </section>

          <section className="beauty-spirituality">
            <div className="content">
              <div className="text">
                <div className="text-content">
                  <h2 className="title">美感與靈性的完美融合</h2>
                  <img
                    src={`${base}images/About/deco-divider_purple.svg`}
                    alt="divider"
                    className="line"
                  />
                  <p>
                    市面上水晶飾品常見兩種極端－強調靈性但設計感不足，或是重視美觀卻缺乏靈魂。
                    我們希望打破這種限制，創造出兼具美感、靈性與個人連結的水晶飾品。
                  </p>
                  <p>Crystalholic 提供：</p>
                  <ul>
                    <li>特色設計款飾品，每件都是有靈魂的水晶藝術品</li>
                    <li>精心挑選高質感水晶，不用再為品質煩惱</li>
                    <li>設計與靈性兼具，讓水晶成為你風格與心靈的象徵</li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={`${base}images/About/aboutus-braclet.png`} alt="設計款水晶手鍊" />
              </div>
            </div>
          </section>

          <section className="life-crystal">
            <div className="content">
              <div className="text">
                <div className="text-content">
                  <h2 className="title">讓水晶更貼近你的生活</h2>
                  <img
                    src={`${base}images/About/deco-divider_purple.svg`}
                    alt="divider"
                    className="line"
                  />
                  <p>
                    我們不只販售水晶，更希望成為你了解水晶，並與之連結的嚮導。
                    除了經典設計款外，我們也提供水晶知識教學、生命靈數、客製化互動體驗，
                    幫助你找到最適合自己的水晶。無論是為自己，或是為重要的人挑選一份特別
                    的禮物，在這裡都能找到專屬的存在。
                  </p>
                </div>
              </div>
              <div className="image">
                <img src={`${base}images/About/aboutus-gift.png`} alt="水晶禮物傳遞" />
              </div>
            </div>
          </section>

          <section className="quality-guarantee">
            <div className="content">
              <div className="text">
                <div className="text-content">
                  <h2 className="title"><span className="en-font"> Crystalholic</span>的品質保證</h2>
                  <img
                    src={`${base}images/About/deco-divider_purple.svg`}
                    alt="divider"
                    className="line"
                  />
                  <p>
                    闆娘對水晶很龜毛，堅持只選用天然且品質優良的水晶。親自挑選每一顆礦石，確保
                    品質穩定、色澤通透。每款飾品皆由設計師手工製作，搭配高規格金屬材質，細節與
                    能量兼顧，讓你能安心佩戴，時時刻刻長久相伴。
                  </p>
                </div>
              </div>
              <div className="image">
                <img src={`${base}images/About/aboutus-quality.png`} alt="嚴選水晶品質" />
              </div>
            </div>
          </section>
        </main>
        <BackToTopBtn />
        {/* <FooterArc /> */}
        <FooterBgc />
      </div>
    </div>

  )
}
