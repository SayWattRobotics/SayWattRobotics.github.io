# Say Watt Robotics — Website Guide

This is the complete website for Say Watt Robotics. It is **live on the web at
[saywattrobotics.org](https://saywattrobotics.org)**, hosted free through
GitHub. It's built so you only ever edit **one file** to keep it current — no
coding knowledge required.

---

## The three pages

| Page | File | What it is |
|---|---|---|
| **Landing page** | `index.html` | The front hub — visitors choose a team here. |
| **MATE ROV** | `MATEROV.html` | The ROV competition team's full page. |
| **FIRST LEGO League** | `fll.html` | The FLL team's full page. |

The landing page has two cards (MATE ROV and FIRST LEGO League) plus the
sponsor section. Each team page has its own curriculum, calendar, team roster,
updates, and the sponsor section.

---

## What's in this folder

| File / folder | What it is | Do you edit it? |
|---|---|---|
| `content.js` | All the words, dates, links, and numbers on the site | **Yes — this is the only one** |
| `index.html` | The landing page | No |
| `MATEROV.html` | The MATE ROV team page | No |
| `fll.html` | The FIRST LEGO League page | No |
| `style.css` | The visual design | No (unless changing colors) |
| `app.js` | The behind-the-scenes engine | No |
| `assets/` | Images — logo, illustrations, textures | Only to swap an image |
| `sponsors/` | Sponsor logo images | Add a sponsor's logo here |
| `RANGER_2027_Plan.pdf` | The season plan, linked from the ROV page | Replace to update |
| `CNAME` | Holds the custom domain `saywattrobotics.org` | **Don't delete this** |
| `README.md`, `.nojekyll`, `.gitignore`, `.gitattributes` | Technical housekeeping | Leave alone |
| `SETUP-GUIDE.md` | This guide | No |

The whole site reads from `content.js`. Change `content.js`, and the website
changes.

---

## How to make a change

The site is live and lives on GitHub, where **two people maintain it
(Preston and John)**. Use **GitHub Desktop**. The rhythm is always the same:

1. **Pull first.** Open GitHub Desktop and click **Fetch origin**. If a number
   appears, click **Pull origin** — this brings down anything the other person
   changed. Always do this *before* you start editing.
2. **Edit `content.js`** (see the next section). To preview before publishing,
   double-click `index.html` — it opens in your browser, fully working, just
   not yet online.
3. **Publish.** Back in GitHub Desktop: type a short summary, click
   **Commit to main**, then **Push origin**.
4. The live site at saywattrobotics.org refreshes within about a minute.

**The golden rule for two editors:** pull before you start, push the moment
you finish. Don't let edits sit on your laptop for days. If you and John might
both touch `content.js`, give each other a heads-up first — that avoids a
"merge conflict." If one ever happens, GitHub Desktop will say so; don't force
it, just ask for help and it's a quick fix.

---

## Editing `content.js`

Open `content.js` in any plain-text editor (TextEdit, VS Code, or right in
GitHub Desktop). It is organized into clearly labeled sections:

- `org` — club name, contact email, the Sponsors-button link
- `sponsors` — the sponsor logos shown on every page
- `sponsorLede` / `fundingLede` — the sponsor-section intro lines
- `landing` — the welcome text and the two team cards on the front page
- `rov` — everything on the MATE ROV page
- `fll` — everything on the FIRST LEGO League page

### The three rules that keep it from breaking

1. Every piece of text stays inside `"double quotes"`.
2. Keep the comma at the end of each line.
3. Don't delete the `{ }` and `[ ]` brackets — only change the text between
   them.

If the site ever goes blank, you almost certainly removed a quote, comma, or
bracket. Undo your last change and save.

### Common updates

**Change the landing-page welcome or a team card.** In the `landing` section,
edit `heroHeadline`, `heroSub`, or a team's `tagline`.

**Add a focus area / week to a phase.** In `rov` (or `fll`) → `phases`, find a
phase, copy one whole block from `{` to `}`, paste it after, and edit it:

```js
{
  label: "CAD",
  theme: "Intro to Onshape",
  lessons: [
    "Navigating the Onshape interface",
    "Sketching a simple ROV frame part"
  ]
},
```

**Add a calendar event.** In that team's `calendar` section, copy a line and
edit it. Dates must be written `"YYYY-MM-DD"`. The site sorts events
automatically and flags the soonest as "NEXT UP".

**Add a team member.** In that team's `roster` section, copy a line and replace
`"Add Student"` with the real name.

**Update the funding meter.** In `rov` → `funding`, change `raised` and `asOf`
as money comes in. To mark a wish-list item as covered, set its `funded:` to
`true` — it gets a "✓ Funded" check on the site.

**Add or change a sponsor.** In the `sponsors` list, copy a `{ … }` block and
edit the `name`, `url`, and `logo`. Put the sponsor's logo image in the
`sponsors/` folder and point `logo` at it (e.g. `"sponsors/newsponsor.png"`).
If you leave `logo` off, the sponsor's name shows as text instead.

Save, commit, push — the site rebuilds itself every time.

---

## Hosting facts

- The site is hosted **free on GitHub Pages**, served from the `main` branch of
  the `SayWattRobotics/SayWatt-Website` repository.
- The public address is **saywattrobotics.org**, set by the `CNAME` file in
  this folder. Leave that file alone — deleting it would break the domain.
- Every push to `main` republishes the site automatically.

---

## Quick troubleshooting

**The site is blank or looks broken.** A quote, comma, or bracket was removed
from `content.js`. Undo the last edit and save.

**My change isn't showing up.** GitHub takes 30–90 seconds to rebuild. Wait,
then refresh. On a device that visited before, do a hard refresh or open the
site in a private window.

**A sponsor shows as text instead of a logo.** That sponsor's `logo` image
isn't in the `sponsors/` folder yet, or the filename in `content.js` doesn't
match it exactly.

**The page says "content.js did not load."** `content.js` must sit next to the
HTML files at the top level of the folder.

**I want to change the site's color.** It's in `style.css`, near the top —
the `--accent` value. Changing that one value re-tints the whole site.

---

That's everything. Pull, edit `content.js`, commit, push — and the website
stays current.
