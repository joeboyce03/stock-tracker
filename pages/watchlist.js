// pages/watchlist.js

import { useState, useEffect } from 'react';

export default function WatchlistPage() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // 假資料：模擬從後端抓取自選股清單
    const mockData = [
      { symbol: '2330.TW', name: '台積電' },
      { symbol: 'AAPL', name: 'Apple' },
      { symbol: 'TSLA', name: 'Tesla' },
    ];
    setStocks(mockData);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>我的自選股</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.name} ({stock.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
}
