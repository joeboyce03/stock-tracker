
import axios from 'axios';

export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Missing symbol parameter' });
  }

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m&range=1d`;
    const response = await axios.get(url);

    const result = response.data.chart.result?.[0];
    if (!result) {
      return res.status(404).json({ error: 'No data found for this symbol' });
    }

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

    res.status(200).json({
      symbol: meta.symbol,
      timezone: meta.exchangeTimezoneName,
      currency: meta.currency,
      data: formatted,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
}
