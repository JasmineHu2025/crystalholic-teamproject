import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';

import About from './pages/Others/About';
import KnowledgeCrystal from './components/KnowledgeCrystal/KnowledgeCrystal';
import KnowledgeCleanse from './pages/Others/KnowledgeCleanse';

import Cover from './pages/Cover/Cover';

import NumTest1 from './pages/NumTest/NumTest1';
import NumTest2 from './pages/NumTest/NumTest2';
import NumTest3 from './pages/NumTest/NumTest3';
import Customize1 from './pages/Customize/Customize1';
import Customize3 from './pages/Customize/Customize3';
import Customize4 from './pages/Customize/Customize4';
import ShoppingCart from './pages/Shopping/ShoppingCart';
import ProductCollection from './pages/Product/ProductCollection';
import Product from './pages/Product/Product';

export default function App() {
  return (
    <div className="page-layout">
      <HashRouter>

        <AuthProvider>
          <UIProvider>
            <ScrollToTop />
            <main className="main-content">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/KnowledgeCrystal" element={<KnowledgeCrystal />} />
                <Route path="/KnowledgeCleanse" element={<KnowledgeCleanse />} />

                <Route path="/" element={<Cover />} />

                <Route path="/NumTest1" element={<NumTest1 />} />
                <Route path="/NumTest2" element={<NumTest2 />} />
                <Route path="/NumTest3" element={<NumTest3 />} />
                <Route path="/Customize1" element={<Customize1 />} />
                {/* <Route path="/Customize2" element={<Customize2 />} /> */}
                <Route path="/Customize3" element={<Customize3 />} />
                <Route path="/Customize4" element={<Customize4 />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
                <Route path="/ProductCollection" element={<ProductCollection />} />
                <Route path="/Product/:seriesKey/:productIndex" element={<Product />} />
              </Routes>
            </main>
          </UIProvider>
        </AuthProvider>

      </HashRouter>
    </div>
  );
}
