/**
 * 將當前手鍊配置轉出成 300×300 預覽圖（@3x 畫質）
 * ----------------------------------------------------
 * - baseSize  固定 300px → 最終顯示框
 * - scale     圖片解析度倍率（3 = 900×900 實際像素）
 * - pxPerMm   1 mm 換算幾 px；水晶珠 = selectedSize × pxPerMm
 * - metalCoef 金屬珠直徑係數（相對於 1 mm）
 * - radius    依目前最大珠徑 + margin + extraTight 計算
 */
export async function renderBraceletToImage({
  braceletBeads,
  crystalPlacement,
  selectedMetalImage,
  selectedSize,   // 8 or 10 (mm)
  scale = 3
}) {
  /* === 視覺框 & 轉換參數 === */
  const baseSize  = 300;   // 最終顯示寬高
  const pxPerMm   = 3.5;     // 1 mm ≈ 3 px
  const metalCoef = 5.5;     // 金屬珠直徑：4 × 3 = 12 px
  const margin    = 12;    // 預留空白
  const extraTight = 3;    // 再貼近 6 px（讓大小珠貼齊）

  /* === 幾何計算 === */
  const crystalPx = selectedSize * pxPerMm;              // 水晶珠直徑 (24 / 30 px)
  const maxBeadPx = Math.max(crystalPx, metalCoef * pxPerMm);
  const radius    = (baseSize - maxBeadPx) / 2 - margin - extraTight;

  /* === 建立高解析度畫布 === */
  const canvas = document.createElement('canvas');
  canvas.width  = baseSize * scale;   // 900
  canvas.height = baseSize * scale;   // 900
  canvas.style.width  = `${baseSize}px`;
  canvas.style.height = `${baseSize}px`;

  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);            // 之後座標全部用「視覺單位」

  /* === 畫圓形手鍊 === */
  const center   = baseSize / 2;
  const total    = braceletBeads.length;
  const stepRad  = (2 * Math.PI) / total;

  for (let i = 0; i < total; i++) {
    const bead = braceletBeads[i];
    const rad  = stepRad * i;

    const drawSize = bead.type === 'metal'
      ? metalCoef * pxPerMm               // 12 px
      : crystalPx;                        // 24 / 30 px

    const x = center + radius * Math.cos(rad);
    const y = center + radius * Math.sin(rad);

    const imgPath = bead.type === 'metal'
      ? selectedMetalImage
      : crystalPlacement[i];

    if (imgPath) {
      await drawCircleImage(ctx, imgPath, x, y, drawSize);
    }
  }

  return canvas.toDataURL('image/png');
}

/* --- Helper：以圓形裁切貼圖 --- */
function drawCircleImage(ctx, src, cx, cy, d) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, d / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, cx - d / 2, cy - d / 2, d, d);
      ctx.restore();
      resolve();
    };
  });
}
