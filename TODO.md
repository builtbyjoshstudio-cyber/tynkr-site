# TODO — manual steps before launch

These are the only things not done in code. The site is deployable now; the
beta form just won't deliver email until step 1 is done.

## 1. Formspree form ID (REQUIRED for the beta-notify form to work)

Every page posts the beta signup to a placeholder endpoint:

```
https://formspree.io/f/YOUR_FORM_ID
```

This exact string appears **once in each of the 5 files** (verified identical
byte-for-byte), inside the inline `<script>`:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

Files:
- `index.html`
- `ledger/index.html`
- `vault/index.html`
- `hearth/index.html`
- `forge/index.html`

### To activate
1. Create a form at https://formspree.io (this is yours to do — I can't make
   the account). You'll get an ID like `xmyzabcd`.
2. Find-and-replace across all 5 files:
   - **Find:**    `https://formspree.io/f/YOUR_FORM_ID`
   - **Replace:** `https://formspree.io/f/xmyzabcd`  ← your real ID
3. Commit and push. GitHub Pages redeploys in ~1 min.

Each form also sends a hidden `app` field (`ledger` / `vault` / `hearth` /
`forge`; the landing form sends none) so one Formspree form can tell you which
page the signup came from.

## 2. Social share card — `assets/og-card.png` (OUTSTANDING)

The five app icons are **done** — `tynkr-{ledger,vault,hearth,forge,tools}-512.png`
are in `assets/` and load on every page.

Still missing: **`assets/og-card.png`**, the Open Graph / Twitter share image
referenced (as an absolute URL) by all five pages. Until it exists, link
previews on social/chat will show a broken image. Recommended size 1200×630.
Drop the file in at that path and it just works — no code change needed.

> Note: the product-page icon paths were made root-relative (`/assets/…`) at
> setup, so the real icons load correctly at `/ledger/`, `/vault/`, etc. — not
> just on the landing page. Nothing further needed there.

## 3. DNS (custom domain)

`CNAME` is set to `tynkr.builtbyjoshstudio.com`. At your DNS host (Fastly /
registrar), point that subdomain at GitHub Pages:

```
tynkr  CNAME  builtbyjoshstudio-cyber.github.io
```

Then in the repo's Settings → Pages, confirm the custom domain and enable
"Enforce HTTPS" once the cert provisions.
