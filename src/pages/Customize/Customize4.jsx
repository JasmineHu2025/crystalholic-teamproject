import style from './Customize4.module.css'
import '../../components/NumTestBg.css'
import NavBarWrapper from '../../components/NavBarWrapper';
import CopyrightNotice from '../../components/CopyrightNotice'
import { useEffect, useState, useMemo, useRef } from 'react';
import CustomizeInfoModal from '../../components/Customize/CustomizeInfoModal';
import { generateBraceletLayout, calculateRadius, calculateBeadAngles } from '../../utils/generateBraceletLayout';
import { resultCrystalMap } from '../../utils/resultCrystalMap';

// import html2canvas from 'html2canvas'; 
import { renderBraceletToImage } from '../../utils/renderBraceletToImage'; // 自訂工具

// 串接購物車
import { useCart } from '../Shopping/CartContext';
import { useNavigate } from 'react-router-dom';




export default function Customize4() {
  // 串接購物車
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [agreeError, setAgreeError] = useState(false);

  const [showInfo, setShowInfo] = useState(true);


  const [selectedSize, setSelectedSize] = useState(8);  // 水晶大小
  const [wristSize, setWristSize] = useState(16);       // 手圍
  const [braceletBeads, setBraceletBeads] = useState([]);
  const [recommendedCrystal, setRecommendedCrystal] = useState([]);
  const hasSetDefaultMetal = useRef(false);


  //選擇金屬觸發教學彈窗
  const [selectedMetalImage, setSelectedMetalImage] = useState(null);
  const [showCrystalGuide, setShowCrystalGuide] = useState(false);
  const [hasClickedMetal, setHasClickedMetal] = useState(false);

  const handleSelectMetal = (metalImage) => {
    setSelectedMetalImage(metalImage);

    if (!hasClickedMetal) {
      setShowCrystalGuide(true);
      setHasClickedMetal(true);
    }
  };


  useEffect(() => {
    const shouldApply = sessionStorage.getItem('shouldApplyRecommend') === 'true';
    const designMode = sessionStorage.getItem('designMode');
    const crystalImage = sessionStorage.getItem('selectedCrystalImage');
    const metalImage = sessionStorage.getItem('selectedMetalImage');
    console.log('🔥 進來 Customize4，圖片路徑：');
    console.log('crystalImage:', crystalImage);
    console.log('metalImage:', metalImage);

    const layout = generateBraceletLayout(selectedSize, wristSize);


    const oldPlacement = { ...crystalPlacement };
    let filled;

    if (shouldApply && designMode === 'recommend' && crystalImage && metalImage) {
      console.log('🧩 進入推薦流程 useEffect');
      // ✅ 推薦模式下：套用整條同一張水晶圖
      filled = layout.map((item) =>
        item === 'metal'
          ? { type: 'metal' }
          : { type: 'crystal', image: crystalImage }
      );

      const placement = {};
      filled.forEach((bead, i) => {
        if (bead.type === 'crystal') {
          placement[i] = bead.image;
        }
      });

      setCrystalPlacement(placement);
      setSelectedMetalImage(metalImage);
    } else {
      // ✅ 自由模式，保留原本的水晶圖配置
      filled = layout.map((item, i) => {
        if (item === 'metal') return { type: 'metal' };
        return {
          type: 'crystal',
          image: oldPlacement[i] || undefined,
        };
      });

      const newPlacement = {};
      filled.forEach((bead, i) => {
        if (bead.type === 'crystal' && bead.image) {
          newPlacement[i] = bead.image;
        }
      });

      setCrystalPlacement(newPlacement);
    }

    setBraceletBeads(filled);
  }, [selectedSize, wristSize]);






  const braceletRadius = useMemo(() => {
    return calculateRadius(wristSize) * 1.1;
  }, [wristSize]);

  const scale = 6;

  const beadAngles = useMemo(() => {
    return calculateBeadAngles(braceletBeads, selectedSize);
  }, [braceletBeads, selectedSize]);

  const [openPanel, setOpenPanel] = useState(null); // null 或 "measure", "result", "wiki", "note", "custom"
  const [selectedCategory, setSelectedCategory] = useState("靈感智慧"); // 預設分類

  const crystalData = {
    靈感智慧: [
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
    愛情人緣: [
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
    守護淨化: [
      "./images/S-CrystalSingle/crystal-blackobsidian.png",
      "./images/S-CrystalSingle/crystal-goldobsidian.png",
      "./images/S-CrystalSingle/crystal-blacktourmaline.png",
      "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
      "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
      "./images/S-CrystalSingle/crystal-hematite.png",
      "./images/S-CrystalSingle/crystal-rhodochrosite.png",
      "./images/S-CrystalSingle/crystal-bloodstone.png",
      "./images/S-CrystalSingle/crystal-tridacna.png",
    ],
    放鬆靜心: [
      "./images/S-CrystalSingle/crystal-pinkcalcite.png",
      "./images/S-CrystalSingle/crystal-amethyst.png",
      "./images/S-CrystalSingle/crystal-iolite.png",
      "./images/S-CrystalSingle/crystal-hackmanite.png",
      "./images/S-CrystalSingle/crystal-celestite.png",
      "./images/S-CrystalSingle/crystal-angelite.png",
      "./images/S-CrystalSingle/crystal-sunstone.png",
      "./images/S-CrystalSingle/crystal-smokyquartz.png",
      "./images/S-CrystalSingle/crystal-greenfluorite.png",
      "./images/S-CrystalSingle/crystal-silversheenobsidian.png",

    ],
  };
  const crystalPrices = {
    "./images/S-CrystalSingle/crystal-kyanite.png": 200,
    "./images/S-CrystalSingle/crystal-labradorite.png": 150,
    "./images/S-CrystalSingle/crystal-lapislazuli.png": 160,
    "./images/S-CrystalSingle/crystal-sodalite.png": 150,
    "./images/S-CrystalSingle/crystal-bluecalcite.png": 120,
    "./images/S-CrystalSingle/crystal-pietersite.png": 300,
    "./images/S-CrystalSingle/crystal-tanzanite.png": 200,
    "./images/S-CrystalSingle/crystal-amethyst.png": 120,
    "./images/S-CrystalSingle/crystal-albite.png": 100,
    "./images/S-CrystalSingle/crystal-moonstone.png": 130,
    "./images/S-CrystalSingle/crystal-clearquartz.png": 100,

    "./images/S-CrystalSingle/crystal-citrine.png": 110,
    "./images/S-CrystalSingle/crystal-rutile-quartz.png": 180,
    "./images/S-CrystalSingle/crystal-aquamarine.png": 140,
    "./images/S-CrystalSingle/crystal-purplefluorite.png": 100,
    "./images/S-CrystalSingle/crystal-fluorite.png": 200,
    "./images/S-CrystalSingle/crystal-hawkseye.png": 130,
    "./images/S-CrystalSingle/crystal-tigerseye.png": 120,
    "./images/S-CrystalSingle/crystal-green-phantom.png": 170,
    "./images/S-CrystalSingle/crystal-carnelian.png": 100,

    "./images/S-CrystalSingle/crystal-iolite.png": 150,
    "./images/S-CrystalSingle/crystal-lilac-amethyst.png": 110,
    "./images/S-CrystalSingle/crystal-pinkquartz.png": 120,
    "./images/S-CrystalSingle/crystal-rosequartz.png": 150,
    "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png": 160,
    "./images/S-CrystalSingle/crystal-rubellite.png": 200,
    "./images/S-CrystalSingle/crystal-rhodochrosite.png": 190,
    "./images/S-CrystalSingle/crystal-garnet.png": 100,
    "./images/S-CrystalSingle/crystal-oceanjasper.png": 120,

    "./images/S-CrystalSingle/crystal-blackobsidian.png": 170,
    "./images/S-CrystalSingle/crystal-goldobsidian.png": 160,
    "./images/S-CrystalSingle/crystal-blacktourmaline.png": 220,
    "./images/S-CrystalSingle/crystal-snowflakeobsidian.png": 150,
    "./images/S-CrystalSingle/crystal-silversheenobsidian.png": 110,
    "./images/S-CrystalSingle/crystal-hematite.png": 190,
    "./images/S-CrystalSingle/crystal-bloodstone.png": 120,
    "./images/S-CrystalSingle/crystal-tridacna.png": 140,

    "./images/S-CrystalSingle/crystal-pinkcalcite.png": 190,
    "./images/S-CrystalSingle/crystal-hackmanite.png": 140,
    "./images/S-CrystalSingle/crystal-celestite.png": 130,
    "./images/S-CrystalSingle/crystal-angelite.png": 110,
    "./images/S-CrystalSingle/crystal-sunstone.png": 120,
    "./images/S-CrystalSingle/crystal-smokyquartz.png": 180,
    "./images/S-CrystalSingle/crystal-greenfluorite.png": 100
  };

  const metalPrices = {
    "./images/Custom/ball1.png": 200,
    "./images/Custom/ball2.png": 200,
    "./images/Custom/ball3.png": 200,
    "./images/Custom/ball4.png": 200,
    "./images/Custom/ball5.png": 400,
    "./images/Custom/ball6.png": 300,
  };

  //   const handleSelectMetal = (imgPath) => {
  //   const price = metalPrices[imgPath] || 0;
  //   setSelectedMetalImage({ image: imgPath, price });
  // };

  const categorizedCrystalInfo = {
    "靈感智慧": [
      {
        name: "藍晶石",
        en: "Kyanite",
        image: "./images/S-CrystalSingle/crystal-kyanite.png",
        desc: "提升直覺與靈性，幫助清晰溝通與能量流動。"
      },
      {
        name: "拉長石",
        en: "Labradorite",
        image: "./images/S-CrystalSingle/crystal-labradorite.png",
        desc: "喚醒潛能，增強直覺與靈性探索。"
      },
      {
        name: "青金石",
        en: "Lapis Lazuli",
        image: "./images/S-CrystalSingle/crystal-lapislazuli.png",
        desc: "開啟第三眼，增進洞察力與靈性。"
      },
      {
        name: "蘇打石",
        en: "Sodalite",
        image: "./images/S-CrystalSingle/crystal-sodalite.png",
        desc: "理性與直覺的平衡，幫助清晰思考。"
      },
      {
        name: "藍方解石",
        en: "Blue Calcite",
        image: "./images/S-CrystalSingle/crystal-bluecalcite.png",
        desc: "舒緩情緒、提升表達與靈性覺察。"
      },
      {
        name: "彼得石",
        en: "Pietersite",
        image: "./images/S-CrystalSingle/crystal-pietersite.png",
        desc: "激發洞察與意志力，有助直覺行動。"
      },
      {
        name: "丹泉石",
        en: "Tanzanite",
        image: "./images/S-CrystalSingle/crystal-tanzanite.png",
        desc: "開啟高頻能量通道，強化直覺與創造力。"
      },
      {
        name: "紫水晶",
        en: "Amethyst",
        image: "./images/S-CrystalSingle/crystal-amethyst.png",
        desc: "協助專注與情緒平衡，提升靈感。"
      },
      {
        name: "白月光鈣長石",
        en: "Albite",
        image: "./images/S-CrystalSingle/crystal-albite.png",
        desc: "帶來澄澈的靈感與轉化支持，幫助釋放限制。"
      },
      {
        name: "月光石",
        en: "Moonstone",
        image: "./images/S-CrystalSingle/crystal-moonstone.png",
        desc: "穩定情緒與睡眠，有助連結直覺與靈感。"
      },
      {
        name: "白水晶",
        en: "Clear Quartz",
        image: "./images/S-CrystalSingle/crystal-clearquartz.png",
        desc: "放大能量，協助靈性提升與淨化。"
      }
    ],
    "專注工作": [
      {
        name: "黃水晶",
        en: "Citrine",
        image: "./images/S-CrystalSingle/crystal-citrine.png",
        desc: "提升財富與自信，帶來清晰與行動力。"
      },
      {
        name: "鈦晶/髮晶",
        en: "Rutile Quartz",
        image: "./images/S-CrystalSingle/crystal-rutile-quartz.png",
        desc: "增強企圖心與效率，吸引人脈資源。"
      },
      {
        name: "海藍寶",
        en: "Aquamarine",
        image: "./images/S-CrystalSingle/crystal-aquamarine.png",
        desc: "提升表達與冷靜思考，帶來清新能量。"
      },
      {
        name: "蘇打石",
        en: "Sodalite",
        image: "./images/S-CrystalSingle/crystal-sodalite.png",
        desc: "平衡邏輯與直覺，協助專注與清晰思維。"
      },
      {
        name: "紫螢石",
        en: "Purple Fluorite",
        image: "./images/S-CrystalSingle/crystal-purplefluorite.png",
        desc: "穩定情緒與專注力，激發創造靈感。"
      },
      {
        name: "螢石",
        en: "Fluorite",
        image: "./images/S-CrystalSingle/crystal-fluorite.png",
        desc: "協助組織思緒，提升學習效率。"
      },
      {
        name: "鷹眼石",
        en: "Hawk’s Eye",
        image: "./images/S-CrystalSingle/crystal-hawkseye.png",
        desc: "洞察先機、提升判斷力與執行力。"
      },
      {
        name: "虎眼石",
        en: "Tiger’s Eye",
        image: "./images/S-CrystalSingle/crystal-tigerseye.png",
        desc: "帶來決斷力與勇氣，幫助實現目標。"
      },
      {
        name: "綠幽靈",
        en: "Green Phantom",
        image: "./images/S-CrystalSingle/crystal-green-phantom.png",
        desc: "支持事業發展，幫助釋放負面能量。"
      },
      {
        name: "紅玉髓",
        en: "Carnelian",
        image: "./images/S-CrystalSingle/crystal-carnelian.png",
        desc: "注入活力與行動力，激發創造與熱情。"
      }
    ],
    "愛情人緣": [
      {
        name: "堇青石",
        en: "Iolite",
        image: "./images/S-CrystalSingle/crystal-iolite.png",
        desc: "幫助釐清混亂思緒、強化內在導引，促進真誠溝通與心靈連結。"
      },
      {
        name: "粉紫水晶",
        en: "Lilac Amethyst",
        image: "./images/S-CrystalSingle/crystal-lilac-amethyst.png",
        desc: "溫和淨化情緒，柔化內在能量。"
      },
      {
        name: "粉晶",
        en: "Rose Quartz",
        image: "./images/S-CrystalSingle/crystal-rosequartz.png",
        desc: "開啟心輪，提升愛與被愛的能力。"
      },
      {
        name: "草莓晶",
        en: "Strawberry Quartz",
        image: "./images/S-CrystalSingle/crystal-golden-strawberry-quartz.png",
        desc: "吸引美好關係與愛情。"
      },
      {
        name: "紅碧璽",
        en: "Rubellite",
        image: "./images/S-CrystalSingle/crystal-rubellite.png",
        desc: "強化情感表達，提升人際魅力。"
      },
      {
        name: "紅紋石",
        en: "Rhodochrosite",
        image: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        desc: "療癒情感創傷，協助打開心扉。"
      },
      {
        name: "紅石榴石",
        en: "Garnet",
        image: "./images/S-CrystalSingle/crystal-garnet.png",
        desc: "激發情感活力並提升安全感。"
      },
      {
        name: "海洋碧玉",
        en: "Ocean Jasper",
        image: "./images/S-CrystalSingle/crystal-oceanjasper.png",
        desc: "穩定情緒與和諧交流。"
      }
    ],
    "守護淨化": [
      {
        name: "黑曜石",
        en: "Black Obsidian",
        image: "./images/S-CrystalSingle/crystal-blackobsidian.png",
        desc: "吸收負能量，強化保護場域。"
      },
      {
        name: "金曜石",
        en: "Gold Obsidian",
        image: "./images/S-CrystalSingle/crystal-goldobsidian.png",
        desc: "提升直覺與防護能量。"
      },
      {
        name: "黑碧璽",
        en: "Black Tourmaline",
        image: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
        desc: "穩定情緒與防止負能量入侵。"
      },
      {
        name: "雪花黑曜石",
        en: "Snowflake Obsidian",
        image: "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
        desc: "淨化內在陰影，帶來清晰與平衡。"
      },
      {
        name: "黑銀曜石",
        en: "Silver Sheen Obsidian",
        image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
        desc: "保護靈性空間，協助自我認識。"
      },
      {
        name: "黑鐵礦",
        en: "Hematite",
        image: "./images/S-CrystalSingle/crystal-hematite.png",
        desc: "強化精神穩定性與實際行動力。"
      },
      {
        name: "紅紋石",
        en: "Rhodochrosite",
        image: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
        desc: "安撫情緒創傷，建立柔韌的能量防線。"
      },
      {
        name: "龍血石",
        en: "Bloodstone",
        image: "./images/S-CrystalSingle/crystal-bloodstone.png",
        desc: "促進勇氣與身心淨化。"
      },
      {
        name: "硨磲石",
        en: "Tridacna",
        image: "./images/S-CrystalSingle/crystal-tridacna.png",
        desc: "帶來純淨能量，清除雜念與焦慮。"
      }
    ],
    "放鬆靜心": [
      {
        name: "粉方解石",
        en: "Pink Calcite",
        image: "./images/S-CrystalSingle/crystal-pinkcalcite.png",
        desc: "柔化內心、釋放壓力與情緒。"
      },
      {
        name: "紫水晶",
        en: "Amethyst",
        image: "./images/S-CrystalSingle/crystal-amethyst.png",
        desc: "協助專注與情緒平衡，提升靈感。"
      },
      {
        name: "堇青石",
        en: "Iolite",
        image: "./images/S-CrystalSingle/crystal-iolite.png",
        desc: "幫助冥想與內在旅程的探索。"
      },
      {
        name: "方鈉石",
        en: "Hackmanite",
        image: "./images/S-CrystalSingle/crystal-hackmanite.png",
        desc: "帶來平靜與安心，有助內省。"
      },
      {
        name: "天青石",
        en: "Celestite",
        image: "./images/S-CrystalSingle/crystal-celestite.png",
        desc: "安撫焦慮，連結更高頻靈性。"
      },
      {
        name: "天使石",
        en: "Angelite",
        image: "./images/S-CrystalSingle/crystal-angelite.png",
        desc: "促進平靜與內在連結。"
      },
      {
        name: "太陽石",
        en: "Sunstone",
        image: "./images/S-CrystalSingle/crystal-sunstone.png",
        desc: "激發正能量與快樂感。"
      },
      {
        name: "茶晶",
        en: "Smoky Quartz",
        image: "./images/S-CrystalSingle/crystal-smokyquartz.png",
        desc: "釋放壓力與情緒毒素。"
      },
      {
        name: "綠螢石",
        en: "Green Fluorite",
        image: "./images/S-CrystalSingle/crystal-greenfluorite.png",
        desc: "穩定思緒與情緒，有助放鬆。"
      },
      {
        name: "黑銀曜石",
        en: "Silver Sheen Obsidian",
        image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
        desc: "促進冥想與保護靈性。"
      }
    ]
  };


  const [selectedCrystal, setSelectedCrystal] = useState(null); // 選中的水晶圖
  const [selectedBeadIndexes, setSelectedBeadIndexes] = useState([]); // 多個選中的 bead index
  const [crystalPlacement, setCrystalPlacement] = useState({}); // index 對應的水晶圖

  // 點 bead（格子）
  const handleBeadClick = (index) => {
    if (braceletBeads[index] === 'metal') return;

    // 已選水晶 → 放進去
    if (selectedCrystal) {
      setCrystalPlacement(prev => ({
        ...prev,
        [index]: selectedCrystal
      }));
      setSelectedCrystal(null);
      setSelectedBeadIndexes([]);
      return;
    }

    // 沒選水晶 → 多選框框邏輯
    if (selectedBeadIndexes.includes(index)) {
      // 已選中 → 取消選取
      setSelectedBeadIndexes(prev => prev.filter(i => i !== index));
    } else {
      // 未選中 → 加入選取
      setSelectedBeadIndexes(prev => [...prev, index]);
    }
  };

  // 點水晶
  const handleCrystalSelect = (crystal) => {
    setSelectedCrystal(crystal);

    if (Array.isArray(selectedBeadIndexes) && selectedBeadIndexes.length > 0) {
      const updatedPlacement = { ...crystalPlacement };
      selectedBeadIndexes.forEach((i) => {
        updatedPlacement[i] = crystal;
      });
      setCrystalPlacement(updatedPlacement);

      // 清空選取狀態
      setSelectedBeadIndexes([]);
      setSelectedCrystal(null);
    }
  };


  useEffect(() => {
    if (selectedCrystal && selectedBeadIndexes !== null) {
      setCrystalPlacement(prev => ({
        ...prev,
        [selectedBeadIndexes]: selectedCrystal
      }));
      setSelectedCrystal(null);
      setSelectedBeadIndexes(null);
    }
  }, [selectedCrystal, selectedBeadIndexes]);

  //刪除按鈕 清空手鍊
  const handleClearBracelet = () => {
    sessionStorage.removeItem('shouldApplyRecommend');

    // 重建交錯 layout，但不附圖
    const layout = generateBraceletLayout(selectedSize, wristSize);
    console.log('🧵 layout:', layout);
    const cleared = layout.map((item) =>
      item === 'metal'
        ? { type: 'metal' }
        : { type: 'crystal', image: undefined }
    );

    setBraceletBeads(cleared);
    setCrystalPlacement({});
    setSelectedBeadIndexes([]);
    setSelectedCrystal(null);
    setSelectedMetalImage(null);
  };

  //儲存
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [braceletName, setBraceletName] = useState('');
  const [braceletPrice, setBraceletPrice] = useState('');
  const handleSaveBracelet = () => {
    const savedData = {
      braceletName,
      wristSize,
      selectedSize,
      crystalPlacement,
      selectedMetalImage,
      braceletPrice,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('customBracelet', JSON.stringify(savedData));
    setShowCustomModal(true); // 顯示彈窗
  };

  useEffect(() => {
    const saved = localStorage.getItem('customBracelet');
    if (saved) {
      const parsed = JSON.parse(saved);
      setBraceletName(parsed.braceletName || '');
      setWristSize(parsed.wristSize || 16);
      setSelectedSize(parsed.selectedSize || 8);
      setCrystalPlacement(parsed.crystalPlacement || {});
      setSelectedMetalImage(parsed.selectedMetalImage || null);
      setBraceletPrice(parsed.braceletPrice || '');
    }
  }, []);


  //計算價格
  useEffect(() => {
    let total = 0;

    // 計算水晶價格
    braceletBeads.forEach((bead, index) => {
      if (crystalPlacement[index]) {
        const price = crystalPrices[crystalPlacement[index]] || 0;
        total += price;
      }
    });

    // 加上金屬珠價格（selectedMetalImage 是字串）
    if (selectedMetalImage) {
      total += metalPrices[selectedMetalImage] || 0;
    }

    setBraceletPrice(total);
  }, [braceletBeads, crystalPlacement, selectedMetalImage]);


  //取得生命靈數結果導入推薦水晶
  const [lifePathNumber, setLifePathNumber] = useState(null);

  useEffect(() => {
    const storedLifePath = sessionStorage.getItem('lifePathNumber');
    if (storedLifePath) {
      setLifePathNumber(Number(storedLifePath));
    }
  }, []);


  //特殊訂製需求
  const [customRequest, setCustomRequest] = useState('');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showRequestErrorModal, setShowRequestErrorModal] = useState(false);


  //右側按鈕點擊效果
  const [activePanel, setActivePanel] = useState(null);
  const handlePanelClick = (panelName) => {
    // 強制重觸動畫：每次點擊都會先設 null 再設值
    setOpenPanel(null);
    setActivePanel(panelName); // 不要設 null，這樣 icon 還會亮
    setTimeout(() => {
      setOpenPanel(panelName);
    }, 20); // 小延遲讓 React 有時間 unmount
  };


  //是否清除的modal
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleConfirmClear = () => {
    handleClearBracelet();
    setShowConfirmModal(false); // 關掉 modal
  };

  //展開水晶百科分類
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };


  //把手鍊加入購物車
  const [showCartModal, setShowCartModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // for 手鍊截圖
  const [showIncompleteModal, setShowIncompleteModal] = useState(false);
  const handleAddToCart = async () => {
    // 檢查是否排滿
    const allFilled = braceletBeads.every((bead, index) => {
      return bead.type === 'metal' || (bead.type === 'crystal' && crystalPlacement[index]);
    });

    if (!allFilled) {
      setShowIncompleteModal(true); // 打開彈窗
      return;
    }

    // 匯出乾淨手鍊圖（非截圖）
    const imageDataUrl = await renderBraceletToImage({
      braceletBeads,
      crystalPlacement,
      selectedMetalImage,
      selectedSize,
      wristSize,
    });

    setPreviewImage(imageDataUrl);
    setShowCartModal(true);
  };

  // 串接購物車
  const calcBraceletPrice = () => {
    let total = 0;

    // 1. 累加每顆水晶單價
    braceletBeads.forEach((bead, idx) => {
      if (crystalPlacement[idx]) {
        total += crystalPrices[crystalPlacement[idx]] || 0;
      }
    });

    // 2. 加上金屬珠
    if (selectedMetalImage) {
      total += metalPrices[selectedMetalImage] || 0;
    }

    return total;
  };

  // 🐤🐤🐤右邊工具列隱藏(手機版)
  const [showTools, setShowTools] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const apply = () =>
      setShowTools(window.matchMedia('(max-width: 767px)').matches ? true : false);
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  const toggleTools = () => {
    if (animating) return;
    // 僅在手機才切換；桌機維持 align
    if (!window.matchMedia('(max-width: 767px)').matches) return;
    setAnimating(true);
    setTimeout(() => {
      setShowTools(prev => !prev);
      setAnimating(false);
    }, 500); // 與 CSS 動畫時間一致
  };



  return (
    <>
      <CustomizeInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
      <NavBarWrapper variant="dark" />

      <main className={style.index}>
        <div className={style.preload} />
        {/* 左邊 */}
        <div className={style.boxs}>
          {/* 手鍊取名區塊 */}
          <div className={style.name}>
            <div className={style.titleName}>
              <p>✦ 幫我取個名吧 ✦</p>
            </div>
            <div className={style.inputNameBox}>
              <input
                type="text"
                className={style.inputName}
                value={braceletName}
                onChange={(e) => setBraceletName(e.target.value)}
                placeholder="－請輸入手鍊名稱－"
              />
            </div>
          </div>

          {/* 尺寸設定 */}
          <div className={style.sizeAndBeads}>
            <div className={style.sizeBox}>
              {/* 標題 */}
              <div className={style["title-size"]}>
                <p>尺寸設定</p>
              </div>
              <hr className={style.line} />
              {/* 水晶大小 */}
              <div className={style.crystalSizeBox}>
                <div className={style.crystalSize}>
                  <p>水晶大小：</p>
                </div>
                <div className={style.crystalSizeButtons}>
                  {[8, 10].map(size => (
                    <button
                      key={size}
                      className={`${style.button} ${selectedSize === size ? style.active : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}mm
                    </button>
                  ))}
                </div>
              </div>
              {/* 手圍尺寸 */}
              <div className={style.ringSizeBox}>
                <div className={style.ringSize}>
                  <p>手圍尺寸：</p>
                </div>
                <div className={style.ringSizeSlider}>
                  <input
                    type="range"
                    className={style.sliderInput}
                    min="13"
                    max="18"
                    step="1"
                    value={wristSize}
                    onChange={(e) => setWristSize(Number(e.target.value))}
                  />
                </div>
                <div className={style.ringSizeValueBox}>
                  <p className={style.sizeValue}>{wristSize}cm</p>
                </div>
              </div>
              {/* 手鍊配飾 */}
              <div className={style.ringJewelryBox}>
                <div className={style.ringJewelry}>
                  <p>手鍊配飾：</p>
                </div>
                <div className={style.imagesBox}>
                  {["ball1", "ball2", "ball3", "ball4", "ball5", "ball6"].map((img, i) => (
                    <img
                      key={i}
                      src={`./images/Custom/${img}.png`}
                      alt=""
                      onClick={() => handleSelectMetal(`./images/Custom/${img}.png`)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 水晶欄 */}
          <div id={style.beadWindow}>
            {/* 水晶系列分類標籤 */}
            <nav className={style.tabs}>
              {Object.keys(crystalData).map((category, index, array) => {
                const isSelected = selectedCategory === category;
                const isNextToSelected =
                  array[index - 1] === selectedCategory;

                return (
                  <button
                    key={category}
                    className={`${style.tab} ${isSelected ? style.active : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {/* 不是第一個，且不是選中的 tab 或其右邊的 tab 才顯示 tabLine */}
                    {index !== 0 && !isSelected && !isNextToSelected && (
                      <div className={style.tabLine}></div>
                    )}
                    {/* {category} */}
                    {/* 電腦版 */}
                    <span className={style.tabLabelFull}>{category}</span>

                    {/* 手機版 */}
                    <span className={style.tabLabelShort}>
                      {category.slice(0, 2)}   {/* 例：靈感智慧 → 靈感 */}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* 水晶 */}
            <div className={style.beadGrid}>
              {crystalData[selectedCategory].map((imgSrc, index) => (
                <img
                  key={index}
                  className={`${style.bead} ${selectedCrystal === imgSrc ? style.selectedBead : ''}`}
                  src={imgSrc}
                  alt=""
                  onClick={() => handleCrystalSelect(imgSrc)}
                />

              ))}
            </div>
          </div>

          {/* 加入購物車按鈕 */}
          <div
            className={style.icon2Mobile}
            onClick={handleAddToCart}
          >
            <div className={style.btnCart}></div>
            <p>加購物車</p>
          </div>
        </div>

        {/* 中間＆右邊 */}
        <div className={style.boxs3}>
          {/* 中間 */}
          <div className={style.boxs2}>
            {/* 手鍊取名區塊 */}
            <div className={style.nametop}>
              <div className={style.titleName}>
                <p>✦ 幫我取個名吧 ✦</p>
              </div>
              <div className={style.inputNameBox}>
                <input
                  type="text"
                  className={style.inputName}
                  value={braceletName}
                  onChange={(e) => setBraceletName(e.target.value)}
                  placeholder="－請輸入手鍊名稱－"
                />
              </div>
            </div>

            {/* 手鍊 */}
            <div className={style.bracelet}>
              {(() => {
                let accumulatedAngle = 0;
                return braceletBeads.map((bead, index) => {
                  const isMetal = bead?.type === 'metal';
                  const size = isMetal ? 6 : selectedSize;
                  const angle = beadAngles[index];
                  const offset = (size * scale) / 2;
                  accumulatedAngle += angle;
                  console.log("🎨 crystalPlacement[", index, "]:", crystalPlacement[index]);

                  return (
                    <span
                      key={index}
                      onClick={() => {
                        if (!isMetal) handleBeadClick(index);
                      }}
                      className={`${isMetal ? style.pearlSmall : style.pearlBig} ${!isMetal &&
                        Array.isArray(selectedBeadIndexes) &&
                        selectedBeadIndexes.includes(index)
                        ? style.selectedBead
                        : ''
                        }`}
                      style={{
                        width: `${size * scale}px`,
                        height: `${size * scale}px`,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        borderRadius: '50%',
                        transform: `rotate(${accumulatedAngle}deg) translate(${braceletRadius * scale}px) rotate(-${accumulatedAngle}deg) translate(-${offset}px, -${offset}px)`,
                        transformOrigin: '0 0',
                      }}
                    >
                      <div className={style.pearlBase}></div>
                      {(isMetal && selectedMetalImage) || (!isMetal && crystalPlacement[index]) ? (
                        <img
                          src={isMetal ? selectedMetalImage : crystalPlacement[index]}
                          className={style.pearlImage}
                          alt="bead"
                        />
                      ) : null}
                    </span>
                  );
                });

              })()}
              <div className={style.iconBox1}>
                <div
                  className={style.btnDel}
                  onClick={() => setShowConfirmModal(true)}
                ></div>
                <div className={style.btnSave} onClick={handleSaveBracelet}></div>
              </div>
            </div>
            {/* 價錢區塊 */}
            <div className={style.priceBox}>
              <input
                className={style.price}
                type="text"
                placeholder="價錢"
                value={braceletPrice === 0 ? "自動計算價格" : `NT$${braceletPrice}`}
                readOnly
              />
            </div>
          </div>


          {/* 右邊 */}
          {(!showTools || !window.matchMedia('(max-width: 767px)').matches) && (
            <div className={`${style.align} ${window.matchMedia('(max-width: 767px)').matches
              ? (animating ? style.slideOut : style.slideIn)
              : ''
              }`}>
              {/* 工具欄：小視窗 */}
              <div className={style.iconPanelWrapper}>

                {openPanel && (
                  // 小視窗位置
                  <div
                    className={style.panelOverlay}
                  >

                    {/* 小視窗區塊 */}
                    <div
                      className={style.panelContent}
                    >

                      {/* 小視窗關閉鈕 */}
                      <div className={style.closeBtnWrapper}>
                        <button className={style.closeBtn} onClick={() => {
                          setOpenPanel(null);
                          setActivePanel(null);
                        }}>✕</button>
                      </div>

                      {/* 手圍測量 */}
                      {openPanel === "measure" && (
                        <div className={style.panelInner}>
                          <div className={style.panelHeader}>
                            <h2 className={style.panelTitle}>✦ 手圍測量 ✦</h2>
                            {/* 裝飾線 */}
                            <div className={style.decoDividerMobile2}>
                              <img className={style.dividerLeft} src="images/Custom/deco-divider_purple-left.svg" alt="divider-left" />
                              <hr />
                              <img className={style.dividerRight} src="images/Custom/deco-divider_purple-right.svg" alt="divider-right" />
                            </div>
                            {/* <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" /> */}
                          </div>

                          <div className={style.overlayContent}>
                            <p>▸ 測量位置：手腕最細處</p>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                                <img
                                  src="./images/Custom/deco-diamaond.png"
                                  alt="裝飾圖"
                                  style={{
                                    width: "1rem",
                                    height: "1rem",
                                    marginRight: "0.4rem",
                                  }}
                                />
                                <span className={style.panelTitle2} >紙條測量方式</span>
                              </div>
                              <p>
                                準備寬約 0.5 公分的紙條，繞手腕一圈，在交會處做記號，攤平紙條測量長度。
                              </p>
                            </div>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                                <img
                                  src="./images/Custom/deco-diamaond.png"
                                  alt="裝飾圖"
                                  style={{
                                    width: "1rem",
                                    height: "1rem",
                                    marginRight: "0.4rem",
                                  }}
                                />
                                <span className={style.panelTitle2} >皮尺測量方式</span>
                              </div>
                              <p>
                                使用皮尺繞手腕一圈，測量手圍。
                              </p>

                              <p style={{ color: "#A67CEB", marginTop: "1rem" }}>
                                測量完畢，加 0.5~1公分，使配戴更舒適不緊繃！
                              </p>
                            </div>

                          </div>

                        </div>
                      )}

                      {/* 注意事項 */}
                      {openPanel === "note" && (
                        <div className={style.panelInner}>
                          <div className={style.panelHeader}>
                            <h2 className={style.panelTitle}>✦ 注意事項 ✦</h2>
                            {/* 裝飾線 */}
                            <div className={style.decoDividerMobile2}>
                              <img className={style.dividerLeft} src="images/Custom/deco-divider_purple-left.svg" alt="divider-left" />
                              <hr />
                              <img className={style.dividerRight} src="images/Custom/deco-divider_purple-right.svg" alt="divider-right" />
                            </div>
                            {/* <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" /> */}
                          </div>
                          <div className={style.overlayContent}>
                            <p>▸ 客製商品需 先付款 才會開始製作，請耐心等待製作時間約 5–7 個工作天。</p>
                            <p>▸ 實品顏色可能因 螢幕顯示設定 略有差異，請以實品為準。</p>
                            <p>▸ 如需修改手圍尺寸，將酌收材料與工本費，請事先聯繫客服確認是否可調整。</p>
                            <p>▸ 天然水晶每顆長得都不太一樣，顏色深淺、紋理都是大自然給的驚喜，沒辦法指定喔！</p>
                            <p>▸ 若有斷裂或非人為瑕疵，可於七日內聯繫我們。</p>
                            <p style={{ color: "#A67CEB" }}>
                              若需特殊設計／包裝／尺寸，請選擇「特別訂製」填寫說明
                            </p>
                          </div>
                        </div>
                      )}

                      {/* 測驗結果 */}
                      {openPanel === "result" && (
                        <div className={style.panelInner}>
                          <div className={style.panelHeader}>
                            <h2 className={style.panelTitle}>✦ 測驗結果 ✦</h2>
                            {/* 裝飾線 */}
                            <div className={style.decoDividerMobile2}>
                              <img className={style.dividerLeft} src="images/Custom/deco-divider_purple-left.svg" alt="divider-left" />
                              <hr />
                              <img className={style.dividerRight} src="images/Custom/deco-divider_purple-right.svg" alt="divider-right" />
                            </div>
                            {/* <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" /> */}
                          </div>
                          <div className={style.overlayContent}>
                            {!lifePathNumber ? (
                              <button
                                onClick={() => window.open('#/numtest2', '_blank')}
                                className={style.wikiBtn}
                                style={{ marginTop: "1.5rem" }}
                              >
                                前往進行生命靈數測驗
                              </button>
                            ) : (
                              <>
                                <p>你的生命靈數是 <strong style={{ color: "#8750BF" }}>{lifePathNumber} 號人</strong>。</p>
                                <p style={{ marginBottom: "1rem" }}>{resultCrystalMap[lifePathNumber]?.description}</p>

                                <h3 className={style.panelTitle2}>✧ 推薦水晶 ✧</h3>
                                {resultCrystalMap[lifePathNumber]?.crystals.map((crystal, index) => (
                                  <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "1rem",
                                      marginBottom: "1rem"
                                    }}
                                  >
                                    <img
                                      src={crystal.image}
                                      alt={crystal.name}
                                      style={{
                                        width: "3.5rem",
                                        height: "3.5rem",
                                        borderRadius: "999px",
                                        objectFit: "cover"
                                      }}
                                    />
                                    <div>
                                      <p style={{ fontWeight: "500", color: "#8750BF" }}>
                                        【{crystal.category}】 {crystal.name} {crystal.en}
                                      </p>
                                      <p style={{ fontSize: "0.8rem", color: "#585858" }}>{crystal.desc}</p>
                                    </div>
                                  </div>
                                ))}

                                <button
                                  className={style.wikiBtn}
                                  onClick={() => {
                                    sessionStorage.removeItem("lifePathNumber");
                                    sessionStorage.removeItem("numtest2-completed");
                                    window.open('#/numtest2', '_blank');
                                  }}
                                >
                                  重新測驗
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 水晶百科 */}
                      {openPanel === "wiki" && (
                        <div className={style.panelInner}>
                          <div className={style.panelHeader}>
                            <h2 className={style.panelTitle}>✦ 水晶分類 ✦</h2>
                            {/* 裝飾線 */}
                            <div className={style.decoDividerMobile2}>
                              <img className={style.dividerLeft} src="images/Custom/deco-divider_purple-left.svg" alt="divider-left" />
                              <hr />
                              <img className={style.dividerRight} src="images/Custom/deco-divider_purple-right.svg" alt="divider-right" />
                            </div>
                            {/* <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" /> */}
                          </div>
                          <div className={style.overlayContent}>
                            {Object.entries(categorizedCrystalInfo).map(([category, crystals]) => (
                              <div key={category} style={{ marginBottom: "1.2rem" }}>
                                <div
                                  onClick={() => toggleCategory(category)}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    color: "#8750BF",
                                    fontSize: "1rem",
                                    marginBottom: "0.3rem",
                                    fontFamily: "'Noto Sans TC', sans-serif",
                                    gap: "0.2rem",
                                    borderBottom: "1px solid #rgb(159, 116, 202)",
                                    paddingBottom: "0.5rem"
                                  }}
                                >
                                  <span>{expandedCategories.includes(category) ? "▾" : "▸"}</span>
                                  ✧ {category} ✧
                                </div>

                                {expandedCategories.includes(category) && (
                                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginLeft: "0.5rem" }}>
                                    {crystals.map((crystal, idx) => (
                                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <img
                                          src={crystal.image}
                                          alt={`${crystal.name} 圖片`}
                                          style={{
                                            width: "3rem",
                                            height: "3rem",
                                            borderRadius: "999rem",
                                            objectFit: "cover",
                                          }}
                                        />
                                        <div>
                                          <p style={{ margin: 0, fontWeight: 500, fontSize: 14, color: "#8750BF" }}>【{crystal.name}】</p>
                                          <p style={{ fontSize: "0.75rem", color: "#585858", paddingLeft: "0.5rem" }}>
                                            {crystal.desc}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}

                            <button
                              onClick={() => window.open('#/KnowledgeCrystal', '_blank')}
                              className={style.wikiBtn}
                            >
                              前往水晶小百科
                            </button>
                          </div>
                        </div>
                      )}

                      {/* 特別訂製 */}
                      {openPanel === "custom" && (
                        <div className={style.panelInner}>
                          <div className={style.panelHeader}>
                            <h2 className={style.panelTitle}>✦ 特別訂製 ✦</h2>
                            {/* 裝飾線 */}
                            <div className={style.decoDividerMobile2}>
                              <img className={style.dividerLeft} src="images/Custom/deco-divider_purple-left.svg" alt="divider-left" />
                              <hr />
                              <img className={style.dividerRight} src="images/Custom/deco-divider_purple-right.svg" alt="divider-right" />
                            </div>
                            {/* <img className={style.decorLine} src="./images/Custom/deco-divider_overlay.png" alt="裝飾線" /> */}
                          </div>

                          <div className={style.overlayContent}>
                            <p style={{ marginBottom: "0.5rem" }}>請留下您的特殊訂製需求，我們將盡快聯繫您：</p>

                            <textarea
                              className={style.customTextarea}
                              placeholder="請輸入您想調整的尺寸、水晶款式、特殊設計需求…"
                              value={customRequest}
                              onChange={(e) => setCustomRequest(e.target.value)}
                            />

                            <button
                              className={style.wikiBtn}
                              onClick={() => {
                                if (customRequest.trim()) {
                                  setShowRequestModal(true);
                                  setCustomRequest("");
                                  setOpenPanel(null);
                                } else {
                                  setShowRequestErrorModal(true); // 顯示錯誤彈窗
                                }
                              }}
                            >
                              送出需求
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                )}
                {/* 特別訂製彈跳視窗(未填資訊) */}
                {showRequestErrorModal && (
                  <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                      <p>請先填寫您的訂製需求內容！</p>
                      <button
                        className={style.btnConfirm}
                        onClick={() => setShowRequestErrorModal(false)}
                      >
                        確認
                      </button>
                    </div>
                  </div>
                )}
                {/* 特別訂製彈跳視窗(已填資訊) */}
                {showRequestModal && (
                  <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                      <p>特別訂製需求已送出，我們將於五個工作天內與您聯繫！</p>
                      <button className={style.btnConfirm} onClick={() => setShowRequestModal(false)}>確認</button>
                    </div>
                  </div>
                )}


                {/* 工具欄 */}
                <div className={style.iconBox2}>
                  <div className={style.icon1Box}>
                    <div className={style.icon1} onClick={() => handlePanelClick("measure")}>
                      <div className={`${style.iconBtn1} ${activePanel === "measure" ? style.active : ""}`}></div>
                      <p>手圍測量</p>
                    </div>
                    <hr className={style.line2} />

                    <div className={style.icon1} onClick={() => handlePanelClick("result")}>
                      <div className={`${style.iconBtn2} ${activePanel === "result" ? style.active : ""}`}></div>
                      <p>測驗結果</p>
                    </div>
                    <hr className={style.line2} />

                    <div className={style.icon1} onClick={() => handlePanelClick("wiki")}>
                      <div className={`${style.iconBtn3} ${activePanel === "wiki" ? style.active : ""}`}></div>
                      <p>水晶百科</p>
                    </div>
                    <hr className={style.line2} />

                    <div className={style.icon1} onClick={() => handlePanelClick("note")}>
                      <div className={`${style.iconBtn4} ${activePanel === "note" ? style.active : ""}`}></div>
                      <p>注意事項</p>
                    </div>
                    <hr className={style.line2} />

                    <div className={style.icon1} onClick={() => handlePanelClick("custom")}>
                      <div className={`${style.iconBtn5} ${activePanel === "custom" ? style.active : ""}`}></div>
                      <p>特別訂製</p>
                    </div>
                  </div>

                  <hr className={style.line3} />

                  {/* 收起箭頭(手機版) */}
                  <div className={style.arrowMobile} onClick={toggleTools}>
                    <p>收回</p>
                    <img className={style.arrowMobileIcon} src="./images/Custom/icon-arrow-purple.svg" alt="" />
                  </div>
                </div>

              </div>


              {/* 加入購物車按鈕 */}
              <div
                className={style.icon2}
                onClick={handleAddToCart}
              >
                <div className={style.btnCart}></div>
                <p>加購物車</p>
              </div>
            </div>
          )}

          {/* 隱藏按鈕：推薦設計款(手機版) */}
          {showTools && (
            <button className={`${style.buttonMobile} ${animating ? style.slideOut : style.slideIn}`}
              onClick={toggleTools}
            >
              <p className={style.recommendDesign}>工具列</p>
              <img src="./images/Numtest/icon-arrow.svg" alt="" />
            </button>
          )}
        </div>




        {/* 加入購物車彈跳視窗 */}
        {showCartModal && (
          <div className={style.modalOverlay2}>
            <div className={style.modalContentLarge}>
              {/* 標題 */}
              <div className={style.previewtopic}>
                <h2>✦ 確認客製化手鍊 ✦</h2>
              </div>

              {/* 預覽商品圖片 */}
              <img src={previewImage} alt="手鍊預覽圖" className={style.previewImg} />

              {/* 商品資訊 */}
              <div className={style.infoBox}>
                <p><strong>名稱 | </strong>{braceletName || '尚未命名'}</p>
                <p><strong>尺寸 | </strong>手圍 {wristSize}cm   串珠{selectedSize}mm</p>
                <p><strong>價格 | </strong>NT${braceletPrice}</p>
              </div>

              {/* 注意事項區塊 */}
              <div className={style.noticeBox}>
                <p>＊ 本商品為純客製化設計，下單後恕不退換 ＊</p>
                <label className={style.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (e.target.checked) {
                        setAgreeError(false); // 勾選後清除錯誤提示
                      }
                    }}
                  />
                  我已閱讀並同意注意事項
                </label>
                {agreeError && (
                  <p className={style.errorText}>請勾選 同意購物注意事項</p>
                )}
              </div>

              {/* 按鈕區塊 */}
              <div className={style.modalButtons}>
                <button
                  className={style.btnConfirm}
                  // onClick={() => {
                  //   if (!agreedToTerms) {
                  //     setAgreeError(true);
                  //     return;
                  //   }

                  //   setAgreeError(false);

                  //   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
                  //   existingCart.push({
                  //     braceletName,
                  //     wristSize,
                  //     selectedSize,
                  //     crystalPlacement,
                  //     selectedMetalImage,
                  //     braceletPrice,
                  //     previewImage,
                  //     createdAt: new Date().toISOString(),
                  //   });
                  //   localStorage.setItem('cart', JSON.stringify(existingCart));
                  //   setShowCartModal(false);
                  //   setAgreedToTerms(false);
                  // }}

                  // 串接購物車
                  onClick={async () => {
                    if (!agreedToTerms) {
                      setAgreeError(true);
                      return;
                    }
                    setAgreeError(false);

                    // 1. 轉出乾淨手鍊圖
                    const image = await renderBraceletToImage({
                      braceletBeads,
                      crystalPlacement,
                      selectedMetalImage,
                      selectedSize,
                      wristSize,
                    });

                    // 2. 放進 CartContext
                    addToCart({
                      isCustom: true,
                      name: braceletName || '客製化手鍊',
                      size: selectedSize,
                      wrist: wristSize,
                      quantity: 1,
                      image,
                      price: braceletPrice,   // 來源：剛剛那個函式
                    });

                    // 3. 關彈窗並跳轉購物車
                    setShowCartModal(false);
                    navigate('/shoppingcart');
                  }}

                >
                  確認加入購物車
                </button>
                <button onClick={() => setShowCartModal(false)}>取消</button>
              </div>
            </div>
          </div>
        )}


        {/* 如何設計彈跳視窗 */}
        {showCrystalGuide && (
          <div className={style.crystalGuideOverlay}>
            <div className={style.crystalGuideContent}>
              {/* 標題 */}
              <h3>✦ 如何設計？ ✦</h3>
              <img className={style.decorLine} src="./images/ShoppingCart/finshed_deco.svg" alt="裝飾線" />

              {/* 內文 */}
              <ul>
                <li>
                  <p>1. 點選手鍊上的大顆珠珠再點水晶(可多選)</p>
                </li>

                <li>
                  <p>2. 先點水晶再點手鍊上的一個大顆珠珠</p>
                </li>

                <li>
                  <p>就能把喜歡的水晶套上去囉！</p>
                </li>
              </ul>

              {/* 按鈕 */}
              <button
                className={style.guideCloseBtn}
                onClick={() => setShowCrystalGuide(false)}
              >
                知道了
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 清除彈跳視窗 */}
      {showConfirmModal && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <p>確定要清除整條手鍊嗎？</p>
            <div className={style.modalButtons}>
              <button className={style.btnConfirm} onClick={handleConfirmClear}>確認</button>
              <button onClick={() => setShowConfirmModal(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
      {/* 儲存彈跳視窗 */}
      {showCustomModal && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <p>手鍊資料儲存成功！</p>
            <button className={style.btnConfirm} onClick={() => setShowCustomModal(false)}>確認</button>
          </div>
        </div>
      )}
      {/* 購物車按鈕(未製作手鍊)彈跳視窗 */}
      {showIncompleteModal && (
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <p>請先完成整條手鍊的設計，才能加入購物車！</p>
            <button className={style.btnConfirm} onClick={() => setShowIncompleteModal(false)}>確認</button>
          </div>
        </div>
      )}



      <CopyrightNotice />
    </>
  )
}
