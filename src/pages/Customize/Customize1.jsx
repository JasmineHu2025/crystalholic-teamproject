import './customize1-3.css'
import '../../components/Bglight.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import CopyrightNotice from '../../components/CopyrightNotice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

// Customize4 預設會用到的所有水晶與金屬珠圖片
const crystalData = {
    靈性直覺: [
        "./images/S-CrystalSingle/crystal-kyanite.png",
        "./images/S-CrystalSingle/crystal-labradorite.png",
        "./images/S-CrystalSingle/crystal-lapislazuli.png",
        "./images/S-CrystalSingle/crystal-sodalite.png",
        "./images/S-CrystalSingle/crystal-bluecalcite.png",
        "./images/S-CrystalSingle/crystal-pietersite.png",
        "./images/S-CrystalSingle/crystal-tanzanite.png",
        "./images/S-CrystalSingle/crystal-amethyst.png",
        "./images/S-CrystalSingle/crystal-albite.png",
        "./images/S-CrystalSingle/crystal-moonstone.png",
        "./images/S-CrystalSingle/crystal-clearquartz.png"
    ],
    專注工作: [
        "./images/S-CrystalSingle/crystal-citrine.png",
        "./images/S-CrystalSingle/crystal-rutile-quartz.png",
        "./images/S-CrystalSingle/crystal-aquamarine.png",
        "./images/S-CrystalSingle/crystal-sodalite.png",
        "./images/S-CrystalSingle/crystal-purplefluorite.png",
        "./images/S-CrystalSingle/crystal-fluorite.png",
        "./images/S-CrystalSingle/crystal-hawkseye.png",
        "./images/S-CrystalSingle/crystal-tigerseye.png",
        "./images/S-CrystalSingle/crystal-green-phantom.png",
        "./images/S-CrystalSingle/crystal-carnelian.png"
    ],
    愛與人際: [
        "./images/S-CrystalSingle/crystal-iolite.png",
        "./images/S-CrystalSingle/crystal-lilac-amethyst.png",
        "./images/S-CrystalSingle/crystal-pinkquartz.png",
        "./images/S-CrystalSingle/crystal-rosequartz.png",
        "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png",
        "./images/S-CrystalSingle/crystal-rubellite.png",
        "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        "./images/S-CrystalSingle/crystal-carnelian.png",
        "./images/S-CrystalSingle/crystal-garnet.png",
        "./images/S-CrystalSingle/crystal-oceanjasper.png"
    ],
    能量防護: [
        "./images/S-CrystalSingle/crystal-blackobsidian.png",
        "./images/S-CrystalSingle/crystal-goldobsidian.png",
        "./images/S-CrystalSingle/crystal-blacktourmaline.png",
        "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
        "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
        "./images/S-CrystalSingle/crystal-hematite.png",
        "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        "./images/S-CrystalSingle/crystal-bloodstone.png",
        "./images/S-CrystalSingle/crystal-tridacna.png"
    ],
    放鬆冥想: [
        "./images/S-CrystalSingle/crystal-pinkcalcite.png",
        "./images/S-CrystalSingle/crystal-amethyst.png",
        "./images/S-CrystalSingle/crystal-iolite.png",
        "./images/S-CrystalSingle/crystal-hackmanite.png",
        "./images/S-CrystalSingle/crystal-celestite.png",
        "./images/S-CrystalSingle/crystal-angelite.png",
        "./images/S-CrystalSingle/crystal-sunstone.png",
        "./images/S-CrystalSingle/crystal-smokyquartz.png",
        "./images/S-CrystalSingle/crystal-greenfluorite.png",
        "./images/S-CrystalSingle/crystal-silversheenobsidian.png"
    ]
};

const metalImages = [
    "./images/Custom/ball1.png",
    "./images/Custom/ball2.png",
    "./images/Custom/ball3.png",
    "./images/Custom/ball4.png",
    "./images/Custom/ball5.png",
    "./images/Custom/ball6.png"
];


export default function Customize1() {
    const navigate = useNavigate();

    // Customize4 預設會用到的所有水晶與金屬珠圖片
    useEffect(() => {
        const preloadImages = (urls) => {
            urls.forEach((url) => {
                const img = new Image();
                img.src = url;
            });
        };

        const crystalImages = Object.values(crystalData).flat(); // e.g. {放鬆冥想: [...], 專注工作: [...], ...}
        const allCrystalMetalImages = [...new Set([...crystalImages, ...metalImages])];

        const cssImageUrls = [
            '../images/noisy-background.jpg',
            '../images/Custom/btn_del.png',
            '../images/Custom/btn_del_hover.png',
            '../images/Custom/btn_save.png',
            '../images/Custom/btn_save_hover.png',
            '../images/Custom/btn_size_tool.svg',
            '../images/Custom/btn_size_tool_hover.svg',
            '../images/Custom/btn_ans_tool.svg',
            '../images/Custom/btn_ans_tool_hover.svg',
            '../images/Custom/btn_knowl_tool.svg',
            '../images/Custom/btn_knowl_tool_hover.svg',
            '../images/Custom/btn_note_tool.svg',
            '../images/Custom/btn_note_tool_hover.svg',
            '../images/Custom/btn_dum_tool.svg',
            '../images/Custom/btn_dum_tool_hover.svg'
        ];

        const allPreloadImages = [...allCrystalMetalImages, ...cssImageUrls];
        preloadImages(allPreloadImages);
    }, []);


    const handleClick = () => {
        const hasCompletedNumTest2 = sessionStorage.getItem('numtest2-completed') === 'true';

        if (hasCompletedNumTest2) {
            navigate('/Customize3');
        } else {
            navigate('/NumTest1');
        }
    };

    return (
        <div className="customize1-page">
            <NavBarWrapper variant="dark" />
            <div className='copyrightNotice'>
                <main className="index">
                    <div className="text-j">
                        <h2>你的水晶 ∞ 你的故事</h2>
                        <p className='content-j'>
                            量身訂製專屬飾品，為生活注入正能量<br />
                            自己串串看，或是交給 Crystalholic<br />
                            為自己或重要的人，設計一份獨特又美麗的水晶祝福！
                        </p>
                    </div>
                    <div className="button-box">
                        <button className="button1" onClick={handleClick}>
                            獲得推薦結果
                        </button>
                        <button className="button1" onClick={() => navigate('/Customize4')}>
                            直接開始設計
                        </button>
                    </div>

                </main>
                <CopyrightNotice />
            </div>
        </div>
    )
}