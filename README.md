# Natalia Alves — portfolio site

A small, dependency-free portfolio built with HTML, CSS, and JavaScript. It is published with GitHub Pages from the `main` branch.

## Run locally

From this folder, run:

```sh
./dev.sh
```

Then open [http://localhost:8000](http://localhost:8000). To use a different port, run `PORT=8080 ./dev.sh`.

The project detail pages are static and use query strings, so they work on GitHub Pages without a server-side router.

## Publishing

Pushing to `main` runs `.github/workflows/pages.yml`, which deploys this repository to the GitHub Pages environment. The expected public address is `https://nataliacdelgado.github.io/`. A custom domain can be added later through the `CNAME` file and GitHub Pages settings.
