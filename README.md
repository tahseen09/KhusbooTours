# Khusboo Tours

The website for Khusboo Tours, Rourkela. It is a travel magazine: each trip is an article with a boarding pass, and the home page has a bus route map of every trip.

Live site: https://tahseen09.github.io/KhusbooTours/

## Run it

```sh
npm install
npm run dev      # http://localhost:4321/KhusbooTours/
npm run build    # static site in dist/
```

## Add or change a trip

Each trip is one Markdown file in `src/content/trips/`. Copy an existing file, change the details, and add photos to `src/assets/photos/`. The home page, route map and trip page update by themselves.

Add every new photo's credit to `src/data/credits.json`. The photo licences require it.

## Deploy

A push to `main` builds the site and publishes it to the `gh-pages` branch (see `.github/workflows/deploy.yml`).

For a custom domain, set `SITE_URL` (for example `https://khusbootours.in`) and `BASE_PATH=/` in the workflow, and add the domain under the repo's Pages settings.
