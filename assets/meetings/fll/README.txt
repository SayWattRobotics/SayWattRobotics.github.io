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
  00-hero-kit-unboxing.jpg
    HERO. Coaches and parents opening the LEGO Education kits at the
    kitchen island.
  01-sorting-first-pieces.jpg
    Two builders sorting the first elements out of the bags at the
    dining table.
  02-digital-build-instructions.jpg
    Digital build instructions open on a Chromebook, elements laid out,
    a sub-assembly coming together by hand.
  03-first-drive-base.jpg
    Two builders with a drive base already on the table — hub mounted,
    motors on.
  04-building-at-the-coffee-table.jpg
    The coffee table as the fourth build station.

  Source files were iPhone HEIC, converted to progressive JPEG and
  resized to 1920 px on the long edge. EXIF puts all five at
  16 Aug 2026, 2:26–2:27 PM.

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
