# Veasna Panha — portfolio website

A plain static site: HTML, CSS and JavaScript, with no build step. It works on Netlify, GitHub Pages or any web host.

## Folder map

| Path | What it is |
|---|---|
| `index.html` `work.html` `project.html` `services.html` `about.html` `contact.html` `404.html` | The pages |
| `assets/js/projects.js` | **All projects** (titles, roles, text in English + Khmer, images, video links) |
| `assets/js/app.js` | Contact details (`CONFIG`, top of file), all interface text in English + Khmer (`S`), services, FAQ, experience |
| `assets/css/style.css` | Design: colours, fonts, layout |
| `assets/img/<project>/` | `cover.jpg`, `still-01.jpg`…, `bts-01.jpg`… |
| `assets/logo/` | Final logo files (SVG). `options/index.html` shows all the directions that were explored |
| `assets/files/Veasna-Panha-CV.pdf` | The CV linked from the About page |

## Common edits

- **Change your email, phone or Telegram:** edit `CONFIG` at the top of `assets/js/app.js`.
- **Add social links:** in the same `CONFIG`, remove the `//` in front of each line under `social` and paste your links.
- **Mark yourself as busy:** set `available: false` in `CONFIG`.
- **Add a project:** copy one block in `assets/js/projects.js`, give it a new `slug`, then create `assets/img/<slug>/` with `cover.jpg`, `still-01.jpg`… and `bts-01.jpg`…
- **Fix a Khmer translation:** every string has both versions side by side, written as `["English", "ខ្មែរ"]` or `{ en: "...", km: "..." }`.

## Preview on your computer

```bash
cd website
python3 -m http.server 5173
```

Then open http://localhost:5173

## Publish on Netlify (easiest)

1. Go to https://app.netlify.com/drop
2. Drag the whole `website` folder onto the page.
3. You get a link like `something.netlify.app`. Under **Site configuration → Change site name** you can rename it, e.g. `veasnapanha.netlify.app`.
4. To update later, open the site in Netlify, go to **Deploys**, and drag the folder in again.

`netlify.toml` is already included (caching and the 404 page).

**Better, once the site is on GitHub:** in Netlify choose **Add new site → Import an existing project → GitHub**, pick `veasnapanha`, leave the build command empty, set the publish directory to `.`, then click **Deploy**. After that, every push from GitHub Desktop updates both sites.

## Publish on GitHub Pages

The site has about 224 files, and GitHub's website only takes 100 per upload, so use the free **GitHub Desktop** app:

1. Download GitHub Desktop from https://desktop.github.com and sign in with your GitHub account.
2. **File → Add Local Repository…**, choose this `website` folder. It says "This directory does not appear to be a Git repository"; click **create a repository**, keep the name `veasnapanha`, then click **Create Repository**.
3. Click **Publish repository**. **Untick "Keep this code private"**, then click **Publish Repository**.
4. On github.com, open the repo and go to **Settings → Pages**. Set **Source: Deploy from a branch**, **Branch: main**, **/ (root)**, then **Save**.
5. After 1–2 minutes the site is live at `https://<your-username>.github.io/veasnapanha/`.

To update later: make changes, then in GitHub Desktop write a short summary, click **Commit to main**, then **Push origin**.

All links are relative, so the site works inside that sub-folder.

## Custom domain (optional)

If you buy a domain (e.g. `veasnapanha.com`), connect it in Netlify (**Domain management**) or GitHub (**Settings → Pages → Custom domain**). Then change the `og:image` line in each HTML page to the full address, e.g. `https://veasnapanha.com/assets/img/og-image.jpg`, so link previews on Facebook and Telegram show the image.
