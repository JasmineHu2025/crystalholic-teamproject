import { useEffect, useState } from 'react';

export default function useScrollDirection({ threshold = 10, offTop = 0 } = {}) {
  const [dir, setDir] = useState('up');   // 'up' 或 'down'

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currY = window.scrollY;
      const delta = currY - lastY;

      if (Math.abs(delta) > threshold && currY > offTop) {
        setDir(delta > 0 ? 'down' : 'up');
        lastY = currY;
      }
      if (currY <= offTop) setDir('up');  // 回到頂端強制顯示
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, offTop]);

  return dir;
};
