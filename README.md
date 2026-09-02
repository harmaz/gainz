# Cash Today

A small board of **legal extra-income ideas** you can start now. Mix of gigs, local services, selling things you already own, and a few software plays if you have Cursor.

It is a planner, not a marketplace. Shortlist lives in your browser.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

```bash
npm run build
npm start
```

## What it does

- Filter by speed (today / this week / this month), budget, desk vs leaving the house, Cursor, car, and stay-home
- Open an idea for a next-two-hours checklist
- Save a shortlist on this device
- A “Skip these” list for common scams and dead ends

Pay estimates are typical ranges, not promises. Local rules still apply (business licenses, moonlighting policies, rental laws, donation eligibility).

## GitHub Actions

Pushes and pull requests to `main` run the same CI as [my-first-cursor-web-app](https://github.com/harmaz/my-first-cursor-web-app): Node 22, `npm ci`, lint, and production build. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Live

https://gainz-iota.vercel.app/

Pushes to `main` on [github.com/harmaz/gainz](https://github.com/harmaz/gainz) deploy automatically.
