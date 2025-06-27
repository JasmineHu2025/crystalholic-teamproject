export function createStarsBackground(container) {
  const canvas = document.createElement("canvas");
  canvas.id = "bg";
  // 設定 canvas 樣式
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = -2;
  canvas.style.pointerEvents = "none";

  // 同步 container 尺寸
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;


  const ctx = canvas.getContext("2d");

  const stars = [];
  const numStars = 200;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();

      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.delta = -star.delta;
      }
    }

    requestAnimationFrame(drawStars);
  }

  drawStars();

  function handleResize() {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  window.addEventListener("resize", handleResize);

  container.appendChild(canvas);

  // 返回清除函式
  return () => {
    window.removeEventListener("resize", handleResize);
    container.removeChild(canvas);
  };
}
