
import { fetchStockData } from '../../../lib/fetchStock';

export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Missing symbol parameter' });
  }

  try {
    const result = await fetchStockData(symbol);
    if (!result) {
      return res.status(404).json({ error: 'No data found for this symbol' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
}
