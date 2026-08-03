# NEET Study Tracker — Next.js app

Production-ready Next.js 15 / React 19 / TypeScript rebuild of the full study
tracker: **Today**, **Study Log**, **Planner**, and **Dashboard**.

Two distinct visual materials are used on purpose, matching the two design
briefs given for this app:

- **Today & Dashboard** — purple "Liquid Glass" acrylic theme (frosted glass
  cards, ambient purple glow, breathing background blobs).
- **Study Log & Planner** — dark "premium fintech dashboard" theme (matte
  floating cards, one accent color per card: lime / purple / cyan / emerald /
  gold).

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4 (CSS-first `@theme` config, see `app/globals.css`)
- Framer Motion (all entrance/hover/tap/tilt/parallax animation)
- Recharts (bar chart + radial progress arcs)
- Lucide React (icons)
- Supabase (auth + database — real accounts, data syncs across devices)

## Setting up authentication (required before this app will run)

Every app page (`/today`, `/study-log`, `/planner`, `/dashboard`,
`/question-practice`) is now behind a login. Without a Supabase project
connected, the login/signup forms will build and render fine, but won't
actually be able to create accounts. Do this once:

1. **Create a free project** at [supabase.com](https://supabase.com) —
   takes about a minute, no credit card needed.
2. **Run the schema**: open your project → **SQL Editor** → paste in the
   contents of `supabase/schema.sql` from this repo → Run. This creates the
   table that holds everyone's data and locks it down so each person can only
   ever read/write their own row (Row Level Security).
3. **Grab your keys**: project → **Settings → API** → copy the **Project URL**
   and the **anon / public key**.
4. **Set the environment variables**:
   - Locally: copy `.env.local.example` to `.env.local` and paste your two
     values in.
   - On Vercel: project → **Settings → Environment Variables** → add
     `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the
     same values → redeploy.
5. **Email confirmations**: by default, Supabase requires clicking a
   confirmation link before a new account can log in. For local testing
   this is easy to turn off (project → **Authentication → Providers → Email**
   → toggle off "Confirm email") — for production, leave it on.

### How the sync actually works

- Every change still writes to this browser's `localStorage` immediately
  (fast, and works if you're briefly offline).
- Changes are also pushed to your Supabase row a couple seconds after you
  stop typing/interacting (debounced, so it's not spamming requests).
- On login, if you have **existing local data and no cloud data yet**, your
  local progress is copied up automatically — you won't lose anything from
  before auth was added.
- If both local and cloud have data (e.g. you used the app offline, then
  logged in on a device that already had cloud data), whichever was
  modified more recently wins, and that version is pushed to the other side
  so they match again.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it's the marketing landing page now (not a
redirect). Sign up or log in from there, or go straight to `/login` /
`/signup`. Once logged in, the top nav switches between Today, Study Log,
Planner, Question Practice, and Dashboard.

## Data

State (log hours, exam date, planner progress, profile) lives in two places
now: your browser's `localStorage` (under the key `neet_tracker_v1`, same as
before) as a fast local cache, and a Supabase database row per user as the
cross-device source of truth. See "Setting up authentication" above for how
the sync between the two works.

## Project structure

```
app/
  layout.tsx            root layout (no global backdrop — each page sets its own)
  page.tsx               redirects to /today
  today/page.tsx
  study-log/page.tsx
  planner/page.tsx
  dashboard/page.tsx
components/
  ui/
    GlowCard.tsx          fintech-theme card (Study Log / Planner)
    LiquidGlassCard.tsx   Liquid Glass acrylic card (Today / Dashboard)
    MatteBackdrop.tsx     dark ambient page background (Study Log / Planner)
    LiquidBackdrop.tsx    purple ambient page background (Today / Dashboard)
    CapsuleButton.tsx, StatCard.tsx, PageShell.tsx
  today/                 Countdown, Stopwatch, TodaySection
  study-log/              Heatmap, HoursBarChart, Ledger, StudyLogSection
  planner/                ChapterRow, SubjectCard, PlannerSection
  dashboard/              DashboardSection
lib/
  types.ts                shared TypeScript types
  data.ts                  chapter lists + accent color map (one accent per card)
  date-utils.ts            pure date helpers
  useTrackerState.ts       the persisted state hook (all read/write logic, shared by all 4 sections)
  useCountUp.ts            animated number hook for stat cards
```

## Design notes

- Fintech cards use **exactly one** accent color (lime / purple / cyan /
  emerald / gold) — never blended.
- Liquid Glass cards use `backdrop-filter: blur(30px)`, a translucent white
  fill, an inset highlight, and a purple outer glow, with a slow ambient
  shadow pulse and a cursor-follow spotlight.
- Both backdrop types react to cursor and touch movement (pointer + touch
  listeners drive a Framer Motion spring, which the background blobs read).
- Buttons are capsule-shaped, lift and brighten on hover, compress on click.

