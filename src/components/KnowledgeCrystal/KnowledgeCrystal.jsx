import React, { useState, useEffect } from 'react';
import '../../pages/Others/KnowledgeCrystal.css';
import NavBarWrapper from '../NavBarWrapper';
import FooterTrn from '../FooterTrn';
import BgDarkBlock from '../BgDarkBlock';
import '../../css/fonts.css';
import BackToTopBtn from '../BackToTopBtn';
import crystalsData from './CrystalData'
import usePreloadCrystals from '../../hooks/usePreloadCrystals';





export default function CrystalPage() {
    const preloadCrystals = usePreloadCrystals();

    useEffect(() => {
        preloadCrystals(); // ✅ 開始預載入所有圖片
    }, []);


    const [currentCategory, setCurrentCategory] = useState("靈性直覺");
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentCrystals = crystalsData[currentCategory];
    const currentCrystal = currentCrystals[currentIndex];

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setCurrentIndex(0);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % currentCrystals.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? currentCrystals.length - 1 : prev - 1
        );
    };

    return (
        <>
            <div className="font-style">
                <div className='knowledge-crystal-page'>
                    <NavBarWrapper variant="dark" />
                    <main className="knowledge-crystal-main" id="crystal-main">
                        {/* 上半區：文字與水晶簡介 */}
                        <section className="arc-k-outer-content">
                            <div className="space">

                                <ul className="category-k">
                                    {Object.keys(crystalsData).map((cat) => (
                                        <li
                                            key={cat}
                                            className={cat === currentCategory ? "active" : ""}
                                            onClick={() => handleCategoryChange(cat)}
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="crystal-k">
                                    <h1>{currentCrystal.englishName}</h1>
                                    <div className="crystal-k-img">
                                        <img
                                            src="./images/S-Btn/btn_left.png"
                                            alt="Left"
                                            className="crystal-k-arrow"
                                            onClick={handlePrev}
                                        />
                                        <img
                                            src={currentCrystal.image}
                                            alt={currentCrystal.name}
                                            className="crystal-k-center"
                                        />
                                        <img
                                            src="./images/S-Btn/btn_right.png"
                                            alt="Right"
                                            className="crystal-k-arrow"
                                            onClick={handleNext}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 下半區：弧形背景包裹內容 */}

                        <div className="arc-k-wrapper">
                            <div className="bgdark-inside"> <BgDarkBlock /></div>

                            <section className="arc-k-inner-content">
                                <div className="part1">
                                    <h2>{currentCrystal.name}</h2>
                                    <p>{currentCrystal.description}</p>
                                </div>

                                <div className="p2p3">
                                    <div className="part2">
                                        <h2>主要功效</h2>
                                        <hr />
                                        <p>
                                            {currentCrystal.effects.split('\n').map((line, index) => (
                                                <span key={index}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>

                                    <div className="part3">
                                        <h2>適合人群</h2>
                                        <hr />
                                        <p>{currentCrystal.suitableFor.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                        </p>
                                    </div>
                                </div>

                                <div className="recommended-crystals-k">
                                    <h2>推薦搭配水晶</h2>
                                    <div className="rc-img">
                                        {currentCrystal.recommended.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img.src}
                                                alt={img.alt}
                                                className={`crystal${index + 1}`}
                                                onClick={() => {
                                                    // 找出分類中對應水晶的 index
                                                    const matchedCrystals = crystalsData[img.category];
                                                    const targetIndex = matchedCrystals.findIndex(c => c.name === img.targetName);

                                                    if (targetIndex !== -1) {
                                                        setCurrentCategory(img.category);
                                                        setCurrentIndex(targetIndex);
                                                        //滾動至頂端
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                            </section>
                            <BackToTopBtn />
                            <FooterTrn />
                        </div>
                    </main>
                </div>

            </div>


        </>
    );
}
