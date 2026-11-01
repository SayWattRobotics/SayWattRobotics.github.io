Class 2.5 — Sunday, October 18, 2026 · Cardboard, Then Plastic, Then Brass

SOURCE
  "2027 MATE ROV Season Notes" (Google Doc), Drive > MATE ROV >
  2026-2027 season > Season Notes. Read 18 Oct 2026. Action-item owners are
  the sub-team groups the notes use (Management, Mechanical, Sensor,
  Software); they are not mapped to individual students.

  The notes for this session have an executive summary only — attendance,
  section notes, and action items are blank. The entry leans on the photos
  and claims nothing they and the summary don't show. No action items are
  published; the PDF puts outcomes in that column instead.

PHOTOS (all taken 18 Oct 2026, 4:21-4:24 PM)
  00-hero-wiring-the-stepper-driver.jpg — student and coach wiring the
     TMC2209 to the ESP32 at the kitchen island.
  01-tmc2209-pinout-on-the-breadboard.jpg — laptop with the TMC2209 pinout,
     ESP32 on a screw-terminal breakout, hands at the breadboard.
  02-syringe-plate-cardboard-to-print.jpg — PVC pipe over the cardboard
     mockup and two printed syringe plates (one with a brass lead-screw nut).
     CROPPED: a mailed envelope in the original frame showed a student's
     full name and home address. Do not publish the uncropped original.
  03-printing-a-float-part.jpg — student at the 3D printer, slicer on screen.
     BLURRED: a framed diploma on the wall showed the family surname.
  04-float-wiring-diagram-and-buoyancy-math.jpg — calc sheet and the
     hand-drawn power/signal diagram.
  NOT USED: an overhead shot of the same papers, upside down, with the task
  sheet headed "Session 2.2" (conflicts with the doc's numbering).

  All exported at 1920 px long edge, progressive JPEG, EXIF stripped. The
  iPhone originals carry GPS and live in _originals/2.5/ (gitignored).

DIAGRAM NOTES
  Read from the photo: 12 V battery -> fuse (box labeled "Amp," rating not
  yet set) -> 12 V rail; 5 V buck converter -> ESP32; motor driver on 12 V
  with a 470 uF 50 V capacitor across it, logic at 3.3 V from the ESP32;
  stepper motor; micro SD, pressure sensor, and light sensor on the ESP32.
  There is no dedicated water-temperature sensor on the diagram. The 2027
  float must report water temperature within 2.0 C at each depth.

DOCUMENT
  meeting-note.pdf — printable two-page field note, generated straight from
  this entry in content.js.

UPDATE 1 NOV 2026
  The season notes for 2.5 were filled in after this entry was first
  written. Applied:
    · Attendance: eight — Trenton, Liam, Luke, Adrian, Tyler, Rebecca,
      Rhylan, Sam. "Attendance wasn't recorded" removed.
    · Mechanical: finalizing end cap; O-ring gland depth calculated at 25%
      squeeze; working CAD for the plunger system.
    · Electrical: 12 V to 5 V buck converter soldered (closes the 2.3/2.4
      item); ESP32 + stepper driver reconnected, software reloaded, new
      stepper motor tested on a 240 mm lead screw; "the electrical
      schematic from a previous season really helped rebuild the buoyancy
      controller."
    · Action items now published: create the PCB; find the ESP32 KiCad
      file or remake it.
    · byNumbers reworked (students, 25% squeeze, 240 mm, 3 plate versions).

  NEW PHOTO
    05-buoyancy-engine-on-the-bench.jpg — IMG_0217 from Drive > Pics,
    EXIF 18 Oct 2026 4:37 PM. Shown first in the gallery. Resized to
    1920 px, EXIF stripped.

  DIAGRAM DATE
    IMG_0179 in Drive (not published) shows the same hand-drawn wiring
    diagram, EXIF-dated Sat 3 Oct, 9:15 AM — it was drawn before 2.3, not at
    2.5. The entry only says it "sat next to the bench," which stays true.

  COACHING FLAG (not published)
    The bench photo shows a blue "KBT Lithium Ion Rechargeable Battery"
    pack powering the prototype. Fine for bench testing, but the 2027 float
    rules allow NiMH and AGM batteries only (ELEC-NRD-003). The competition
    float needs a NiMH or AGM pack, fused per the battery table.
