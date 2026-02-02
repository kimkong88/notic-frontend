# Notic – Frontend

Marketing site and app surfaces for **Notic**, the Chrome extension that lets you keep a floating note over every tab. Built with Next.js.

- **Landing** – Features, pricing, hero, CTA  
- **Welcome** – First-run page for new installs (pin extension, omnibox: `nl` + Space + Enter)  
- **Download** – Extension install / coming soon  
- **Published notes** – Shared markdown notes at `/p/[code]` (SSR, no cache)  
- **Billing** – Subscription management (Stripe) behind auth  
- **Legal** – Privacy, Terms  

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **Framer Motion**, **Lucide React**
- **react-markdown** + **remark-gfm** for published notes (tables, GFM)
- **Umami** for analytics

## Getting started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install and run

```bash
git clone https://github.com/kimkong88/notic-frontend.git
cd notic-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and start

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata, sitemap, robots) | `https://getnotic.io` |
| `NEXT_PUBLIC_APP_URL` | App URL for OAuth redirects | `VERCEL_URL` or same as site |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.getnotic.io` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID (billing/sign-in) | — |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | — |

Create a `.env.local` (or set in Vercel) for local or production. See `.env.example` if added.

## Project structure

```
app/
  page.tsx              # Landing (hero, features, pricing)
  layout.tsx            # Root layout, fonts, Umami script
  welcome/page.tsx      # First-run / welcome (pin, omnibox)
  download/page.tsx     # Extension download / coming soon
  privacy/page.tsx      # Privacy policy
  terms/page.tsx        # Terms of service
  (app)/                # App shell (different header)
    layout.tsx          # AppHeader, AppAuthProvider
    billing/page.tsx    # Billing (auth-gated)
    p/[code]/page.tsx  # Published note (markdown, SSR)
  api/
    auth/               # Google OAuth, session, logout
    billing/            # Stripe checkout/portal, status
components/
  layout/               # Header, Footer, AppHeader
  HeroSection.tsx       # Landing hero + desktop mockup
  PricingSection.tsx    # Pricing cards
  shared-note/          # MarkdownImage for /p/[code]
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing |
| `/welcome` | Welcome / first install (pin, omnibox) |
| `/download` | Extension download |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/billing` | Billing (auth; token or session) |
| `/p/[code]` | Published shared note (by code) |

## Deploy (Vercel)

1. Connect the repo to [Vercel](https://vercel.com).
2. Set env vars in the project dashboard.
3. Deploy; default branch builds and deploys automatically.

## License

Private. See [Terms](https://getnotic.io/terms) and [Privacy](https://getnotic.io/privacy).
