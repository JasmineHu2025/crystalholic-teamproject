import React, { useState, useEffect } from 'react';
import '../../pages/Others/KnowledgeCrystal.css';
import NavBarWrapper from '../NavBarWrapper';
import FooterTrn from '../FooterTrn';
import BgDark from '../../components/BgDark';
import crystalsData from './CrystalData'
import usePreloadCrystals from '../../hooks/usePreloadCrystals';
// import BackToTopBtn from '../BackToTopBtn';
// import BgDarkBlock from '../BgDarkBlock';


export default function CrystalPage() {
    const preloadCrystals = usePreloadCrystals();

    useEffect(() => {
        preloadCrystals(); // ✅ 開始預載入所有圖片
    }, []);


    const [currentCategory, setCurrentCategory] = useState("靈感智慧");
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
            <NavBarWrapper variant="dark" />

            <main className="knowledge-crystal-main">

                {/* 上半區：文字與水晶簡介 */}
                <section className="know-crystal-category">
                    {/* 選單 */}
                    <ul className="know-crystal-category-menu">
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
                    {/* 選到的水晶 */}
                    <div className="know-crystal-category-singlecrystal">
                        <h1>{currentCrystal.englishName}</h1>
                        <div className="know-crystal-category-singlecrystal-img">
                            <img
                                className="know-crystal-category-singlecrystal-arrow"
                                src="./images/S-Btn/btn_left.png"
                                alt="Left"
                                onClick={handlePrev}
                            />
                            <img
                                className="know-crystal-category-singlecrystal-center"
                                src={currentCrystal.image}
                                alt={currentCrystal.name}
                            />
                            <img
                                className="know-crystal-category-singlecrystal-arrow"
                                src="./images/S-Btn/btn_right.png"
                                alt="Right"
                                onClick={handleNext}
                            />
                        </div>
                    </div>

                </section>

                {/* 下半區：水晶相關內容 */}
                <section className="know-crystal-content">
                    <BgDark />

                    {/* 主石介紹 */}
                    <div className="know-crystal-content-area1">
                        <h2 className="know-crystal-content-h2">{currentCrystal.name}</h2>
                        <p className="know-crystal-content-p">{currentCrystal.description}</p>
                    </div>

                    {/* 功效＆人群 */}
                    <div className="know-crystal-content-area2">

                        {/* 主要功效 */}
                        <div className="know-crystal-content-area2-1">
                            <h2 className="know-crystal-content-h2">主要功效</h2>
                            <hr className="know-crystal-content-hr"/>
                            <p className="know-crystal-content-p">
                                {currentCrystal.effects.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                        
                        {/* 適合人群 */}
                        <div className="know-crystal-content-area2-2">
                            <h2 className="know-crystal-content-h2">適合人群</h2>
                            <hr className="know-crystal-content-hr"/>
                            <p className="know-crystal-content-p">{currentCrystal.suitableFor.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                            </p>
                        </div>
                    </div>
                    
                    {/* 推薦搭配水晶 */}
                    <div className="know-crystal-content-recommended">
                        <h2 className="know-crystal-content-h2">推薦搭配水晶</h2>
                        {/* 推薦三顆水晶 */}
                        <div className="know-crystal-content-recommended-crystalimg">
                            {currentCrystal.recommended.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt}
                                    className={`crystal${index + 1}`}
                                    onClick={() => {
                                        // 找出分類中對應水晶的 index
                                        const matchedCrystals = crystalsData[img.category];
                                        if (!matchedCrystals) return;
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
            </main>

            {/* <BackToTopBtn /> */}
            <FooterTrn />
        </>
    );
}
