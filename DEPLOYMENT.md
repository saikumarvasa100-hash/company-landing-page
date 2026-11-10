# Static site deployment

The site is published to GitHub Pages from the repository root. Keep the entry
page at `index.html` and commit all static assets alongside it (or in subfolders).

## Setup

1. Push the site to the repository's `main` (or `master`) branch.
2. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the
   build and deployment source.
3. Push to `main` or run **Actions → Deploy static site → Run workflow**.
4. Find the published URL in the workflow run's `deploy` job environment.

The workflow uploads repository files without installing dependencies or running
a build, so it works with plain HTML, CSS, and JavaScript. It uses the Pages
artifact and deployment actions and grants write access only to the deploy job.
