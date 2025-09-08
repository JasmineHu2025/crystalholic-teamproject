export function createStarsBackground(container) {
  const canvas = document.createElement('canvas');
  canvas.id = 'bg';
  canvas.style.cssText = `
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
  `;

  const DPR = window.devicePixelRatio || 1; 

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width * DPR;      
    canvas.height = height * DPR;    
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(DPR, DPR);             
  }

  const ctx = canvas.getContext('2d');
  resize();

  /* 縮減星星數量 ↓ */
  const stars = [];
  const numStars = 120;              
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width / DPR,
      y: Math.random() * canvas.height / DPR,
      r: Math.random() * 1.5 + 0.5,   /* 星星大小調整 */
      a: Math.random(),
      d: Math.random() * 0.035 + 0.009,  /* 星星閃爍速度 */
    });
  }

  /* 30 fps throttle ↓ */
  let last = 0;                      
  function draw(now) {
    if (now - last < 33) { requestAnimationFrame(draw); return; }
    last = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
      s.a += s.d;
      if (s.a <= 0 || s.a >= 1) s.d = -s.d;
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  window.addEventListener('resize', resize);
  container.appendChild(canvas);

  return () => {
    window.removeEventListener('resize', resize);
    container.removeChild(canvas);
  };
}
