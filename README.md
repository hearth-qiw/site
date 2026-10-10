# hearthqiw.online

The public website for **Hearth**: a home page plus the Privacy Policy, Terms of Service and Support pages the App Store listing needs. Served by GitHub Pages at <https://hearthqiw.online>.

The Hearth app itself lives in a separate, private repository (`hearth-qiw/hearth-app`). This repository holds only the public pages.

## What is here
- Plain HTML and CSS. **No build step, no scripts, no cookies, no third-party requests** (system fonts, own stylesheet).
- Links use trailing slashes (`/privacy/`) because GitHub Pages serves `privacy/index.html` that way.
- `CNAME` tells GitHub Pages the custom domain; `.nojekyll` turns off Jekyll processing. Keep both.
- Colors and the H mark come from the app (`src/lib/theme.ts`, `assets/brand/` in the app repo). Light and dark follow the visitor's setting; text passes WCAG AA.
- GitHub Pages cannot send custom HTTP headers, so the content-security policy is a `<meta>` tag in each page's head.

## Draft legal text
Privacy and Terms are a plain-language **beta** draft written from what the app does today. A lawyer is to draft the real ones (decision J4), and each page says so. When that text exists, replace the page body and its date.

**Keep the privacy page true.** Re-check it when any of these change: analytics or crash reporting is added, ads go live, a new provider handles user data, the 30-day deletion grace ships, or the Safe stops being local-only.

## Changing it
Edit the HTML, commit to `main`, and Pages republishes in about a minute. Preview locally with any static server, for example `npx serve .`, and check `/privacy/` loads.

## Setup record
- DNS at Porkbun: four `A` records for the apex (185.199.108.153, .109.153, .110.153, .111.153) and `www` CNAME to `hearth-qiw.github.io`. Email (forwarding for `hello@`, Resend sending records) lives in the same zone: do not remove those.
- Repo Settings, Pages: source `main` / root, custom domain `hearthqiw.online`, Enforce HTTPS on.
