# Say Watt Robotics — Class Production Standard

*The standard for producing every weekly class. Three artifacts, one naming convention, one workflow. Drop this into the `saywatt-slide-design` skill (Settings → Capabilities) so every future class is generated to this spec automatically.*

---

## 1. Every class ships three artifacts

| Artifact | What it is | On the website? |
|---|---|---|
| **Slides** (`.pptx` + `.pdf`) | The in-room teaching tool. Beautiful, minimal, one idea per slide. | **Yes** — published as a `.pdf` so it displays inline in the browser ("slide deck (view)"), with the editable `.pptx` linked too ("slides (PowerPoint)") |
| **Prep Sheet** (1-page `.pdf`) | Operational checklist: what to buy, stage, set up, cue up, and confirm before the meeting. | **Yes** — hyperlinked |
| **Instructor Notes** (`.pdf`) | The full teaching briefing: what to do before the meeting + a natural-prose run-of-show, block by block. | **Yes** — linked alongside the slides and prep sheet |

**The rule:** a class is not "done" until all three exist and the Prep Sheet's materials reconcile against the master Season BOM.

---

## 2. Naming convention — `{phase}.{class} {Title} - {Type}`

All three files live in `Classes/Phase {N}/` and share the same `{phase}.{class}` stem so they sort and find together.

```
1.1 Kickoff - Slides.pptx
1.2 Soldering Bootcamp - Slides.pptx
1.2 Soldering Bootcamp - Prep Sheet.pdf
1.2 Soldering Bootcamp - Instructor Notes.pdf
```

`1.2` = Phase 1, Class 2. (Class number = meeting number within the phase.)

On the website, link all three artifacts (Slides, Prep Sheet, and Instructor Notes) from that class's `resources` array in `content.js` (URL-encode spaces as `%20`).

---

## 3. The Prep Sheet — fixed sections

A single printable page in the Say Watt visual language. Always these sections:

- **T-minus strip** — T–2 weeks / T–1 week / T–1 day / T–0, so long-lead items never arrive late.
- **Order ahead · lead-time alarms** — anything that must be purchased in advance, with cost and the by-when. Flag the single most time-critical item in red (`#D93732`, used once).
- **Stage in the room** — tools and consumables with quantities.
- **Set up** — power, ventilation, layout, safety gear.
- **Cue up** — videos, links, manuals, pre-reads.
- **Students bring** — what each kid carries in.
- **Confirm · gating** — prerequisites that gate this or a future class (battery, pool, host).
- **Prep owners** — who does each prep task, by when (mapped to the T-minus cadence).

---

## 4. The Instructor Notes — fixed structure

A clean multi-page PDF, same palette and type as the deck. Always:

1. **The one goal** — the single non-negotiable outcome of the class (teal call-out).
2. **Before you teach this** — instructor self-education and night-before prep (watch the video, practice the skill yourself, skim the manual, read the safety section, internalize Section 4.3).
3. **Why this class matters** — the high-level WHY in two short paragraphs.
4. **How the meeting runs — block by block** — each agenda block as a **bold lead line + the clock**, then a short paragraph of **natural-prose** run-it guidance written like a mentor's notes (the "why" folded in only where it isn't obvious). **No rigid WHAT / HOW / WHY labels** — they read like a form. Keep the high-value detail in the **callouts** (reading grounding, the 4.3 lane, competition dividends) as distinct boxes. Wherever a concept on the deck is implicit (e.g. *what the capsule actually is*), spell it out in full so a parent can teach it cold.
5. **The parent lane — Section 4.3** — the teach-once / hands-off discipline, restated as a call-out.
6. **Common problems & quick fixes** — a symptom → fix table for the day's hands-on skill.
7. **What "done" looks like** — the class's exit criteria, pulled from the Phase plan.
8. **If you fall behind** — the protect-the-priority guidance (e.g. add a second session rather than cut hands-on practice).

---

## 5. Supporting source of truth — the Season BOM

A master **Season BOM + Procurement Tracker** (one spreadsheet, CFO-owned) is the single source for every material, tool, and consumable: quantity, cost, supplier, lead time, needed-by week, and status (own / ordered / in-hand). Every Prep Sheet's "Order ahead" and "Stage in the room" sections are drawn from — and reconciled against — this sheet. *(Build this once; reference it forever.)*

---

## 6. Production workflow

1. **Content first** — pull the class's section from the Phase plan PDF + `mate-rov-advisor` for technical depth.
2. **Build the Slides** — copy the most recent deck as the template (`saywatt-slide-design` + `pptx`); QA-render every slide. Also export the deck to a `.pdf` (`soffice --convert-to pdf`) so it displays inline on the site.
3. **Build the Prep Sheet** — section 3 above; reconcile materials against the Season BOM.
4. **Build the Instructor Notes** — section 4 above; expand anything the deck leaves implicit.
5. **Name + file** all three per section 2; link all three in `content.js`.
6. **Present all three to Preston** before anything is committed. Remind him website changes are local until pushed.

---

## 7. Design system (shared by all three)

Palette: ink `#1D1D1F`, body `#6E6E73`, faint `#86868B`, hairline `#E3E3E6`, off-white `#FBFBFD`, teal `#0D7490`, teal-dark `#095D75`, pale teal `#EAF2F4`, Say Watt red `#D93732`. Red is a scalpel — at most one element per page. Typeface: Helvetica Neue (Arial fallback). Generous whitespace; the content is the design.
