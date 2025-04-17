import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/watchlist');
      const data = await res.json();
      setWatchlist(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>自選股清單</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {watchlist.map((stock) => (
            <li key={stock.symbol} style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                {stock.name} ({stock.symbol})：${stock.price}
              </div>

              {/* TODO: 等待套件安裝完成後，恢復下方圖表顯示 */}
              {/* 
              <div style={{ marginTop: '0.5rem' }}>
                <StockChartClient type="MACD" data={stock.macdData} />
                <StockChartClient type="KD" data={stock.kdData} />
              </div>
              */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
