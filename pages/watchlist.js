import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import StockChart from '../components/StockChart';

const Watchlist = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    fetch('/api/watchlist')
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ padding: '1.5rem', fontFamily: 'Arial' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>自選股清單</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {stocks.map(stock => (
            <div key={stock.symbol} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}>
              <strong style={{ fontSize: '1.25rem' }}>{stock.name}</strong>
              <p style={{ margin: '0.25rem 0', color: '#666' }}>({stock.symbol})</p>
              <p style={{ margin: 0 }}>
                <span style={{ fontWeight: 'bold', color: '#008000' }}>
                  ${stock.price.toFixed(2)}
                </span>
              </p>
              <button
                onClick={() => setSelectedSymbol(stock.symbol)}
                style={{ marginTop: '0.5rem', padding: '0.4rem 1rem', border: 'none', borderRadius: '4px', background: '#0070f3', color: 'white', cursor: 'pointer' }}
              >
                查看圖表
              </button>
            </div>
          ))}
        </div>

        {selectedSymbol && (
          <div style={{ marginTop: '2rem' }}>
            <StockChart symbol={selectedSymbol} />
          </div>
        )}
      </main>
    </>
  );
};

export default Watchlist;
