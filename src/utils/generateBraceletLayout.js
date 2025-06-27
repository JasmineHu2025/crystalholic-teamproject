// utils/generateBraceletLayout.js



export function generateBraceletLayout(crystalSize = 8, wristSize = 16) {
  const pairCountMap = {
    8: {
      13: 12,
      14: 13,
      15: 14,
      16: 15,
      17: 16,
      18: 17,
    },
    10: {
      13: 10,
      14: 11,
      15: 12,
      16: 13,
      17: 14,
      18: 14,
    },
  };

  const pairCount =
    pairCountMap[crystalSize]?.[wristSize] || 9; // fallback: 9對

  const layout = [];
  for (let i = 0; i < pairCount; i++) {
    layout.push("metal");
    layout.push("crystal");
  }

  return layout;
}
export function calculateRadius(wristSize) {
  const wristLengthMM = wristSize * 10;
  const radius = wristLengthMM / (2 * Math.PI)*1.2;
  return radius;
}

export function calculateBeadAngles(beads, crystalSize) {
  // 統一壓縮係數，控制珠子之間間距（越大越疏鬆）
  const compressionRatioMap = {
    8: 1,
    10: 0.85,
  };
  const compressionRatio = compressionRatioMap[crystalSize] || 1;
  const metalSize = 3;

  // 根據水晶尺寸給不同的比例微調，確保各尺寸對齊視覺
  const adjustmentMap = {
    8: { metalRatio: 2.1, crystalRatio: 0.8 },
    10: { metalRatio: 2.5, crystalRatio: 0.76 },
  };

  // 若找不到對應尺寸則 fallback
  const { metalRatio, crystalRatio } = adjustmentMap[crystalSize] || {
    metalRatio: 2,
    crystalRatio: 1,
  };

  // const beadDistances = beads.map((bead) =>
  //   (bead === "metal"
  //     ? metalSize * metalRatio
  //     : crystalSize * crystalRatio) * compressionRatio
  // );
  const beadDistances = beads.map((bead) =>
  (bead?.type === "metal"
    ? metalSize * metalRatio
    : crystalSize * crystalRatio) * compressionRatio
);

  const totalLength = beadDistances.reduce((sum, d) => sum + d, 0);

  return beadDistances.map((d) => (d / totalLength) * 360);
}
