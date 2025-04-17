
import axios from 'axios';

export async function fetchStockData(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m&range=1d`;
  const response = await axios.get(url);
  const result = response.data.chart.result?.[0];

  if (!result) return null;

  const { timestamp, indicators, meta } = result;
  const prices = indicators.quote[0];

  const formatted = timestamp.map((ts, idx) => ({
    time: new Date(ts * 1000).toLocaleTimeString('en-US', { hour12: false }),
    open: prices.open[idx],
    high: prices.high[idx],
    low: prices.low[idx],
    close: prices.close[idx],
    volume: prices.volume[idx],
  }));

  return {
    symbol: meta.symbol,
    timezone: meta.exchangeTimezoneName,
    currency: meta.currency,
    data: formatted
  };
}
