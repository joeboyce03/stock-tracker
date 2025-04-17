// pages/watchlist.js
import { useEffect, useState } from 'react';

export default function Watchlist() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch('/api/watchlist');
        if (!response.ok) throw new Error('Failed to load data');
        const data = await response.json();
        setStocks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  if (loading) return <p>載入中...</p>;
  if (error) return <p>錯誤：{error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>自選股清單</h2>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock.name} ({stock.code})：${stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
