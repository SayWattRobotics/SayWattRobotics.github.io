Class 1.7 — Media (Sunday, July 26, 2026 · First Splash)

PHOTOS
  00-hero-poolside-first-splash.jpg
    HERO. Three students at the pool edge with the four-motor PVC frame on
    pool-noodle floats, tether flaked out on the deck, yellow TriggerFish
    control box powered up on the cart.

  01-motor-pairs-control-box-bench.jpg
    Bench work before the pool — testing the motor pairs on each tether line
    with the yellow control box open. Polarity checked on all four motors here.

  02-first-in-water-test-piloting.jpg
    Poolside, hands on the joysticks during the first in-water test. This is
    the run where motor 4's one-direction anomaly showed up.

VIDEO
  03-first-splash-noodle-floats.mp4  (+ .jpg poster frame)
    First splash. Vehicle positively buoyant on pool-noodle floats, swimmer
    alongside as spotter, tether tended from the deck. 19 s.

  04-submerged-run-vertical-motors.mp4  (+ .jpg poster frame)
    Floats off. Vehicle holding station under the surface on the tether over
    the 5-foot mark — the run that made "vertical motors only go up" obvious.
    20 s.

  Both clips re-encoded from the original GroupMe MP4s for web delivery
  (H.264 720p, CRF 30, faststart, mono AAC — roughly 8 MB down to 4.5 MB).
  The camera originals are parked in assets/meetings/_originals/1.7/, which
  is git-ignored. Poster frames are pulled from the encoded files, so the
  <video> element shows a real frame before anyone presses play.

  Video support was added to the Field Log renderer for this entry: any
  meeting note can now carry a `videos: [{ src, poster, caption }]` array.
  Clips are lazy (preload="none"), only one plays at a time, and they sit
  behind the same photoConsentPending gate as the photo gallery.

DOCUMENT
  meeting-note.pdf
    Printable one-page field note for 1.7, same layout as 1.3–1.6.

CONSENT
  Field Log entry 1.7 is set to photoConsentPending: false — hero, gallery,
  and video are all live. Students visible in these files: Trenton, Rhylan,
  Luke, Frankie, Evan, Carter, Maddox, Annable, Lilian, Madelyn, Isaac.
  Flip the flag to true in content.js if a release ever needs to be pulled.
