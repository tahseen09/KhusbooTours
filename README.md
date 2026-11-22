# Khusboo Tours

The website for Khusboo Tours, Rourkela. It is a travel magazine: each trip is an article with a boarding pass, and the home page shows each trip with its bus route.

Live site: https://tahseen09.github.io/KhusbooTours/

## Run it

```sh
npm install
npm run dev      # http://localhost:4321/KhusbooTours/
npm run build    # static site in dist/
```

## Add or change a trip

Each trip is one Markdown file in `src/content/trips/`. Copy an existing file, change the details, and add photos to `src/assets/photos/`. The home page, search and trip page update by themselves.

`src/data/photo-sources.json` lists where each photo came from. All photos use the Unsplash License, which needs no credit.

## Booking

The home page shows the booking engine in an iframe. Its address is `BOOKING_URL` in `src/lib/site.ts`. Tours, dates and fares in the iframe come from the engine, so change them there.

The site crops the engine's header and heading on its first page, so the booking looks like part of the site. If the engine's template changes, update `--crop` in `src/styles/global.css`.

The engine must open seat selection with `target="_top"`, because that step refuses to load in an iframe.

## Deploy

A push to `main` builds the site and publishes it to the `gh-pages` branch (see `.github/workflows/deploy.yml`).

For a custom domain, set `SITE_URL` (for example `https://khusbootours.in`) and `BASE_PATH=/` in the workflow, and add the domain under the repo's Pages settings.
