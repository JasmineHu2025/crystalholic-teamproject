const base = import.meta.env.BASE_URL;

const crystalsData = {
    靈性直覺: [
        {
            name: "藍晶石",
            englishName: "Kyanite",
            image: `${base}images/S-CrystalSingle/crystal-kyanite.png`,
            description: "藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。",
            effects: "促進溝通：幫助開啟喉輪，增強表達與自我溝通。\n情緒平衡：有助緩解焦慮，帶來內心的平靜。\n靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。",
            suitableFor: "追求心靈成長與靈性覺醒的人。\n需要情緒平衡與放鬆的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-angelite.png`,
                    alt: "天使石",
                    category: "放鬆冥想",
                    targetName: "天使石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-amethyst.png`,
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-sunstone.png`,
                    alt: "太陽石",
                    category: "放鬆冥想",
                    targetName: "太陽石"
                }
            ]
        },
        {
            name: "拉長石",
            englishName: "Labradorite",
            image: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
            description: "拉長石是一種帶有彩虹光澤的神秘水晶，常用於靈性覺醒與能量防護，能幫助打開潛意識的大門。",
            effects: "直覺啟動：提升對能量與情緒的敏銳度。\n靈視開發：增強靈視與第六感。\n能量防護：穩定氣場，抵禦外在干擾。",
            suitableFor: "渴望開發直覺與靈性視野的人。\n經常處於高能量環境中工作者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
                    alt: "蘇打石",
                    category: "靈性直覺",
                    targetName: "蘇打石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                }
            ]
        },
        {
            name: "青金石",
            englishName: "Lapis Lazuli",
            image: `${base}images/S-CrystalSingle/crystal-lapislazuli.png`,
            description: "青金石是一種深藍色帶有金色斑點的水晶，自古以來被視為智慧與真理的象徵，能啟動第三眼並促進內在覺察。",
            effects: "激發洞察力：喚醒第三眼，提升直覺與靈性視野。\n促進自省：幫助面對真實的自己，深入探索內在。\n增強溝通：對應喉輪，幫助清晰表達與真誠對話。",
            suitableFor: "想要強化直覺與靈性理解的人。\n需要更深層自我探索與溝通練習者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
                    alt: "蘇打石",
                    category: "靈性直覺",
                    targetName: "蘇打石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                }
            ]
        },
        {
            name: "彼得石",
            englishName: "Pietersite",
            image: `${base}images/S-CrystalSingle/crystal-pietersite.png`,
            description: "彼得石是一種擁有閃電光澤的寶石，被稱為風暴之石，其紋理有上帝的油畫之美名，象徵快速變化中的穩定與靈性覺醒。",
            effects: "直覺啟動：強化靈視與洞察，打開第三眼能量。\n意識轉化：協助面對內在變動與靈性重整。\n夢境連結：提升夢境解析與潛意識探索能力。",
            suitableFor: "正在經歷人生轉變或內在整合的人。\n希望快速強化靈性感知與直覺能力的使用者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-tanzanite.png`,
                    alt: "丹泉石",
                    category: "靈性直覺",
                    targetName: "丹泉石"
                }
            ]
        },

        {
            name: "蘇打石",
            englishName: "Sodalite",
            image: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
            description: "蘇打石具有深藍色與白色脈絡，幫助平衡理性與直覺，是高敏感者常用的能量穩定石。",
            effects: "直覺與邏輯整合：協助靈性思考時不偏不倚。\n冷靜思緒：減少情緒波動與過度腦袋運轉。\n表達清晰：幫助具象化靈感與訊息。",
            suitableFor: "感知力強但常情緒波動的人。\n需要提升專注與自我覺察力者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-lapislazuli.png`,
                    alt: "青金石",
                    category: "靈性直覺",
                    targetName: "青金石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                }
            ]
        },
        {
            name: "丹泉石",
            englishName: "Tanzanite",
            image: `${base}images/S-CrystalSingle/crystal-tanzanite.png`,
            description: "丹泉石是一種珍稀且能量極高的水晶，夢幻的紫藍色調，象徵蛻變與靈性重生，是通往高維智慧與內在覺醒的重要引導石。",
            effects: "靈性覺醒：激發高我連結與靈性意識。\n直覺提升：強化第六感與冥想接收力。\n轉化療癒：協助度過人生重大變化或靈性成長階段。",
            suitableFor: "尋求靈性蛻變、想連結高頻指引的人。\n處於人生轉折期，需要心靈支持與直覺引導者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-pietersite.png`,
                    alt: "彼得石",
                    category: "靈性直覺",
                    targetName: "彼得石"
                }
            ]
        },
        {
            name: "藍方解石",
            englishName: "Blue Calcite",
            image: `${base}images/S-CrystalSingle/crystal-bluecalcite.png`,
            description: "藍方解石是一種淡藍色的柔和水晶，擁有穩定情緒與啟動直覺的力量，是通往內在覺知的重要引導石。",
            effects: "放鬆神經：減少焦慮與過度思考的能量負擔。\n靈性溝通：強化喉輪與第三眼的連動。\n提升接收力：協助接收宇宙靈感與夢境訊息。",
            suitableFor: "需要放鬆心智並開啟直覺感知的人。\n想增進靈性訊息接收能力的靈性初學者或療癒者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
                    alt: "蘇打石",
                    category: "靈性直覺",
                    targetName: "蘇打石"
                }
            ]
        },
        {
            name: "白月光鈣長石",
            englishName: "Albite",
            image: `${base}images/S-CrystalSingle/crystal-albite.png`,
            description: "白月光鈣長石擁有如銀光般細緻的光澤，能協助穩定情緒、釋放潛意識壓力，是夢境引導與靈性啟蒙的重要水晶。",
            effects: "夢境覺察：幫助記錄與解析夢境訊息。\n潛意識清理：釋放內在壓抑情緒與陰影能量。\n靈性對齊：提升能量流動，連結高頻狀態。",
            suitableFor: "進行夢境日記、潛意識探索或靜心練習者。\n在療癒過程中需釋放深層情緒的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                }
            ]
        },
        {
            name: "月光石",
            englishName: "Moonstone",
            image: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
            description: "月光石擁有柔和光澤，象徵女性能量與直覺之美，是與月亮能量連結的重要水晶。",
            effects: "增強直覺：喚醒潛藏的內在感知力。\n情緒穩定：柔化情緒波動，帶來內在平靜。\n助夢境探索與靈性連結。",
            suitableFor: "重視內在情緒與直覺發展的人。\n女性能量工作者與療癒者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-albite.png`,
                    alt: "白月光鈣長石",
                    category: "靈性直覺",
                    targetName: "白月光鈣長石"
                }
            ]
        },
        {
            name: "白水晶",
            englishName: "Clear Quartz",
            image: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
            description: "白水晶是最具通用性的能量石之一，可放大其他水晶能量，也能幫助清理能量與思緒。",
            effects: "能量放大：提升其他水晶功效。\n思緒清晰：清除混亂，集中注意力。\n靈性連結：建立與宇宙的純淨管道。",
            suitableFor: "希望提升靈性覺察或做能量療癒者。\n初學者或希望水晶能發揮最大效能的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-moonstone.png`,
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-amethyst.png`,
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                }
            ]
        }
    ],
    專注工作: [
        {
            name: "黃水晶",
            englishName: "Citrine",
            image: `${base}images/S-CrystalSingle/crystal-citrine.png`,
            description: "黃水晶是一種充滿陽光能量的水晶，能帶來豐盛、自信與實踐力，被譽為財富與行動之石。",
            effects: "激發創意：增強思考與靈感湧現。\n帶動行動：提升積極性與專案推進力。\n吸引財富：聚焦能量與豐盛流動。",
            suitableFor: "需要提升動力與創造力的工作者。\n希望拓展業務與財務穩定者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-rutile-quartz.png`,
                    alt: "鈦晶",
                    category: "專注工作",
                    targetName: "鈦晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-tigerseye.png`,
                    alt: "虎眼石",
                    category: "專注工作",
                    targetName: "虎眼石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-carnelian.png`,
                    alt: "紅瑪瑙",
                    category: "專注工作",
                    targetName: "紅瑪瑙"
                }
            ]
        },
        {
            name: "螢石",
            englishName: "Fluorite",
            image: `${base}images/S-CrystalSingle/crystal-fluorite.png`,
            description: "螢石是一種智慧與邏輯之石，擁有清澈色彩與安定能量，適合強化專注與條理思維。",
            effects: "專注學習：幫助清晰思考與條理化資訊。\n情緒穩定：減緩干擾與心智焦躁。\n提升理解力：促進資訊整合與邏輯推演。",
            suitableFor: "學生、學術研究人員或創意工作者。\n需要整理思緒與提升學習效率者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
                    alt: "蘇打石",
                    category: "專注工作",
                    targetName: "蘇打石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-lapislazuli.png`,
                    alt: "青金石",
                    category: "靈性直覺",
                    targetName: "青金石"
                }
            ]
        },
        {
            name: "鷹眼石",
            englishName: "Hawk’s Eye",
            image: `${base}images/S-CrystalSingle/crystal-hawkseye.png`,
            description: "鷹眼石擁有冷靜沉穩的藍灰色光澤，象徵洞察力與行動力，是職場中強化決斷的能量石。",
            effects: "強化觀察力：看清局勢與細節。\n提升理性：幫助冷靜分析與判斷。\n增強信念：協助堅定方向與目標。",
            suitableFor: "管管理者、策略規劃者、需要冷靜判斷的人、\n正面對重要抉擇與職涯轉變的人",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-tigerseye.png`,
                    alt: "虎眼石",
                    category: "專注工作",
                    targetName: "虎眼石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-labradorite.png`,
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-smokyquartz.png`,
                    alt: "茶晶",
                    category: "放鬆冥想",
                    targetName: "茶晶"
                }
            ]
        },
        {
            name: "虎眼石",
            englishName: "Tiger’s Eye",
            image: `${base}images/S-CrystalSingle/crystal-tigerseye.png`,
            description: "虎眼石是一顆具有金褐色光澤的水晶，象徵決斷與行動，能幫助你勇敢邁出每一步。",
            effects: "強化意志：提升自信與執行力。\n穩定專注：排除猶豫與分心干擾。\n保護能量：增強內在穩定與目標導向。",
            suitableFor: "需要強化執行力或常面對決策挑戰的人、\n在行動與目標上渴望突破自我限制者",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-hawkseye.png`,
                    alt: "鷹眼石",
                    category: "專注工作",
                    targetName: "鷹眼石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-blacktourmaline.png`,
                    alt: "黑碧璽",
                    category: "能量防護",
                    targetName: "黑碧璽"
                }
            ]
        },
        {
            name: "綠幽靈",
            englishName: "Green Phantom",
            image: `${base}images/S-CrystalSingle/crystal-green-phantom.png`,
            description: "綠幽靈是一種包含綠色礦層的水晶，其層層堆疊的結構象徵階段性成長與穩定進展，是被譽為事業水晶的強力實現之石。",
            effects: "目標實現：幫助明確設定目標與階段性計畫。\n事業成長：穩定能量場，吸引貴人與資源。\n內在行動力：引導自我邁向積極、具建設性的方向。",
            suitableFor: "正在創業、轉職、升遷或拓展事業的人。\n需要專注、穩定並提升行動力者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-rutile-quartz.png`,
                    alt: "鈦晶",
                    category: "專注工作",
                    targetName: "鈦晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-fluorite.png`,
                    alt: "螢石",
                    category: "專注工作",
                    targetName: "螢石"
                }
            ]
        },

        {
            name: "鈦晶",
            englishName: "Rutile Quartz",
            image: `${base}images/S-CrystalSingle/crystal-rutile-quartz.png`,
            description: "鈦晶是內含金色針狀物的水晶，被視為聚財與突破瓶頸的行動之石，具有強大的推進能量。",
            effects: "聚財能量：吸引資源與機會流動。\n激發目標：突破遲滯與能量封鎖。\n行動推進：適合進行重大計畫與事業開拓。",
            suitableFor: "創業者、領導者或正在進行目標衝刺的人，\n亦適合在事業轉型期尋求突破與資源整合者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-smokyquartz.png`,
                    alt: "茶晶",
                    category: "放鬆冥想",
                    targetName: "茶晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                }
            ]
        },
        {
            name: "海藍寶",
            englishName: "Aquamarine",
            image: `${base}images/S-CrystalSingle/crystal-aquamarine.png`,
            description: "海藍寶是一種清澈淡藍色的晶體，被譽為溝通與智慧之石，幫助清晰表達、釐清思緒並減少焦慮。",
            effects: "清晰溝通：增強語言表達與邏輯思路。\n情緒安定：減少緊張感、提升理性與穩定力。\n靈感流動：協助釐清內心聲音與直觀反應。",
            suitableFor: "需要進行簡報、表達、會議協調與溝通對談者。\n容易緊張、腦袋混亂或臨場反應不佳者。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
                    alt: "蘇打石",
                    category: "專注工作",
                    targetName: "蘇打石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-fluorite.png`,
                    alt: "螢石",
                    category: "專注工作",
                    targetName: "螢石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                }
            ]
        },
        {
            name: "紫螢石",
            englishName: "Purple Fluorite",
            image: `${base}images/S-CrystalSingle/crystal-purplefluorite.png`,
            description: "紫螢石具備高度智慧與安定波頻，是強化創意思維與深入專注的絕佳水晶。",
            effects: "創意啟動：激發靈感與抽象思維能力。\n專注穩定：減少腦部雜訊與疲勞。\n靜心清明：有助冥想與靈感釐清。",
            suitableFor: "從事創作、設計、研究與教學的人，\n或正面臨思緒混亂、需要提升專注與心靈清明的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-fluorite.png`,
                    alt: "螢石",
                    category: "專注工作",
                    targetName: "螢石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`,
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-lapislazuli.png`,
                    alt: "青金石",
                    category: "靈性直覺",
                    targetName: "青金石"
                }
            ]
        },
        {
            name: "蘇打石",
            englishName: "Sodalite",
            image: `${base}images/S-CrystalSingle/crystal-sodalite.png`,
            description: "蘇打石是一顆提升邏輯與溝通表達的寶石，協助理性對話與思路清晰，是團隊合作的好幫手。",
            effects: "條理清晰：幫助分析與有系統表達。\n邏輯推演：提升策略規劃與問題拆解力。\n合作溝通：促進理解與協調。",
            suitableFor: "講師、專案主持人、行銷與溝通相關職務者，\n或常需進行團隊溝通與邏輯思考的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-fluorite.png`,
                    alt: "螢石",
                    category: "專注工作",
                    targetName: "螢石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-aquamarine.png`,
                    alt: "海藍寶",
                    category: "專注工作",
                    targetName: "海藍寶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                }
            ]
        },
        {
            name: "紅瑪瑙",
            englishName: "Carnelian",
            image: `${base}images/S-CrystalSingle/crystal-carnelian.png`,
            description: "紅瑪瑙是一顆充滿生命力的水晶，能激發動力與自信，適合需要推進行動與積極面對挑戰的人。",
            effects: "行動力啟動：帶動積極性與執行欲望。\n穩定信念：強化決心與心理韌性。\n情緒轉化：排除拖延與自我懷疑。",
            suitableFor: "拖延型創作者、行動力不足或意志不穩定者，\n或正處於目標初期階段、需要推進力的人。",
            recommended: [
                {
                    src: `${base}images/S-CrystalSingle/crystal-citrine.png`,
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-tigerseye.png`,
                    alt: "虎眼石",
                    category: "專注工作",
                    targetName: "虎眼石"
                },
                {
                    src: `${base}images/S-CrystalSingle/crystal-rutile-quartz.png`,
                    alt: "鈦晶",
                    category: "專注工作",
                    targetName: "鈦晶"
                }
            ]
        }
    ],
    愛與人際: [
        {
            name: "菫青石",
            englishName: "Iolite",
            image: `${base}images/S-CrystalSingle/crystal-iolite.png`,
            description: "菫青石雖偏靜心導向，但對於情感釐清與溝通也極具幫助，協助理解他人與自己的需求。",
            effects: "釐清困惑：協助看清感情糾結與真實想法。\n增進理解：提升溝通力與人際理解。\n整合理性與直覺：幫助做出平衡決策。",
            suitableFor: "人際溝通困難、感情混亂的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-iolite.png`, alt: "菫青石", category: "放鬆冥想", targetName: "菫青石" },
                { src: `${base}images/S-CrystalSingle/crystal-amethyst.png`, alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: `${base}images/S-CrystalSingle/crystal-sodalite.png`, alt: "蘇打石", category: "靈性直覺", targetName: "蘇打石" }
            ]
        },
        {
            name: "粉紫水晶",
            englishName: "Lilac Amethyst",
            image: `${base}images/S-CrystalSingle/crystal-lilac-amethyst.png`,
            description: "兼具紫水晶的穩定力量與粉晶的溫柔能量，安撫焦慮與雜念，溫柔地敞開內心，吸引真誠的情感連結，讓心靈更平衡自在。",
            effects: "放鬆情緒：穩定情緒波動與內心焦慮。\n溫柔覺察：引導愛與自我接納流動。\n人際平衡：提升共感力與理解他人感受。",
            suitableFor: "敏感而害怕受傷、需要安心關係的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-rosequartz.png`, alt: "玫瑰石英", category: "愛與人際", targetName: "玫瑰石英" },
                { src: `${base}images/S-CrystalSingle/crystal-moonstone.png`, alt: "月光石", category: "放鬆冥想", targetName: "月光石" },
                { src: `${base}images/S-CrystalSingle/crystal-labradorite.png`, alt: "拉長石", category: "靈性直覺", targetName: "拉長石" }
            ]
        },
        {
            name: "紅瑪瑙",
            englishName: "Carnelian",
            image: `${base}images/S-CrystalSingle/crystal-carnelian.png`,
            description: "紅瑪瑙不僅帶來行動力，也能在戀愛中激發勇氣與自信，真誠表達內心情感，邁出關鍵一步，吸引對等而熱烈的情感連結。",
            effects: "行動力：提升戀愛積極性與自信表現。\n吸引力：展現個人魅力與能量磁場。\n情感穩定：協助面對關係波動與不安。",
            suitableFor: "害羞、戀愛遲疑或自信不足的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-rubellite.png`, alt: "紅碧璽", category: "愛與人際", targetName: "紅碧璽" },
                { src: `${base}images/S-CrystalSingle/crystal-garnet.png`, alt: "紅石榴石", category: "愛與人際", targetName: "紅石榴石" },
                { src: `${base}images/S-CrystalSingle/crystal-citrine.png`, alt: "黃水晶", category: "專注工作", targetName: "黃水晶" }
            ]
        },
        {
            name: "紅石榴石",
            englishName: "Garnet",
            image: `${base}images/S-CrystalSingle/crystal-garnet.png`,
            description: "石榴石象徵深沉且忠貞不渝的愛，能喚醒內在的力量，提升伴侶間的信任與連結，穩固關係，使愛情更加穩定長久。",
            effects: "情感連結：強化伴侶間能量共鳴。\n穩固關係：增加忠誠與承諾能量。\n提升信任：穩定感情互動與情緒回應。",
            suitableFor: "已在感情中、想經營穩定關係的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-carnelian.png`, alt: "紅瑪瑙", category: "愛與人際", targetName: "紅瑪瑙" },
                { src: `${base}images/S-CrystalSingle/crystal-golden-strawberry-quartz.png`, alt: "草莓晶", category: "愛與人際", targetName: "草莓晶" },
                { src: `${base}images/S-CrystalSingle/crystal-smokyquartz.png`, alt: "茶晶", category: "能量防護", targetName: "茶晶" }
            ]
        },
        {
            name: "海洋碧玉",
            englishName: "Ocean Jasper",
            image: `${base}images/S-CrystalSingle/crystal-oceanjasper.png`,
            description: "海洋碧玉帶有歡樂與流動的特質，如海浪般柔和而富有節奏，能釋放緊張情緒、提升親和力，是促進輕鬆交流的療癒之石。",
            effects: "人際流動：營造輕鬆自在的人際環境。\n促進善意：增強溝通與包容互動。\n歡樂能量：帶來愉悅與心情釋放。",
            suitableFor: "想改善人際圈、增強交流順利度的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`, alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: `${base}images/S-CrystalSingle/crystal-rosequartz.png`, alt: "玫瑰石英", category: "愛與人際", targetName: "玫瑰石英" },
                { src: `${base}images/S-CrystalSingle/crystal-citrine.png`, alt: "黃水晶", category: "專注工作", targetName: "黃水晶" }
            ]
        },
        {
            name: "玫瑰石英",
            englishName: "Rose Quartz",
            image: `${base}images/S-CrystalSingle/crystal-rosequartz.png`,
            description: "玫瑰石英是最經典的愛情水晶，擁有溫柔粉色能量，象徵無條件的愛與心輪療癒。",
            effects: "打開心輪：喚醒愛與情感流動。\n促進包容：幫助接納自己與他人。\n修復人際：帶來關係的溫柔療癒。",
            suitableFor: "渴望愛情、修補人際關係、提升自我愛的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-moonstone.png`, alt: "月光石", category: "放鬆冥想", targetName: "月光石" },
                { src: `${base}images/S-CrystalSingle/crystal-clearquartz.png`, alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: `${base}images/S-CrystalSingle/crystal-rubellite.png`, alt: "紅碧璽", category: "愛與人際", targetName: "紅碧璽" }
            ]
        },
        {
            name: "草莓晶",
            englishName: "Strawberry",
            image: `${base}images/S-CrystalSingle/crystal-golden-strawberry-quartz.png`,
            description: "草莓晶散發溫潤柔和的紅粉能量，有助吸引桃花與提升戀愛運，是甜美愛情能量的代表。",
            effects: "增強桃花：提升戀愛運與人緣。\n甜美吸引：展現柔和與女性魅力。\n自我肯定：培養被愛的信心。",
            suitableFor: "正在尋找戀愛對象或希望提升戀愛運的人",
            recommended: [
                { src: `${base}images/S-CrystalSingle/crystal-rosequartz.png`, alt: "玫瑰石英", category: "愛與人際", targetName: "玫瑰石英" },
                { src: `${base}images/S-CrystalSingle/crystal-rhodochrosite.png`, alt: "紅紋石", category: "愛與人際", targetName: "紅紋石" },
                { src: `${base}images/S-CrystalSingle/crystal-garnet.png`, alt: "紅石榴石", category: "愛與人際", targetName: "紅石榴石" }
            ]
        },
        {
            name: "紅紋石",
            englishName: "Rhodochrosite",
            image: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
            description: "紅紋石的玫瑰紅與海浪般的白色流紋，有助於療癒情感與修復內在小孩，給你溫柔的能量，重新喚回愛與被愛的能力。",
            effects: "療癒創傷：釋放過往情感陰影。\n喚醒溫柔：啟動內在小孩與愛的流動。\n開放心輪：幫助重新感受愛與被愛。",
            suitableFor: "情感受過傷、希望重新敞開心房的人",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-pinkquartz.png", alt: "粉晶", category: "愛與人際", targetName: "粉晶" },
                { src: "./images/S-CrystalSingle/crystal-moonstone.png", alt: "月光石", category: "放鬆冥想", targetName: "月光石" },
                { src: "./images/S-CrystalSingle/crystal-rubellite.png", alt: "紅碧璽", category: "愛與人際", targetName: "紅碧璽" }
            ]
        },
        {
            name: "粉晶",
            englishName: "Pink Quartz",
            image: "./images/S-CrystalSingle/crystal-pinkquartz.png",
            description: "粉晶與玫瑰石英能量相似，但更加偏向於柔和內斂的愛與療癒，協助建立自愛與穩定情感。",
            effects: "柔性愛能量：釋放恐懼與心牆。\n情感安撫：帶來平靜與自我關懷。\n關係修補：協助建立穩定情感連結。",
            suitableFor: "缺乏安全感、想重新相信愛與人際連結的人",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-lilac-amethyst.png", alt: "粉紫水晶", category: "愛與人際", targetName: "粉紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-tridacna.png", alt: "硨磲石", category: "能量防護", targetName: "硨磲石" },
                { src: "./images/S-CrystalSingle/crystal-rosequartz.png", alt: "玫瑰石英", category: "愛與人際", targetName: "玫瑰石英" }
            ]
        },
        {
            name: "紅碧璽",
            englishName: "Rubellite",
            image: "./images/S-CrystalSingle/crystal-rubellite.png",
            description: "紅碧璽是強力的情感激發石，促進愛情能量的流動，幫助打開心輪，釋放壓抑的愛意與渴望，讓關係更坦誠親密。",
            effects: "激發情感：喚醒愛情熱度與慾望。\n鼓勵表達：幫助說出真實情緒。\n戀愛推進：增強親密與互動意願。",
            suitableFor: "戀愛中感到冷淡或情感表達困難者",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-rhodochrosite.png", alt: "紅紋石", category: "愛與人際", targetName: "紅紋石" },
                { src: "./images/S-CrystalSingle/crystal-pinkquartz.png", alt: "粉晶", category: "愛與人際", targetName: "粉晶" },
                { src: "./images/S-CrystalSingle/crystal-carnelian.png", alt: "紅瑪瑙", category: "愛與人際", targetName: "紅瑪瑙" }
            ]
        }
    ],
    能量防護: [
        {
            name: "黑曜石",
            englishName: "Obsidian",
            image: "./images/S-CrystalSingle/crystal-blackobsidian.png",
            description: "黑曜石是一種天然火山玻璃，具強大的負能量吸附與防護功能，是最經典的能場保護水晶之一。",
            effects: "氣場清理：吸收周遭負能量並協助排出體內濁氣。\n能量屏障：形成保護罩避免能量干擾與攻擊。\n情緒釋放：協助釋放內在壓力與潛藏情緒。",
            suitableFor: "長期處在高壓、人際複雜或能量混亂環境的人。\n靈性工作者或想強化自身氣場的人。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
                    alt: "雪花黑曜石",
                    category: "能量防護",
                    targetName: "雪花黑曜石"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
                    alt: "黑碧璽",
                    category: "能量防護",
                    targetName: "黑碧璽"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                }
            ]
        },
        {
            name: "金曜石",
            englishName: "Gold Obsidian",
            image: "./images/S-CrystalSingle/crystal-goldobsidian.png",
            description: "金曜石象徵光明照進黑暗，能深入潛意識協助轉化陰影與建立能量防護罩，是極具力量的靈性護盾。",
            effects: "能量防護：建立氣場屏障，隔絕負面能量干擾。\n陰影整合：協助面對潛藏情緒與未解的內在議題。\n穩定地氣：提供實際支持感與穩定的安全基礎。",
            suitableFor: "需要防護外界干擾或負能量的人。\n正在做內在探索、陰影整合或轉化療癒者。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
                    alt: "黑碧璽",
                    category: "能量防護",
                    targetName: "黑碧璽"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-smokyquartz.png",
                    alt: "茶晶",
                    category: "放鬆冥想",
                    targetName: "茶晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-labradorite.png",
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                }
            ]
        },
        {
            name: "黑碧璽",
            englishName: "Tourmaline",
            image: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
            description: "黑碧璽是最具能量防護力的水晶，能有效吸收與轉化負能量，並穩定自身氣場，是職場與靈性實踐中最受信任的保護石。",
            effects: "氣場防護：建立能量屏障，防止外界干擾與情緒。\n情緒穩定：減緩緊張、焦慮與能量混亂。\n地氣連結：強化根部，提升內在安全與行動力。",
            suitableFor: "長期處於人際壓力或能量混亂環境的人。\n敏感體質、易受影響、情緒容易失衡者。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-smokyquartz.png",
                    alt: "茶晶",
                    category: "放鬆冥想",
                    targetName: "茶晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-goldobsidian.png",
                    alt: "金曜石",
                    category: "能量防護",
                    targetName: "金曜石"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-labradorite.png",
                    alt: "拉長石",
                    category: "靈性直覺",
                    targetName: "拉長石"
                }
            ]
        },
        {
            name: "雪花黑曜石",
            englishName: "Snowflake O.",
            image: "./images/S-CrystalSingle/crystal-snowflakeobsidian.png",
            description: "雪花黑曜石是一種具有白色斑點的火山玻璃，能平衡陰陽能量並協助自我反思，具有強大的保護與情緒轉化作用。",
            effects: "能量平衡：協調情緒能場與內在衝突。\n清理情緒：釋放壓抑與潛藏的創傷能量。\n穩定防護：建立內在穩定結界，抵禦負面波動。",
            suitableFor: "情緒敏感或容易被他人影響的人。\n需要深入自我整合與能量保護的人。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-blackobsidian.png", alt: "黑曜石", category: "能量防護", targetName: "黑曜石" },
                { src: "./images/S-CrystalSingle/crystal-amethyst.png", alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-smokyquartz.png", alt: "茶晶", category: "放鬆冥想", targetName: "茶晶" }
            ]
        },
        {
            name: "黑銀曜石",
            englishName: "Silver Sheen O.",
            image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
            description: "黑銀曜石表面呈現銀色光澤，象徵內在洞察與能量防護，適合需要看清真相與穩固自我界線的人使用。",
            effects: "心靈保護：阻隔情緒干擾與負能量渲染。\n提升洞察：看見潛意識中的模式與真相。\n自我連結：穩定能場，深化內在力量。",
            suitableFor: "靈性工作者、情緒敏感族群、能量療癒師，\n或經常處於複雜人際與高壓環境中者。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-goldobsidian.png", alt: "金曜石", category: "能量防護", targetName: "金曜石" },
                { src: "./images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: "./images/S-CrystalSingle/crystal-blacktourmaline.png", alt: "黑碧璽", category: "能量防護", targetName: "黑碧璽" }
            ]
        },
        {
            name: "紅紋石",
            englishName: "Rhodochrosite",
            image: "./images/S-CrystalSingle/crystal-rhodochrosite.png",
            description: "紅紋石除了溫柔的情感療癒能量，也能協助在關係中設立健康界線，是一顆兼具保護與柔軟的水晶。",
            effects: "建立界線：守護內在空間與情感完整性。\n情緒療癒：撫平創傷，激發愛與自我價值。\n溫柔防護：在不失開放的前提下保持能場穩定。",
            suitableFor: "在人際中容易過度付出與能量流失者。\n需要學會說不、照顧自己界線的人。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-rosequartz.png", alt: "玫瑰石英", category: "愛與人際", targetName: "玫瑰石英" },
                { src: "./images/S-CrystalSingle/crystal-amethyst.png", alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-blacktourmaline.png", alt: "黑碧璽", category: "能量防護", targetName: "黑碧璽" }
            ]
        },
        {
            name: "黑鐵礦",
            englishName: "Hematite",
            image: "./images/S-CrystalSingle/crystal-hematite.png",
            description: "黑鐵礦帶有金屬光澤，以強大的地氣與穩定能量著稱。有助集中注意力、排除負能量，並加強身體與地面的連結感",
            effects: "地氣穩定：強化根部連結與行動實踐。\n防護結界：隔離外界情緒干擾與負面投射。\n專注定心：清除雜念並提升專注執行力。",
            suitableFor: "易焦慮、能量浮動大、難以集中精神的人。\n需要穩定根基與保護氣場的療癒師與職場工作者。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-smokyquartz.png",
                    alt: "茶晶",
                    category: "能量防護",
                    targetName: "茶晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
                    alt: "黑碧璽",
                    category: "能量防護",
                    targetName: "黑碧璽"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-carnelian.png",
                    alt: "紅瑪瑙",
                    category: "專注工作",
                    targetName: "紅瑪瑙"
                }
            ]
        },
        {
            name: "硨磲石",
            englishName: "Tridacna",
            image: "./images/S-CrystalSingle/crystal-tridacna.png",
            description: "硨磲石是海洋能量與佛教文化相連的聖石，有著淨化心念與提升正能量的功效，可穩定磁場並驅逐負面思緒。",
            effects: "磁場淨化：清除雜念與心靈混亂。\n心性安定：提升慈悲頻率與內在和平。\n柔性防護：在柔和中形成能量結界。",
            suitableFor: "靈性修行、冥想或容易心浮氣躁者，\n特別適合追求內在平靜與能量淨化的療癒愛好者。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: "./images/S-CrystalSingle/crystal-amethyst.png", alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-labradorite.png", alt: "拉長石", category: "靈性直覺", targetName: "拉長石" }
            ]
        },
        {
            name: "龍血石",
            englishName: "Bloodstone",
            image: "./images/S-CrystalSingle/crystal-bloodstone.png",
            description: "龍血石是一種具有綠紅斑紋的保護石，融合了勇氣、耐力與抗壓能量，常被視為戰士之石。",
            effects: "強化氣場：提升生命力與能量耐受度。\n行動保護：在行動與挑戰中穩定自我。\n戰士精神：激發堅持與面對逆境的勇氣。",
            suitableFor: "面對挑戰、轉變或易消耗能量的環境者，\n特別適合需要持續堅持與承受壓力的工作者或療癒者。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-hematite.png", alt: "黑鐵礦", category: "能量防護", targetName: "黑鐵礦" },
                { src: "./images/S-CrystalSingle/crystal-carnelian.png", alt: "紅瑪瑙", category: "專注工作", targetName: "紅瑪瑙" },
                { src: "./images/S-CrystalSingle/crystal-blacktourmaline.png", alt: "黑碧璽", category: "能量防護", targetName: "黑碧璽" }
            ]
        }
    ],
    放鬆冥想: [
        {
            name: "紫水晶",
            englishName: "Amethyst",
            image: "./images/S-CrystalSingle/crystal-amethyst.png",
            description: "紫水晶是一種高頻能量的靈性水晶，象徵智慧與平靜，能淨化心靈並帶來內在穩定。",
            effects: "放鬆情緒：減緩焦慮與壓力、助眠鎮定。\n靈性提升：幫助冥想、連結高我與宇宙智慧。\n守護能量：淨化負能量並保護氣場。",
            suitableFor: "容易焦慮、睡眠不佳的人。\n希望提升直覺與靈性修行者。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-rosequartz.png",
                    alt: "玫瑰石英",
                    category: "愛與人際",
                    targetName: "玫瑰石英"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-clearquartz.png",
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-angelite.png",
                    alt: "天使石",
                    category: "放鬆冥想",
                    targetName: "天使石"
                }
            ]
        },
        {
            name: "天使石",
            englishName: "Angelite",
            image: "./images/S-CrystalSingle/crystal-angelite.png",
            description: "天使石是一種溫柔的淡藍色水晶，象徵和平與靜心，常被視為與天使界連結的橋樑，能帶來深層的寧靜與支持感。",
            effects: "情緒安撫：舒緩緊張與焦慮，帶來內在平靜。\n靈性連結：提升直覺，協助與高我或天使溝通。\n和平能量：營造安全、柔和、保護的能量場。",
            suitableFor: "情緒敏感、容易緊張的人。\n希望透過冥想或靈性練習獲得守護與安定感者。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-moonstone.png",
                    alt: "月光石",
                    category: "靈性直覺",
                    targetName: "月光石"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-rosequartz.png",
                    alt: "玫瑰石英",
                    category: "愛與人際",
                    targetName: "玫瑰石英"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                }
            ]
        },

        {
            name: "太陽石",
            englishName: "Sunstone",
            image: "./images/S-CrystalSingle/crystal-sunstone.png",
            description: "太陽石是一種帶有金橘色光澤的水晶，象徵溫暖、活力與正向能量，能喚醒內在的生命力與快樂感。",
            effects: "提升活力：驅散憂鬱與疲憊感，喚起生命熱情。\n自信增強：激發內在陽性能量，重拾自我價值。\n情緒療癒：帶來希望、樂觀與溫暖感受。",
            suitableFor: "缺乏動力與熱情的人。\n需要正能量提振情緒的人。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-citrine.png",
                    alt: "黃水晶",
                    category: "專注工作",
                    targetName: "黃水晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-rosequartz.png",
                    alt: "玫瑰石英",
                    category: "愛與人際",
                    targetName: "玫瑰石英"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                }
            ]
        },
        {
            name: "茶晶",
            englishName: "Smoky Quartz",
            image: "./images/S-CrystalSingle/crystal-smokyquartz.png",
            description: "茶晶是一種灰棕色調的水晶，以穩定與排毒聞名。它能協助排出負面情緒與雜念，穩固內在信念，是高壓生活的守護石。",
            effects: "能量釋放：協助釋放壓力、恐懼與焦慮。\n磁場穩定：穩定身心靈氣場，帶來踏實感。\n負能清理：清除體內累積的情緒毒素與雜亂能量。",
            suitableFor: "壓力過大、情緒易累積或經常處於忙碌環境中的人。\n需要地氣與穩定支撐的人。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-blacktourmaline.png",
                    alt: "黑碧璽",
                    category: "能量防護",
                    targetName: "黑碧璽"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-hematite.png",
                    alt: "黑鐵礦",
                    category: "能量防護",
                    targetName: "黑鐵礦"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                }
            ]
        },
        {
            name: "菫青石",
            englishName: "Iolite",
            image: "./images/S-CrystalSingle/crystal-iolite.png",
            description: "菫青石是一種帶有神秘紫藍色調的水晶，能幫助釐清混亂思緒、強化內在導引，是冥想與視覺化練習中的靈性之石。",
            effects: "釐清思緒：協助從焦躁中回到中心點。\n直覺開啟：加強第三眼與靈視覺化。\n冥想引導：幫助聚焦並進入深度冥想狀態。",
            suitableFor: "腦袋常打結、情緒反覆者。\n需要靈性練習與意念導引幫助者。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-amethyst.png", alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-sodalite.png", alt: "蘇打石", category: "靈性直覺", targetName: "蘇打石" },
                { src: "./images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶", category: "靈性直覺", targetName: "白水晶" }
            ]
        },
        {
            name: "天青石",
            englishName: "Celestite",
            image: "./images/S-CrystalSingle/crystal-celestite.png",
            description: "天青石散發出平靜與祥和的頻率，能協助放鬆神經系統、緩和緊張情緒，是非常適合冥想與睡前放鬆的水晶。",
            effects: "穩定神經：減緩壓力與焦躁情緒。\n靜心入眠：幫助冥想與放鬆入睡。\n靈性共鳴：提升心靈寧靜與和平感。",
            suitableFor: "睡眠障礙、神經緊繃或能量敏感者，特別適合在身心疲憊、\n入眠困難或需要靜心沉澱時使用，幫助回歸平靜與安穩。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-angelite.png", alt: "天使石", category: "放鬆冥想", targetName: "天使石" },
                { src: "./images/S-CrystalSingle/crystal-amethyst.png", alt: "紫水晶", category: "放鬆冥想", targetName: "紫水晶" },
                { src: "./images/S-CrystalSingle/crystal-bluecalcite.png", alt: "藍方解石", category: "放鬆冥想", targetName: "藍方解石" }
            ]
        },
        {
            name: "綠螢石",
            englishName: "Green Fluorite",
            image: "./images/S-CrystalSingle/crystal-greenfluorite.png",
            description: "綠螢石具有淨化思緒與安撫心輪的功效，能協助釋放雜念、整理混亂狀態，非常適合在靜心與放鬆時使用。",
            effects: "釐清雜念：協助從混亂回到安定中心。\n能量整理：穩定思緒與心輪能場。\n靜心作用：支持冥想時的專注與平和。",
            suitableFor: "容易分心、精神雜亂或情緒低落者，\n特別適合在壓力大、或想重建內在秩序時使用。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-smokyquartz.png", alt: "茶晶", category: "放鬆冥想", targetName: "茶晶" },
                { src: "./images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: "./images/S-CrystalSingle/crystal-rosequartz.png", alt: "粉晶", category: "放鬆冥想", targetName: "粉晶" }
            ]
        },
        {
            name: "黑銀曜石",
            englishName: "Silver Sheen O.",
            image: "./images/S-CrystalSingle/crystal-silversheenobsidian.png",
            description: "黑銀曜石不僅具有強大的能量防護作用，也能協助內在反思、釐清混亂思緒，是進入深層冥想與自我探索的優秀助手。",
            effects: "能量隔離：避免干擾，讓冥想更安定。\n內省輔助：看見潛意識中的情緒模式。\n心念沉澱：清理思緒並帶來平靜力量。",
            suitableFor: "靈性探索者與情緒敏感、容易受外界干擾的人，\n亦適合正在進行內在整合、冥想練習的人。",
            recommended: [
                { src: "./images/S-CrystalSingle/crystal-clearquartz.png", alt: "白水晶", category: "靈性直覺", targetName: "白水晶" },
                { src: "./images/S-CrystalSingle/crystal-smokyquartz.png", alt: "茶晶", category: "放鬆冥想", targetName: "茶晶" },
                { src: "./images/S-CrystalSingle/crystal-hematite.png", alt: "黑鐵礦", category: "能量防護", targetName: "黑鐵礦" }
            ]
        },
        {
            name: "方鈉石",
            englishName: "Hackmanite",
            image: "./images/S-CrystalSingle/crystal-hackmanite.png",
            description: "方鈉石是稀有的變色水晶，帶有淡紫或灰紫色調，溫和而神秘，能協助釋放情緒與促進內在清理，有助深度冥想與靜心。",
            effects: "潛意識釋放：幫助釐清壓抑情緒與內在糾結。\n能量清理：提升靈性頻率，帶來內在明晰。\n深度冥想：支援靜心時的情緒療癒與覺察。",
            suitableFor: "想深入療癒內在與進入靜心狀態的使用者，\n亦適合從事心理諮商、靈性療癒或欲深入潛意識探索的人。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-amethyst.png",
                    alt: "紫水晶",
                    category: "放鬆冥想",
                    targetName: "紫水晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-bluecalcite.png",
                    alt: "藍方解石",
                    category: "靈性直覺",
                    targetName: "藍方解石"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-clearquartz.png",
                    alt: "白水晶",
                    category: "靈性直覺",
                    targetName: "白水晶"
                }
            ]
        },
        {
            name: "粉方解石",
            englishName: "Pink Calcite",
            image: "./images/S-CrystalSingle/crystal-pinkcalcite.png",
            description: "粉方解石是一種溫柔的水晶，具備心輪療癒能量，適用於釋放情感創傷、自我寬容，協助冥想時達到溫柔穩定的狀態。",
            effects: "情緒療癒：撫慰傷痛、建立自我寬容。\n心輪淨化：釋放過去的情緒殘留與創傷。\n放鬆安撫：協助冥想時放鬆並感受到安全感。",
            suitableFor: "需要內在修復、處於心靈脆弱狀態或渴望被溫柔包覆的人，\n亦適合正經歷轉變、渴望重拾自我愛與平衡的人。",
            recommended: [
                {
                    src: "./images/S-CrystalSingle/crystal-rosequartz.png",
                    alt: "粉晶",
                    category: "放鬆冥想",
                    targetName: "粉晶"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-moonstone.png",
                    alt: "月光石",
                    category: "放鬆冥想",
                    targetName: "月光石"
                },
                {
                    src: "./images/S-CrystalSingle/crystal-tridacna.png",
                    alt: "硨磲石",
                    category: "能量防護",
                    targetName: "硨磲石"
                }
            ]
        }

    ]
};

export default crystalsData;
