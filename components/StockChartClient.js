"use client";

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Bar,
  CartesianGrid,
} from "recharts";

const sampleData = [
  { name: "Mon", macd: 1.2, signal: 1.0 },
  { name: "Tue", macd: 1.5, signal: 1.3 },
  { name: "Wed", macd: 1.1, signal: 1.0 },
  { name: "Thu", macd: 1.8, signal: 1.6 },
  { name: "Fri", macd: 1.6, signal: 1.4 },
];

export default function StockChartClient({ data = sampleData }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        👉MACD 技術指標圖表
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="macd" barSize={20} fill="#8884d8" />
          <Line type="monotone" dataKey="signal" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
