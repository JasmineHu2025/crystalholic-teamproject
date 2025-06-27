import characterData from './characterData';

const imagesByType = {};

Object.entries(characterData).forEach(([num, data]) => {
  imagesByType[num] = [
    { src: data.image, alt: `${num}號主角色` },
    { src: data.friendImg1, alt: `${num}號好友1` },
    { src: data.friendImg2, alt: `${num}號好友2` },
    { src: data.friendImg3, alt: `${num}號好友3` },
    { src: data.enemiesImg1, alt: `${num}號敵人1` },
    { src: data.enemiesImg2, alt: `${num}號敵人2` },
    { src: data.enemiesImg3, alt: `${num}號敵人3` },
    { src: data.crystalImg1, alt: `${num}號水晶1` },
    { src: data.crystalImg2, alt: `${num}號水晶2` },
    { src: data.crystalImg3, alt: `${num}號水晶3` },
    { src: data.bracelet,    alt: `${num}號手鍊` } // 如果也想預載手鍊，加上
  ];
});

export default imagesByType;