'use client';
import React, { useEffect, useState } from 'react';

// 延遲加載 Recharts
let LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer;

if (typeof window !== 'undefined') {
  const Recharts = require('recharts');
  LineChart = Recharts.LineChart;
  Line = Recharts.Line;
  CartesianGrid = Recharts.CartesianGrid;
  XAxis = Recharts.XAxis;
  YAxis = Recharts.YAxis;
  Tooltip = Recharts.Tooltip;
  Legend = Recharts.Legend;
  ResponsiveContainer = Recharts.ResponsiveContainer;
}

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/chart')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!LineChart) return <p style={{ textAlign: 'center' }}>📉 圖表元件未載入</p>;

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h3 style={{ textAlign: 'center' }}>{symbol} - MACD / KD 技術指標</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="MACD.macd" stroke="#8884d8" name="MACD" dot={false} />
          <Line type="monotone" dataKey="MACD.signal" stroke="#82ca9d" name="Signal" dot={false} />
          <Line type="monotone" dataKey="MACD.histogram" stroke="#ffc658" name="Histogram" dot={false} />
          <Line type="monotone" dataKey="KD.k" stroke="#ff7300" name="K值" dot={false} />
          <Line type="monotone" dataKey="KD.d" stroke="#387908" name="D值" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
