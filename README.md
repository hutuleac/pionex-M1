# CIM Pro Trader

Mobile-only crypto trading dashboard — iPhone 17 viewport (393×852px).  
Combines CIM Direction B UI with Pioniex v6 live engine (Binance + Bybit).

**Single file. No build step. No server required** (when served from a real origin).


https://pionex-m1.vercel.app/ 

## Config (in-app)

- Settings icon (top right) → refresh interval, capital, tickers
- Defaults: BTC BNB SOL SUI TRX DOGE XLM XRP HYPE
- Persisted in `localStorage`

## Notes

- HYPE may fail (not listed on Binance/Bybit futures) — app skips failed tickers gracefully
- BTC Dominance shows `—` (not available via futures APIs)
- Babel in-browser transformer warning is harmless for local/Vercel use
<img width="586" height="1234" alt="image" src="https://github.com/user-attachments/assets/abaacd50-7ecf-444b-a446-3c43d53b51c2" />
