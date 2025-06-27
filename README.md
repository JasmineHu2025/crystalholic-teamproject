# Crystalholic React Project 

Crystalholic 是一個以 React + Vite 建立的水晶主題網站，主打簡潔結構與模組化元件管理。專案支援頁面路由與多種 Footer 風格切換，便於維護與視覺風格管理。

---

## 快速開始

```bash
# 安裝依賴套件
npm install

# 啟動開發伺服器
npm run dev
預設網址 http://localhost:5173/
查看該頁面請加索引 例如#/about

# 每次開發前執行 
git pull 確保版本最新

##專案結構說明
crystalholic-react-project/
├── public/                # 靜態圖像資源（圖片、icon 等）
│   └── images/
├── src/
│   ├── components/        # 共用元件（Header, Footer 等）
│   │   ├── FooterBg.jsx   # 深色背景 Footer
│   │   ├── FooterPlain.jsx# 無背景 Footer
│   │   └── ...            
│   ├── pages/             # 各頁面（Home, About 等）
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── ...
│   ├── css/               # 全站樣式、reset 與字型設定
│   ├── App.jsx            # 路由總控制
│   └── main.jsx           # 專案進入點（掛載 React）
├── package.json
├── vite.config.js
├── .gitignore
└── README.md


# 使用技術
React 19
React Router DOM 7
Vite 6
JavaScript / CSS Modules
ESLint 開發規範

# 修改內容後請使用統一格式、結構清晰的命名

# 檔名請用大駝峰式命名

# 若有共用元件
請放入 components/ 並依元件建立獨立 CSS 檔

# 圖片請放在 
public/images/ 


/* --------- RWD --------- */
/* ========== 主要寬度 1440px ========*/
/* ========== 寬螢幕 (1920px 以上) ========= */
可以檢查一下 沒問題就不用加這個尺寸的rwd

/* ========== 平板（1024px 以下） ========== */
按鈕長寬要大於觸控範圍48px
/* ==========大手機或平板橫向（820px 以下） ========== */
/* ========== 手機直向（640px 以下） ========== */



📝 部署 GitHub Pages
# 1. 第一次操作請打開終端機：
npm install gh-pages --save-dev

# 2. 確認package.json檔包含：
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://JasmineHu2025.github.io/crystalholic-teamproject"

# 3. 確認vite.config.js檔：
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/crystalholic-teamproject/',
  plugins: [react()],
})


👯‍♀️ 共編者初次部署教學（僅限有權限的 Collaborator）
# 1. 從 GitHub 複製專案
git clone https://github.com/JasmineHu2025/crystalholic-teamproject.git

# 2. 切換到專案資料夾
cd crystalholic-teamproject

# 3. 安裝套件
npm install

# 4. 執行部署
npm run deploy


🚀 每次要上傳至網址時
npm run deploy

🌐 網址為
https://jasminehu2025.github.io/crystalholic-teamproject/



