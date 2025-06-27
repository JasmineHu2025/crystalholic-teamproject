export async function renderBraceletToImage({
  braceletBeads,
  crystalPlacement,
  selectedMetalImage,
  selectedSize,
  scale = 3,
  wristSize
}) {
  const radius = wristSize * 5 * 1.1;
  const canvasSize = radius * 2 + selectedSize * scale + 40;

  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext('2d');

  const centerX = canvasSize / 2;
  const centerY = canvasSize / 2;
  const total = braceletBeads.length;
  const angleStep = 360 / total;

  for (let i = 0; i < total; i++) {
    const bead = braceletBeads[i];
    const angle = angleStep * i;
    const rad = (angle * Math.PI) / 180;
    const size = bead.type === 'metal' ? 6 : selectedSize;
    const x = centerX + radius * Math.cos(rad);
    const y = centerY + radius * Math.sin(rad);
    let imagePath = bead.type === 'metal' ? selectedMetalImage : crystalPlacement[i];

    if (imagePath) {
      await drawImageToCanvas(ctx, imagePath, x, y, size * scale);
    }
  }

  return canvas.toDataURL('image/png');
}

function drawImageToCanvas(ctx, src, x, y, size) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
      ctx.restore();
      resolve();
    };
  });
}
