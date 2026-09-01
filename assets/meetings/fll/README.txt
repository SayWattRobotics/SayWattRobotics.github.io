FIRST LEGO League — Field Log media
assets/meetings/fll/<week>/

STRUCTURE
  One folder per meeting, named for the entry's week number, e.g.
  assets/meetings/fll/1.1/. Same naming convention as the ROV team:

    00-hero-<short-description>.jpg   hero, renders above the recap
    01-<short-description>.jpg        gallery, chronological order
    02-<short-description>.jpg
    ...

MEETING 1.1 — Sunday, August 16, 2026 · "Kickoff — The Boxes Come Open"
  00-hero-first-drive-base.jpg
    HERO. Two builders at the dining table with the first drive base of
    the season beside them — hub mounted, motors on.
  01-sorting-first-pieces.jpg
    Two builders sorting the first elements out of the bags at the
    dining table.
  02-digital-build-instructions.jpg
    Digital build instructions open on a Chromebook, elements laid out,
    a sub-assembly coming together by hand.
  03-building-at-the-coffee-table.jpg
    The coffee table as the fourth build station.
  04-coaches-opening-the-kits.jpg
    Coaches and parents opening the LEGO Education kits at the kitchen
    island.

  HERO RULE: the hero is always the kids. Adults can appear in the
  gallery — the coaches-opening-the-kits shot is a good one — but the
  image at the top of an entry should show the builders, not the
  grown-ups. The first cut of this entry led with the parents; it was
  wrong and got changed.

  Source files were iPhone HEIC, converted to progressive JPEG and
  resized to 1920 px on the long edge. EXIF puts all five at
  16 Aug 2026, 2:26–2:27 PM.

MEETING 1.2 — Sunday, August 23, 2026 · "Bring Me a Problem"
  No photos submitted. If any surface, create assets/meetings/fll/1.2/
  and follow the naming convention above.

  Worth chasing: the table with everyone's research out, and the Kahoot
  scoreboard on screen.

  SOURCE NOTES — attendance read Alex, Isaiah, Savannah, Claire, Daniel
  and Samuel (six). A seventh student, Jenna, has research recorded in
  the same notes but is missing from the attendance line; the entry
  counts her work and assumes the attendance list simply missed her.
  The notes also use "Sam" in the research and "Samuel" in attendance —
  treated as the same person. Correct here if either assumption is wrong.
  None of this appears on the site: the no-names house rule means the
  entry says "one builder" throughout, so a roster error cannot reach
  the public page.

  Two students on the attendance list — Claire and Daniel — have no
  research recorded in the notes. The published entry describes seven
  ideas without claiming everyone brought one.

  The agenda linked a YouTube video on FLL strategy
  (https://youtu.be/wbD9HPol4mk). It is referenced in the recap as "a
  short video" but not linked from the site — the Field Log has no link
  field and an unvetted third-party video is not something to point
  parents at from the team page.

  FACT CHECK — two of the students' ideas are real, active research and
  the entry says so, because it is true and it is encouraging:
    · Seaweed in cattle feed to cut enteric methane is a genuine and
      well-documented line of research.
    · Egg oiling (addling) is an established wildlife-management
      technique, done under permit.
  Neither claim goes further than "scientists are working on this" /
  "wildlife managers use this." Do not let the entry drift into stating
  effectiveness numbers the kids did not research themselves.

MEETING 1.3 — Sunday, August 30, 2026 · "Define It Before You Solve It"
  No photos submitted.

  INCOMPLETE SOURCE — the raw notes for this session have an agenda but
  the "Accomplished" and "Notes" sections were left blank. The published
  entry is written from the agenda alone (mission model builds, the
  lesson on defining a problem, and a biodiversity Kahoot) and makes no
  claim about outcomes that were not recorded. It is deliberately shorter
  than 1.2.

  To upgrade this entry, four facts would do it:
    1. How many mission models actually got finished, and how many remain.
    2. Whether the team narrowed the seven ideas at all, or just learned
       the method.
    3. Anything a builder said or figured out that is worth quoting.
    4. Whether the Kahoot had a winner worth a line.

  Attendance was four: Alex, Claire, Isaiah, Daniel. Names do not appear
  in the entry, per the house rule.

FIELD NOTE ON `time`
  Entry 1.1 has no `time` field. Entries 1.2 and 1.3 include one
  (1:30 – 2:30 PM) because the source notes recorded it and the renderer
  displays it beside the date. Worth backfilling 1.1 if anyone remembers
  the hour.

PDFs
  Still none for FLL, per the house rule above. The ROV team's printable
  notes double as instructor artifacts; this feed has no equivalent need.
  If that changes, the ROV generator reads straight from content.js and
  would work for these entries without modification.

HOUSE RULES FOR FLL ENTRIES
  · No student names. These builders are younger than the ROV team and
    there is no roster page to match names against — write "the team"
    and "one of our builders."
  · Keep it warm and plain. The ROV field log can be technical; this one
    is read by parents and by the kids themselves.
  · Lighter section set than the ROV entries — recap, byNumbers, what we
    learned, looking ahead, photos. No safety block, no action-item
    table, no decisions list unless a meeting genuinely produced one.
  · No printable meeting-note PDF for FLL entries so far. The ROV team
    has one per meeting because it doubles as an instructor artifact;
    the FLL page has no equivalent need. Add `pdfUrl` to an entry if
    that ever changes.

CONSENT
  Entry 1.1 is published with photoConsentPending: false — hero and
  gallery live. If a release is ever pulled, flip that flag to true in
  content.js and the renderer hides the hero and the gallery on its own
  and shows a short placeholder instead. Adults appear in the hero; the
  gallery photos show students.

PAGE STRUCTURE (changed at 1.1)
  The FLL page was simplified down to: Field Log → Season → Resources →
  Sponsors. The week-by-week curriculum explorer, the dated calendar,
  and the team roster were all removed. The Season block renders the six
  `phases` entries as a compact list (name, one-line summary, date range)
  via renderSeasonSchedule() in app.js — the `weeks` arrays are now empty
  and unused on this page. Team Documents is a single link to the shared
  Google Drive folder.
