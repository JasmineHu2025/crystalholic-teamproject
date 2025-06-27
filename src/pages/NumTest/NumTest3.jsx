import characterData from './characterData';

import './NumTest3.css';
import '../../components/NumTestBg.css';
import { useNavigate, useLocation } from 'react-router-dom';
import productSeriesData from '../Product/productSeriesData';
import NavBarWrapper from '../../components/NavBarWrapper';
import CopyrightNotice from '../../components/CopyrightNotice';
import { useEffect, useState } from 'react';

export default function NumTest3() {
    const navigate = useNavigate();
    const location = useLocation();
    const [lifeNumber, setLifeNumber] = useState(1);

    useEffect(() => {
        const stored = sessionStorage.getItem('lifePathNumber');
        if (stored) {
            const parsed = parseInt(stored, 10);
            if (!isNaN(parsed) && characterData[parsed]) {
                setLifeNumber(parsed);
            }
        }
    }, []);

    const data = characterData[lifeNumber];

    // ✅ 手鍊圖片對應商品頁資料（手動對照）
    const braceletImageToProduct = {
        './images/Numtest/bracelet/bracelet1.png': { seriesKey: 'adventure', productIndex: 2 }, // 極圈探險家
        './images/Numtest/bracelet/bracelet2.png': { seriesKey: 'seasons', productIndex: 0 },   // 柔光初生
        './images/Numtest/bracelet/bracelet3.png': { seriesKey: 'blue', productIndex: 2 },      // 金魚泡泡
        './images/Numtest/bracelet/bracelet4.png': { seriesKey: 'seasons', productIndex: 2 },   // 靜謐雪森
    };

    // ✅ 點擊跳轉函式
    const handleBraceletClick = () => {
        const path = braceletImageToProduct[data.bracelet];
        if (path) {
            navigate(`/Product/${path.seriesKey}/${path.productIndex}`);
        }
    };

    return (
        <>
            <NavBarWrapper variant="dark" />
            <div className='copyrightNotice'>
                <main className="index-numtest3">
                    {/* ---------- 左側 ---------- */}
                    <div id="left">
                        <div className="box-numtest3">
                            <div className="name-box">
                                <p className="title-name">你是<span>{data.number}</span>號人</p>
                                <p className="name-0">{data.title}</p>
                            </div>
                            <ul id="hashtag-box2">
                                {data.tags.map((tag, i) => (
                                    <li className="hashtag" key={i}><p>{tag}</p></li>
                                ))}
                            </ul>
                        </div>
                        <div className="imgp0-box">
                            <img className="img-p0" src={data.image} alt="角色圖" />
                        </div>
                    </div>

                    {/* ---------- 右側 ---------- */}
                    <div id="right">
                        <ul id="hashtag-box">
                            {data.tags.map((tag, i) => (
                                <li className="hashtag" key={i}><p>{tag}</p></li>
                            ))}
                        </ul>

                        <div id="box1">
                            {/* ✅ 好麻吉套資料 */}
                            <div className="friends">
                                <div className="title-numtest3">
                                    <p>是你的好麻吉</p>
                                </div>
                                <ul className="people-box">
                                    {[1, 2, 3].map(i => (
                                        <li className="people" key={i}>
                                            <img className={`img-p${i}`} src={data[`friendImg${i}`]} alt="好麻吉角色圖" />
                                            <div>
                                                <p className="name">{data[`friendtitle${i}`]}號人</p>
                                                <p className="content-numtest3">{data[`friendtext${i}`]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ✅ 討厭鬼套資料 */}
                            <div className="enemies">
                                <div className="title-numtest3">
                                    <p>遇到快逃R!</p>
                                </div>
                                <ul className="people-box2">
                                    {[1, 2, 3].map(i => (
                                        <li className="people" key={i}>
                                            <img className={`img-p${i + 3}`} src={data[`enemiesImg${i}`]} alt="敵人角色圖" />
                                            <div>
                                                <p className="name">{data[`enemiestitle${i}`]}號人</p>
                                                <p className="content-numtest3">{data[`enemiestext${i}`]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div id="box2">
                            {/* ✅ 水晶推薦 */}
                            <div className="crystals">
                                <div className="title-numtest3">
                                    <p>適合你的水晶</p>
                                </div>
                                <ul className="crystal-box">
                                    {[1, 2, 3].map(i => (
                                        <li className="crystal" key={i}>
                                            <img className={`img-p${i + 6}`} src={data[`crystalImg${i}`]} alt="水晶圖" />
                                            <div>
                                                <p className="name">{data[`crystaltitle${i}`]}</p>
                                                <p className="content-numtest3">{data[`crystaltext${i}`]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bracelet-design">
                                <div className="title2">
                                    <svg viewBox="0 0 300 130" width="100%" preserveAspectRatio="xMidYMid meet">
                                        <defs>
                                            <path id="curve" d="M 50,100 A 100,50 0 0,1 250,100" />
                                        </defs>
                                        <text fill="#684581" fontSize="18" letterSpacing="3">
                                            <textPath href="#curve" startOffset="50%" textAnchor="middle">
                                                ✦ 推薦設計款 ✦
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="title3">
                                    <div className="star-box">
                                        <img className="star" src="./images/Numtest/star.png" alt="" />
                                    </div>
                                    <div className="bracelet-box" onClick={handleBraceletClick}>
                                        <img className="bracelet" src={data.bracelet} alt="bracelet" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="button-box">
                            <button className="button1-j">分享測驗結果</button>
                            <button className="button2-j" onClick={() => navigate('/Customize3')}>
                                ✦ 訂製專屬手鍊 ✦
                            </button>
                        </div>
                    </div>
                </main>
                <CopyrightNotice />
            </div>
        </>
    );
}
