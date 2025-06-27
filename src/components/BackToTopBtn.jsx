import { useState, useEffect } from 'react';
import './BackToTopBtn.css';

export default function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`back-to-top-block ${isVisible ? 'show' : ''}`}>
      <button
        onClick={scrollToTop}
        className="back-to-top-btn"
        aria-label="Back to top"
      >
        <img
          src="./images/S-Btn/btn-BackToTop.png"
          alt="Back to Top"
          className="back-to-top-img"
        />
      </button>
    </div>
  );
}
