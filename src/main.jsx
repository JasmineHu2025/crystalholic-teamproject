//先放套件才能把套件預設覆蓋掉
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← 一定要加這行，才能啟用輪播功能！

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
// import React from 'react';

import { CartProvider } from './pages/Shopping/CartContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
