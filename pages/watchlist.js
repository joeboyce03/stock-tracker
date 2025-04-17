
import { useEffect, useState } from 'react';
import StockChartClient from '../components/StockChartClient';

export default function Watchlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/chart')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>My Watchlist</h1>
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        data.map((item, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h2>{item.symbol}</h2>
            <StockChartClient stockData={item} />
          </div>
        ))
      )}
    </div>
  );
}
