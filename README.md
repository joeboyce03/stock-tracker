
# Stock Tracker Web App

A full-featured stock tracking app with technical indicators, user watchlist, and real-time updates.

## Features
- Real-time stock price API
- Technical indicators: MA5, MA20, MACD
- Mobile responsive layout
- Login system with watchlist (simulated)
- Future: financial reports, dark mode

## Getting Started

```bash
npm install
npm run dev
```

## Folder Structure

```
- pages/
  - index.js
  - _app.js
  - api/
      - stock.js
      - login.js
      - watchlist.js
- components/
- data/
- styles/
- lib/
- public/images/
- docs/
```

## API 說明（API Routes）

### `/api/stock`
取得個股即時報價與技術指標（MA5、MA20）

### `/api/login`
模擬登入驗證  
- 方法：`POST`  
- 傳入參數：`email`、`password`  
- 回傳：`uid`、`email`

### `/api/watchlist`
取得與編輯使用者自選股清單  
- `GET`：查詢自選股，需提供 `uid`  
- `POST`：新增股票至自選股，需傳入 `symbol`  
- 自動切換新增/移除

## Architecture Overview

![Architecture Overview](/images/architecture-overview.png)

## Mobile Wireframe (V3.1)

![Mobile Wireframe V3.1](/images/mobile-wireframe-v3.1.png)

## Author

Matt（可靠度工程師 / 技術投資分析者）
