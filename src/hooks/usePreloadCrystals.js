// src/hooks/usePreloadCrystals.js
import crystalsData from '../components/KnowledgeCrystal/CrystalData';

const usePreloadCrystals = () => {
    const preloadAllImages = () => {
        const allImages = [];

        Object.values(crystalsData).forEach((category) => {
            category.forEach((crystal) => {
                if (crystal.image) allImages.push(crystal.image);
                if (crystal.recommended && Array.isArray(crystal.recommended)) {
                    crystal.recommended.forEach((rec) => {
                        if (rec.src) allImages.push(rec.src);
                    });
                }
            });
        });

        allImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    return preloadAllImages;
};

export default usePreloadCrystals;
