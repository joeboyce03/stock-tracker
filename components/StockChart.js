
import { useEffect } from 'react'
import Chart from 'chart.js/auto'

export default function StockChart({ stock }) {
  useEffect(() => {
    const canvas = document.getElementById('chart')
    const ctx = canvas.getContext('2d')
    if (window.chartInstance) {
      window.chartInstance.destroy()
    }
    window.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stock.dates,
        datasets: [
          {
            label: '收盤價',
            data: stock.prices,
            borderColor: 'blue',
            tension: 0.1
          },
          {
            label: 'MA5',
            data: stock.ma5,
            borderColor: 'green',
            tension: 0.1
          },
          {
            label: 'MA20',
            data: stock.ma20,
            borderColor: 'orange',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: false }
        }
      }
    })
  }, [stock])

  return <canvas id="chart" width="800" height="400"></canvas>
}
