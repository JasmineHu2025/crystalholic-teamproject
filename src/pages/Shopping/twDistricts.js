export const TW_COUNTIES = [
  '基隆市','台北市','新北市','桃園市','新竹市','新竹縣','苗栗縣','台中市',
  '彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','台南市','高雄市','屏東縣',
  '宜蘭縣','花蓮縣','台東縣'
];

// 小工具：隨機生 10 個門市名稱，用簡易字首＋流水號組合即可
export const genStores = (brand, county) =>
  Array.from({ length: 10 }, (_, i) => `${brand}-${county}-${String(i + 1).padStart(2,'0')} 店`);