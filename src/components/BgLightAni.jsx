import React from 'react';
import './BgLight.css';
import './BgLightAni.css';

const crystals = [
    { src: './images/Numtest/numtest_bg/ani-cry1.png', className: 'ani-crystal crystal1' },
    { src: './images/Numtest/numtest_bg/ani-cry2.png', className: 'ani-crystal crystal2' },
    { src: './images/Numtest/numtest_bg/ani-cry3.png', className: 'ani-crystal crystal3' },
    { src: './images/Numtest/numtest_bg/ani-cry4.png', className: 'ani-crystal crystal4' },
    { src: './images/Numtest/numtest_bg/ani-cry5.png', className: 'ani-crystal crystal5' },
    { src: './images/Numtest/numtest_bg/ani-cry6.png', className: 'ani-crystal crystal6' },
    { src: './images/Numtest/numtest_bg/ani-cry7.png', className: 'ani-crystal crystal7' },
    { src: './images/Numtest/numtest_bg/ani-cry8.png', className: 'ani-crystal crystal8' },
];

export default function BgLightAni() {
    return (
        <div className="bg-ani-wrapper">
            {crystals.map((c, i) => (
                <img key={i} src={c.src} className={c.className} alt={`crystal-${i + 1}`} />
            ))}
        </div>
    );
}
