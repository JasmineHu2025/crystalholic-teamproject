import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { div } from 'framer-motion/client';

import BgDark from '../../components/BgDark'
import NavBarWrapper from '../../components/NavBarWrapper';
import FooterTrn from '../../components/FooterTrn';
import '../../App.scss/css/Style.min.css'
import BackToTopBtn from '../../components/BackToTopBtn'

/*feedback*/
const slides = [
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/1.png" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_6.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>水晶超美又有能量，超級推薦喜愛客製化手鍊的人！</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/coffee.png" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_2.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>朋友推的，買了真的有被療癒到！會想再光顧！</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/2.png" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_3.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>價格合理又有質感，推薦給也需要放鬆的你！</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/3.png" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_4.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>收到手鍊當下心情超好的，整個能量滿滿超加分！</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/p4.jpg" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_5.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>手鍊戴起來超美，真的讓我越來越相信水晶的能量！</p>
        </div>
    </div>,
    <div className="feedback">
        <div className="review-pic">

            <span><img src="./images//HomePage/avatar/woman.png" className="member-img" alt="" /></span>

            <span><img src="./images//HomePage/feedback/feedback_1.png" className="review-img" alt="" /></span>
        </div>
        <div className="feedback-left">
            {/* 水晶5星評價 */}
            <div className="fdstar-box">
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
                <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
            </div>
            {/* 回饋內文 */}
            <p>水晶超美又有能量，超級推薦喜愛客製化手鍊的人！</p>
        </div>
    </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>朋友推薦後嘗試購買，真的被療癒到了，下次還會回購！</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>手鍊戴起來超美，真的讓我越來越相信水晶的能量！</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>朋友推薦後嘗試購買，真的被療癒到了，下次還會回購！</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>朋友推薦後嘗試購買，真的被療癒到了，下次還會回購！</p>
    //     </div>
    // </div>,
    // <div className="feedback">
    //     <div className="review-pic">

    //         <span><img src="./images//HomePage/img-feedbackmenber.jpg" className="member-img" alt="" /></span>

    //         <span><img src="./images//HomePage/img-feedback.jpg" className="review-img" alt="" /></span>
    //     </div>
    //     <div className="feedback-left">
    //         {/* 水晶5星評價 */}
    //         <div className="fdstar-box">
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //             <img src="./images/HomePage/star.svg" className="fdstar" alt="" />
    //         </div>
    //         {/* 回饋內文 */}
    //         <p>品質很好，價格也實在，強烈推薦給正在尋找心靈慰藉的你。</p>
    //     </div>
    // </div>
];


export default function Cover() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    // 預先載入圖片
    useEffect(() => {
        const preloadImages = [
            './images/HomePage/deco1-diamond.png',
            './images/HomePage/deco2-diamond.png',
            './images/HomePage/deco3-diamond.png',
            './images/HomePage/hand-number.png',
            './images/HomePage/start-test-btn.png',
            './images/HomePage/scroll-line.png',
            './images/HomePage/scroll-diamond.png',
            './images/HomePage/tarot-back.png',
            './images/HomePage/lbtc1.png',
            './images/HomePage/lbtc2.png',
            './images/HomePage/lbtc3.png',
            './images/HomePage/lbtc4.png',
            './images/HomePage/lbtc5.png',
            './images/HomePage/lbtc6.png',
            './images/HomePage/lightboxdeco.svg',
            './images/HomePage/star.svg',
        ];

        let loadedCount = 0;

        preloadImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === preloadImages.length) {
                    setImagesLoaded(true); // ✅ 所有圖片載入完成
                }
            };
        });
    }, []);


    /* 封面 1 & 2 動畫狀態 */
    const [pageIndex, setPageIndex] = useState(0); // 0: 第一頁, 1: 第二頁
    const [hideFirstCover, setHideFirstCover] = useState(false);   // 淡出第一段封面
    const [showSecondCover, setShowSecondCover] = useState(false); // 顯示第二段封面
    const [allowScroll, setAllowScroll] = useState(false);         // 開放滾動下滑

    /* 進場動畫時間 */
    useEffect(() => {
        if (!imagesLoaded) return;
        const timer1 = setTimeout(() => {
            setHideFirstCover(true); // 開始淡出第一段
        }, 2500);

        const timer2 = setTimeout(() => {
            setShowSecondCover(true); // 開始淡入第二段
        }, 3300);

        const timer3 = setTimeout(() => {
            setAllowScroll(true); // 允許滾動下滑
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [imagesLoaded]);

    /* 🚫 根據 pageIndex 鎖住或恢復頁面滾動 */
    useEffect(() => {
        document.body.style.overflow = allowScroll ? 'auto' : 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [allowScroll]);

    /* 滑輪直接跳到下一段 */
    const handleWheel = (e) => {
        if (!allowScroll) return;

        if (e.deltaY > 0) {
            const nextSection = document.getElementById("section-tarotcard");
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    /* -------------- Tarot & Crystal 狀態／邏輯 -------------- */
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const tarotDescriptions = [
        <div className="lbcontent">
            <h2 className="lbh2">沁藍之澗</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：海藍寶  平靜溝通之石</p>
            <p className="p2">結合海藍寶、拉長石、摩根石與橄欖石，如山澗般清澈流動，帶來安撫情緒與穩定能量。<br />
                海藍寶溫柔卻堅定，幫助釐清思緒、平衡喉輪，在混亂中保持冷靜與洞察。</p>
            <Link to="/Product/blue/0" className="lbbtn">看看手鍊</Link>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">金魚泡泡</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：黃水晶  快樂創造之石</p>
            <p className="p2">靈感來自陽光下閃耀的金魚泡泡，透出童趣與溫柔，點亮生活中的快樂時刻與心靈亮點。<br />
                黃水晶激發創造力與內在自信，協助釋放壓力與情緒，讓你自在表達與快樂學習。</p>
            <Link to="/Product/blue/2" className="lbbtn">看看手鍊</Link>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">沈睡王國</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：菱錳礦  溫柔療癒之石</p>
            <p className="p2">宛如沉睡中的療癒王國，靈感源自熱帶珊瑚礁，柔軟包覆情緒，讓內在獲得深層休息。<br />
                菱錳礦如愛人般溫柔，搭配藍晶石提升靈性直覺，是撫慰孤單與焦躁的靜心能量。</p>
            <Link to="/Product/blue/1" className="lbbtn">看看手鍊</Link>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">靜謐雪森</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：藍玉髓  寧靜療癒之石</p>
            <p className="p2">靈感源自雪落林間的畫面，靜謐又溫潤，為心靈打造一處安靜轉化的冬日療癒空間。<br />
                藍玉髓柔化情緒、引導內在修復，結合隕石與虎眼石，穩定能量流動與靈性覺察。</p>
            <Link to="/Product/seasons/2" className="lbbtn">看看手鍊</Link>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">薄荷之吻</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：捷克隕石  清新啟動之石</p>
            <p className="p2">靈感來自 Mojito 的清新氣息，宛如一口沁涼薄荷，輕盈地為混沌心緒注入宇宙能量。<br />
                捷克隕石開啟內在感知與意識轉化，在釋放壓力的同時，讓你重新找回精神的平衡。</p>
            <Link to="/Product/cocktail/0" className="lbbtn">看看手鍊</Link>
        </div>,
        <div className="lbcontent">
            <h2 className="lbh2">極圈探險家</h2>
            <div><img src="./images/HomePage/lightboxdeco.svg" alt="" className='lbdeco' /></div>
            <p className="p1">主石：藍晶石  覺醒與直覺之石</p>
            <p className="p2">靈感來自極地孤寂與冷靜，適合自我探索與思緒沉澱，是尋找方向時的精神向導。<br />
                藍晶石幫助釐清混亂與煩躁，穩定能量場與界線，是靈性成長中重要的陪伴之石。</p>
            <Link to="/Product/adventure/2" className="lbbtn">看看手鍊</Link>
        </div>
    ];

    const tarotImg = [
        <img src="./images/HomePage/lbtc1.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc2.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc3.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc4.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc5.png" className="trimg" alt="" />,
        <img src="./images/HomePage/lbtc6.png" className="trimg" alt="" />,
    ]

    const tarotBackImages = [
        "./images/HomePage/lbtc1.png",
        "./images/HomePage/lbtc2.png",
        "./images/HomePage/lbtc3.png",
        "./images/HomePage/lbtc4.png",
        "./images/HomePage/lbtc5.png",
        "./images/HomePage/lbtc6.png",
    ];

    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedCardIndex(null);
    };

    /*水晶小百科*/
    const [crystals, setCrystals] = useState([
        'disc-kyanite',
        'disc-amethyst',
        'disc-sunstone',
        'disc-golden',
        'disc-strawberry',
        'disc-clearquartz',
        'disc-greenPhantom',
        'disc-fluorite',
        'disc-green',
        'disc-moonstone',
        'disc-rose',
        'disc-angelite'
    ]);

    // 水晶換圖區‼️
    const crystalImages = {
        'disc-kyanite': 'crystal-kyanite',
        'disc-amethyst': 'crystal-amethyst',
        'disc-sunstone': 'crystal-sunstone',
        'disc-golden': 'crystal-golden-rutilated-quartz',
        'disc-strawberry': 'crystal-golden-strawberry-quartz',
        'disc-clearquartz': 'crystal-clearquartz',
        'disc-greenPhantom': 'crystal-green-phantom',
        'disc-fluorite': 'crystal-fluorite',
        'disc-green': 'crystal-greenfluorite',
        'disc-moonstone': 'crystal-moonstone',
        'disc-rose': 'crystal-rosequartz',
        'disc-angelite': 'crystal-angelite'
    };

    const handleUp = () => {
        const newOrder = [crystals[crystals.length - 1], ...crystals.slice(0, crystals.length - 1)];
        setCrystals(newOrder);
    };

    const handleDown = () => {
        const newOrder = [...crystals.slice(1), crystals[0]];
        setCrystals(newOrder);
    };

    const currentCrystal = crystals[0];

    const [isHoveredOrClicked, setIsHoveredOrClicked] = useState(false);

    return (
        <>
            {/* menu bar*/}
            <NavBarWrapper variant="light" />

            <main className="home_main">
                {/* 背景 */}
                <div className='coverbg'>
                    <div className="bgdark1"><BgDark /></div>
                    <div className="bgdark2"><BgDark /></div>
                </div>


                {/* ＝＝＝＝＝ 兩段封面：疊在同一個容器交錯顯示 ＝＝＝＝＝ */}
                <div className="cover-stack">
                    <AnimatePresence mode="wait">
                        {/* Cover 1 */}
                        {!hideFirstCover && (
                            <motion.section
                                key="cover1"
                                id="home_cover1"
                                className="cover-section first-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img className="cover1 deco1" src="./images/HomePage/deco1-diamond.png" alt="" />
                                <h2 className="home_p1_h2">
                                    <span className="home_p1_title1">匠心嚴選‧靈韻手作</span>
                                    <span className="home_p1_title2">打造專屬你的能量水晶</span>
                                </h2>
                                <img className="cover1 deco2" src="./images/HomePage/deco2-diamond.png" alt="" />
                                <img className="cover1 deco3" src="./images/HomePage/deco3-diamond.png" alt="" />
                            </motion.section>
                        )}

                        {/* Cover 2 */}
                        {showSecondCover && (
                            <motion.section
                                key="cover2"
                                id="home_cover2"
                                className="cover-section second-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                onWheel={handleWheel}
                                style={{ pointerEvents: showSecondCover ? 'auto' : 'none' }}
                            >
                                <div className="startbox1">
                                    {/* 手、數字 */}
                                    <img className="hand-number" src="./images/HomePage/hand-number.png" alt="手與生命靈數" />
                                    {/* 鑽石、開始測驗 */}
                                    <div className="startbtn">
                                        <Link to="Numtest1">
                                            <div className="startbtn_imgwrap">
                                                <img
                                                    className="startbtn_img"
                                                    src="./images/HomePage/start-test-btn.png"
                                                    alt="開始測驗"
                                                    onMouseEnter={() => setIsHoveredOrClicked(true)}
                                                    onClick={() => setIsHoveredOrClicked(true)}
                                                />
                                                {/* 發光圖層 */}
                                                {showSecondCover && !isHoveredOrClicked && (
                                                    <img
                                                        className="glow-layer"
                                                        src="./images/HomePage/start-test-btn.png"
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                        <h3 className="startbtn_title">開始測驗</h3>
                                    </div>
                                </div>

                                <div className="startbox2">
                                    <h4 className="startbtn_title2">讓水晶傾聽心聲，編織你獨一無二的手鍊。</h4>

                                    <div className="scroll-indicator">
                                        <img className="scroll-line" src="./images/HomePage/scroll-line.png" alt="往下滾動" />
                                        {/* <div className="scroll-line"></div> */}
                                        <img className="scroll-diamond" src="./images/HomePage/scroll-diamond.png" alt="往下滾動" />
                                    </div>
                                </div>
                            </motion.section>

                        )}
                    </AnimatePresence>
                </div>


                {/* 憑直覺抽一張吧 */}
                <section id="section-tarotcard">
                    {/* title */}
                    <div id="tarotcard-title">
                        <img className="dimond-left" src="./images/HomePage/deco-diamond-left.png" alt="" aria-hidden="true" />
                        <h2 id="tarot-title">憑直覺抽一張吧</h2>
                        <img className="dimond-right" src="./images/HomePage/deco-diamond-right.png" alt="" aria-hidden="true" />
                    </div>
                    {/* 塔羅牌 */}
                    <div id="tarotcard-box">
                        {tarotDescriptions.map((desc, index) => (
                            <div key={index} className="Rcard">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <img
                                            src="./images/HomePage/tarot-back.png"
                                            className={index === 0 ? 'trcardchild-1' : 'trcard'}
                                            alt={`tarot card ${index + 1}`}
                                            onClick={() => handleCardClick(index)}
                                        />
                                    </div>
                                    <div className="card-back">
                                        <img
                                            src={tarotBackImages[index]}
                                            className={index === 0 ? 'trcardchild-1' : 'trcard'}
                                            alt={`tarot card ${index + 1}`}
                                            onClick={() => handleCardClick(index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 按鈕 */}
                    <div id='tcbtn'>
                        <Link to="/ProductCollection" id="tarotcard-btn">所有商品</Link>
                    </div>
                </section>

                {lightboxOpen && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <div className='lbborder1'>
                                <div className='lbborder2'>
                                    <button className="lightbox-close" onClick={closeLightbox}>×</button>
                                    <div className='lbimg'>{tarotImg[selectedCardIndex]}</div>
                                    <div className="lightbox-text">{tarotDescriptions[selectedCardIndex]}</div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
                }

                {/* 訂製專屬手鍊 */}
                <section id="custom">
                    <div className="custom-title">
                        <img className="dimond-left" src="./images/HomePage/custom-deco-diamond-left.png" alt="" aria-hidden="true" />
                        <div id="custom-titlebox">
                            <div className="custom-titlebox1">
                                <h2 className="eh">Customized</h2>
                                <h2 className="ch">訂製你的專屬水晶</h2>
                            </div>
                            <h3>精選天然水晶，打造獨一無二的手鍊。</h3>
                        </div>
                        <img className="dimond-right" src="./images/HomePage/custom-deco-diamond-right.png" alt="" aria-hidden="true" />
                    </div>
                    <Link to="/Customize1" className='custombtn'>立即訂製</Link>
                </section>

                {/* 水晶小百科  */}
                <section id="section-crystaldiscovery">
                    {/* 版2 左邊：水晶區域 */}
                    <div className="crystal-display">
                        {/* 水晶 */}
                        <div className="circlebox">
                            {crystals.map((id, idx) => (
                                <div key={id} className={`circle ${idx === 0 ? 'selected' : ''}`}>
                                    <img src={`./images/S-CrystalSingle/${crystalImages[id]}.png`} alt="單顆水晶介紹" />

                                    {/* 只有被選中的水晶 */}
                                    {idx === 0 && (
                                        <>
                                            <button className="btn-left" onClick={handleUp}>
                                                <img src="./images/S-Btn/btndown.png" alt="上一顆" />
                                            </button>
                                            <button className="btn-right" onClick={handleDown}>
                                                <img src="./images/S-Btn/btnup.png" alt="下一顆" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            ))}

                            {/* 上下按鈕 */}
                            {/* <div className='ver4'>
                                <button id='circleup' onClick={handleUp}>
                                    <img src="./images/HomePage/icon_btn_up.ico.svg" alt="查看上一顆水晶" />
                                </button>
                                <button id='circledown' onClick={handleDown}>
                                    <img src="./images/HomePage/icon_btn_down.ico.svg" alt="查看下一顆水晶" />
                                </button>
                            </div> */}

                        </div>

                    </div>

                    {/* 版1 */}
                    {/* <div className="crystal-display">
                        <div className="circlebox">
                            {crystals.map((id, index) => (
                                <div className='circle' key={id}>
                                    {index === 0 ?
                                    (
                                        <div className='withbtn'>
                                            <button id='circleup' onClick={handleUp}>
                                                <img src="./images/HomePage/icon_btn_down.ico.svg" alt="" />
                                            </button>
                                            <div>
                                                <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                            </div>
                                            <button id='circledown' onClick={handleDown}>
                                                <img src="./images/HomePage/icon_btn_up.ico.svg" alt="" />
                                            </button>
                                        </div>
                                    ) 
                                    :
                                    (
                                        <img src={`./images/HomePage/covercrystal/${crystalImages[id]}`} id={id} alt="" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* 右邊：顯示對應水晶資訊 */}
                    <div className="section-crystaldiscovery">
                        <header>
                            <h2 className="titlediscovery">
                                <span className="en">Crystal Discoveries</span>
                                <span>水晶小百科</span>
                            </h2>
                        </header>

                        <div className="crystaldiscovery">
                            {renderCrystalContent(currentCrystal)}
                        </div>
                    </div>
                </section>

                {/* 礦迷回饋 */}
                <section id="section-feedback">
                    <header className="feedback-displaytitle">
                        <img src="./images/HomePage/deco-left.svg" alt="" aria-hidden="true" />
                        <h2 className="fbtitle">
                            <span className="en">Feedback</span>
                            <span>礦迷回饋</span>
                        </h2>
                        <img src="./images/HomePage/deco-right.svg" alt="" aria-hidden="true" />
                    </header>

                    <div className='fdbk'>
                        <div className="feedback-container">
                            <Swiper
                                slidesPerView="auto"
                                modules={[Navigation]}
                                spaceBetween={20}
                                navigation
                                loop={true}
                                loopedSlides={slides.length}
                                // breakpoints={{
                                //     320: { slidesPerView: 1 },
                                //     640: { slidesPerView: 2 },
                                //     1024: { slidesPerView: 3 },
                                //     1280: { slidesPerView: 4 },
                                // }}
                                className="feedback-swiper"
                            >
                                {slides.map((content, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="feedback-box">{content}</div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <BackToTopBtn />
            </main>

            <footer className="home_footer">
                <FooterTrn />
            </footer>
        </>
    )
}




/*水晶小百科*/
function renderCrystalContent(id) {
    const content = {
        'disc-kyanite': {
            name_en: 'Kyanite',
            name_ch: '藍晶石',
            description: '藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤。它常用於增強溝通、情緒平衡和靈性覺醒。',
            benefits: [
                '促進溝通：幫助開啟喉輪，增強表達與自我溝通。',
                '情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。',
                '靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。'
            ],
            people: [
                '追求心靈成長與靈性覺醒的人。',
                '需要情緒平衡與放鬆的人。'
            ],
            suggestionImgs: [
                'crystal-angelite.png',
                'crystal-amethyst.png',
                'crystal-sunstone.png'
            ]
        },
        'disc-amethyst': {
            name_en: 'Amethyst',
            name_ch: "紫水晶",
            description: "紫水晶是一種高頻能量的靈性水晶，象徵智慧與平靜，能淨化心靈並帶來內在穩定。",
            benefits: [
                '放鬆情緒：減緩焦慮與壓力、助眠鎮定。',
                '靈性提升：幫助冥想、連結高我與宇宙智慧。',
                '守護能量：淨化負能量並保護氣場。'
            ],
            people: [
                '容易焦慮、睡眠不佳的人。',
                '希望提升直覺與靈性修行者。'
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-clearquartz.png',
                'crystal-angelite.png'
            ]
        },
        'disc-sunstone': {
            name_en: 'Sunstone',
            name_ch: '太陽石',
            description: "太陽石是一種帶有金橘色光澤的水晶，象徵溫暖、活力與正向能量，能喚醒內在的生命力與快樂感。",
            benefits: [
                '提升活力：驅散憂鬱與疲憊感，喚起生命熱情。',
                '自信增強：激發內在陽性能量，重拾自我價值。',
                '情緒療癒：帶來希望、樂觀與溫暖感受。'
            ],
            people: [
                '缺乏動力與熱情的人。',
                '需要正能量提振情緒的人。'
            ],
            suggestionImgs: [
                'crystal-citrine.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-golden': {
            name_en: 'Gold Obsidian',
            name_ch: '金曜石',
            description: "金曜石象徵光明驅散黑暗，能轉化陰影並帶來強大保護力。",
            benefits: [
                '能量防護：建立氣場屏障，隔絕負面能量干擾。',
                '陰影整合：協助面對潛藏情緒與未解的內在議題。',
                '穩定地氣：提供實際支持感與穩定的安全基礎。'
            ],
            people: [
                '需要防護外界干擾或負能量的人。',
                '正在做內在探索、陰影整合或轉化療癒者。'
            ],
            suggestionImgs: [
                'crystal-blacktourmaline.png',
                'crystal-smokyquartz.png',
                'crystal-labradorite.png'
            ]
        },
        'disc-strawberry': {
            name_en: 'Strawberry',
            name_ch: '草莓晶',
            description: "草莓晶散發溫潤柔和的紅粉能量，有助吸引桃花與提升戀愛運，是甜美愛情能量的代表。",
            benefits: [
                '增強桃花：提升戀愛運與人緣。',
                '甜美吸引：展現柔和與女性魅力。',
                '自我肯定：培養被愛的信心。'
            ],
            people: [
                '正在尋找戀愛對象或希望提升戀愛運的人',
                '  '
            ],
            suggestionImgs: [
                'crystal-rosequartz.png',
                'crystal-rhodochrosite.png',
                'crystal-garnet.png'
            ]
        },
        'disc-clearquartz': {
            name_en: 'Clear Quartz',
            name_ch: '白水晶',
            description: "白水晶是最具通用性的能量石之一，可放大其他水晶能量，也能幫助清理能量與思緒。",
            benefits: [
                '能量放大：提升其他水晶功效。',
                '思緒清晰：清除混亂，集中注意力。',
                '靈性連結：建立與宇宙的純淨管道。'
            ],
            people: [
                '希望提升靈性覺察或做能量療癒者。',
                '初學者或希望水晶能發揮最大效能的人。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-labradorite.png',
                'crystal-amethyst.png'
            ]
        },
        'disc-greenPhantom': {
            name_en: 'green phantom',
            name_ch: '綠幽靈',
            description: "綠幽靈含有綠色礦層，象徵成長與穩定，被視為能助事業發展的實現之石。",
            benefits: [
                '目標實現：幫助明確設定目標與階段性計畫。',
                '事業成長：穩定能量場，吸引貴人與資源。',
                '內在行動力：引導自我邁向積極、具建設性的方向。'
            ],
            people: [
                '正在創業、轉職、升遷或拓展事業的人。',
                '需要專注、穩定並提升行動力者。'
            ],
            suggestionImgs: [
                'crystal-citrine.png',
                'crystal-rutile-quartz.png',
                'crystal-fluorite.png',
            ]
        },
        'disc-fluorite': {
            name_en: 'Fluorite',
            name_ch: '螢石',
            description: "螢石是一種智慧與邏輯之石，擁有清澈色彩與安定能量，適合強化專注與條理思維。",
            benefits: [
                '專注學習：幫助清晰思考與條理化資訊。',
                '情緒穩定：減緩干擾與心智焦躁。',
                '提升理解力：促進資訊整合與邏輯推演。'
            ],
            people: [
                '學生、學術研究人員或創意工作者。',
                '需要整理思緒與提升學習效率者。'
            ],
            suggestionImgs: [
                'crystal-sodalite.png',
                'crystal-citrine.png',
                'crystal-lapislazuli.png'
            ]
        },
        'disc-green': {
            name_en: "Green Fluorite",
            name_ch: '綠螢石',
            description: "綠螢石可淨化思緒、安撫心輪，適合靜心與放鬆時使用。",
            benefits: [
                '釐清雜念：協助從混亂回到安定中心。',
                '能量整理：穩定思緒與心輪能場。',
                '靜心作用：支持冥想時的專注與平和。'
            ],
            people: [
                '容易分心、精神雜亂或情緒低落者。',
                '  '
            ],
            suggestionImgs: [
                'crystal-smokyquartz.png',
                'crystal-clearquartz.png',
                'crystal-pinkquartz.png'
            ]
        },
        'disc-moonstone': {
            name_en: 'Moonstone',
            name_ch: '月光石',
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            benefits: [
                '增強直覺：喚醒潛藏的內在感知力。',
                '情緒穩定：柔化情緒波動，帶來內在平靜。',
                '助夢境探索與靈性連結。'
            ],
            people: [
                '重視內在情緒與直覺發展的人。',
                '女性能量工作者與療癒者。'
            ],
            suggestionImgs: [
                'crystal-labradorite.png',
                'crystal-albite.png',
            ]
        },
        'disc-rose': {
            name_en: 'Rose Quartz',
            name_ch: '玫瑰石英',
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            benefits: [
                '打開心輪：喚醒愛與情感流動。',
                '促進包容：幫助接納自己與他人。',
                '修復人際：帶來關係的溫柔療癒。'
            ],
            people: [
                '渴望愛情、修補人際關係、提升自我愛的人',
                '  '
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-clearquartz.png',
                'crystal-rubellite.png'
            ]
        },
        'disc-angelite': {
            name_en: 'Angelite',
            name_ch: '天使石',
            description: "天使石是溫柔的淡藍水晶，象徵和平與靜心，能連結高我並帶來深層寧靜與支持。",
            benefits: [
                '情緒安撫：舒緩緊張與焦慮，帶來內在平靜。',
                '靈性連結：提升直覺，協助與高我或天使溝通。',
                '和平能量：營造安全、柔和、保護的能量場。'
            ],
            people: [
                '情緒敏感、容易緊張的人。',
                '希望透過冥想或靈性練習獲得守護與安定感者。'
            ],
            suggestionImgs: [
                'crystal-moonstone.png',
                'crystal-rosequartz.png',
                'crystal-amethyst.png'
            ]
        }
        // ...你可以根據這個格式繼續補充其他水晶
    };

    const crystal = content[id];
    if (!crystal) return null;

    return (
        <>
            <article className="covercrystal">
                <div className="crystal-name">
                    <span className="en">{crystal.name_en}</span>
                    <span className="ch">{crystal.name_ch}</span>
                </div>
                <hr className="crystal-line1" />
                <div className="discovery-content">
                    <p>{crystal.description}</p>
                </div>
            </article>
            <article className="discovery-p1">
                <h2>主要功效</h2>
                <hr className="crystal-line"/>
                <p className="discovery-p1content">
                    {crystal.benefits.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p2">
                <h2>適合人群</h2>
                <hr className="crystal-line"/>
                <p className="discovery-p2content">
                    {crystal.people.map((item, idx) => <span key={idx}>{item}<br /></span>)}
                </p>
            </article>
            <article className="discovery-p3">
                <h2>建議搭配水晶</h2>
                <div className="discovery-imgbox">
                    {crystal.suggestionImgs.map((img, idx) => (
                        <img src={`./images/S-CrystalSingle/${img}`} className="discovery-img" key={idx} alt="" />
                    ))}
                </div>
            </article>
            <div>
                <Link to="/KnowledgeCrystal" className="moreinfo">更多水晶介紹 &gt;</Link>
            </div >

        </>
    );
}


{/* jquery CDN 要先執行 */ }
{/* < script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" ></script > */}
{/* 自訂的js (一定放在最下面) */ }
{/* < script src="./js/script.js" ></script > */ }

