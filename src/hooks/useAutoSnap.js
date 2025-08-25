import { useEffect } from 'react';

export default function useAutoSnap(triggerId, targetId, ms = 400) {
  useEffect(() => {
    const triggerEl = document.getElementById(triggerId);
    const targetEl  = document.getElementById(targetId);
    if (!triggerEl || !targetEl) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targetEl.scrollIntoView({ behavior: 'smooth' }); // ms≈300-400
        }
      },
      { threshold: 0.6 } // 進入 60% 高度再觸發
    );
    io.observe(triggerEl);
    return () => io.disconnect();
  }, [triggerId, targetId, ms]);
};