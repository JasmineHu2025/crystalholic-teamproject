import './KnowledgeCleanse.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn'
import BgDarkBlock from '../../components/BgDarkBlock'
import '../../css/fonts.css';
const base = import.meta.env.BASE_URL;

export default function KnowledgeCleanse() {
  return (
    <div className="font-style">
      <div className="nc-page">
        <div className="nc-background"><BgDarkBlock /></div>
        <NavBarWrapper variant="dark" />
        <section className="content-nc" id='content-nc'>
          <div className="left-title">
            <img src={`${base}images/HomePage/deco-diamond.png`} alt="" className="dimand1" />
            <h1 className="title">使用與淨化指南</h1>
            <img src={`${base}images/HomePage/deco-diamond.png`} alt="" className="dimand2" />
          </div>

          {/* 背景月亮圖 */}
          <div className="right-content-nc">
            <div className="moon-bg"></div>

            <section className="moon-content">
              <div className="s1">
                <h2 className="moon-title">如何使用水晶飾品</h2>
                <ol className="ol-moon-list">
                  <li>每日配戴：將水晶與自身能量場長期連結。</li>
                  <li>設定意圖：配戴前閉上眼，對水晶傳遞你的願望與目標。</li>
                  <li>與你同步成長：水晶會感應妳的狀態，成為貼身的情緒支持者。</li>
                </ol>
              </div>

              <br />

              <div className="s2">
                <h2 className="moon-title">淨化水晶（建議每週一次）</h2>
                <ul className="ul-moon-list">
                  <li>月光淨化：將水晶放置窗台，讓其沐浴在滿月光中整晚。</li>
                  <li>白水晶群淨化：將飾品放在白水晶簇上靜置一晚。</li>
                  <li>煙燻淨化：使用鼠尾草或檀香煙霧圍繞水晶數分鐘。</li>
                  <li>音頻淨化：使用頌缽、鈴音或頻率音樂讓水晶重啟頻率。</li>
                </ul>
              </div>

              <br />

              <div className="s3">
                <h2 className="moon-title">
                  請避免長時間日曬、水洗，<br />
                  部分水晶（如月光石、紫水晶）可能因曝曬而褪色。
                </h2>
              </div>
            </section>
          </div>
        </section>
        <FooterTrn />
      </div>
    </div>

  )
}
