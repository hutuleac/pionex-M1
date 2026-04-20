export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'missing url' });

  const ALLOWED_PREFIX = 'https://fapi.binance.com/futures/data/';
  if (!url.startsWith(ALLOWED_PREFIX)) {
    return res.status(403).json({ error: 'disallowed host' });
  }

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(502).json({ error: e.message });
  }
}
