import './KnowledgeCleanse.css';
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import BgDark from '../../components/BgDark';
const base = import.meta.env.BASE_URL;

export default function KnowledgeCleanse() {
  return (
    <>
      <NavBarWrapper variant="light" />
      <main className="know-clean-main">
        <BgDark />

        {/* 左側標題區 */}
        <section className="know-clean-title">
          <img className="know-clean-deco1" src="./images/HomePage/deco1-diamond.png" alt="裝飾鑽石" />
          <h1>使用與淨化指南</h1>
          <img className="know-clean-deco2" src="./images/HomePage/deco3-diamond.png" alt="裝飾鑽石" />
        </section>

        {/* 右側內容區 */}
        <section className="know-clean-content">
          <div className="know-clean-text">
            <div className="know-clean-how">
              <h2>如何使用水晶飾品</h2>
              <ol>
                <li>每日配戴：將水晶與自身能量場長期連結。</li>
                <li>設定意圖：配戴前閉上眼，對水晶傳遞你的願望與目標。</li>
                <li>與你同步成長：水晶會感應妳的狀態，成為貼身的情緒支持者。</li>
              </ol>
            </div>

            <div  className="know-clean-clean">
              <h2>淨化水晶（建議每週一次）</h2>
              <ul>
                <li>月光淨化：將水晶放置窗台，讓其沐浴在滿月光中整晚。</li>
                <li>白水晶群淨化：將飾品放在白水晶簇上靜置一晚。</li>
                <li>煙燻淨化：使用鼠尾草或檀香煙霧圍繞水晶數分鐘。</li>
                <li>音頻淨化：使用頌缽、鈴音或頻率音樂讓水晶重啟頻率。</li>
              </ul>
            </div>

            <p className="know-clean-tips">請避免長時間日曬、水洗，<br />部分水晶（如月光石、紫水晶）可能因曝曬而褪色。</p>
          </div>
        </section>
      </main>

      <footer className="know-clean-footer">
        <FooterTrn />
      </footer>
    </>
  )
}
