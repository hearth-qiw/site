# hearthqiw.online

The public website of **QIW (Quantum Intelligence Works LLC)**, with **Hearth** as its first product. Served by GitHub Pages at <https://hearthqiw.online>.

| Address | What |
|---|---|
| `/`, `/services.html`, `/contact.html` | The QIW company site (products and services) |
| `/hearth/` | Hearth's product page |
| `/privacy/`, `/terms/`, `/support/` | Hearth's Privacy Policy, Terms of Service and Support. **Keep these addresses**: the App Store listing and the app link to them |

**Source of truth (since 2026-11-08):** `QuantumAI/site` (repository `quantumintelligenceworks/QIW---Site`). Change the site there, then copy it here with `node tools/sync-to-hearthqiw.mjs <path to this clone>` from that folder, review the diff, and commit to `main` (that publishes it). Don't edit pages here directly.

The Hearth app itself lives in a separate, private repository (`hearth-qiw/hearth-app`); its web version is app.hearthqiw.online (`hearth-qiw/hearth-web`).

## What is here
- Plain HTML and CSS. No build step and no cookies. The Hearth pages (`/hearth/`, `/privacy/`, `/terms/`, `/support/`) make no third-party requests (system fonts, own stylesheet in `/hearth/`); the QIW pages load Cinzel and Inter from Google Fonts.
- Links use trailing slashes (`/privacy/`) because GitHub Pages serves `privacy/index.html` that way.
- `CNAME` tells GitHub Pages the custom domain; `.nojekyll` turns off Jekyll processing. Keep both.
- Hearth's colors and H mark (in `/hearth/`) come from the app (`src/lib/theme.ts`, `assets/brand/` in the app repo). Light and dark follow the visitor's setting; text passes WCAG AA.
- GitHub Pages cannot send custom HTTP headers, so the content-security policy is a `<meta>` tag in each page's head.

## Draft legal text
Privacy and Terms are a plain-language **beta** draft written from what the app does today. A lawyer is to draft the real ones (decision J4), and each page says so. When that text exists, replace the page body and its date.

**Keep the privacy page true.** Re-check it when any of these change: analytics or crash reporting is added, ads go live, a new provider handles user data, the 30-day deletion grace ships, or the Safe stops being local-only.

## Changing it
Edit the HTML, commit to `main`, and Pages republishes in about a minute. Preview locally with any static server, for example `npx serve .`, and check `/privacy/` loads.

## Setup record
- DNS at Porkbun: four `A` records for the apex (185.199.108.153, .109.153, .110.153, .111.153) and `www` CNAME to `hearth-qiw.github.io`. Email (forwarding for `hello@`, Resend sending records) lives in the same zone: do not remove those.
- Repo Settings, Pages: source `main` / root, custom domain `hearthqiw.online`, Enforce HTTPS on.
