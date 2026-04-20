# CIM Pro Trader

Mobile-only crypto trading dashboard — iPhone 17 viewport (393×852px).  
Combines CIM Direction B UI with Pioniex v6 live engine (Binance + Bybit).

**Single file. No build step. No server required** (when served from a real origin).

---

## Deploy to Vercel (free)

### One-time setup

1. Install Vercel CLI (skip if already installed):
   ```bash
   npm i -g vercel
   ```

2. From this folder:
   ```bash
   vercel
   ```
   - Framework: **Other**
   - Build command: *(leave blank)*
   - Output directory: `.`
   - Deploy: yes

3. Vercel gives you a URL like `https://cim-pro-trader-xxx.vercel.app`.  
   Open it on your iPhone — done.

### Subsequent deploys

```bash
vercel --prod
```

---

## Local dev

```bash
npx serve -p 3000 .
```

Open `http://localhost:3000` — do not open `index.html` directly via `file://` (CORS blocks Binance/Bybit APIs).

---

## Config (in-app)

- Settings icon (top right) → refresh interval, capital, tickers
- Defaults: BTC BNB SOL SUI TRX DOGE XLM XRP HYPE
- Persisted in `localStorage`

## Notes

- HYPE may fail (not listed on Binance/Bybit futures) — app skips failed tickers gracefully
- BTC Dominance shows `—` (not available via futures APIs)
- Babel in-browser transformer warning is harmless for local/Vercel use
