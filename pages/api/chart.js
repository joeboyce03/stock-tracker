// /pages/api/chart.js

export default function handler(req, res) {
  const { symbol } = req.query;

  // 模擬資料（簡化用）
  const mockData = Array.from({ length: 20 }, (_, i) => ({
    date: `2024-04-${String(i + 1).padStart(2, '0')}`,
    close: 550 + Math.sin(i) * 10,
    macd: Math.sin(i) * 5,
    kd: 50 + Math.cos(i) * 20,
  }));

  res.status(200).json(mockData);
}
