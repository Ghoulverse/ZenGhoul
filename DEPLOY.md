# ZEN GHOUL — Deployment Guide

**Domain:** `https://www.zenghoul.com`  
**Description:** Wellness & mindfulness cleaning products

---

## Build

```bash
npm install
npm run build
```

Output: `dist/` (Vite static build)

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy dist --project-name=zenghoul-com --branch=main
```

### GitHub Actions

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

### DNS

- `www.zenghoul.com` → CNAME → `zenghoul-com.pages.dev`
- `zenghoul.com` → CNAME → `zenghoul-com.pages.dev`

Managed in Cloudflare DNS.

---

*Part of the GHOULVERSE ecosystem. See root `DEPLOY.md` for ecosystem-wide deployment.*
