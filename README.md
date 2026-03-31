# KC's Southern Soul & More — Website

A modern 3-page React website for KC's Southern Soul & More, a Southern comfort food restaurant located at 102 Depot Street, Columbia, TN.

## Pages

- **Home** — Hero section, stats bar, about section, menu preview, testimonials, and CTA
- **Menu** — Tabbed menu (Mains, Sides, Desserts) with full item listings and call-to-order CTA
- **Contact** — Full contact info, social links, and order-by-phone box

## Features

- Real logo image used as nav logo, hero focal point, and favicon
- All "Order" buttons are `tel:` links that dial **(931) 223-5075** directly on mobile
- Sticky nav with scroll-aware transparency
- Mobile-responsive with hamburger drawer navigation
- Smooth page transitions and hero animations
- Google Fonts (Playfair Display + Lato) for refined restaurant typography
- Brand colors: Deep Brown `#2C1A0E`, Cream `#F5EDD6`, Red `#C0392B`

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Install & Run

```bash
npm install
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `/build` folder — ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Deployment (Netlify — Recommended)

1. Run `npm run build`
2. Drag the `/build` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done — your site is live!

## Contact Info Included

| Field | Value |
|-------|-------|
| Address | 102 Depot Street, Columbia, TN |
| Phone | (931) 223-5075 |
| Email | kcssouthernsoulandmore@gmail.com |
| Instagram | @kcssouthernsoul_llc |
| TikTok | @kcs.southern.soul |

## Project Structure

```
kcs-southern-soul/
├── public/
│   ├── index.html       # HTML shell with favicon & meta tags
│   └── logo.jpg         # KC's logo image (also used as favicon)
├── src/
│   ├── App.jsx          # Main React component (all 3 pages)
│   ├── App.css          # Full stylesheet
│   ├── logoData.js      # Logo embedded as base64 (for artifact use)
│   └── index.js         # React entry point
├── package.json
└── README.md
```
