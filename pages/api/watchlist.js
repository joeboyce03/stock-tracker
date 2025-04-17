// pages/api/watchlist.js

export default function handler(req, res) {
  const mockData = [
    { id: 1, name: '台積電', symbol: '2330.TW', price: 865.5 },
    { id: 2, name: 'Apple Inc.', symbol: 'AAPL', price: 182.9 },
    { id: 3, name: 'NVIDIA', symbol: 'NVDA', price: 922.2 },
  ];

  res.status(200).json(mockData);
}
