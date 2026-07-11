# tynkr-site

Marketing site for the **Tynkr Tools & Co** app suite — four privacy-first,
local-first desktop apps for Windows (Ledger, Vault, Hearth, Forge).

Pure static site: hand-authored HTML with inline CSS/JS, no build step, no
framework, no backend. The only third-party dependency at runtime is a
Formspree endpoint for the beta-notify form (see `TODO.md`).

## Deployment

Served via **GitHub Pages** from the `main` branch (root) at
**https://tynkr.builtbyjoshstudio.com** (custom domain set in `CNAME`).
`.nojekyll` disables Jekyll processing so files ship exactly as committed.

## Structure

```
index.html          landing page
ledger/index.html   Tynkr Ledger  — Personal Finance OS
vault/index.html    Tynkr Vault   — Second Brain OS
hearth/index.html   Tynkr Hearth  — Homebuyer OS
forge/index.html    Tynkr Forge   — Small Business OS
assets/             app icons + OG card (see TODO.md — not yet added)
```

Folder-per-app layout gives clean URLs (`/ledger/`, `/vault/`, …); every
internal link and `<link rel="canonical">` already targets those paths.
