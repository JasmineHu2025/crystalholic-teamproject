import './BgDarkBlock.css';
import { useEffect, useRef } from 'react';
import { createStarsBackground } from '../../public/background-star22';

export default function BgDarkBlock() {
    const bgRef = useRef(null);

    useEffect(() => {
        if (bgRef.current) {
            const cleanup = createStarsBackground(bgRef.current);
            return cleanup;
        }
    }, []);

    return (
        <section className="bgdark-wrapper">
            {/* 星星特效背景 */}
            <div id="bgb-container" ref={bgRef} aria-hidden="true" />

            {/* 紫色動畫背景 */}
            <div className="gradient-bgb">
                {/* SVG filter 定義保持不變，但 display:none → 無負擔 */}
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>

                        {/* 噪點 — ★ safari-fix ★ */}
                        {/* <filter id="f">
                            <feTurbulence type="fractalNoise"
                                baseFrequency="0.8"
                                numOctaves="4"
                                seed="7"
                                stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                        </filter> */}
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1" />
                    {/* <div className="g2" /> */}
                    {/* <div className="g3" /> */}
                    <div className="g4" />
                    {/* <div className="g5" /> */}
                    <div className="interactive" />
                </div>
            </div>
        </section>

    );
}
