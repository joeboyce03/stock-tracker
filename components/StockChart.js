import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/chart')
      .then(res => res.json())
      .then(setData);
  }, []);

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