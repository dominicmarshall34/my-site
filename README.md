# my-site
My simple portfolio site, based off my CV

## Structure

- `index.html` — main portfolio page
- `cv.html` — CV page
- `data.json` — site content (name, contact, experience, skills, education)
- `assets/` — stylesheet, JavaScript, and profile image

Content is loaded dynamically from `data.json` via `assets/script.js`.

## Running locally

### With Podman

```bash
podman build -t my-site .
podman run --rm -p 8080:80 my-site
```

Then open `http://localhost:8080`.

### Without containers

Open `index.html` directly in a browser, or serve with any static file server.
