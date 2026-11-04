# manigandand.github.io

Personal portfolio website of **Manigandan Dharmalingam**, a Senior Software Engineer building backend, platform and agentic AI systems in Go.

🌐 **Live site: [https://manigandand.com](https://manigandand.com)**

## Pages

| Page | What it has |
|---|---|
| [`index.html`](index.html) | Home: about and skills, projects, experience timeline, resume download, social links |
| [`journey.html`](journey.html) | My journey: a bilingual (English / தமிழ்) story, from a village near Uthangarai to today |

## Features

- Plain HTML, CSS and JavaScript. No build step and no dependencies.
- Dark and light theme, following the system setting and remembered between visits.
- English / Tamil toggle on the journey page.
- Scroll animations that respect "reduce motion" and fail safe when JavaScript is unavailable.
- Responsive from phones to desktop.

## Project layout

```
.
├── index.html          # home page
├── journey.html        # journey page
├── manifest.json       # web app manifest
├── favicon.ico         # fallback favicon
├── CNAME               # custom domain (manigandand.com)
└── asset/
    ├── style.css       # all styles and theme tokens
    ├── main.js         # theme and language toggles, scroll animations
    ├── fav/            # icon.svg (master), Apple and manifest icons
    └── *.jpg, *.png    # photos, logos, banner, resume PDF
```

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Hosted on GitHub Pages from the `master` branch (root). Pushing to `master` publishes the site, usually within a minute or two. The custom domain is set by [`CNAME`](CNAME).

## Contact

- LinkedIn: [@manigandand](https://www.linkedin.com/in/manigandand/)
- GitHub: [@manigandand](https://github.com/manigandand)
- X: [@manigandanjeff](https://x.com/manigandanjeff) · [@GopherHutHQ](https://x.com/GopherHutHQ)
- Instagram: [@manigandanjeff](https://www.instagram.com/manigandanjeff)
- Facebook: [@manigandanjeff](https://www.facebook.com/manigandanjeff)

## License

Code is free to reuse as inspiration. Photos, text, logos and the resume are personal and not licensed for reuse.
