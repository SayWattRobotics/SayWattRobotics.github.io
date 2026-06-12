/* =================================================================
   ★ THIS IS THE ONLY FILE YOU NEED TO EDIT ★

   Everything on the website comes from this file. To change the site,
   change the text below, save, and (if using GitHub) commit the file.
   The website updates itself.

   THE SITE HAS THREE PAGES:
     • landing — the front hub            (index.html)
     • rov     — the MATE ROV team page   (MATEROV.html)
     • fll     — the FIRST LEGO League page (fll.html)
   Each has its own section below. Edit whichever you need.

   A FEW SIMPLE RULES so nothing breaks:
   1. Keep every piece of text inside "double quotes".
   2. Keep the comma at the end of each line.
   3. Don't delete the { } [ ] brackets — just edit text between them.
   4. To add an item, copy a block from { to }, paste it, edit it.

   If the site ever shows a blank page, you most likely deleted a
   quote, comma, or bracket. Undo your last change and save again.
   ================================================================= */

window.SITE = {

  /* =================================================================
     ORG — applies to the WHOLE site (both team pages)
     ================================================================= */
  org: {
    name:         "Say Watt Robotics",
    location:     "Madison, AL",
    contactEmail: "contact@saywattrobotics.org",    // ← your real club email

    // The "Donate" button in the top navigation bar.
    // • Leave it as "#sponsors" and the button scrolls down to the
    //   sponsor section and opens the funding plan.
    // • Or paste a real donation-page link (PayPal, Givebutter,
    //   Zeffy, etc.) and the button sends people straight there.
    donateUrl: "#sponsors",

    // The top-left logo is built automatically from the Say Watt
    // emblem (assets/logo-emblem.png) — no logo file to manage here.
  },

  /* =================================================================
     SPONSORS — shown at the bottom of EVERY page
     Each sponsor links to their real website. If you add a logo image
     file (see "logo"), it shows the logo; otherwise it shows the name.
     ================================================================= */
  sponsors: [
    {
      name: "Tennessee Valley Robotics",
      url:  "https://www.tnvrobotics.org/",
      logo: "sponsors/tennessee-valley-robotics.png"
    },
    {
      // Charitable arm of the AUVSI Pathfinder Chapter (Huntsville).
      // This is the actual donor — the $2,500 came from the Foundation,
      // not from AUVSI national.
      name: "Pathfinder Charitable Foundation",
      url:  "https://www.auvsipathfinder.org/foundation-home",
      logo: "sponsors/pathfinder-charitable-foundation.jpg"
    },
    {
      name: "DoW STEM",
      url:  "https://dowstem.us/",
      logo: "sponsors/DoDSTEM.png"
    },
    {
      name: "National Space Club",
      url:  "https://www.spaceclubhsv.org/",
      logo: "sponsors/NSC.png"
    },
    {
      name: "TactWare",
      url:  "https://tactware.net/",
      logo: "sponsors/TactWare.png"
    },
    {
      name:"GigaParts",
      url: "https://www.gigaparts.com/",
      logo: "sponsors/GigaParts.png"
    }
  ],
  sponsorLede:
    "Say Watt Robotics runs on the generosity of our sponsors. Their support " +
    "puts real engineering tools in students' hands — and we'd love to add yours.",

  /* The framing line at the top of the funding plan. It introduces the
     two teams so a sponsor knows there are two ways to give. */
  fundingLede:
    "Say Watt Robotics fields two competition teams — and both are raising " +
    "money this season. Here's exactly where each one stands, and what your " +
    "support buys, side by side. Back whichever team you like — or both.",

  /* The transparency pledge — a highlighted badge at the top of the funding
     plan. The itemized tiers below are the proof behind the "100%" claim. */
  fundingPledge: {
    badge:    "100% to the mission",
    headline: "Every dollar reaches the team. $0 goes to overhead.",
    body:
      "We're an all-volunteer, parent-run team — no salaries, no office, no " +
      "administrative costs. Sponsors give by check or Venmo, so there are no " +
      "processing fees either. Every dollar you give maps to a specific part " +
      "on the list below.",
    goesTo:
      "Thrusters, tether, the manipulator, the camera, and the trip to " +
      "compete — every line itemized below.",
    neverGoesTo:
      "Salaries, office rent, administrative overhead, or fundraising costs. " +
      "There are none — and there never will be.",
  },

  /* =================================================================
     LANDING PAGE — the main hub (index.html)
     The welcome text and the two team cards on the front page.
     ================================================================= */
  landing: {
    eyebrow:      "Madison, Alabama",
    heroHeadline: "One workshop. Two teams.",
    heroSub:
      "Say Watt Robotics is a student robotics program in Madison, Alabama. " +
      "We started in FIRST LEGO League and now field a MATE ROV team too. " +
      "Choose a team to explore — or scroll down to sponsor the program.",
    teams: [
      {
        name:    "MATE ROV",
        tagline: "Our RANGER-class team building an underwater robot and a " +
                 "profiling float for the 2027 Competition.",
        art:     "assets/rov-illustration.png",
        href:    "MATEROV.html",
        cta:     "Explore the ROV team"
      },
      {
        name:    "FIRST LEGO League",
        tagline: "Our founding team — designing, building, and programming " +
                 "LEGO robots for the FIRST LEGO League Challenge.",
        art:     "assets/lego-robot-illustration.png",
        href:    "fll.html",
        cta:     "Explore the FLL team"
      }
    ]
  },

  /* =================================================================
     ROV TEAM  —  the MATEROV.html page
     ================================================================= */
  rov: {

    /* ---- 1. TEAM headline information ---- */
    team: {
      // The ROV team hasn't picked its own name yet. Update this when
      // they do. "Say Watt Robotics" is fine to leave for now.
      name:        "Say Watt Robotics — ROV Team",
      season:      "2026–2027 Season",
      heroHeadline:"Engineering an underwater robot, one week at a time.",
      heroSub:     "A student-run RANGER-class team building an ROV and a profiling float for the 2026-2027 Season.",
      facts: [
        "RANGER Class",
        "Dauphin Island Sea Lab",
        "Regional · April 2027",
        "Students at the pool"
      ]
    },

    curriculumLede:
      "The full season is organized into six phases. Open any phase to see " +
      "its weeks, and open any week to see exactly what was taught. Use the " +
      "search box to jump straight to any topic, skill, or lesson.",

    /* ---- 2. CURRICULUM — phases, weeks, lessons ----
       status can be:  "complete"  "active"  "upcoming"  */
    phases: [

      {
        name:    "Phase 1 — Foundation",
        dates:   "Summer 2026 · 12 lessons · dates set with the team",
        status:  "active",
        summary: "The goal isn't a competition ROV. It's a team that exists, a starter " +
                 "ROV in the water, and kids who have soldered something.",
        resources: [
          { label: "Phase 1 Plan (PDF) — the 12-lesson plan", url: "Classes/Phase%201/0%20Phase%201%20Plan.pdf" }
        ],
        weeks: [
          {
            label: "1.1",
            theme: "Kickoff — form the company",
            lessons: [
              "Overview of the MATE ROV Competition and the RANGER class",
              "Assigning the six company roles — CEO, CFO, and the mechanical, electrical, software, and communications leads",
              "Walking the season timeline and its six phases",
              "Setting the safety culture — every meeting opens with a safety brief",
              "Starting the community-outreach log on day one"
            ],
            resources: [
              { label: "Class 1.1 slide deck (view)", url: "Classes/Phase%201/1.1%20Kickoff%20-%20Slides.pdf" },
              { label: "Class 1.1 slides (PowerPoint)", url: "Classes/Phase%201/1.1%20Kickoff%20-%20Slides.pptx" },
              { label: "Class 1.1 prep sheet (PDF)", url: "Classes/Phase%201/1.1%20Kickoff%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.1 instructor notes (PDF)", url: "Classes/Phase%201/1.1%20Kickoff%20-%20Instructor%20Notes.pdf" },
              { label: "Homework — ROV 101 and ROV Design (MATE presentation)", url: "https://docs.google.com/presentation/d/e/2PACX-1vTql59VIKXynX5l6OrLGbOcxuekBsvHDZzkmqO37C_3kOFx3K9sbHUjmqJgSWZP_by8WUMNWb1GXN4v/pub?start=false&loop=false&delayms=3000" },
              { label: "Homework — How to Get a Team Started (MATE presentation)", url: "https://docs.google.com/presentation/d/e/2PACX-1vSRLerTRTqIqNuLh1LyRupOuqgAKxFCaHuACFYmSPNw8HRB9vDzBJLCwLT-rIoRTt-GruDI7zj8ccSC/pub?start=false&loop=false&delayms=3000" }
            ]
          },
          {
            label: "1.2",
            theme: "Soldering bootcamp",
            lessons: [
              "Soldering safety — irons, burns, fumes, eye protection",
              "The three joints: cold, good, and bridged — know them on sight",
              "The five moves, demonstrated once: strip, tin, heat, feed, heat-shrink",
              "Hands-on practice until every kid has a clean, steady joint"
            ],
            resources: [
              { label: "Class 1.2 slide deck (view)", url: "Classes/Phase%201/1.2%20Soldering%20Bootcamp%20-%20Slides.pdf" },
              { label: "Class 1.2 slides (PowerPoint)", url: "Classes/Phase%201/1.2%20Soldering%20Bootcamp%20-%20Slides.pptx" },
              { label: "Class 1.2 prep sheet (PDF)", url: "Classes/Phase%201/1.2%20Soldering%20Bootcamp%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.2 instructor notes (PDF)", url: "Classes/Phase%201/1.2%20Soldering%20Bootcamp%20-%20Instructor%20Notes.pdf" }
            ]
          },
          {
            label: "1.3",
            theme: "Kit unboxing & first electronics",
            lessons: [
              "Inventory the SeaMATE Triggerfish against the build manual",
              "Read the build sequence; make the first real kit joints",
              "Open the three records — GitHub repo, project notebook, photo log",
              "Sketch the waterproofing capsule — a sealed PVC body, one cable penetration"
            ],
            resources: [
              { label: "Class 1.3 slide deck (view)", url: "Classes/Phase%201/1.3%20Kit%20Unboxing%20and%20First%20Electronics%20-%20Slides.pdf" },
              { label: "Class 1.3 slides (PowerPoint)", url: "Classes/Phase%201/1.3%20Kit%20Unboxing%20and%20First%20Electronics%20-%20Slides.pptx" },
              { label: "Class 1.3 prep sheet (PDF)", url: "Classes/Phase%201/1.3%20Kit%20Unboxing%20and%20First%20Electronics%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.3 instructor notes (PDF)", url: "Classes/Phase%201/1.3%20Kit%20Unboxing%20and%20First%20Electronics%20-%20Instructor%20Notes.pdf" }
            ]
          },
          {
            label: "1.4",
            theme: "Electronics workshop",
            lessons: [
              "The multimeter — voltage, continuity, current, and Ohm's law",
              "How switches work; building a circuit on the Simple Circuits Lab Kit",
              "The schematic symbols — learning to read a circuit",
              "The Electrical Symbols handout — kept forever, the standard the competition SID is graded against"
            ],
            resources: [
              { label: "Class 1.4 slide deck (view)", url: "Classes/Phase%201/1.4%20Electronics%20Workshop%20-%20Slides.pdf" },
              { label: "Class 1.4 slides (PowerPoint)", url: "Classes/Phase%201/1.4%20Electronics%20Workshop%20-%20Slides.pptx" },
              { label: "Class 1.4 prep sheet (PDF)", url: "Classes/Phase%201/1.4%20Electronics%20Workshop%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.4 instructor notes (PDF)", url: "Classes/Phase%201/1.4%20Electronics%20Workshop%20-%20Instructor%20Notes.pdf" }
            ]
          },
          {
            label: "1.5",
            theme: "Control box I",
            lessons: [
              "The PufferFish practice board — earn a clean joint first",
              "Start the TriggerFish REV 4 control-box build, stage by stage",
              "Meter-check each stage as you go — continuity good, no shorts"
            ]
          },
          {
            label: "1.6",
            theme: "Control box II",
            lessons: [
              "Finish the control-box wiring",
              "Build the ROV's power wire; connect the tether",
              "Fuse the circuit to its full-load amps",
              "Meter-check every stage before first power-up"
            ]
          },
          {
            label: "1.7",
            theme: "Capsule build & first splash",
            lessons: [
              "Build the capsules for real — PVC, end caps, O-rings, epoxy",
              "First poolside safety brief — lifeguard, buddy system, dry hands",
              "Every kid in the water — comfort and familiarity first",
              "Capsule drop #1 — open it, check the towel, log the result"
            ]
          },
          {
            label: "1.8",
            theme: "Build & iterate I",
            lessons: [
              "Assemble the Triggerfish frame, thrusters, and tether — the first full build",
              "Poolside safety, tether handling, and deck discipline"
            ]
          },
          {
            label: "1.9",
            theme: "Build & iterate II",
            lessons: [
              "Pool operations — flying the Triggerfish on the tether",
              "Capsule dive #2 — diagnose every leak to a cause, then re-seal",
              "Notebook: what leaked, why, and the fix that was tried"
            ]
          },
          {
            label: "1.10",
            theme: "Pilot & validate I",
            lessons: [
              "Tuning buoyancy and trim",
              "Every team member pilots the Triggerfish"
            ]
          },
          {
            label: "1.11",
            theme: "Pilot & validate II",
            lessons: [
              "Capsule dive #3 — the gate is three consecutive dry dives",
              "Basic electrical troubleshooting; tracing voltage through the ROV",
              "First SID exposure — the TriggerFish System Integration Diagram"
            ]
          },
          {
            label: "1.12",
            theme: "Showcase & launch Phase 2",
            lessons: [
              "The final Triggerfish demonstration for parents, stakeholders, and sponsors",
              "Role retrospective — reviewing the notebook, outreach, and photo logs",
              "Previewing Phase 2 — sub-team mini-projects and the float v1",
              "Thank-yous to every host, donor, and volunteer — logged as outreach"
            ]
          }
        ]
      },

      {
        name:    "Phase 2 — Capability",
        dates:   "August – mid-October 2026 · 10 weeks",
        status:  "upcoming",
        summary: "School's back. A steady weekly cadence, and each sub-team takes on a " +
                 "mini-project mapped to a real RANGER skill. The prototypes are " +
                 "throwaway — the learning is the deliverable.",
        weeks: [
          {
            label: "Cadence",
            theme: "Settle into the season",
            lessons: [
              "Setting a weekly cadence — one weeknight plus one weekend block",
              "Each sub-team chooses a mini-project mapped to a real RANGER skill",
              "Community outreach continues"
            ]
          },
          {
            label: "Mechanical",
            theme: "Design and 3D-print a gripper",
            lessons: [
              "Designing a working gripper in CAD",
              "3D-printing the parts and testing the mechanism"
            ]
          },
          {
            label: "Electrical",
            theme: "Build a topside control box",
            lessons: [
              "Building a fused topside control box",
              "Making proper, reliable wire terminations"
            ]
          },
          {
            label: "Software",
            theme: "Computer vision",
            lessons: [
              "Writing a Python program that detects and counts objects in a webcam feed",
              "Working with OpenCV on a USB camera"
            ]
          },
          {
            label: "Float",
            theme: "Build float v1",
            lessons: [
              "Building a v1 vertical profiler with a syringe buoyancy engine",
              "Reaching 2.5 m depth and transmitting the reading",
              "Building on a NiMH battery — the chemistry the rules require (alkaline and lithium-polymer are not permitted)"
            ]
          },
          {
            label: "CAD",
            theme: "CAD & photogrammetry for everyone",
            lessons: [
              "Completing the Onshape learning path",
              "Capturing a household object with photogrammetry"
            ],
            resources: [
              { label: "Onshape", url: "https://www.onshape.com" }
            ]
          }
        ]
      },

      {
        name:    "Phase 3 — Design",
        dates:   "Mid-October 2026 – mid-January 2027 · 12 weeks",
        status:  "upcoming",
        summary: "The 2027 manual drops in November. The team decomposes the missions, " +
                 "runs trade studies, locks the CAD, and orders the competition vehicle " +
                 "before the holiday break.",
        weeks: [
          {
            label: "Manual",
            theme: "Read and decompose the 2027 manual",
            lessons: [
              "Within 48 hours of release, the full team reads the manual together",
              "A two-week decomposition — every task broken into requirements, scoring, and constraints"
            ]
          },
          {
            label: "Trade studies",
            theme: "Trade studies & design decisions",
            lessons: [
              "Trade studies on frame architecture, payload tools, cameras, and the float comms protocol",
              "Every decision earns a written rationale in the project notebook — these become the technical documentation in March"
            ]
          },
          {
            label: "CAD lock",
            theme: "Lock the design",
            lessons: [
              "CAD locked by mid-December",
              "Long-lead parts ordered before the holiday break — Blue Robotics lead times stretch from February onward"
            ]
          },
          {
            label: "Vehicle",
            theme: "Choose the competition vehicle",
            lessons: [
              "The trade studies conclude in the team's own vehicle decisions — the budget funds the default candidates; the students confirm or amend them",
              "Default candidates: six Blue Robotics T200 thrusters, a pre-terminated tether, a sealed enclosure, an aluminum T-slot frame, a regulated topside supply",
              "Designing to the weight budget — under 15 kg in air earns the +10-point tier",
              "A go / no-go on the thrusters in the fall — the full T200 set if funding is in hand, bilge-pump conversions if not",
              "Standing up the topside bench replica in December, so software develops before the build begins"
            ]
          }
        ]
      },

      {
        name:    "Phase 4 — Build",
        dates:   "Mid-January – February 2027 · 6 weeks",
        status:  "upcoming",
        summary: "Construction. Frame, electronics, tether, float, and manipulator come " +
                 "together — and the team plans for two weeks of “it doesn't work” " +
                 "before it works.",
        weeks: [
          {
            label: "Construction",
            theme: "Build the competition vehicle",
            lessons: [
              "Building the tether, topside control box, and ROV frame",
              "Integrating the electronics",
              "Building the float and the pneumatic manipulator"
            ]
          },
          {
            label: "Bench",
            theme: "Software on the bench replica",
            lessons: [
              "Software develops in parallel on the December bench replica while the real vehicle stays safe",
              "The replica doubles as the demonstration rig whenever the ROV is in pieces"
            ]
          },
          {
            label: "Milestones",
            theme: "Hit the build milestones",
            lessons: [
              "Bare frame wet by the end of January",
              "Electronics integrated by mid-February",
              "First full-system test by the end of February",
              "Planning for two weeks of “it doesn't work” before it works"
            ]
          },
          {
            label: "Safety",
            theme: "Start the safety and Q&A tracks",
            lessons: [
              "Beginning the fluid-power quiz",
              "Beginning the safety pre-inspection tracking",
              "Weekly mock Q&A begins in January — one mentor plus one outside adult per session"
            ]
          }
        ]
      },

      {
        name:    "Phase 5 — Test & Document",
        dates:   "March 2027 · 4 weeks",
        status:  "upcoming",
        summary: "Weekly full-mission rehearsals, locked SIDs, the JSEA, the technical " +
                 "documentation, and the first mock engineering presentations.",
        weeks: [
          {
            label: "Rehearsals",
            theme: "Full-mission rehearsals",
            lessons: [
              "Full mission rehearsals at the deep-water pool every weekend",
              "Timing each task — identify what breaks, then fix it"
            ]
          },
          {
            label: "Documents",
            theme: "Lock the documentation",
            lessons: [
              "Locking the SIDs — electrical, fluid power, and the non-ROV device",
              "Writing the JSEA, focused on poolside operations",
              "Drafting the technical documentation — student-written, with any AI assistance disclosed as the rules require"
            ]
          },
          {
            label: "Presentation",
            theme: "Prepare the engineering presentation",
            lessons: [
              "Weekly mock engineering presentations with an outside adult acting as judge",
              "Practicing the live, oral presentation — no slide deck is permitted"
            ]
          },
          {
            label: "Marketing",
            theme: "Build the marketing display",
            lessons: [
              "Preparing the marketing display, including the digital copy now required"
            ]
          }
        ]
      },

      {
        name:    "Phase 6 — Polish & Compete",
        dates:   "April 2027 · through the regional",
        status:  "upcoming",
        summary: "Documentation submitted, the marketing display printed, the " +
                 "presentation rehearsed, and the trailer packed for Dauphin Island.",
        weeks: [
          {
            label: "Submit",
            theme: "Submit the documentation",
            lessons: [
              "Documentation submission deadlines hit in early April — confirm the exact dates with DISL",
              "Confirm regional registration is complete (registration opens mid-February)"
            ]
          },
          {
            label: "Display",
            theme: "Print the marketing display",
            lessons: [
              "Printing the marketing display at 36 × 48 inches",
              "Preparing handouts for the event"
            ]
          },
          {
            label: "Rehearse",
            theme: "Rehearse the presentation",
            lessons: [
              "At least five engineering-presentation rehearsals",
              "Continuing the weekly mock Q&A that began in January"
            ]
          },
          {
            label: "Compete",
            theme: "Travel to Competition",
            lessons: [
              "Packing the trailer",
              "Driving to the Northern Gulf Coast Regional at the Dauphin Island Sea Lab, late April 2027"
            ]
          }
        ]
      }

    ],

    /* ---- 2b. SEASON PLAN — a link to the full plan PDF ----
       Shows one elegant link card at the top of the Curriculum section.
       • pdf — the plan file; it sits next to index.html, keep it there.
       • Leave pdf as "" to hide the card. */
    roadmap: {
      title: "The 2026–2027 Season Plan",
      blurb: "Twelve months, six phases, one regional — the full plan, from the first soldering iron to Dauphin Island.",
      pdf:   "RANGER_2027_Plan.pdf"
    },

    /* ---- 3. CALENDAR — dates written as "YYYY-MM-DD" ---- */
    calendar: [
      // Weekly Phase 1 meetings run Week 1–6 (see the Phase 1 Plan); dates will be
      // added here once the meeting day is locked.
      { date: "2026-11-01", title: "2027 competition manual drops — full-team read-through within 48 hours", type: "Milestone", location: "materovcompetition.org", url: "https://materovcompetition.org" },
      { date: "2026-12-14", title: "CAD locked — long-lead parts ordered before the holiday break", type: "Milestone", location: "Team workspace" },
      { date: "2027-02-15", title: "Regional registration opens — we register this week", type: "Milestone", location: "Northern Gulf Coast Regional" },
      { date: "2027-04-05", title: "Documentation submission deadline — confirm exact date with DISL", type: "Deadline", location: "Northern Gulf Coast Regional" },
      { date: "2027-04-23", title: "Northern Gulf Coast Regional", type: "Competition", location: "Dauphin Island Sea Lab · exact dates TBC" }
    ],

    /* ---- 4. RESOURCES — grouped links and documents ---- */
    resources: [
      {
        category: "Competition",
        items: [
          { title: "MATE ROV Competition site", description: "Official rules, news, and forum",
            url: "https://materovcompetition.org" },
          { title: "Northern Gulf Coast Regional", description: "Our regional at Dauphin Island Sea Lab",
            url: "https://materovcompetition.org/register-regionals/northerngulfcoast" },
          { title: "Safety inspection tutorial", description: "What inspectors check before the pool",
            url: "https://materovcompetition.org/safety" }
        ]
      },
      {
        category: "Team Documents",
        items: [
          { title: "Shared drive", description: "Photos, notes, and working files",
            url: "https://drive.google.com" },
          { title: "Bill of Materials", description: "Running parts list and budget", url: "Team_Docs/Parts_List.doc" },
          { title: "Pool-test log", description: "Every splash test, recorded" }
        ]
      },
      {
        category: "Build References",
        items: [
          { title: "TriggerFish ROV Guide", description: "MATE's official build curriculum for our starter ROV — presentations, activities, and materials",
            url: "https://materovcompetition.org/rov-kits/triggerfish-rov-guide" },
          { title: "Blue Robotics", description: "Thrusters, enclosures, penetrators",
            url: "https://bluerobotics.com" },
          { title: "Onshape", description: "Free browser-based CAD",
            url: "https://www.onshape.com" },
          { title: "Soldering guide", description: "Adafruit's beginner walkthrough",
            url: "https://learn.adafruit.com/adafruit-guide-excellent-soldering" }
        ]
      }
    ],

    /* ---- 5. TEAM ROSTER ----
       MATE runs the competition like a company: every student holds a
       real title with real duties. Each card shows the role and a
       one-line summary; on the website, clicking a card opens it to
       reveal the full duty list. Edit the name, role, detail, or duties
       freely. When a student is elected, change "Not Elected Yet" to
       their name. */
    roster: [
      {
        name: "Not Elected Yet", role: "CEO",
        detail: "Schedule, judges, and the safety briefing",
        duties: [
          "Owns the team's schedule and meeting agendas, and keeps every sub-team on track to its deadlines.",
          "Is the team's main point of contact with the judges, competition officials, and the regional coordinator.",
          "Leads the safety briefing at the start of every pool session and competition run.",
          "Runs team meetings, assigns action items, and follows up to make sure they get done.",
          "Keeps the whole team pointed at the season's milestones — and steps in when a sub-team falls behind.",
          "Helps lead the engineering presentation and hands each question to the right teammate.",
          "Builds team culture so every member has a real job and a voice. (The CEO does not pilot — running the company is a full job.)"
        ]
      },
      {
        name: "Not Elected Yet", role: "CFO",
        detail: "Budget, bill of materials, and cost report",
        duties: [
          "Maintains the team budget and tracks every dollar spent against it.",
          "Keeps the Bill of Materials — the master list of every part — updated weekly, not the night before a deadline.",
          "Collects and files every invoice and receipt.",
          "Writes the cost report that goes into the technical documentation and is scored by the judges.",
          "Warns the team before a purchase pushes the build over budget, and asks 'what does this trade off?'",
          "Works with the CEO and mentors to track sponsors and fundraising.",
          "Reports the financial picture to the team so spending decisions are made with eyes open."
        ]
      },
      {
        name: "Not Elected Yet", role: "Mechanical Lead",
        detail: "Frame, buoyancy, and the manipulator",
        duties: [
          "Designs the ROV frame and leads its construction.",
          "Owns buoyancy and trim — making the robot sit level and neutral in the water.",
          "Designs and builds the manipulator and any mission-specific tools, such as grippers and hooks.",
          "Runs trade studies on frame material and layout, and records the reasoning in the project notebook.",
          "Leads the CAD work for the mechanical design.",
          "Makes sure the build passes safety inspection — no sharp edges, shrouded propellers, proper strain relief.",
          "Works closely with the Electrical Lead so the electronics and payload fit and balance."
        ]
      },
      {
        name: "Not Elected Yet", role: "Electrical Lead",
        detail: "Power system, SID, and fuse selection",
        duties: [
          "Designs the power system — the path from the topside supply, through the fuse, to every device.",
          "Draws the System Interconnection Diagram (SID) using proper, standard electrical symbols.",
          "Selects the main fuse from measured full-load-amp values and documents the choice against the rules.",
          "Wires and tests the Electronic Speed Controllers (ESCs) and motor connections.",
          "Owns clean, reliable wiring and solder joints — no 'rat's nest,' with strain relief at every termination.",
          "Makes sure the electrical build passes safety inspection — fuse placement, correct fuse type, waterproofed motors.",
          "Partners with the Software Lead on the control electronics and with Mechanical on the layout."
        ]
      },
      {
        name: "Not Elected Yet", role: "Software Lead",
        detail: "Control software, video, and vision",
        duties: [
          "Builds and maintains the control software — the loop from the gamepad to the thrusters.",
          "Sets up the video streaming and keeps the camera delay low, testing it regularly.",
          "Writes the computer-vision code for mission tasks such as detecting, counting, and measuring objects.",
          "Handles telemetry — depth, sensor data, and the profiling float's transmitted readings.",
          "Develops on a topside bench replica so software can progress while the real vehicle is being built.",
          "Keeps the code in version control with clean, student-pushed commits.",
          "Documents any AI tools used, as the rules require, and can explain every part of the code to a judge."
        ]
      },
      {
        name: "Not Elected Yet", role: "Pilot",
        detail: "In-water operator at the competition",
        duties: [
          "Operates the ROV during every mission run and pool rehearsal.",
          "Logs serious water time — strong pilots practice weekly from October onward.",
          "Learns each mission task cold, and the most efficient order to attempt them in.",
          "Stays calm and focused under competition lights — the pilot should be the steadiest teammate, not the loudest.",
          "Works in constant communication with the Tether Manager during every run.",
          "Gives the engineers honest feedback after each test: what handled well, what to change.",
          "Should not also be the Software Lead during finals — flying and debugging at once is too much at once."
        ]
      },
      {
        name: "Not Elected Yet", role: "Tether Manager",
        detail: "Manages the tether and calls obstructions",
        duties: [
          "Manages the tether during every run — feeding slack, taking it up, and keeping it clear of obstacles and propellers.",
          "Calls out obstructions, distances, and hazards to the pilot in real time.",
          "Inspects the tether and its strain relief before and after every session for wear or damage.",
          "Helps deploy and recover the ROV safely at poolside.",
          "Serves as co-pilot — a backup operator and a second read on the run.",
          "Keeps the tether properly protected with braided sleeving or spiral wrap — never tape as the main method.",
          "Practices the run choreography with the pilot until the handoffs are automatic."
        ]
      }
    ],

    /* ---- 6. UPDATES — newest at the top ---- */
    updates: [
      {
        date:  "June 2026",
        title: "The ROV team launches",
        body:  "Say Watt Robotics is adding a RANGER-class ROV team for the 2026–2027 " +
               "season. Over the coming weeks we'll build core engineering skills — " +
               "soldering, waterproofing, and ROV operation — before the 2027 " +
               "competition manual is released in November."
      }
    ],

    /* ---- 7. FUNDING — the sponsor meter & wish list ----
       • raised / goal / asOf drive the progress meter.
       • Update "raised" and "asOf" as money comes in.
       • Set an item's funded: to true once it's covered (it gets
         a "Funded" check on the site). */
    funding: {
      raised: 3000,                 // ← update as money comes in
      goal:   9800,
      asOf:   "June 2026",          // ← date the raised figure is current as of

      intro:
        "We've raised $3,000 toward a $9,800 season. Here's the thing about " +
        "that gap — it isn't abstract. Every dollar maps to a specific piece of " +
        "equipment or a specific cost, and the full list is right here. You can " +
        "see exactly what you'd be funding and why it moves the team forward. " +
        "That's the deal: no vague ask, just the real list.",

      cta:
        "Want to back the team? Sponsor a single thruster, cover the trip, or " +
        "take on a whole tier — every level is listed, and every dollar is " +
        "accounted for.",

      taxNote:
        "Say Watt Robotics is a registered 501(c)(3) non-profit — every " +
        "sponsorship is fully tax-deductible.",

      contactEmail: "contact@saywattrobotics.org",   // ← CONFIRM the real sponsor contact

      thankYou:
        "To everyone who's already chipped in — thank you. You're the reason " +
        "these teams exist. The students are doing the engineering; you're " +
        "making the engineering possible.",

      tiers: [
        {
          label: "Tier 1 — Gets the team to the competition  ·  $1,650",
          items: [
            {
              name: "RANGER competition registration", cost: "$250", unit: "",
              funded: false,
              rationale:
                "The team's entry fee for the MATE Northern Gulf Coast Regional. " +
                "No registration, no competition — this is the first dollar the " +
                "season needs."
            },
            {
              name: "Regional travel & lodging", cost: "$1,400", unit: "",
              funded: false,
              rationale:
                "The regional championship is at the Dauphin Island Sea Lab — a " +
                "six-hour drive south. This covers transport, two nights' lodging, " +
                "and meals for the students and chaperones. Every other item on " +
                "this list builds the robot. This is the one that gets the robot, " +
                "and the team, to the water. Without it, a season of work never " +
                "gets scored."
            }
          ]
        },
        {
          label: "Tier 2 — Propulsion, frame & power  ·  $2,800",
          items: [
            {
              name: "Competition thruster system", cost: "$1,750",
              unit: "$290 per thruster — six total", funded: false,
              rationale:
                "Six brushless thrusters and their controllers. They produce " +
                "roughly five times the thrust of the budget motors a new team " +
                "would otherwise hand-build, and they don't wear out mid-" +
                "competition. They also carry forward — buy them once, the " +
                "program uses them for years. Sponsor one thruster for $290, or " +
                "the full set for $1,750."
            },
            {
              name: "Spare thruster & printed propellers", cost: "$300", unit: "",
              funded: false,
              rationale:
                "A backup thruster and a stock of spare props. Thrusters take the " +
                "most abuse on the robot, and a dead one mid-competition ends the " +
                "run. The spare turns a season-ender into a five-minute swap."
            },
            {
              name: "ROV frame & structure", cost: "$450", unit: "",
              funded: false,
              rationale:
                "The aluminum extrusion, HDPE plate, and 316 stainless hardware " +
                "the whole robot is built on. Marine-grade stainless is non-" +
                "negotiable — ordinary steel rusts through in a single season of " +
                "pool water."
            },
            {
              name: "12 V battery system", cost: "$300", unit: "",
              funded: false,
              rationale:
                "The onboard battery, charger, approved enclosure, and power " +
                "distribution. Safety inspection requires the battery in a proper " +
                "enclosure with the main fuse correctly placed — this funds it " +
                "done right."
            }
          ]
        },
        {
          label: "Tier 3 — Electronics, control & payload  ·  $2,320",
          items: [
            {
              name: "Watertight electronics enclosure", cost: "$300", unit: "",
              funded: false,
              rationale:
                "A professional sealed housing — tube, end caps, clamp, and rails " +
                "— for the electronics. It replaces a hand-built one, protects the " +
                "most expensive parts on the robot, and saves the team weeks of " +
                "chasing leaks."
            },
            {
              name: "Penetrators & waterproof connectors", cost: "$300", unit: "",
              funded: false,
              rationale:
                "The sealed pass-throughs that get power and signal wires through " +
                "the enclosure wall without leaking — eight or more across " +
                "thrusters, cameras, sensors, and the tether. Each one is a " +
                "potential flood point; these are the parts that keep the water out."
            },
            {
              name: "Pre-terminated tether", cost: "$600", unit: "",
              funded: false,
              rationale:
                "The robot's lifeline — power and data down a single neutrally-" +
                "buoyant cable. Bad hand-made connections are a top-three way a new " +
                "team's run fails. A professionally terminated tether removes that " +
                "failure mode, and it gets reused every season."
            },
            {
              name: "Onboard compute & control electronics", cost: "$400", unit: "",
              funded: false,
              rationale:
                "The Raspberry Pi, microcontroller, and topside control box that " +
                "run the robot and stream video. This is the brain that turns the " +
                "pilot's commands into thruster motion."
            },
            {
              name: "Upgraded camera & vision system", cost: "$250", unit: "",
              funded: false,
              rationale:
                "The pilot flies the robot entirely through its cameras, and the " +
                "vision tasks are scored from the same feed. Better underwater " +
                "cameras mean more completed tasks — you can't grab what you can't " +
                "see."
            },
            {
              name: "Depth & orientation sensors", cost: "$170", unit: "",
              funded: false,
              rationale:
                "A pressure-depth sensor and an orientation sensor so the robot " +
                "knows how deep and how level it is. Several scored tasks depend on " +
                "holding a depth or flying a steady transect."
            },
            {
              name: "Pneumatic manipulator", cost: "$300", unit: "",
              funded: false,
              rationale:
                "The robot's gripper is the tool that does the scored tasks — " +
                "collecting samples, turning valves, recovering objects off the " +
                "seafloor. A precision pneumatic gripper instead of a fixed hook " +
                "is the difference between points earned and points missed."
            }
          ]
        },
        {
          label: "Tier 4 — Tools, safety & shop (carries forward every season)  ·  $1,400",
          items: [
            {
              name: "Soldering stations & irons", cost: "$300", unit: "",
              funded: false,
              rationale:
                "The team's bench soldering stations. Every electrical connection " +
                "on the robot is made here, and these outfit the workshop for " +
                "years of teams to come."
            },
            {
              name: "Hand tools & test equipment", cost: "$400", unit: "",
              funded: false,
              rationale:
                "Multimeters, a clamp meter, wire strippers, cutters, and pliers. " +
                "The clamp meter is required to measure current draw for the fuse " +
                "calculations the competition demands — and the whole set carries " +
                "forward."
            },
            {
              name: "Safety gear", cost: "$180", unit: "",
              funded: false,
              rationale:
                "A fume extractor, fire extinguisher, first-aid kit, heat-safe " +
                "mats, and safety glasses. Soldering and battery work happen every " +
                "week; this is the non-optional cost of doing it safely."
            },
            {
              name: "Adhesives, sealants & O-ring supplies", cost: "$200", unit: "",
              funded: false,
              rationale:
                "Marine-grade epoxy, the two adhesives that reliably bond plastics " +
                "underwater, and O-ring grease. The difference between a seal that " +
                "holds for a season and one that floods on the first dive."
            },
            {
              name: "Build consumables", cost: "$200", unit: "",
              funded: false,
              rationale:
                "Silicone wire, heat-shrink, solder, zip ties, fasteners, and " +
                "printed props — the steady stream of small parts a build burns " +
                "through from first prototype to competition."
            },
            {
              name: "Soldering & circuit practice kits", cost: "$120", unit: "",
              funded: false,
              rationale:
                "The practice boards every student learns to solder on before they " +
                "touch the real robot. Cheap insurance against a bad joint on a " +
                "$300 thruster cable."
            }
          ]
        },
        {
          label: "Tier 5 — Float, documentation & reliability  ·  $1,630",
          items: [
            {
              name: "Vertical profiling float build", cost: "$400", unit: "",
              funded: false,
              rationale:
                "The competition requires a second, non-ROV device — a float that " +
                "sinks, holds, and rises on its own and radios back its data. This " +
                "funds its buoyancy engine, pressure sensor, microcontroller, and " +
                "battery. Worth a full scored task on its own."
            },
            {
              name: "Notebooks, documentation & marketing display", cost: "$350",
              unit: "", funded: false,
              rationale:
                "Engineering & communication is roughly 40% of the score. This " +
                "covers the project notebooks, the printed technical documentation, " +
                "and the marketing display the team presents to judges. The robot " +
                "earns half the points; the documentation earns the other half."
            },
            {
              name: "Team jerseys", cost: "$160", unit: "", funded: false,
              rationale:
                "Competition uniforms with sponsor logos on them. A visible " +
                "thank-you that travels everywhere the team does."
            },
            {
              name: "Spares, replacement & reliability parts", cost: "$720",
              unit: "", funded: false,
              rationale:
                "Backup ESCs, seals, connectors, O-rings, and props — the parts " +
                "an underwater robot genuinely consumes across a season of testing " +
                "and on competition day. Something always breaks on the deck; this " +
                "is the difference between a five-minute fix and a forfeited run."
            }
          ]
        }
      ],

      aspirational: {
        name: "World Championship reserve", cost: "$3,000–$5,000",
        funded: false,
        rationale:
          "Win the regional, and the team qualifies for the MATE World " +
          "Championship. This reserve funds that trip. It's a stretch — but " +
          "it's the goal, and we'd rather tell you the truth about where we're " +
          "aiming."
      }
    }

  },


  /* =================================================================
     FIRST LEGO LEAGUE TEAM  —  the fll.html page
     ================================================================= */
  fll: {

    /* ---- 1. TEAM headline information ---- */
    team: {
      name:        "Say Watt Robotics — FIRST LEGO League",
      season:      "2026–2027 Season · BIOGLOW",
      heroHeadline:"Four seasons of LEGO robotics, and just getting started.",
      heroSub:     "Say Watt's founding team — designing, building, and programming LEGO robots while tackling the FIRST LEGO League Challenge.",
      facts: [
        "FIRST LEGO League Challenge",
        "BIOGLOW season",
        "Grades K–8",
        "Madison, AL"
      ]
    },

    curriculumLede:
      "Our FIRST LEGO League season runs in six phases. Open any phase to see " +
      "its weeks, and open any week to see exactly what the team worked on. " +
      "Use the search box to jump to any topic, skill, or lesson.",

    /* ---- 2. CURRICULUM — phases, weeks, lessons ---- */
    phases: [
      {
        name:    "Phase 1 — Season Kickoff",
        dates:   "August 2026",
        status:  "upcoming",
        summary: "The BIOGLOW season is revealed. The team reads the challenge, " +
                 "assigns roles, and reviews the FIRST Core Values together.",
        weeks: [
          {
            label:  "Week 1",
            dates:  "August 2026",
            theme:  "BIOGLOW season reveal",
            lessons: [
              "Watching the BIOGLOW season launch",
              "Reading the challenge and missions as a team",
              "Reviewing the FIRST Core Values",
              "Assigning team roles for the season"
            ],
            resources: [
              { label: "FIRST LEGO League", url: "https://www.firstinspires.org/programs/fll/" }
            ]
          }
        ]
      },
      {
        name:    "Phase 2 — Innovation Project",
        dates:   "September 2026",
        status:  "upcoming",
        summary: "The team identifies a real-world problem connected to the season " +
                 "theme, researches it, and begins designing a solution.",
        weeks: []
      },
      {
        name:    "Phase 3 — Robot Design & Build",
        dates:   "September – October 2026",
        status:  "upcoming",
        summary: "Build the base robot and design mission attachments using the " +
                 "LEGO building system.",
        weeks: []
      },
      {
        name:    "Phase 4 — Programming & Missions",
        dates:   "October – November 2026",
        status:  "upcoming",
        summary: "Program the robot to complete the BIOGLOW missions and refine " +
                 "attachments through testing.",
        weeks: []
      },
      {
        name:    "Phase 5 — Practice & Core Values",
        dates:   "November – December 2026",
        status:  "upcoming",
        summary: "Rehearse robot runs, prepare the Innovation Project presentation, " +
                 "and practice presenting Core Values to judges.",
        weeks: []
      },
      {
        name:    "Phase 6 — Tournament",
        dates:   "December 2026 – February 2027",
        status:  "upcoming",
        summary: "Compete at the qualifier and, with a strong showing, advance to " +
                 "the regional championship.",
        weeks: []
      }
    ],

    /* ---- 2b. SEASON PLAN — placeholder for the FLL team ----
       When the FLL team has a season-plan PDF, drop it next to
       index.html and put its filename in "pdf" below. While "pdf"
       is "", no card shows on the FLL page. */
    roadmap: {
      title: "The FIRST LEGO League Season Plan",
      blurb: "Our full BIOGLOW season plan — coming soon.",
      pdf:   ""
    },

    /* ---- 3. CALENDAR ---- */
    calendar: [
      { date: "2026-08-04", title: "BIOGLOW season launch", type: "Milestone", location: "—" },
      { date: "2026-08-15", title: "FLL team kickoff meeting", type: "Meeting", location: "Team workspace" }
    ],

    /* ---- 4. RESOURCES ---- */
    resources: [
      {
        category: "FIRST LEGO League",
        items: [
          { title: "FIRST LEGO League", description: "Program home, season info, and resources",
            url: "https://www.firstinspires.org/programs/fll/" },
          { title: "Game & season", description: "The current BIOGLOW challenge",
            url: "https://www.firstinspires.org/programs/fll/game-and-season" },
          { title: "Core Values", description: "What FIRST teams are judged on",
            url: "https://www.firstinspires.org/about" },
          { title: "FIRST in Alabama", description: "FIRST Delivery Partner",
            url: "https://www.firstinalabama.org/" }
        ]
      },
      {
        category: "Team Documents",
        items: [
          { title: "Shared drive", description: "Photos, notes, and working files",
            url: "https://drive.google.com" },
          { title: "Engineering notebook", description: "The team's running record" }
        ]
      }
    ],

    /* ---- 5. TEAM ROSTER ---- */
    roster: [
      { name: "Not Elected Yet", role: "Team Member", detail: "Robot design and build" },
      { name: "Not Elected Yet", role: "Team Member", detail: "Programming" },
      { name: "Not Elected Yet", role: "Team Member", detail: "Innovation Project" }
    ],

    /* ---- 6. UPDATES ---- */
    updates: [
      {
        date:  "Summer 2026",
        title: "Heading into our fifth season",
        body:  "Say Watt's FIRST LEGO League team is back for the BIOGLOW season — " +
               "the program where this club began three years ago."
      }
    ],

    /* ---- 7. FUNDING — placeholder for the FLL team ----
       This mirrors the ROV team's sponsor section. Replace the
       placeholder numbers and copy with the real FLL figures. */
    funding: {
      raised: 0,                    // ← update as money comes in
      goal:   3000,
      asOf:   "Update me",

      intro:
        "Our FIRST LEGO League team — the program Say Watt Robotics was " +
        "founded on — is heading into its fifth season on the BIOGLOW " +
        "challenge. Same deal as the ROV team: every dollar maps to a real " +
        "line item, and the full $3,000 season is itemized right here.",

      cta:
        "Want to back the FIRST LEGO League team? Cover the registration, the " +
        "robot kit, or the trip to the tournament — every level is listed, and " +
        "every dollar is accounted for.",

      taxNote:
        "Say Watt Robotics is a registered 501(c)(3) non-profit — every " +
        "sponsorship is fully tax-deductible.",

      contactEmail: "contact@saywattrobotics.org",

      thankYou:
        "Thank you to everyone supporting our FIRST LEGO League team — the " +
        "program where this whole club began.",

      tiers: [
        {
          label: "Tier 1 — Gets the team to the table  ·  $600",
          items: [
            {
              name: "FIRST season team registration", cost: "$250", unit: "",
              funded: false,
              rationale:
                "The team's annual registration with FIRST. It's the first " +
                "requirement of the season — without it, the team isn't official " +
                "and can't compete."
            },
            {
              name: "Tournament registration", cost: "$175", unit: "",
              funded: false,
              rationale:
                "The entry fee for the qualifying and regional tournaments. " +
                "Registration with FIRST doesn't include the events themselves — " +
                "this is what puts the team on the competition floor."
            },
            {
              name: "BIOGLOW Challenge Set & mission models", cost: "$175",
              unit: "", funded: false,
              rationale:
                "The new season's mission models the robot has to complete on the " +
                "game table. A fresh set ships every year with the new challenge — " +
                "this is the season's playing field."
            }
          ]
        },
        {
          label: "Tier 2 — The robot  ·  $1,100",
          items: [
            {
              name: "SPIKE Prime robot set", cost: "$520", unit: "",
              funded: false,
              rationale:
                "The LEGO Education SPIKE Prime kit the team builds and programs " +
                "its robot from. 2026–2027 is the final season before the platform " +
                "retires, so this is the last chance to add a set the program keeps " +
                "for years."
            },
            {
              name: "Supplemental LEGO elements, motors & sensors", cost: "$260",
              unit: "", funded: false,
              rationale:
                "The extra beams, gears, motors, and sensors a competitive robot " +
                "needs beyond the base kit — for attachments that swap fast between " +
                "missions."
            },
            {
              name: "Competition practice mat & game-table refresh", cost: "$140",
              unit: "", funded: false,
              rationale:
                "An official mat and table materials so the team practices on the " +
                "real surface. Robots tuned only on the floor miss on competition " +
                "day; reps on the actual mat are where the points come from."
            },
            {
              name: "Rechargeable battery packs & chargers", cost: "$180",
              unit: "", funded: false,
              rationale:
                "Spare hub batteries and chargers so the robot never dies between " +
                "practice rounds or competition matches. Cheap insurance against a " +
                "dead robot at the worst possible moment."
            }
          ]
        },
        {
          label: "Tier 3 — Season & competition day  ·  $1,300",
          items: [
            {
              name: "Travel & lodging to the tournament", cost: "$700", unit: "",
              funded: false,
              rationale:
                "Transport and overnight lodging for the team and chaperones. Our " +
                "FLL team has traveled out of state to compete every year for the " +
                "past four seasons, so this is a real, recurring cost — and it's " +
                "the line that actually gets the kids and the robot to the event."
            },
            {
              name: "Innovation Project materials & display", cost: "$200",
              unit: "", funded: false,
              rationale:
                "FLL is judged as much on the Innovation Project as on the robot. " +
                "This funds the research materials, the prototype, and the display " +
                "board the team presents to judges."
            },
            {
              name: "Team t-shirts", cost: "$160", unit: "", funded: false,
              rationale:
                "Team uniforms with sponsor logos on them. A visible thank-you " +
                "that travels everywhere the team does."
            },
            {
              name: "Competition-day kit", cost: "$240", unit: "",
              funded: false,
              rationale:
                "Spare parts, batteries, tools, and the small-team essentials for " +
                "the pit — plus the goody-swap items that are part of the FLL " +
                "culture. The difference between a calm competition day and a " +
                "scramble."
            }
          ]
        }
      ],

      aspirational: {
        name: "FIRST LEGO League World Festival travel", cost: "$2,500–$3,500",
        funded: false,
        rationale:
          "Win at the regional, and the team can advance to the FIRST global " +
          "championship. This reserve would fund that trip — flights, lodging, " +
          "and registration. It's a stretch, but it's the dream, and we'd rather " +
          "tell you the truth about where we're aiming."
      }
    }

  }

};
