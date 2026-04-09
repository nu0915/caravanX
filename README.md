# CaravanX

> 租一次露營車，累積一份擁有。每段旅程，鑄造成永恆的 NFT。CaravanX = Travel × Game × Finance

CaravanX 是一個結合 **Rental Marketplace 露營車租賃 × Rent-to-Own 分期持有 × Travel NFT** 遊戲化機制與創作者平台的旅遊資產生態系統

核心目標將「閒置露營車」轉化為「可產生收益、可投資、可交易、可累積價值」的資產

幫助年輕旅遊愛好者解決「想擁有露營車但資金不足」的問題，透過租車累積購車信用（Rent-to-Own）並在每次旅程發行 Travel NFT，讓使用者邊租邊存、邊旅邊記錄，最終達到擁有夢想露營車的目標。

每一段旅程： - 不只是消費 - 而是可累積的數位資產（NFT）
建立一個結合「實體資產 + 數位資產 + 使用體驗」的新型市場

用戶不只是租車旅行，而是累積真實 ownership、參與資產增值、同時創造獨特數位回憶

---

## 目錄

- [專案概覽](#專案概覽)
- [核心功能](#核心功能)
- [技術架構](#技術架構)
- [專案結構](#專案結構)
- [開始使用](#開始使用)
- [環境變數設定](#環境變數設定)
- [開發指令](#開發指令)
- [API 文件](#api-文件)
- [智能合約](#智能合約)
- [開發路線圖](#開發路線圖)
- [團隊成員](#團隊成員)

---

## 專案概覽

### 解決的問題

Caravan 閒置率高，資產利用不足
Caravan 資金門檻高，普通使用者難以擁有
現有租賃平台缺乏投資化、金融化以及遊戲化特色
旅遊者缺少數位化紀錄與收藏體驗

### 核心價值主張

| 痛點 | CaravanX 的解法 |
|------|----------------|
| 買一台露營車太貴 | Rent-to-Own：租金自動累積購車信用 |
| 旅遊回憶難以留存 | Travel NFT：每段旅程自動鑄造 NFT |
| Web3 錢包太複雜 | Custodial Wallet：註冊即自動建立，無感體驗 |

---

## 核心功能

### 租賃系統
- 露營車搜尋（依地點、日期、車型、價格篩選）
- 線上預訂與 Stripe 付款
- 配送服務（按距離計算費用）
- 訂單管理與狀態追蹤

### Rent-to-Own 購車信用
- 每筆租賃完成後，自動返還 10% 金額作為購車信用
- Ownership Progress 頁面（視覺化購車進度）
- 信用歷史紀錄查詢

### Travel NFT
- 旅程完成後，自動在 Polygon 上鑄造 ERC-721 NFT
- NFT 包含旅程元數據（地點、日期、車型、里程）
- NFT Gallery 頁面（個人 NFT 收藏展示）
- 可在 OpenSea 上查看與交易

### 用戶系統
- 郵件 + 密碼 註冊 / 登入
- 自動建立 Custodial Wallet（Polygon 相容）
- 個人資料管理

---

## 技術架構

CaravanX
├── Frontend (Next.js 14)
│   ├── App Router + TypeScript
│   ├── Tailwind CSS + Shadcn/ui
│   ├── wagmi + viem (Web3)
│   └── Stripe.js (付款)
│
├── Backend (NestJS)
│   ├── RESTful API
│   ├── JWT 認證
│   ├── Stripe Webhook
│   ├── ethers.js (合約交互)
│   └── Pinata (IPFS 上傳)
│
├── Database
│   └── PostgreSQL + Prisma ORM
│
└── Blockchain (Polygon)
├── TravelNFT.sol (ERC-721)
└── Hardhat (開發 + 部署)

---

## 專案結構

caravanx/
├── apps/
│   ├── web/                     # Next.js 前端
│   │   ├── app/                 # App Router 頁面
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── caravans/        # 露營車列表 & 詳情
│   │   │   ├── booking/         # 預訂流程
│   │   │   ├── ownership/       # Rent-to-Own 進度
│   │   │   ├── gallery/         # NFT Gallery
│   │   │   └── orders/          # 訂單管理
│   │   ├── components/          # 共用元件
│   │   ├── lib/                 # 工具函式
│   │   └── public/              # 靜態資源
│   │
│   └── api/                     # NestJS 後端
│       ├── src/
│       │   ├── auth/            # 認證模組
│       │   ├── users/           # 用戶模組
│       │   ├── caravans/        # 露營車模組
│       │   ├── bookings/        # 預訂模組
│       │   ├── deliveries/      # 配送模組
│       │   ├── payments/        # 付款模組
│       │   ├── credits/         # 信用模組
│       │   ├── nfts/            # NFT 模組
│       │   └── main.ts
│       └── prisma/
│           └── schema.prisma    # 資料庫 Schema
│
├── packages/
│   └── contracts/               # Solidity 智能合約
│       ├── contracts/
│       │   └── TravelNFT.sol
│       ├── scripts/
│       │   └── deploy.ts
│       ├── test/
│       └── hardhat.config.ts
│
├── .gitignore
├── README.md
└── package.json


---

###開發路線圖

Phase 1 — MVP

 用戶系統 & 認證
 露營車列表 & 搜尋
 預訂系統
 配送服務
 Stripe 付款整合

Phase 2 — 核心亮點

 Rent-to-Own 信用累積
 Ownership Progress 頁面

Phase 2.5 — Web3 整合

 Custodial Wallet 系統
 TravelNFT 智能合約
 Travel NFT Minting
 NFT Gallery 頁面

Phase 3 — 增強功能

 訂單管理 & 歷史紀錄
 評價 & 留言系統
 推薦獎勵機制
 多鏈支援
