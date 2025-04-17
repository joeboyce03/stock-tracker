import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Watchlist() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/watchlist');
        const data = await res.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>自選股清單</h1>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              style={{
                padding: '1rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                backgroundColor: '#f9fafb',
              }}
            >
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stock.name} ({stock.symbol})
              </p>
              <p style={{ color: '#4b5563' }}>${stock.price}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
