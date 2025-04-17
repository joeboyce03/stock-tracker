
import Head from 'next/head'
import { useState, useEffect } from 'react'
import StockChart from '../components/StockChart'
import stockData from '../data/stockData'

export default function Home() {
  const [selectedStock, setSelectedStock] = useState('TSMC')
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const stock = stockData[selectedStock]

  return (
    <div>
      <Head>
        <title>股票技術分析</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>{stock.name} ({stock.code})</h1>
        <p>最後更新時間：{timestamp}</p>
        <div style={{ marginBottom: '1rem' }}>
          {Object.keys(stockData).map((key) => (
            <button key={key} onClick={() => setSelectedStock(key)} style={{ marginRight: 10 }}>
              {stockData[key].name}
            </button>
          ))}
        </div>
        <StockChart stock={stock} />
      </main>
    </div>
  )
}
