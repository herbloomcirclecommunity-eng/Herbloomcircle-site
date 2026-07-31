# HerBloomCircle — Website

Static homepage (HTML/CSS/JS, no build step) matching the HerBloomCircle
creative direction: warm neutral palette, Fraunces + Inter type pairing,
and a "bloom ring" signature motif that traces in as each section scrolls
into view.

## Files
- `index.html` — homepage
- `styles.css` — all styling / design tokens
- `script.js` — scroll-reveal + mobile nav
- `CNAME` — points GitHub Pages at herbloomcircle.org

## Deploy on GitHub Pages (free hosting)

1. **Create the repo**
   - Go to github.com → New repository → name it e.g. `herbloomcircle-site`
   - Keep it public (required for free GitHub Pages), don't initialize with a README.

2. **Push these files**
   ```bash
   cd herbloomcircle
   git init
   git add .
   git commit -m "Initial homepage"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/herbloomcircle-site.git
   git push -u origin main
   ```

3. **Turn on Pages**
   - In the repo: Settings → Pages
   - Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save
   - GitHub will build a URL like `https://YOUR-USERNAME.github.io/herbloomcircle-site`

4. **Connect herbloomcircle.org**
   - Still in Settings → Pages → Custom domain: enter `herbloomcircle.org` → Save
     (this writes the `CNAME` file for you if it's not already in the repo — it already is here)
   - At your domain registrar (wherever herbloomcircle.org is registered), add these DNS records:
     - **A records** for the root domain (`herbloomcircle.org`) pointing to GitHub's IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - **CNAME record** for `www` pointing to `YOUR-USERNAME.github.io`
   - DNS can take anywhere from a few minutes to 24 hours to propagate.
   - Back in GitHub Pages settings, check "Enforce HTTPS" once the domain verifies (may take a bit after DNS propagates).

That's it — herbloomcircle.org will serve this site directly from the repo,
and any future `git push` updates it automatically.

## Notes / next steps
- Photography is currently placeholder (Unsplash stock). Swap in real program
  photography before launch — the design leans on authentic imagery per the brief.
- Newsletter form and event RSVP links are static placeholders; wire up to a
  form service (e.g. Mailchimp, Formspree) or your CMS when ready.
- Journal Shop is a static preview grid; connect to real checkout (Shopify,
  Gumroad, etc.) when the shop is ready to launch.
