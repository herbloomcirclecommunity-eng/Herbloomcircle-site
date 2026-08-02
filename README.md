# Her Bloom Circle — Website

A static, editorial, catalog-style website for Her Bloom Circle, built as
plain HTML/CSS/JS for GitHub Pages — no build step, no server, no paid
services required to run. Written to be editable from an iPad through
GitHub's web interface.

## What's on the site

- **Home** — logo, wordmark, mission statement
- **Index** — a catalog list of every program (like a library index)
- **Circle** — the same programs, browsable as an image grid
- **Details** — tapping any program opens a full detail panel
- **Events** — upcoming Bloom events, or a "coming soon" message
- **About** — mission, pillars (Read · Reflect · Create · Connect · Lead), accessibility statement
- **Contact** — an interest form plus direct contact options

A navigation bar with **Index / Circle / Details / About / Contact** stays
fixed at the bottom of the screen on every device.

## 1. How to edit homepage text

Open `index.html` in GitHub (click the pencil icon to edit). The hero
headline and intro text are near the top, inside `<section id="home">`.
Edit the text between the tags directly and commit.

## 2. How to replace the official logo

1. Prepare a square image of the new logo (at least 600×600px).
2. In GitHub, go to ``.
3. Upload your new file and name it exactly `her-bloom-circle-logo.jpg`
   (this replaces the old one — GitHub will ask you to confirm).
4. If you have a tool to export WebP, also replace
   `her-bloom-circle-logo.webp`. If not, the site still works fine with
   just the `.jpg`.

## 3. How to replace the floral image

Same idea: upload a new image to `` named exactly
`her-bloom-floral-border.jpg` (wide, roughly 3:1 aspect ratio works best).

## 4. How to replace program images

Each program's image lives in ``, named to match
its `id` (e.g. `bloom-book-club.jpg`). Upload a new image with the exact
same filename to replace it. Current images are labeled placeholders —
replace all of them before launch.

## 5. How to add a program

Open `programs.js`. Copy one existing program's `{ ... }`
block, paste it at the end of the list (before the closing `]`), and
edit every field. Give it a unique `id` (lowercase, hyphens only — this
becomes the image filename and the program's URL). It will automatically
appear in the Index, the Circle, and get its own Details panel — no
other file needs to change.

## 6. How to remove a program

In `programs.js`, delete that program's whole `{ ... }`
block (including its surrounding commas so the file stays valid).

## 7. How to add an event

Open `events.js` and copy an existing event block the same
way as adding a program. If this is the organization's first upcoming
event, the site will automatically stop showing "Next Circle Coming Soon."

## 8. How to update an event

Edit the fields directly inside its block in `events.js`.

## 9. How to update contact information

Contact email and options live in `site-settings.js`, and
also appear directly in the Contact section of `index.html` — update
both places if you change the email address.

## 10. How to update social links

In `index.html`, find the `.social-row` block inside `<section id="contact">`
and replace the `href="#"` values with your real Instagram, Facebook,
and YouTube links.

## 11. How to preview the website

You can't fully preview interactive behavior by opening the HTML file
directly on an iPad. The most reliable way to preview is to push your
change to GitHub and check the live site at herbloomcircle.org, or use
GitHub Pages' preview via a pull request if you're comfortable with branches.

## 12. How to publish changes

Any commit to the `main` branch publishes automatically. In the GitHub
app or website: open the file → tap the pencil/edit icon → make your
change → scroll down → "Commit changes." The live site updates within
a minute or two.

## 13. How GitHub Pages works

GitHub Pages serves the contents of this repository directly as a
website — whatever is in `main` is what visitors see. There's no
separate "build" or "deploy" step to run.

## 14. How the CNAME file works

The `CNAME` file (no file extension) contains exactly one line:
`herbloomcircle.org`. This tells GitHub Pages which custom domain to
serve the site on. **Do not delete this file or change its contents**
unless you're intentionally changing the domain.

## 15. How to avoid breaking the custom domain

- Never delete the `CNAME` file.
- Never edit it to contain anything other than `herbloomcircle.org`
  (no `https://`, no trailing slash, no extra lines).
- If GitHub Pages settings ever show a DNS warning, check your domain
  registrar's DNS records — they must point to GitHub's servers
  (see GitHub's Pages settings page for the exact IPs/CNAME to use).

## 16. How to enable Enforce HTTPS

In the repository: **Settings → Pages**. Once your custom domain shows
a green checkmark (DNS verified), a checkbox labeled **"Enforce HTTPS"**
becomes available. Check it. If it's greyed out, wait — GitHub is still
issuing the SSL certificate, which can take a few hours after DNS verifies.

## 17. How to restore a previous version through GitHub history

Every file in GitHub keeps its full edit history. Open the file, click
**"History"** (or the clock icon), find the version you want, and either
copy its content back in or use GitHub's revert option on that commit.

---

## Technical notes (for whoever maintains this longer-term)

- Pure HTML/CSS/JS, no build tools, no dependencies beyond Google Fonts (loaded via CDN with `font-display: swap` behavior).
- Content is data-driven: `programs.js`, `events.js`, and `site-settings.js` are the source of truth; `app.js` renders the Index, Circle, and Details panel from that data at runtime.
- The Details panel is an accessible modal: focus-trapped, closes on Escape or overlay click, returns focus to the triggering element, and is reachable by keyboard.
- The bottom navigation is `position: fixed`, respects `env(safe-area-inset-bottom)` for iOS, and tracks the active section via scroll position (`IntersectionObserver`-adjacent scroll tracking) plus explicit state when the Details panel opens.
- `prefers-reduced-motion` is respected throughout (scroll behavior and reveal animations are disabled for users who request it).
- The contact form validates client-side but **is not yet wired to a live email service** — see the note directly under the form in `index.html`. Connect a static-form provider (e.g. Formspree, Getform) or replace the `submit` handler in `app.js` before relying on it.
- All program/event images are placeholders generated for structure only, clearly labeled "PLACEHOLDER IMAGE" — replace every one before launch.
- `` contains a generated favicon set from the uploaded logo.

## Known limitations / still needed from the owner

- Real photography for every program and event (currently labeled placeholders).
- A connected form service for the Contact form.
- Founder story and community-impact content for the About section (currently marked as placeholders).
- Real social media URLs.
- Confirmation of final program details (ages, times, formats) — current copy is a reasonable starting draft.
