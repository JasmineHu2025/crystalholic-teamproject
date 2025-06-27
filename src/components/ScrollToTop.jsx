import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash?.replace('#', '');

    // Step 1：直接瞬間跳到頂部（不平滑）
    window.scrollTo(0, 0);

    // Step 2：如有 hash，再補滾去對應區塊（這裡可以用 smooth）
    if (id) {
      let attempts = 0;
      const interval = setInterval(() => {
        const el = document.getElementById(id) || document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          clearInterval(interval);
        } else if (attempts > 20) {
          clearInterval(interval);
        }
        attempts++;
      }, 100);
    }

  }, [pathname, hash]);

  return null;
}
