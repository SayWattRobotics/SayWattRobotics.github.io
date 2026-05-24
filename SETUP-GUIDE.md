# Say Watt Robotics — Website Setup Guide

This is the complete website for Say Watt Robotics. It's fast, free to host,
works on phones and computers, and is built so that **you only ever edit one
file** to keep it current. No coding knowledge required.

The site has **two team pages** under one club:

- **ROV Team** — `index.html` — this is the homepage the site opens to.
- **FIRST LEGO League** — `fll.html` — reached from the tab at the top.

Visitors switch between them with the **ROV Team / FIRST LEGO League** tabs in
the navigation bar.

---

## What's in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | All the words, dates, and links for both team pages | **Yes — this is the only one** |
| `index.html` | The ROV team page (the homepage) | No |
| `fll.html` | The FIRST LEGO League page | No |
| `style.css` | The visual design | No |
| `app.js` | The behind-the-scenes engine | No |
| `logo.png` | Your club logo (you add this — see below) | You add it |
| `sponsors/` | Folder for sponsor logo images | You add images |
| `NANO-BANANA-LOGO-PROMPT.md` | The prompt for making your logo | No |
| `SETUP-GUIDE.md` | This guide | No |

The whole site reads from `content.js`. Change `content.js`, and the website
changes.

---

## Part 1 — See it on your own computer first

1. Open the `rov-team-site` folder.
2. Double-click `index.html`.

It opens in your web browser. That's the ROV homepage. Click the **FIRST LEGO
League** tab at the top to see the other page. Click a phase to expand it, click
a week inside it, try the search box.

Nothing here is on the internet yet — this is just a private preview.

---

## Part 2 — Add your logo

The website is ready to show a logo at the top-left of every page.

1. Open `NANO-BANANA-LOGO-PROMPT.md` and follow it to create your logo from the
   team T-shirt artwork.
2. Save the finished logo as **`logo.png`** in the `rov-team-site` folder, right
   next to `index.html`.

That's it — the site shows it automatically. Until you add the file, the site
simply shows "Say Watt Robotics" as text instead, so nothing looks broken.

---

## Part 3 — Add the sponsor logos

The footer of every page shows your four sponsors, each one a clickable link to
their website. To show their logos instead of plain text, open the `sponsors`
folder and read `_ADD-LOGOS-HERE.txt` — it lists the exact file names to use.

Until you add those images, each sponsor shows as a clickable name. The links
already work either way.

---

## Part 4 — Put it online with GitHub (free)

GitHub will host the site for free at an address like
`https://yourname.github.io/say-watt`. This takes about 15 minutes, once.

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up. It's free. Pick a username
you're happy with — it becomes part of your website address.

### Step 2 — Create a repository
A "repository" (or "repo") is just a project folder that lives on GitHub.

1. Click the **+** in the top-right corner, then **New repository**.
2. **Repository name:** type something simple like `say-watt`.
3. Set it to **Public** (required for free hosting).
4. Click **Create repository**.

### Step 3 — Upload the website files
1. On your new repository page, click **Add file → Upload files**.
2. Open the `rov-team-site` folder on your computer and select **everything
   inside it** — `index.html`, `fll.html`, `style.css`, `app.js`, `content.js`,
   `logo.png`, the `sponsors` folder, and the guide files.
3. Drag them all into the GitHub upload area. (You can drag the `sponsors`
   folder itself — GitHub keeps the folder.)
4. At the bottom, click the green **Commit changes** button.

Important: upload the files *themselves*, not the outer `rov-team-site` folder.
GitHub needs `index.html` to sit at the top level of the repository.

### Step 4 — Turn on GitHub Pages
1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and the **/ (root)** folder, then **Save**.

### Step 5 — Visit your live site
Wait one to two minutes, refresh the **Pages** settings screen, and it shows:

> Your site is live at `https://yourname.github.io/say-watt/`

That link is your website. It opens to the ROV homepage, and the FIRST LEGO
League tab works just like it did on your computer.

---

## Part 5 — How to update the site

Everything is driven by `content.js`. To change the website, you edit that one
file.

Inside `content.js` you'll find clearly labeled sections:

- `org` — the club name, email, and logo (applies to the whole site)
- `sponsors` — the sponsor links shown at the bottom of every page
- `rov` — everything on the ROV team page
- `fll` — everything on the FIRST LEGO League page

To change something on the ROV page, edit inside the `rov` section. To change
the LEGO League page, edit inside the `fll` section. They have the same layout —
team info, curriculum (phases and weeks), calendar, resources, roster, updates.

### Edit directly on GitHub (easiest, no software)
1. In your repository, click on `content.js`.
2. Click the **pencil icon** (top-right of the file) to edit.
3. Make your changes.
4. Click **Commit changes**.
5. Wait about a minute — the live site updates itself.

### The three rules that keep it from breaking
1. Every piece of text stays inside `"double quotes"`.
2. Keep the comma at the end of each line.
3. Don't delete the `{ }` and `[ ]` brackets — only change the text between them.

If the site ever goes blank, you almost certainly removed a quote, comma, or
bracket. Undo your last change, save, and it comes back.

### Common updates

**Add a new week to a phase.** Find the phase (in `rov` or `fll`), copy one
whole week block — everything from `{` to `}` — paste it right after, and edit:

```js
{
  label:  "Week 4",
  dates:  "July 6",
  theme:  "Intro to CAD",
  lessons: [
    "Navigating the Onshape interface",
    "Sketching a simple ROV frame part"
  ]
},
```

**Add a calendar event.** In that team's `calendar` section, copy a line and
edit it. Dates must be `"YYYY-MM-DD"` (year-month-day). The site sorts events
automatically and flags the soonest one as "NEXT UP".

**Add a team member.** In that team's `roster` section, copy a line and replace
`"Add Student"` with the student's name.

**Name the ROV team.** When the ROV team picks its own name, change `name:`
inside the `rov` → `team` section.

Save, commit, done. The site rebuilds itself every time.

---

## Part 6 — Use your own domain name (optional)

The free `yourname.github.io/say-watt` address works perfectly. If you'd rather
have something like `saywattrobotics.org`:

1. Buy the domain from a registrar (Namecheap, Cloudflare, etc.) — usually
   $10–15 a year.
2. In your repository: **Settings → Pages → Custom domain**, type your domain,
   save.
3. On your registrar's "DNS" settings page, add the records GitHub asks for.
4. Tick **Enforce HTTPS** once it becomes available.

If this feels fiddly, the free github.io address is completely fine to launch
with — you can add a domain any time later.

---

## Quick troubleshooting

**The site is blank or looks broken.** A quote, comma, or bracket was removed
from `content.js`. Undo the last edit and save.

**My change isn't showing up.** GitHub takes 30–90 seconds to rebuild. Wait,
then refresh. On a device that visited before, do a hard refresh or use a
private window.

**The logo isn't showing.** The file must be named exactly `logo.png` and sit
next to `index.html`. If it still shows text, that name or location is off.

**A sponsor shows as text, not a logo.** That logo image hasn't been added yet —
see `sponsors/_ADD-LOGOS-HERE.txt` for the exact file names.

**The page says "content.js did not load."** `content.js` must sit in the same
place as `index.html` — both at the top level of the repository.

**I want to change the colors.** That's in `style.css`. The main color is set
near the top as `--accent`. Change that one value to re-tint the whole site.

---

That's everything. Edit `content.js`, commit, and the website keeps both team
pages current all season long.
