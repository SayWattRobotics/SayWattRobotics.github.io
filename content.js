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
        "MATE ROV Competition",
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
              { label: "Meeting 1.1 field log — what we did on day one", url: "#field-log-1-1" },
              { label: "Photo Release Form — for parents to sign before any team photo goes online", url: "Team_Files/Photo%20Release%20Form.pdf" },
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
            ],
            resources: [
              { label: "Class 1.5 slide deck (view)",          url: "Classes/Phase%201/1.5%20Control%20Box%20I%20-%20Slides.pdf" },
              { label: "Class 1.5 slides (PowerPoint)",        url: "Classes/Phase%201/1.5%20Control%20Box%20I%20-%20Slides.pptx" },
              { label: "Class 1.5 prep sheet (PDF)",           url: "Classes/Phase%201/1.5%20Control%20Box%20I%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.5 instructor notes (PDF)",     url: "Classes/Phase%201/1.5%20Control%20Box%20I%20-%20Instructor%20Notes.pdf" }
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
            ],
            resources: [
              { label: "Class 1.6 slide deck (view)",          url: "Classes/Phase%201/1.6%20Control%20Box%20II%20-%20Slides.pdf" },
              { label: "Class 1.6 slides (PowerPoint)",        url: "Classes/Phase%201/1.6%20Control%20Box%20II%20-%20Slides.pptx" },
              { label: "Class 1.6 prep sheet (PDF)",           url: "Classes/Phase%201/1.6%20Control%20Box%20II%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.6 instructor notes (PDF)",     url: "Classes/Phase%201/1.6%20Control%20Box%20II%20-%20Instructor%20Notes.pdf" }
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
            ],
            resources: [
              { label: "Class 1.7 slide deck (view)",          url: "Classes/Phase%201/1.7%20Capsule%20Build%20%26%20First%20Splash%20-%20Slides.pdf" },
              { label: "Class 1.7 slides (PowerPoint)",        url: "Classes/Phase%201/1.7%20Capsule%20Build%20%26%20First%20Splash%20-%20Slides.pptx" },
              { label: "Class 1.7 prep sheet (PDF)",           url: "Classes/Phase%201/1.7%20Capsule%20Build%20%26%20First%20Splash%20-%20Prep%20Sheet.pdf" },
              { label: "Class 1.7 instructor notes (PDF)",     url: "Classes/Phase%201/1.7%20Capsule%20Build%20%26%20First%20Splash%20-%20Instructor%20Notes.pdf" }
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
                 "presentation rehearsed, and the trailer packed for our 2027 regional.",
        weeks: [
          {
            label: "Submit",
            theme: "Submit the documentation",
            lessons: [
              "Documentation submission deadlines hit in early April — confirm the exact dates once the regional is assigned",
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
              "Driving to our 2027 MATE ROV regional, late April 2027"
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
      blurb: "Twelve months, six phases, one regional — the full plan, from the first soldering iron to the competition.",
      pdf:   "RANGER_2027_Plan.pdf"
    },

    /* ---- 3. CALENDAR — dates written as "YYYY-MM-DD" ---- */
    calendar: [
      // Weekly Phase 1 meetings — 3 PM Sundays at Mr. Holcombe's house.
      // Each Class row has a deep link to the matching curriculum week
      // (#week-1-2 → Class 1.2).
      { date: "2026-06-14", title: "Summer Learning and Season Interest Kickoff",  type: "Milestone", location: "Say Watt Robotics Headquarters" },
      { date: "2026-06-21", title: "Class 1.2 — Soldering Bootcamp",               type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-2" },
      { date: "2026-06-28", title: "Class 1.3 — Kit Unboxing & First Electronics", type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-3" },
      { date: "2026-07-05", title: "Class 1.4 — Electronics Workshop",             type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-4" },
      { date: "2026-07-12", title: "Class 1.5 — Control Box I",                    type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-5" },
      { date: "2026-07-19", title: "Class 1.6 — Control Box II",                   type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-6" },
      { date: "2026-07-26", title: "Class 1.7 — Capsule Build & First Splash",     type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-7" },
      { date: "2026-08-09", title: "Class 1.8 — Build & Iterate I",                type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-8" },
      { date: "2026-08-16", title: "Class 1.9 — Build & Iterate II",               type: "Class",     location: "3 PM  ·  Mr. Holcombe's house",  url: "#week-1-9" },
      { date: "2026-11-01", title: "2027 competition manual drops — full-team read-through within 48 hours", type: "Milestone", location: "materovcompetition.org", url: "https://materovcompetition.org" },
      { date: "2026-12-14", title: "CAD locked — long-lead parts ordered before the holiday break", type: "Milestone", location: "Team workspace" },
      { date: "2027-02-15", title: "Regional registration opens — we register this week", type: "Milestone", location: "2027 MATE ROV regional (assignment TBD)" },
      { date: "2027-04-05", title: "Documentation submission deadline — confirm exact date once regional is assigned", type: "Deadline", location: "2027 MATE ROV regional (assignment TBD)" },
      { date: "2027-04-23", title: "2027 MATE ROV regional competition", type: "Competition", location: "Regional and dates TBD" },
	  { date: "2027-06-24 - 2027-06-26", title: "2027 World Championship competition", type: "Competition", location: "Federal Way, Washington" }
		
    ],

    /* ---- 4. RESOURCES — grouped links and documents ---- */
    resources: [
      {
        category: "Competition",
        items: [
          { title: "MATE ROV Competition site", description: "Official rules, news, and forum",
            url: "https://materovcompetition.org" },
          { title: "MATE ROV regionals (all)", description: "Where we'll compete — regional assignment finalized at registration",
            url: "https://materovcompetition.org/regionals" },
          { title: "Safety inspection tutorial", description: "What inspectors check before the pool",
            url: "https://materovcompetition.org/safety" }
        ]
      },
      {
        category: "Team Documents",
        items: [
          { title: "Team Google Drive", description: "Project notebook, photo log, parts list, every working file",
            url: "https://drive.google.com/drive/folders/1MUgbtFhBYDasChrol9BsCRQBBEiibHU0" },
          { title: "Bill of Materials (view PDF)", description: "Current parts list, tier-by-tier, with funding status",
            url: "Team_Files/Bill%20of%20Materials.pdf" },
          { title: "Bill of Materials (download Excel)", description: "Editable workbook — formulas roll up to the season meter",
            url: "Team_Files/Bill%20of%20Materials.xlsx" },
          { title: "Pool-Test Log (view PDF)", description: "Template — one row per pool session, plus pre/post checklist",
            url: "Team_Files/Pool-Test%20Log.pdf" },
          { title: "Pool-Test Log (download Excel)", description: "Editable template — fill in during the session",
            url: "Team_Files/Pool-Test%20Log.xlsx" },
          { title: "Photo Release Form (PDF)", description: "Required from every parent before a student appears in team photos",
            url: "Team_Files/Photo%20Release%20Form.pdf" }
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
            url: "https://learn.adafruit.com/adafruit-guide-excellent-soldering" },
		  { title: "rovAR Simulator", description: "Interactive AR Underwater ROV Simulator",
		    url: "https://ncatech.org/rovar/#Educator" }
        ]
      }
    ],

    /* ---- 5. TEAM ROSTER ----
       MATE runs the competition like a company: every student holds a
       real title with real duties. Each card shows the role and a
       one-line summary; on the website, clicking a card opens it to
       reveal the full duty list.

       Elected at Class 1.9 on 16 August 2026. The three executive
       officers were seated first from the students' stated position
       preferences; the executives then assigned the lead roles. Edit a
       name, role, detail, or duty list freely as the season develops. */
    roster: [
      {
        name: "Trenton", role: "CEO",
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
        name: "Maddox", role: "CFO",
        detail: "Budget, bill of materials, cost report, and the engineering notebook",
        duties: [
          "Maintains the team budget and tracks every dollar spent against it.",
          "Keeps the Bill of Materials — the master list of every part — updated weekly, not the night before a deadline.",
          "Collects and files every invoice and receipt.",
          "Writes the cost report that goes into the technical documentation and is scored by the judges.",
          "Owns the engineering notebook — the formal record of designs, decisions, build logs, and trade studies that the judges read at competition.",
          "Warns the team before a purchase pushes the build over budget, and asks 'what does this trade off?'",
          "Works with the CEO and mentors to track sponsors and fundraising.",
          "Reports the financial picture to the team so spending decisions are made with eyes open."
        ]
      },
      {
        name: "Annabelle", role: "COO",
        detail: "Day-to-day operations, the integrated master schedule, and the workspace",
        duties: [
          "Owns the integrated master schedule — the one calendar that shows what every sub-team owes, and when.",
          "Turns the CEO's plan into the week's actual work: who is doing what this Sunday, and what they need to have on the table when they arrive.",
          "Runs the integrated product team meetings so the leads talk to each other instead of building in parallel and colliding later.",
          "Tracks action items to closure and surfaces the ones that are slipping before they become a deadline problem.",
          "Owns logistics — workspace setup, tool and part availability, transport to pool sessions, and the pack-out list.",
          "Keeps the leads unblocked: when two sub-teams need the same part, the same bench, or the same afternoon, the COO resolves it.",
          "Is the CEO's backup for running a meeting or a competition day."
        ]
      },
      {
        name: "Isaac", role: "CTO / Chief Engineer",
        detail: "Technical authority across the vehicle — the design integrates or it doesn't ship",
        duties: [
          "Holds technical authority over the whole vehicle: how the mechanical, electrical, software, and payload pieces fit together as one system.",
          "Runs the design reviews and makes the call when two sub-teams want incompatible things.",
          "Owns the system-level requirements and makes sure every sub-team's design traces back to a mission task or a rule.",
          "Reviews the System Interconnection Diagram, the trade studies, and the technical documentation for engineering soundness before they go to the judges.",
          "Sets the engineering standards the team builds to — how a joint is made, how a change is documented, what 'done' means.",
          "Works with the COO to sequence technical work so integration is not left until the last month.",
          "Leads the technical half of the engineering presentation and can defend any design decision to a judge."
        ]
      },
      {
        name: "Adrian", role: "Mechanical Lead",
        detail: "Frame, structure, and how it all mounts together",
        duties: [
          "Designs the ROV frame and leads its construction.",
          "Owns the structural layout — where every component mounts, and whether the frame survives handling, transport, and the water.",
          "Runs trade studies on frame material and geometry, and records the reasoning in the engineering notebook.",
          "Leads the CAD work for the mechanical design.",
          "Makes sure the build passes safety inspection — no sharp edges, shrouded propellers, proper strain relief.",
          "Coordinates with Propulsion, Buoyancy, Payload, and Electrical so everything physically fits and balances.",
          "Owns the fabrication plan: what gets cut, drilled, and assembled in what order."
        ]
      },
      {
        name: "Sam", role: "Propulsion Lead",
        detail: "Thrusters, thrust vectors, and how the vehicle moves",
        duties: [
          "Owns the thruster selection and the thrust-vector layout — how many motors, pointed which way, and why.",
          "Runs the trade studies on motor placement against measured handling, not against a sketch.",
          "Characterizes thrust and current draw for each motor so the electrical team can size the fuse and the software team can size the mixing.",
          "Diagnoses propulsion faults to a cause — a motor that runs slow, runs one direction, or doesn't pull its share.",
          "Owns propeller guards and shrouding for safety inspection.",
          "Works with the Pilot Station lead so the control mapping matches how the vehicle actually moves.",
          "Documents the propulsion design and its rationale for the technical documentation."
        ]
      },
      {
        name: "Eli", role: "Payload / Manipulator Lead",
        detail: "Grippers, tools, and everything the ROV carries to do a job",
        duties: [
          "Designs and builds the manipulator and any mission-specific tools — grippers, hooks, cutters, collection devices.",
          "Reads the mission tasks closely and turns them into tool requirements: what has to be grabbed, moved, measured, or retrieved.",
          "Prototypes and tests each tool against a mock-up of the actual mission prop before it goes near the pool.",
          "Owns payload mounting and the mass and drag budget the payload costs the vehicle.",
          "Works with Propulsion and Buoyancy so a loaded ROV still flies and still trims.",
          "Makes sure every tool passes safety inspection — no pinch hazards, no unshielded sharp edges.",
          "Documents the payload design and its mission rationale."
        ]
      },
      {
        name: "Evan", role: "Buoyancy / Stability Control Lead",
        detail: "Trim, ballast, and keeping the vehicle level",
        duties: [
          "Owns buoyancy and trim — making the vehicle sit level and neutral in the water.",
          "Designs a tunable buoyancy system: a way to add and remove trim, not a fixed block of foam.",
          "Owns the flotation mounting so nothing comes loose in the water.",
          "Keeps center of mass below center of buoyancy so the vehicle self-rights, and verifies it after every configuration change.",
          "Re-trims the vehicle whenever payload, batteries, or hardware move, and logs the new configuration.",
          "Runs the trim checks poolside before each run and records the result in the Pool-Test Log.",
          "Works with Mechanical and Payload, because every gram they add is a trim problem."
        ]
      },
      {
        name: "Liam", role: "Electrical / Power Lead",
        detail: "Power system, SID, and fuse selection",
        duties: [
          "Designs the power system — the path from the topside supply, through the fuse, to every device.",
          "Draws the System Interconnection Diagram (SID) using proper, standard electrical symbols.",
          "Selects the main fuse from measured full-load-amp values and documents the choice against the rules.",
          "Wires and tests the motor controllers and motor connections.",
          "Owns clean, reliable wiring and solder joints — no 'rat's nest,' with strain relief at every termination.",
          "Makes sure the electrical build passes safety inspection — fuse placement, correct fuse type, waterproofed motors.",
          "Meters faults to a cause instead of guessing, and records the measurements in the engineering notebook."
        ]
      },
      {
        name: "Rhylan", role: "Sensor Lead",
        detail: "Depth, cameras, and everything the vehicle measures",
        duties: [
          "Owns the sensor suite — depth, temperature, cameras, and any mission-specific instrument.",
          "Runs the trade studies on each sensor: analog versus digital, resolution, cost, and how it interfaces to the microcontroller.",
          "Calibrates every sensor and knows how accurate each reading actually is.",
          "Owns camera placement and the field of view the pilot flies on.",
          "Waterproofs sensor housings and penetrators, and verifies them before every pool session.",
          "Works with Software/Telemetry so readings reach the surface in a form the team can use.",
          "Documents the sensor design and calibration for the technical documentation."
        ]
      },
      {
        name: "Rebecca", role: "Tether Lead",
        detail: "The tether, its management, and the strain relief at both ends",
        duties: [
          "Owns the tether build — conductors, waterproofing, penetrators, and strain relief at both ends.",
          "Manages the tether during every run: feeding slack, taking it up, and keeping it clear of obstacles and propellers.",
          "Calls out obstructions, distances, and hazards to the pilot in real time.",
          "Inspects the tether and its strain relief before and after every session for wear or damage.",
          "Keeps the tether properly protected with braided sleeving or spiral wrap — never tape as the main method.",
          "Measures and accounts for voltage drop down the tether so the electrical team can design around it.",
          "Helps deploy and recover the ROV safely at poolside, and practices the run choreography with the pilot."
        ]
      },
      {
        name: "Tyler", role: "Pilot Station / Control Lead",
        detail: "The control box, the operator interface, and flying the vehicle",
        duties: [
          "Owns the pilot station — the control box, the joysticks, the displays, and how the whole thing sets up poolside.",
          "Designs the operator interface so the pilot doesn't have to fight it: control mapping, labeling, and feedback that match how the vehicle moves.",
          "Operates the ROV during mission runs and pool rehearsals, and logs serious water time.",
          "Learns each mission task cold, and the most efficient order to attempt them in.",
          "Works in constant communication with the Tether Lead during every run.",
          "Gives the engineers honest feedback after each test: what handled well, what to change.",
          "Stays calm and focused under competition lights — the pilot should be the steadiest teammate, not the loudest."
        ]
      },
      {
        name: "Oliver", role: "Software / Telemetry Lead",
        detail: "Control software, the GUI, video, and the data that comes back up",
        duties: [
          "Builds and maintains the control software — the loop from the gamepad through the microcontroller to the thrusters.",
          "Owns the graphical user interface the pilot and crew actually look at during a run.",
          "Sets up the video streaming and keeps the camera delay low, testing it regularly.",
          "Handles telemetry — depth, sensor data, and the profiling float's transmitted readings.",
          "Writes any computer-vision code for mission tasks such as detecting, counting, and measuring objects.",
          "Keeps the code in version control on the team GitHub with clean, student-pushed commits.",
          "Documents any AI tools used, as the rules require, and can explain every part of the code to a judge."
        ]
      },
      {
        name: "Frankie", role: "Test & Quality Lead / Safety & Compliance Lead",
        detail: "The JSEA, the safety inspection, and proving the thing actually works",
        duties: [
          "Owns the Job Safety Analysis (JSEA) and keeps it current as the build changes.",
          "Runs the pre-splash safety and waterproofing checks, and has the authority to stop a launch.",
          "Owns the Pool-Test Log — every session logged, pass or fail, with the configuration that was in the water.",
          "Writes and runs the test plans that prove each subsystem works before it gets integrated.",
          "Prepares the vehicle for the competition safety inspection and knows every rule it will be checked against.",
          "Tracks every open defect to closure so nothing quietly stays broken.",
          "Enforces the standing safety rules at the bench and poolside, for everybody, including the leads."
        ]
      },
      {
        name: "Lillian", role: "Marketing / Communications / Public Outreach Lead",
        detail: "The team's story, the marketing display, and the community",
        duties: [
          "Owns the team's public story — how Say Watt Robotics is presented to sponsors, the community, and the judges.",
          "Builds the marketing display that is scored at competition.",
          "Runs outreach: school visits, community events, and demonstrations that get other kids interested.",
          "Keeps the website's Field Log and photo record current so the season is documented as it happens, not reconstructed later.",
          "Writes the sponsor thank-yous and keeps sponsors updated on what their support built.",
          "Manages photo consent, and makes sure no student appears in public material without a release on file.",
          "Works with the CFO on the fundraising ask and the materials behind it."
        ]
      },
      {
        name: "Luke", role: "Document Manager Lead",
        detail: "The technical documentation, version control, and where everything lives",
        duties: [
          "Owns the technical documentation package that goes to the judges — structure, deadlines, and final assembly.",
          "Maintains the document control system: GitHub for code, Google Drive for everything else, one current version of each file.",
          "Enforces naming and versioning so nobody works from a stale copy.",
          "Collects each lead's written contribution on schedule instead of the week of the deadline.",
          "Proofreads and formats the documentation for consistency before submission.",
          "Keeps the engineering notebook complete alongside the CFO, and makes sure decisions get written down when they are made.",
          "Archives every trade study, test result, and design revision so the team can show its reasoning."
        ]
      },
      {
        name: "Carter", role: "Strategic Lead",
        detail: "Mission strategy, run order, and where the points actually are",
        duties: [
          "Studies the mission tasks and the scoring rubric closely, and knows where the points actually are.",
          "Builds the run plan: which tasks to attempt, in what order, and what to skip when the clock is short.",
          "Runs the time trials so the plan is based on how long tasks really take, not how long the team hopes they take.",
          "Identifies which mission tasks need a dedicated tool and gets that requirement to the Payload lead early.",
          "Plans the contingencies — what the team does when a task fails or a system goes down mid-run.",
          "Works with the CEO and CTO to make sure the build schedule serves the scoring strategy.",
          "Debriefs every practice run against the plan and adjusts."
        ]
      }
    ],

    /* ---- 5d. MEETING NOTES — the field log ----
       The Notetaker writes this each week, in the kids' voice. Renders
       as a chronological feed in the Field Log section of the page and
       links from the matching curriculum week's resources. Set
       photoConsentPending: true to hide the photo gallery for any
       entry until every kid in the photos has a release form on file. */
    meetingNotes: [
      {
        week:  "1.9",
        date:  "Sunday, August 16, 2026",
        time:  "3:00 – 5:00 PM",
        theme: "Election Day — The Team Becomes a Company, and the ROV Gets a Brain",

        recap:
          "Class 1.9 is the day Say Watt Robotics stopped being a group of kids who build a robot " +
          "and became a company. Thirteen of us were there — Trenton, Rhylan, Luke, Frankie, Evan, " +
          "Annabelle, Maddox, Sam, Isaac, Adrian, Rebecca, Tyler, and Liam — from 3:00 to 5:00. " +
          "First we finished what we decided at 1.8 and actually registered where our documents " +
          "live: GitHub for code, Google Drive for everything else, with everybody signed up. Then " +
          "came the demo that made the digital side click — a mock remote operated vehicle running " +
          "on an Arduino microcontroller with a real graphical user interface, built across the " +
          "Arduino IDE and VS Code. Seeing a joystick move something on a screen through code we " +
          "could read is a different thing than reading about it. After that we talked about how " +
          "real engineering organizations work: the integrated product team, where the leads have " +
          "to talk to each other instead of building in parallel and colliding at the end, and the " +
          "integrated master schedule, which is the one calendar that says what every sub-team owes " +
          "and when. Then we ran the elections. We went back through everyone's stated position " +
          "preferences from 1.8 and seated the three executives — Trenton as CEO, Maddox as CFO, " +
          "Annabelle as COO — and the executives turned around and assigned the lead roles " +
          "themselves. Seventeen positions, every one of them filled, every one of them a real job " +
          "with real duties. Nobody on this team is a spare part.",

        byNumbers: [
          { value: "17",  label: "positions filled — every one a real job" },
          { value: "3",   label: "executives seated, who then picked the leads" },
          { value: "13",  label: "students at the session" },
          { value: "2",   label: "systems of record — GitHub and Drive" }
        ],

        todaysRoles: [
          { role: "CEO",                                          holder: "Trenton"   },
          { role: "CFO",                                          holder: "Maddox"    },
          { role: "COO",                                          holder: "Annabelle" },
          { role: "CTO / Chief Engineer",                         holder: "Isaac"     },
          { role: "Mechanical Lead",                              holder: "Adrian"    },
          { role: "Propulsion Lead",                              holder: "Sam"       },
          { role: "Payload / Manipulator Lead",                   holder: "Eli"       },
          { role: "Buoyancy / Stability Control Lead",            holder: "Evan"      },
          { role: "Electrical / Power Lead",                      holder: "Liam"      },
          { role: "Sensor Lead",                                  holder: "Rhylan"    },
          { role: "Tether Lead",                                  holder: "Rebecca"   },
          { role: "Pilot Station / Control Lead",                 holder: "Tyler"     },
          { role: "Software / Telemetry Lead",                    holder: "Oliver"    },
          { role: "Test & Quality / Safety & Compliance Lead",    holder: "Frankie"   },
          { role: "Marketing / Communications / Public Outreach", holder: "Lillian"   },
          { role: "Document Manager Lead",                        holder: "Luke"      },
          { role: "Strategic Lead",                               holder: "Carter"    }
        ],

        rolesNote:
          "The three executive officers were seated first, from the position preferences every " +
          "student wrote down at 1.8. The executives then assigned the lead roles themselves — " +
          "which is how it works in a real company, and which means the leads answer to teammates, " +
          "not to a coach. Full duty lists for every position are on the Team page.",

        decisions: [
          "GitHub for code, Google Drive for everything else — registered, not just agreed to. Everybody has an account and knows which system a given file belongs in.",
          "The three executives were seated from the students' own stated preferences, and then the executives assigned the leads. Coaches did not hand out the titles.",
          "Every position on the org chart is a real job with a written duty list. A title nobody can describe the work of is not a title.",
          "The team runs as an integrated product team. Leads are expected to talk to each other during the week, not discover a conflict at integration.",
          "The COO owns an integrated master schedule — one calendar, every sub-team's deliverables and dates on it."
        ],

        actionItems: [
          { item: "Publish the integrated master schedule — every sub-team's deliverables and due dates on one calendar",   owner: "Annabelle (COO)",  due: "by 1.10" },
          { item: "Run the first integrated product team meeting with all leads reporting status",                          owner: "Trenton (CEO)",    due: "by 1.10" },
          { item: "Confirm every student has GitHub and Google Drive access, and file the first documents in the right place", owner: "Luke (Document Manager)", due: "by 1.10" },
          { item: "Each lead reads their duty list and comes back with the first three things they own this season",        owner: "All leads",        due: "by 1.10" },
          { item: "Extend the Arduino mock-ROV demo toward the real vehicle — joystick to microcontroller to motor driver", owner: "Oliver (Software)", due: "by 1.10" },
          { item: "Carry over from 1.8: tunable buoyancy design, motor-placement trade study, and the Sabertooth swap",     owner: "Adrian / Evan / Liam", due: "by 1.10" }
        ],

        learned: [
          "An integrated product team is not a seating chart. The point is that the person designing the frame and the person designing the payload talk to each other while there's still time to change something — not at integration, when the only option left is a workaround.",
          "An integrated master schedule is what turns \"we should probably do that soon\" into a date somebody owns. One calendar, every sub-team, every deliverable.",
          "A microcontroller with a GUI is the bridge between what we built and what we need. The mock ROV demo showed the whole chain — joystick input, code we can read, something moving in response — and that chain is what makes a vehicle flyable instead of just powered.",
          "The Arduino IDE and VS Code are both tools for the same job, and knowing why you'd reach for each one is part of learning the craft.",
          "Picking leaders from what people actually want to do beats assigning by who's loudest. Everyone wrote down preferences a week before anyone got a title.",
          "Executives who pick their own leads own the outcome differently than executives who inherit them."
        ],

        studentOutcomes: [
          "Every student on the team now holds a named position with a written duty list — seventeen real jobs, no spare parts.",
          "Saw a complete digital control chain end to end: joystick input, Arduino microcontroller, code in the IDE, and a graphical interface responding in real time.",
          "First exposure to two professional development environments — the Arduino IDE and VS Code — and why a team might use both.",
          "Learned what an integrated product team and an integrated master schedule are, and why engineering organizations that skip them fail at integration.",
          "Registered on the team's real systems of record: GitHub for code, Google Drive for documents.",
          "Practiced how a real organization seats leadership — stated preferences first, executives seated from them, executives assigning their own leads."
        ],

        nextWeek:
          "Class 1.10 is the first week the org chart has to do actual work. The COO publishes the " +
          "integrated master schedule, the CEO runs the first integrated product team meeting, and " +
          "every lead comes back with the first three things they own. The engineering carryover " +
          "from 1.8 is still live: tunable buoyancy, the motor-placement trade study, and the " +
          "Sabertooth swap. And the software track keeps pushing the Arduino demo toward the real " +
          "vehicle.",

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.9/meeting-note.pdf"
      },
      {
        week:  "1.8",
        date:  "Sunday, August 9, 2026",
        time:  "3:00 – 5:00 PM",
        theme: "Debrief and Go Digital — Grading the First Splash, Then Opening the Electronics Lab",

        recap:
          "Class 1.8 was the biggest turnout of the season — fourteen of us: Trenton, Rhylan, Luke, " +
          "Frankie, Evan, Carter, Maddox, Sam, Lillian, Isaac, Adrian, Rebecca, Tyler, and Liam — " +
          "from 3:00 to 5:00. No build tonight. We started by grading our own work on the first " +
          "splash, and we made ourselves write down both columns: six things that worked and six " +
          "things that have to change. The good column is real — the buoyancy devices did their job, " +
          "the center of mass sat below the center of buoyancy the way it's supposed to, the tether " +
          "waterproofing held, the frame stayed together, some of the motors ran, and the cart turned " +
          "out to be a genuinely good control platform. The other column matters more: we can't tune " +
          "buoyancy yet, the foam won't stay on, one motor still only runs one direction, the whole " +
          "thing is slow, the control station takes deliberate effort to make the ROV do what you " +
          "want, and our motor placement may not be the right one. Then we looked at the entire " +
          "season, start to finish, so everybody can see where this is going. We went through the " +
          "company — why MATE runs the team like one, and what each position actually does — and " +
          "every student wrote down their top three. Last hour we stood up an electronics lab: " +
          "HackPacks and computer stations, and a first pass at the digital side of the house — " +
          "Arduino Nano, servos, stepper motors, LED displays, and the IDE we'll write the code in. " +
          "We closed on how the team is going to work together: GitHub for anything that's code, " +
          "Google Drive for everything else.",

        byNumbers: [
          { value: "14",  label: "students — biggest turnout yet" },
          { value: "6",   label: "things that worked on the first splash" },
          { value: "6",   label: "problems named for the fix list" },
          { value: "1st", label: "digital electronics lab" }
        ],

        retro: {
          title: "First-splash retrospective",
          worked: [
            "The buoyancy devices did their job — the vehicle floated the way we intended it to.",
            "Center of mass sat below center of buoyancy. The ROV self-rights instead of rolling over, which is the whole reason we stack it that way.",
            "Tether waterproofing held. No intrusion through the tether run.",
            "Some of the motors worked — enough thrust to move the vehicle under control.",
            "The cart earned its place. We used it to haul everything to the pool and then as the topside control platform, and it was good at both.",
            "The frame stayed together. Everything we cut, drilled, and set-screwed in 1.5 through 1.7 held up in the water."
          ],
          needsWork: [
            "We can't tune buoyancy. Right now it's whatever the foam gives us — there's no way to trim the vehicle to neutral, and we need one.",
            "The buoyancy foam won't stay attached to the ROV. The mounting method has to change.",
            "One motor still only runs in one direction — the open Sabertooth fault from 1.7.",
            "The vehicle is slow. Slower than it should be, and we don't yet know whether that's thrust, drag, voltage, or all three.",
            "The control station takes deliberate effort. Making the ROV do what the operator wants is harder than it should be — that's an interface and mixing problem, not a pilot problem.",
            "Motor placement may be wrong. Alternative thrust vectors are on the table for the next frame revision."
          ]
        },

        decisions: [
          "Buoyancy becomes a tunable system, not a fixed one. \"Some foam attached to the frame\" is not a design — we need a way to add and remove trim, and a mount that survives the water.",
          "Motor placement is reopened. The first splash gave us real handling data, so alternative thrust vectors get evaluated against that instead of against a sketch.",
          "The team goes digital. Analog got the vehicle into the water; the Arduino Nano, servos, steppers, and displays we set up tonight are the path to a vehicle that can fly a mission.",
          "GitHub for code, Google Drive for everything else. One place per kind of file, decided now — before there are forty files and nobody knows which copy is current.",
          "Every student named a top-three position tonight. Elections come next, and nobody gets a title without knowing what the job actually is."
        ],

        actionItems: [
          { item: "Design a tunable buoyancy solution — adjustable trim plus a foam mount that stays attached in the water", owner: "Mechanical group", due: "by 1.9" },
          { item: "Trade-study alternative motor placements against the first-splash handling notes, not against a sketch",   owner: "Mechanical group", due: "by 1.9" },
          { item: "Close out the one-direction motor fault with the replacement Sabertooth 2x5 and re-measure",              owner: "Electrical group", due: "by 1.9" },
          { item: "Find the cause of the slow speed — separate thrust, drag, and voltage drop before changing anything",     owner: "Electrical group", due: "by 1.9" },
          { item: "Collect every student's top-three position picks and set an election date",                               owner: "Coach John",       due: "by 1.9" },
          { item: "Stand up the team GitHub org and the Drive folder structure; get every student an account and access",    owner: "Coach John",       due: "by 1.9" },
          { item: "Keep working the HackPack exercises between meetings — Arduino Nano, servo, stepper, and display",        owner: "All students",     due: "ongoing" }
        ],

        learned: [
          "A retrospective only works if you write both columns. It's easy to list what broke; it's just as important to write down what held, because that's the part you don't want to accidentally redesign away. Center of mass below center of buoyancy worked — so it stays.",
          "\"It's slow\" is not a diagnosis. Slow could be thrust, drag, voltage drop down the tether, or a motor that isn't pulling its share. Naming the candidates is the first step; measuring them is the second.",
          "\"The control station required deliberate control\" is an engineering finding, not a complaint about the pilot. When the operator has to fight the interface, the interface is the thing to fix.",
          "Buoyancy you can't adjust isn't really designed — it's whatever the foam happened to give you. A real vehicle has a way to trim to neutral and a mount that survives the water.",
          "Analog electronics got us into the pool. Digital is what makes the vehicle controllable — a microcontroller between the joystick and the motors is what turns raw throttle into something a pilot can actually fly.",
          "Deciding where files live before you have a lot of them is cheap. Deciding after is expensive. Code in GitHub, everything else in Drive."
        ],

        studentOutcomes: [
          "Ran a structured engineering retrospective on their own vehicle — separating what held up from what has to change, and writing both down honestly.",
          "Saw the full season laid out end to end, so this stops being a series of Sundays and starts being a project with a deadline.",
          "Learned what each company position actually does, and picked a top three. Choosing a role you understand is a different thing than volunteering for a title.",
          "First hands-on with digital electronics — Arduino Nano, servos, stepper motors, and LED displays on the HackPack stations, plus a first look at the IDE they'll write the code in.",
          "First exposure to version control and shared storage as a team practice: GitHub for code, Google Drive for everything else."
        ],

        nextWeek:
          "Class 1.9 turns the fix list into hardware. The tunable-buoyancy design and the foam mounting " +
          "get worked, the alternative motor placements get traded against what the first splash actually " +
          "showed us, and the electrical group closes out the one-direction motor with the replacement " +
          "Sabertooth. The HackPack work keeps going in parallel — every student needs to be comfortable " +
          "with the Nano before the code that flies this thing gets written. And elections are coming: " +
          "everyone named a top three tonight.",

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.8/meeting-note.pdf"
      },
      {
        week:  "1.7",
        date:  "Sunday, July 26, 2026",
        time:  "3:00 – 5:00 PM",
        theme: "First Splash — The ROV Gets Wet, and We Meter a Fault All the Way Down",

        heroPhoto: {
          src:     "assets/meetings/1.7/00-hero-poolside-first-splash.jpg",
          alt:     "Three Say Watt Robotics students at the edge of the pool at Class 1.7 with the four-motor PVC ROV on pool-noodle floats, the tether coiled on the deck, and the yellow TriggerFish control box on the cart beside them.",
          caption: "Poolside, minutes before the first splash — the frame on noodle floats, the tether flaked out on the deck, and the yellow control box powered up on the cart. Seven weeks from a box of PVC to a vehicle that goes in the water.",
          requiresConsent: false
        },

        recap:
          "Class 1.7 was the first time the ROV got wet. Eleven of us — Trenton, Rhylan, Luke, " +
          "Frankie, Evan, Carter, Maddox, Annabelle, Lillian, Madelyn, and Isaac — worked from " +
          "3:00 to 5:00. We started by connecting all four motors to the tether, testing the " +
          "motor pairs on each tether line and checking polarity on every one before anything " +
          "got power. On the frame we drilled set screws into the side-panel frame and cut the " +
          "vertical pole for 60° and 45°. The 70° angle that was on our cut list didn't survive " +
          "testing — at 70° we couldn't fit both vertical motors in at the same time, so the " +
          "frame told us the answer instead of the drawing. Then we ran the waterproofing check " +
          "and went in the water for the first time. That's where the problems showed up. Motor " +
          "4 only spins one direction, and it's inconsistent about it. So we metered the whole " +
          "chain instead of guessing: the right Sabertooth gave motor 3 a full 12 V at full " +
          "throttle both ways, but motor 4 got 6 V one way and 12 V the other. The left " +
          "Sabertooth gave motors 1 and 2 a full 12 V both ways. The joystick read 2.5 V at " +
          "center and 5 V at max — both correct — and we swapped the joystick anyway and got " +
          "the exact same error. Everything upstream checks out, so the fault is the board. We " +
          "ordered a new Sabertooth 2x5. Both vertical motors also only push the robot up and " +
          "never down, and that one is still open. Next up: sensors, microcontrollers, and " +
          "taking this ROV from analog to digital.",

        byNumbers: [
          { value: "11",   label: "students on the build" },
          { value: "4",    label: "motors connected to the tether" },
          { value: "1st",  label: "in-water test of the vehicle" },
          { value: "6 V",  label: "on motor 4 where 12 V belonged" }
        ],

        safety: [
          "Waterproofing check happens before anyone goes near the water — it is a gate, not a formality. We checked seals and penetrators dry-side first, and nothing got wet until that check was done.",
          "Polarity verified on every motor pair before power. Four motors, four checks, no assumptions.",
          "Poolside discipline: dry hands on the control box, the tether flaked out on the deck where it can't tangle a swimmer, and everyone clear of the vehicle before power goes on.",
          "When a motor misbehaves, you do not fix it by running it harder. Power down, get the meter out, and measure."
        ],

        decisions: [
          "The 70° vertical-motor angle is out. Testing showed the frame can't fit both vertical motors at 70° at the same time, so we cut the vertical pole for 60° and 45° instead. Test result beats cut list.",
          "Order a replacement Sabertooth 2x5. We are replacing the board because we measured it, not because we're out of ideas — the joystick, the wiring, and the left Sabertooth all read correct.",
          "Change one variable at a time. Swapping the joystick was the controlled experiment that ruled out the input side; the error stayed, and that told us more than a fix would have.",
          "The next research track is taking the ROV from analog to digital — sensors and microcontrollers. Analog got us into the water; it won't get us through a mission."
        ],

        waterproofing: [
          "Pre-splash inspection: motor seals and the tether run checked on the deck before anything went in the water. Passing that check is what earned the first splash — no check, no pool.",
          "Run one went in deliberately positively buoyant, on pool-noodle floats, with a swimmer alongside as spotter. If the controls quit on the first splash, the vehicle comes back up on its own instead of sitting on the bottom.",
          "The floats came off for the second run and the vehicle held station under the surface on the tether — which is also where the up-only vertical-motor behavior became obvious.",
          "The faults we found traced to the electronics, not to water: motor 4's one-direction anomaly reproduced at the Sabertooth outputs with a multimeter, off the water.",
          "Standing rule going forward: log the waterproofing check in the Pool-Test Log every session, pass or fail. A check nobody wrote down didn't happen."
        ],

        actionItems: [
          { item: "Install the new Sabertooth 2x5 when it arrives and re-run the full-throttle voltage measurement on all four motors, both directions", owner: "Electrical group", due: "by 1.8" },
          { item: "Diagnose why both vertical motors only drive the robot up and never down — check thrust direction, wiring, and mixing before blaming the board",  owner: "Electrical group", due: "by 1.8" },
          { item: "Finish mounting the vertical motors on the 60° and 45° cuts, and write up why 70° was rejected in the engineering notebook",                    owner: "Frame group",      due: "by 1.8" },
          { item: "Start the analog-to-digital research: candidate microcontrollers, depth and sensor options, and what each one costs",                          owner: "Sunday cohort",    due: "by 1.8" },
          { item: "Log the full Sabertooth voltage table and the joystick readings in the engineering notebook — this is the evidence behind the board swap",      owner: "Notetaker",        due: "by 1.8" }
        ],

        learned: [
          "How to isolate a fault instead of guessing at it. Motor 4 only spun one direction, so we measured the known-good channels first — left Sabertooth, motors 1 and 2, 12 V both ways; right Sabertooth, motor 3, 12 V both ways — then the suspect one: motor 4 at 6 V one way and 12 V the other. Then the input: joystick center 2.5 V, joystick max 5 V, both correct. Working from good to bad is what turns a mystery into a part number.",
          "Change one variable at a time. We swapped the joystick even though it metered fine, and the error came back identical. A test that doesn't fix anything still eliminates something.",
          "Testing beats the plan on paper. 70° was on our cut list from 1.6 and it did not survive contact with the actual frame — both vertical motors wouldn't fit. 60° and 45° came out of the build, not the drawing.",
          "Polarity is a check, not an assumption. Four motors got wired to the tether tonight and all four got verified before power. That's the cheapest ten minutes on the whole build.",
          "Two vertical motors that only go up are a different problem than a motor that runs slow. Direction and speed fail in different ways, and naming which one you have is half the diagnosis."
        ],

        studentOutcomes: [
          "Wired four motors to the tether, tested each motor pair on its tether line, and verified polarity on all four before any power was applied.",
          "Ran a real fault-isolation sequence with a multimeter — measure the known-good channels, then the suspect channel, then the input — and reached a defensible conclusion: replace the controller.",
          "Drilled set screws into the side-panel frame and cut vertical pipe to angle, then learned a design constraint by testing it rather than by drawing it.",
          "First in-water operation of the vehicle the team built, including running the pre-splash waterproofing check as the gate for going in at all.",
          "First exposure to what 'analog to digital' means for this ROV — and why the sensors-and-microcontroller track is the next real jump in capability."
        ],

        nextWeek:
          "Class 1.8 is Build & Iterate I. The replacement Sabertooth 2x5 goes in and every motor " +
          "gets re-measured at full throttle in both directions. The vertical-motor problem — up " +
          "but never down — gets chased down to a cause. The frame group finishes mounting the " +
          "vertical motors on the 60° and 45° cuts. And the whole team starts the research that " +
          "takes this vehicle from analog to digital: sensors, microcontrollers, and what it " +
          "costs to get there.",

        photos: [
          { src: "assets/meetings/1.7/01-motor-pairs-control-box-bench.jpg", caption: "Before the pool — testing the motor pairs on each tether line at the bench, with the yellow TriggerFish control box open and the tether coiled beside it. Polarity got checked on all four motors here, not at poolside." },
          { src: "assets/meetings/1.7/02-first-in-water-test-piloting.jpg",  caption: "The first in-water test, hands on the joysticks. This is the run where motor 4 showed the one-direction anomaly that sent us to the multimeter." }
        ],

        videos: [
          { src:     "assets/meetings/1.7/03-first-splash-noodle-floats.mp4",
            poster:  "assets/meetings/1.7/03-first-splash-noodle-floats.jpg",
            caption: "The first splash. Run one went in deliberately positively buoyant on pool-noodle floats — if the controls quit, the vehicle surfaces on its own instead of sitting on the bottom — with a swimmer alongside as spotter and the tether tended from the deck." },
          { src:     "assets/meetings/1.7/04-submerged-run-vertical-motors.mp4",
            poster:  "assets/meetings/1.7/04-submerged-run-vertical-motors.jpg",
            caption: "Noodles off, hovering on the tether over the 5-foot mark. This is the run where \"both vertical motors only go up\" stopped being a theory — the vehicle would climb on command and would not drive itself back down." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.7/meeting-note.pdf"
      },
      {
        week:  "1.6",
        date:  "Sunday, July 19, 2026",
        time:  "3:00 – 5:30 PM",
        theme: "TriggerFish Setbacks — Steps Back That Move Us Forward",

        heroPhoto: {
          src:     "assets/meetings/1.6/00-hero-rebecca-tether-solder.jpg",
          alt:     "Rebecca soldering the topside tether lead onto an 8-pin connector at Class 1.6, with the SeaMATE color-coded pinout reference on the counter next to her.",
          caption: "Rebecca on the topside tether lead — solder iron in one hand, the SeaMATE 8-conductor pinout reference at her elbow. She did the joints beautifully. And then we had to take them all apart.",
          requiresConsent: false
        },

        recap:
          "Class 1.6 was a night of setbacks that turned into the whole lesson. Four of us " +
          "— Rebecca, Tyler, Frankie, and Isaac — worked the TriggerFish control-box side of " +
          "the build from 3:00 to 5:30. Rebecca soldered the topside tether lead onto the " +
          "8-pin connector, and she did it really well. Then we tried to seat the metal " +
          "cover — and the eight color-coded conductors were too long to fit inside. " +
          "Everything had to come apart. Cables trimmed shorter. All eight joints re-soldered. " +
          "About an hour and a half we won't get back. On the bench test we still couldn't " +
          "get the LED indicators to read anything but red — polarity is off somewhere and " +
          "none of us can tell why yet, so Coach John's staying on the TriggerFish " +
          "manufacturer to sort it out before we power anything up. While the tether work " +
          "was happening, the rest of the team broke off to install the backplate into the " +
          "yellow Pelican case. Halfway through, one of the power cables came undone inside " +
          "a plastic protective sleeve. Re-setting that crimped joint was precision work — " +
          "no room to force it — and it swallowed another chunk of the night. But by the " +
          "end we did get the tether backplate mounted onto the case and the video wire " +
          "soldered onto the backplate. Two lessons from tonight, and both of them landed " +
          "hard: sometimes you have to take a step backward to take a step forward — that's " +
          "what perseverance actually looks like. And watch the whole install video before " +
          "you start work, even when the task feels intuitive. The gotchas live in the " +
          "parts you'd skip.",

        byNumbers: [
          { value: "4",           label: "students on the Sunday cohort" },
          { value: "8",           label: "conductors re-soldered on the tether" },
          { value: "~1.5 hr",     label: "solder rework" },
          { value: "1",           label: "video wire on the backplate (installed)" }
        ],

        safety: [
          "Watch the full install video before starting the work — even when the task feels intuitive. Half of tonight's rework would have been caught by finishing the video first.",
          "A crimped joint inside a plastic sleeve is a precision job, not a strength job. When it comes apart, force won't fix it — slowing down will.",
          "Cables that are too long for the enclosure force reworks that stress joints. Measure the enclosure clearance BEFORE the final solder, not after.",
          "Do not power up a board with the LED indicators reading reversed polarity. Meter it, ask the manufacturer, verify — then power."
        ],

        decisions: [
          "Watch the full install video before starting the work, every time. The gotchas — like cable-length versus enclosure clearance — live in the parts you'd skip.",
          "Measure cable length against the enclosure BEFORE the final solder. Cable management is a design step, not a cleanup step.",
          "Do not smoke-test the control board until the TriggerFish manufacturer answers on the reversed LED polarity. Verified beats \"probably working.\"",
          "Perseverance is the standard on this team: setbacks get named and worked through, not skipped over. Tonight was ninety minutes of the same solder done twice — and we still finished the video wire and the backplate."
        ],

        actionItems: [
          { item: "Follow up with the TriggerFish manufacturer on the reversed LED polarity — and hold power-up until the answer is in", owner: "Coach John",              due: "ongoing" },
          { item: "Standing rule: measure the enclosure clearance BEFORE final solder — \"measure the space, not the wire\"",           owner: "Sunday cohort",           due: "ongoing" },
          { item: "Cut vertical-motor pipe segments at 45° / 65° / 75° (SOHCAHTOA on the length)",                                       owner: "Frame group",             due: "by 1.7" },
          { item: "Trade-study depth sensor (analog vs digital) and pick a camera + display path",                                       owner: "Sunday cohort",           due: "by 1.8" },
          { item: "Continue backplate wiring and finish the control-box case assembly",                                                   owner: "Sunday cohort",           due: "by 1.7" }
        ],

        learned: [
          "Sometimes you take a step backward to take a step forward. Rebecca soldered the topside tether beautifully — and we still had to undo every joint because the cables were too long for the cover. That's ninety minutes of the same solder done twice. It's not failure — it's what a rework looks like when we catch a problem before it ships to the pool.",
          "Watch the whole video before you start. Even with a strong intuitive sense of what to do, the video is where the gotchas live — like cable-length-versus-enclosure-space — that intuition doesn't warn you about.",
          "A crimped joint inside a plastic sleeve is a precision job, not a strength job. When the power cable came apart during the backplate install, force wasn't going to fix it. Slowing down did.",
          "When the bench-test LEDs come back the wrong color, you don't power up and see what happens. You meter the board, you ask the manufacturer, and you don't move on until you understand why."
        ],

        studentOutcomes: [
          "First hands-on solder of the topside tether — 8 color-coded conductors mapped to the SeaMATE pinout — including the humbling experience of taking every joint apart and doing it over.",
          "First TriggerFish backplate mounted into the yellow Pelican control-box housing; first video wire soldered to the backplate.",
          "Real debugging experience: a bench-test result (reversed LED polarity) that doesn't yet have an answer — and the discipline to stop, meter, and reach the manufacturer instead of powering through.",
          "The reflex of watching the full reference video before starting the work — the same difference between a \"working\" build and a \"crafted\" one we named at 1.3."
        ],

        nextWeek:
          "Class 1.7 is Capsule Build & First Splash — the team builds the watertight capsules " +
          "and heads to the pool for the first time. Every kid in the water. Capsule drop #1 " +
          "with the towel check. Meanwhile the electronics track keeps chasing the LED-polarity " +
          "issue with the TriggerFish manufacturer, and the frame group cuts the 45° / 65° / 75° " +
          "pipe segments the vertical motors get mounted at.",

        photos: [
          { src: "assets/meetings/1.6/01-triggerfish-guide-and-case.jpg", caption: "The SeaMATE TriggerFish Guide open on the laptop (\"TF Installing the Tether Connector\") next to the yellow Pelican case with the backplane in hand. The Guide has been the team's procedural reference of record since 1.3." },
          { src: "assets/meetings/1.6/02-triggerfish-case-installation.jpg", caption: "Two of the team working the tether backplate onto the SeaMATE TriggerFish case; Rebecca still on the topside tether solder in the background. Parallel tracks all night." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.6/meeting-note.pdf"
      },
      {
        week:  "1.5",
        date:  "Sunday, July 12, 2026",
        time:  "3:00 – 4:45 PM",
        theme: "The Frame Becomes Real — PVC Cut List, Control Board, Peer-Taught CAD",

        heroPhoto: {
          src:     "assets/meetings/1.5/00-hero-pvc-frame-assembled.jpg",
          alt:     "Coach holding up the fully assembled four-motor TriggerFish PVC frame at Class 1.5, with team members on the couch in the background.",
          caption: "The four-motor TriggerFish frame — cut from a cut list and assembled in one session. Everything is on it now except the motors. Six weeks ago this was a box of pipe and fittings.",
          requiresConsent: false
        },

        recap:
          "Class 1.5 was the day the frame stopped being sketches on paper and became " +
          "something you can pick up with two hands. Nine of us were there — Trenton, " +
          "Rhylan, Rebecca, Liam, Maddox, Evan, Tyler, Isaac, and Trooper — and the " +
          "meeting ran 3:00 to 4:45. The night split three ways: cutting and building " +
          "the PVC frame, finishing the control board, and CAD. On the frame, we did " +
          "the talking before the cutting — cutter safety, what PVC we're using, and " +
          "the cut list — and then cut and assembled the full TriggerFish frame in the " +
          "four-motor configuration. It's fully built now, motors being the only thing " +
          "left to hang on it. The cutting taught us a few things the direct way: have " +
          "somebody hold both ends of the pipe so the offcut doesn't get flung, use the " +
          "first good piece as the template for every piece like it, mark every cut with " +
          "an Expo marker before the blade touches the pipe, and remember the PVC cutter " +
          "doesn't leave a flush edge — every piece needs a cleanup pass before it seats. " +
          "On the control board, we finished soldering the backboard. We still have to " +
          "screw in the tether wires, and we're short a few wires. We also hit a real " +
          "problem: the LED polarity is coming back reversed and we haven't figured out " +
          "why yet. Get a board like this wired wrong enough and it turns into a toxic " +
          "smoke machine — so instead of powering it up to see what happens, we checked " +
          "it with a multimeter, and we may contact the manufacturer to be sure. On CAD, " +
          "Trenton ran lessons for Rhylan, Tyler, Evan, and Maddox; the group built a " +
          "LEGO-block-style model in Onshape, and it's going into a shared \"Learning CAD\" " +
          "folder so everybody can learn from it. Goals for next time: mount the motors, " +
          "weigh the frame, test buoyancy, and finish the control board.",

        byNumbers: [
          { value: "4-motor",     label: "frame config, assembled minus motors" },
          { value: "4",           label: "kids taught CAD by a teammate" },
          { value: "1",           label: "wiring bug to solve (LED polarity)" },
          { value: "1 hr 45 min", label: "meeting duration" }
        ],

        safety: [
          "PVC cutting: have somebody hold both ends of the pipe so the offcut can't get flung across the bench when the cut finishes.",
          "Measure, mark with an Expo marker, then cut. The mark comes before the blade — never cut to an eyeballed line.",
          "Use the first good piece as the template for every identical piece after it. Copying a known-good cut beats re-measuring, which is just more chances to be wrong.",
          "Know the tool's limit: the PVC cutter doesn't leave a flush, square face, so every cut needs a cleanup pass before the pipe will seat fully into a fitting.",
          "On the control board — wire it right or don't power it. A miswired board isn't just dead, it's a \"toxic smoke machine.\" That's why the board gets a multimeter check before power ever touches it."
        ],

        decisions: [
          "Build the frame in the four-motor TriggerFish configuration. Assemble the full PVC skeleton first; motors go on last.",
          "Cut discipline is fixed: talk through the cut list and safety first, mark with an Expo marker, cut, then template every identical piece off the first good one.",
          "Don't power the control board until the wiring is verified. The LED polarity came back reversed with no obvious cause, so the board gets a multimeter trace — and we contact the manufacturer before any smoke test.",
          "CAD gets taught peer-to-peer. Trenton runs the lessons, and every practice model lives in a shared \"Learning CAD\" folder so the whole team can see and copy the work."
        ],

        actionItems: [
          { item: "Trace why the LED polarity reads reversed on the control board — multimeter check, and contact the manufacturer if the board is otherwise correct", owner: "Control-board group", due: "by 1.6" },
          { item: "Screw in the tether wires and source the missing wires to finish the backboard",                                                                    owner: "Control-board group", due: "by 1.6" },
          { item: "Mount the four motors onto the assembled PVC frame",                                                                                                owner: "Frame group",        due: "1.6" },
          { item: "Weigh the completed frame and run a first buoyancy test",                                                                                           owner: "Sunday cohort",      due: "1.6" },
          { item: "Keep the \"Learning CAD\" folder going — every kid uploads their practice Onshape model",                                                            owner: "CAD group (Trenton lead)", due: "ongoing" },
          { item: "Start the plan to move from analog to digital control and pick a code editor",                                                                      owner: "Advisor + team",     due: "by Aug 15" }
        ],

        learned: [
          "A PVC cutter is fast but not precise. It won't leave a flush, square face, so every cut needs a cleanup pass before the pipe seats fully. Knowing a tool's limits is part of using it well.",
          "The template trick beats re-measuring. Cut one piece right, then use it as the master for every identical piece — re-measuring each cut is just more chances to introduce an error.",
          "A control board is one of the few parts on the ROV that can fail dangerously. \"Working\" isn't the bar — verified is. Reversed LED polarity is a signal to stop, meter the board, and call the manufacturer, not to power up and hope.",
          "Teaching is how you find out whether you actually understand something. Trenton didn't just do the CAD — he taught four teammates to build a model from scratch, which is a harder skill than drawing it himself."
        ],

        studentOutcomes: [
          "First full ROV frame in hand — the four-motor TriggerFish PVC skeleton, cut from a cut list and assembled in one session, with only the motors left to mount.",
          "Real shop technique on the PVC cutters: hold both ends, mark before cutting, template off the first piece, and account for the non-flush cut.",
          "Finished the backboard soldering and met a genuine debugging problem — a reversed LED polarity with no obvious cause — and learned the right first move is to meter it, not to power it.",
          "Peer-taught CAD: four kids built their first Onshape \"LEGO-block\" model with a teammate teaching, and the work is saved where the whole team can learn from it."
        ],

        nextWeek:
          "Next session is about turning the skeleton into a robot that can float. The four motors get " +
          "mounted onto the PVC frame, then we weigh the whole thing and run a first buoyancy test to see " +
          "how close we are to neutral. The control-board group keeps chasing the LED-polarity bug, screws " +
          "in the tether wires, and finishes the backboard. Looking further out, the team wants to move the " +
          "ROV from analog to digital control and settle on a code editor by August 15 — the first real step " +
          "toward writing the software that flies this thing.",

        photos: [
          { src: "assets/meetings/1.5/01-vector-rov-frame-reference.jpg", caption: "The MATE \"Vector\" ROV kit on screen (materovcompetition.org/rov-kits) — the reference geometry behind the team's PVC frame: a low box frame with four thrusters." },
          { src: "assets/meetings/1.5/02-control-board-wattmeter.jpg",    caption: "The TriggerFish control board mid-debug, watt meter reading 13.63 V on the bench. The backboard soldering is done; the reversed-LED-polarity mystery is not." },
          { src: "assets/meetings/1.5/03-cad-onshape-lesson.jpg",         caption: "Onshape on the big screen — a first solid model (a cylinder on a rounded box) during the CAD lesson. Learning the tool the team will design every custom part in." },
          { src: "assets/meetings/1.5/04-cad-lego-block-models.jpg",      caption: "Two laptops, two \"LEGO-block\" practice models — Trenton teaching teammates to build in CAD from scratch. The models go in the shared \"Learning CAD\" folder." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.5/meeting-note.pdf"
      },
      {
        week:  "1.4",
        date:  "Sunday, July 5, 2026",
        time:  "3:00 – 5:30 PM",
        theme: "First Frame Sketches — Motors, Frame, CAD",

        recap:
          "Class 1.4 was the day the ROV started to look like a machine, not a pile " +
          "of parts. Eleven kids showed up — Trenton, Rhylan, Eli, Oliver, Luke, " +
          "Frankie, Rebecca, Liam, Maddox, Evan, and Carter. Meeting ran 3:00 to " +
          "5:30. The night moved on three parallel tracks: the control board kept " +
          "getting soldered (with a wrinkle we're still working through), the " +
          "motors got propellers assembled onto them for the first time, and the " +
          "team started sketching frame ideas on paper and in CAD. On the control " +
          "board — soldering continued from 1.3's list, but the wider iron tip we " +
          "swapped in last week is causing temperature-regulation issues. The " +
          "setpoint that worked at 720°F isn't holding steady, which makes joints " +
          "inconsistent. Coach John's call: order the original tips. Sometimes the " +
          "right answer to a tool problem is not to work around it. On the motors " +
          "— propellers went onto the motor shafts. That sounds small but it's the " +
          "moment the drivetrain stops being a line item on the BoM and becomes a " +
          "thing you can hold. We also reviewed the Sabertooth motor controller " +
          "and spent time on how a modulator and a potentiometer actually work in " +
          "that circuit, so the kids can trace the signal through when we power " +
          "up. On the frame — the team brainstormed geometry and motor positions " +
          "on paper first. Several kids drew concepts from top, side, front, and " +
          "bottom views with a key marking PVC, tether, thrusters, and thrust " +
          "direction. Then Coach John moved the discussion into CAD and started " +
          "the first Onshape design. A CAD tutorial is on its way so the students " +
          "can self-learn Onshape between meetings — that self-study track is what " +
          "turns Phase 1's exit gate into a Phase 2 outcome.",

        byNumbers: [
          { value: "11",         label: "students" },
          { value: "5",          label: "frame sketches" },
          { value: "1",          label: "Onshape design started" },
          { value: "2 hr 30 min",label: "meeting duration" }
        ],

        decisions: [
          "Order the original iron tips. The wider tip fixed 1.3's oxidation problem but introduced a temperature-regulation problem. Sometimes the answer to a tool problem is to un-do the previous fix.",
          "Frame design starts on paper. Top / side / front / bottom views with a symbol key, before any CAD is opened. The paper version catches proportion problems the CAD version won't tell you about.",
          "Onshape is the team's CAD tool. Between-meeting self-study is on the roster — a CAD tutorial goes out to the students this week.",
          "Officer elections still deferred until the summer TriggerFish build is wrapped. Same rule as 1.3 — roles get assigned based on what the team does well during the build."
        ],

        actionItems: [
          { item: "Order the original iron tips for the soldering stations",                      owner: "Coach John",     due: "by 1.5" },
          { item: "Send the Onshape CAD tutorial to every student for between-meeting self-study", owner: "Coach John",     due: "this week" },
          { item: "Continue the TriggerFish control-box build once the correct tips arrive",       owner: "Sunday cohort",  due: "1.5" },
          { item: "Refine the frame sketches into a shortlist of concepts to CAD next week",       owner: "Frame group",    due: "by 1.5" },
          { item: "Photograph the paper sketches and upload to the team folder",                   owner: "Photographer",   due: "by 1.5" }
        ],

        learned: [
          "When a workaround isn't working, name it and replace the tool. The wider tip solved 1.3's oxidation but introduced temperature instability. We reverted; we didn't paper over it.",
          "Frame design starts on paper. Sketch top, side, front, and bottom views with a symbol key. Proportions and motor placements get sanity-checked at the paper stage before any CAD gets drawn.",
          "Motors + propellers + a controller = the ROV's drivetrain. Understanding how the Sabertooth motor controller, the modulator, and the potentiometer interact is what lets you diagnose a bad run instead of guessing at it.",
          "CAD is a skill the team owns individually, not just a thing Coach John does. Between-meeting self-study on Onshape is how every student gets fluent enough to design and modify parts by Phase 2."
        ],

        studentOutcomes: [
          "First hardware-in-hand moment for the drivetrain — propellers seated on motor shafts, not just on a slide.",
          "First real drawings of the robot: top, side, front, and bottom views on paper, with the team's first shared symbol key (PVC, tether, thruster, cross-tether, thrust direction).",
          "Introduction to Onshape — the CAD tool the team will use through Phase 2 and beyond. Self-study track begins this week.",
          "A working mental model of the Sabertooth motor controller and how a modulator and potentiometer shape the signal that ends up at the motor."
        ],

        nextWeek:
          "Class 1.5 continues the TriggerFish control-box build once the original tips arrive, and the frame group " +
          "narrows the sketches down to a shortlist to CAD in Onshape. Meanwhile everyone is expected to have watched " +
          "the CAD tutorial that goes out this week — Phase 2 doesn't wait for us to catch up.",

        photos: [
          { src: "assets/meetings/1.4/01-frame-concept-a.jpg",             caption: "First frame concept — a stretched hexagonal top view with tether attachment noted, plus a second smaller top view sketch, a labeled front elevation, a small oval concept, and a base plate detail." },
          { src: "assets/meetings/1.4/02-frame-top-side-bottom-key.jpg",   caption: "Top / Side / Bottom views of a boxier frame with the team's first shared symbol legend — PVC, tether, thruster, cross-tether, and direction of thrust. The key is the point." },
          { src: "assets/meetings/1.4/03-frame-side-top-front.jpg",        caption: "Perspective sketch — Side, Top, Front views — with motor placement and dimension studies. The crown and the flowers in the corner are unrelated." },
          { src: "assets/meetings/1.4/04-frame-top-front-motors.jpg",      caption: "Top and Front views of a rectangular frame with motors marked at each corner. Motor positions first, everything else later." },
          { src: "assets/meetings/1.4/05-frame-single-view.jpg",           caption: "Trapezoidal frame from a four-view orientation (top, left, right, bottom) — a fifth kid's concept alongside the others." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.4/meeting-note.pdf"
      },
      {
        week:  "1.3",
        date:  "Sunday, June 28, 2026",
        time:  "3:00 – 5:15 PM",
        theme: "TriggerFish Build Begins — Working vs. Crafted",

        heroPhoto: {
          src:     "assets/meetings/1.3/00-hero-triggerfish-board.jpg",
          alt:     "Bare MATE TriggerFish ROV control board, Rev 4 (2019), unpopulated on a granite counter with flush cutters nearby.",
          caption: "Bare MATE TriggerFish control board, Rev 4 (2019), out of the kit — the first thing the team meets when the box opens. The actual ROV starts here.",
          requiresConsent: false
        },

        recap:
          "Lesson 1.3 was the start of the actual TriggerFish build. The SpaceWings " +
          "practice kit from 1.2 is behind us; the real ROV control board sat on the " +
          "granite counter today, out of the kit, waiting. That's a different feeling " +
          "than a practice board — when you slip on this one, you slip on the boat. " +
          "Eight kids showed up — Maddox, Frankie, Rebecca, Isaac, Liam, Luke, Tyler, " +
          "and Trenton (Trenton stepped out at 3:45). Meeting ran 3:00 to 5:15. The " +
          "day's work: kit opened, ten to fifteen components soldered onto the board " +
          "per the SeaMATE TriggerFish ROV Guide (the two 1000µF / 16V capacitors with " +
          "polarity verified, the fuse holder, the 3 A fuse, and the next block from " +
          "the slide), ribbon wires soldered to the joysticks, and the 150A " +
          "high-precision watt meter and power analyzer added to the bench with " +
          "extended leads. One process note worth keeping: the existing iron tip was " +
          "oxidized to the point that the standard 650°F wasn't flowing solder " +
          "cleanly. We swapped to a slightly wider tip and bumped the temperature to " +
          "720°F to compensate. Both stay until the next oxidization. The lesson of " +
          "the day wasn't a technique; it was a frame. The team explicitly " +
          "distinguished a \"working\" build from a \"crafted\" build, and named the " +
          "connection between craftsmanship and reliability. The four bullets in " +
          "What We Learned have the specifics. Last call of the day: officer " +
          "elections deferred until the summer 1.01 TriggerFish build is wrapped. " +
          "Roles get assigned based on what the team actually does well during the " +
          "build, not on day-one guesses.",

        byNumbers: [
          { value: "8",          label: "students" },
          { value: "10–15",      label: "components soldered" },
          { value: "650 → 720°F",label: "iron temp (new tip)" },
          { value: "150 A",      label: "watt meter on bench" }
        ],

        decisions: [
          "Officer elections deferred until the summer 1.01 TriggerFish build is complete. Roles get assigned based on what the team actually does well during the build, not on day-one guesses.",
          "Polarity gets verified before any electrolytic cap touches the board. Tuition for getting it wrong on a 1000µF cap is high — they fail open and they fail loud.",
          "The SeaMATE TriggerFish ROV Guide is the team's procedural reference of record for Phase 1. Every build step gets verified against the relevant slide before any iron touches the board.",
          "When the iron tip oxidizes past the point of flowing solder cleanly at the standard 650°F, swap the tip and bump the temperature until the new tip flows cleanly. Document both the swap and the new setpoint. Tonight: wider tip, 720°F."
        ],

        actionItems: [
          { item: "Continue the TriggerFish control-board build at Lesson 1.4 — next block of components per the SeaMATE Guide", owner: "Sunday cohort", due: "7/5" },
          { item: "Nominate a photographer for the rest of the summer build. Documented build-progression photos matter for the engineering presentation and the team photo log", owner: "Advisor (until CEO is elected)", due: "by 1.4" },
          { item: "Start a parts-inventory tracker for the TriggerFish kit — every component counted, every consumable logged", owner: "Advisor (until CFO is elected)", due: "by 1.4" }
        ],

        learned: [
          "Working and crafted both pass a multimeter check. Only crafted survives vibration, heat, water ingress, and the trip from the hotel to the pool deck. Reliability is a function of craftsmanship, not luck.",
          "Craftsmanship has a specific checklist on this board: polarity verified before commit, joints clean and shiny (not dull or grainy), components seated flush against the PCB, leads clipped flush after soldering, heatshrink covering every exposed conductor with strain relief at both ends.",
          "If you're not sure a joint is crafted, ask whether you'd ship it to the regional pool and bet a season on it. If the answer is \"probably,\" redo it. The standard isn't \"good enough today\" — it's \"good in April when it counts.\"",
          "Iron tips don't last forever. When solder won't flow cleanly at the standard temp, the tip is the variable — not the operator. Change it, document the swap, and bump the setpoint until the new tip flows cleanly. Tonight's bump was 650 → 720°F."
        ],

        studentOutcomes: [
          "A working definition of \"craftsmanship\" that isn't vague effort — it's a specific habit list: polarity check, clean joints, flush seating, clipped leads, heatshrink with strain relief. Habits the team can grade itself against.",
          "First time handling live ROV-grade components — the actual control board, the 1000µF capacitors that will move thrusters, the watt meter that will read real current. The practice phase ended when the box opened.",
          "The discipline of working against a printed-and-projected reference (the SeaMATE Guide). Build steps don't get done from memory; they get done from the page.",
          "Equipment care is part of the engineering, not background noise. Tonight the iron tip degraded mid-build; the response was to notice, document, change the tip, and adjust the temp — not to push through and hope."
        ],

        nextWeek:
          "Class 1.4 continues the TriggerFish build — next blocks of components on " +
          "the control board, working toward a powered-up smoke test later in Phase 1. " +
          "SeaMATE Guide stays open on the iPad. The watt meter joins us for the first " +
          "powered tests when those come.",

        photos: [
          { src: "assets/meetings/1.3/00-hero-triggerfish-board.jpg",         caption: "Bare MATE TriggerFish control board, Rev 4 (2019), out of the kit. The real ROV starts here." },
          { src: "assets/meetings/1.3/03-ipad-guide-fuse-capacitors.jpg",     caption: "Slide 20 of the SeaMATE TriggerFish ROV Guide on the iPad — fuse holder and the two 1000µF / 16V caps, with the polarity warning called out before any iron touches the board." },
          { src: "assets/meetings/1.3/04-heat-gun-work.jpg",                  caption: "Heat gun on the power leads — heatshrink seated over the conductor and shrunk down." },
          { src: "assets/meetings/1.3/01-watt-meter-in-hand.jpg",             caption: "150A high-precision watt meter and power analyzer joining the bench. Current draw stops being a guess." },
          { src: "assets/meetings/1.3/02-watt-meter-box.jpg",                 caption: "The watt meter, still in the box, for scale. Real instrumentation for a real build." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.3/meeting-note.pdf"
      },
      {
        week:  "1.2",
        date:  "June 19 – 21, 2026",
        time:  "Three sub-sessions  ·  Fri / Sat / Sun",
        theme: "Soldering Bootcamp",

        heroPhoto: {
          src:     "assets/meetings/1.2/00-soldering-in-action.jpg",
          alt:     "Two team members soldering the SpaceWings Lucky Wheel kit during Lesson 1.2 — laptop open, soldering iron and handheld fume extractor in use, kit on the work surface.",
          caption: "Two of the team mid-build. Laptop alongside for reference, fume extractor in hand, the Lucky Wheel on the counter, red flush cutters within reach.",
          requiresConsent: true
        },

        recap:
          "Lesson 1.2 was soldering bootcamp — the team's first weekend " +
          "with hot irons in their hands. It ran as three sub-sessions " +
          "across three days because workstations were the bottleneck and " +
          "the kids' schedules were uneven. Before any of the new kids " +
          "touched a kit, Coach John ran Trenton — who had prior soldering " +
          "experience — through a full test build on Thursday June 18, the " +
          "day before the live class. That prep session is where the four " +
          "soldering rules below actually came from. Use an experienced " +
          "student to surface lessons before the new ones make them: that's " +
          "the mentor pattern, and it kept the rest of the weekend clean. " +
          "Friday June 19 brought the first live cohort — Rebecca, Isaac, " +
          "Liam, Maddox, and Tyler — through the full sequence: safety " +
          "brief, general soldering instruction, then practice board on " +
          "the SpaceWings DIY Lucky Wheel (an NE555 + CD4017 spinner that " +
          "lights ten LEDs in sequence). About an hour per board. Iron at " +
          "650°F. Saturday June 20 was a two-person makeup — Evan and " +
          "Rhylan — who split one practice board between them, half the " +
          "components each. Worked fine; it's a viable fallback when " +
          "boards are short, and both walked away able to tell a cold " +
          "joint from a good one, which is the actual point of the " +
          "practice board anyway. Sunday June 21, 3:00–5:15 PM, was the " +
          "full Sunday cohort — Maddox, Frankie, Trenton, Adrian, Isaac, " +
          "Liam, and Luke — seven kids, with three repeaters back for a " +
          "second pass. Sunday added a new block: splicing two wires and " +
          "waterproofing the joint with hot glue and heatshrink, then " +
          "dunking the joints in salt water to test them. We built nine " +
          "joints. Two passed. Seven leaked. The waterproofing-test " +
          "section below has the method, the failure analysis, and the " +
          "four fixes that come out of a 22% first-try pass rate — which " +
          "is exactly what early-season failure is for.",

        byNumbers: [
          { value: "3",      label: "sub-sessions"      },
          { value: "11/12",  label: "unique students"   },
          { value: "~1 hr",  label: "per board"         },
          { value: "2 / 9",  label: "waterproof joints" }
        ],

        safety: [
          "Solder is lead-based. Don't inhale the fumes; wash hands when you're done.",
          "Place a fan to extract or blow fumes away from the student. Direction matters — away, not toward.",
          "The iron tip burns. So do the back of the board and the component leads. Treat both as hot.",
          "Safety glasses on whenever you're snipping leads. Small metal clippings fly off the cutters."
        ],

        decisions: [
          "Coach John runs the safety brief and the general soldering instruction at each session — the standing pattern.",
          "Trenton handles pre-class test builds on new kits, to surface lessons before the rest of the team touches an iron.",
          "Iron temperature standardized at 650°F for the team's practice kits.",
          "Split the class across multiple sessions when workstations or schedules are the bottleneck.",
          "Splitting one practice board between two students works as a fallback when boards are short — Evan and Rhylan did it Saturday.",
          "Salt-water + multimeter is the team's standard waterproof test going forward. Infinite resistance means sealed; anything finite is a leak path.",
          "Safety brief at the start of every soldering session. No exceptions."
        ],

        actionItems: [
          { item: "Rebuild the seven failed waterproof joints with the new technique; re-run the salt-water test", owner: "Sunday cohort", due: "by 1.3" },
          { item: "Bring kits and components to next class (Lesson 1.3)",                                          owner: "Advisor",        due: "6/28"  },
          { item: "Set the date for officer elections (deferred from 1.1, discussed Sunday)",                      owner: "Advisor",        due: "by 1.3" },
          { item: "Practice soldering at home if a station is available",                                          owner: "Every student",  due: "ongoing" },
          { item: "Add Saturday + Sunday session photos to the photo log once parent releases are returned",       owner: "Photographer",   due: "when consent is in" }
        ],

        learned: [
          "Work from the inside of the board outward. Anything you've already soldered is a vertical obstacle to whatever you solder next. Building outward keeps your iron's path open.",
          "Small components before big ones. Resistors and low-profile caps first; headers and tall connectors last. Same reasoning — don't build a wall you have to reach over.",
          "Right-handed solderers do multi-pin parts left to right. Left-handed, right to left. Your hand and iron drag across joints you just made if you go the other direction, and heat plus motion is exactly how a clean joint becomes a smeared one.",
          "Solder the battery pack last. The pack hangs off the PCB and blocks access to every joint underneath it. Mount it after everything else is on the board and your workspace stays clean to the end."
        ],

        waterproofing: [
          "Test method: 2 cups of warm water with 2 tablespoons of sea salt dissolved in. Multimeter set to 2000k ohms. One probe in the water, one on the open end of the wire. Submerge the joint. Infinite resistance means it's sealed. Anything finite is a leak path.",
          "Result on the first try: 2 of 9 joints passed. 22 percent. Most leaked.",
          "Root cause: water seeped in through improperly heatshrunk wires — wires poking out the ends, the heatshrink not tight enough, the seal not continuous.",
          "Fix 1 — Use longer heatshrinks so the seal extends past the joint on both sides.",
          "Fix 2 — Hot-glue underneath the heatshrink before shrinking. The glue fills voids the heatshrink can't close on its own.",
          "Fix 3 — Clip the poking wires flush before sealing. A poking wire is a leak path.",
          "Fix 4 — If the heatshrink is too big, layer a smaller one underneath to tighten the seal."
        ],

        studentOutcomes: [
          "The importance of polarity in certain components — diodes, electrolytic caps, transistors — and the habit of slowing down to check it before you commit the joint.",
          "Soldering technique, equipment care, and the safety habits that go with hot tools and lead-based material. Including the visual and tactile difference between a cold joint and a good one — dull versus shiny, rough versus smooth.",
          "Waterproofing is iteration. The 2-of-9 first-try pass rate isn't a failure of the team — it's how you find out where the real seal-points are. The four fixes above become the standard procedure going forward."
        ],

        nextWeek:
          "Class 1.3 — Kit Unboxing and First Electronics — is Sunday June 28. Kits get opened, " +
          "components get identified, and we move from practice joints to circuits that actually " +
          "do something. The Sunday cohort also owes a rebuild of the seven failed waterproof " +
          "joints with the new technique and a re-run of the salt-water test. Closed-toe shoes " +
          "still required.",

        photos: [
          { src: "assets/meetings/1.2/01-spacewings-lucky-wheel-kit.jpg",      caption: "The SpaceWings DIY Lucky Wheel kit — the weekend's project, in the bag." },
          { src: "assets/meetings/1.2/02-schematic-and-instructions.jpg",     caption: "The included instruction sheet — circuit schematic, parameters, and how the spinner plays." }
        ],

        photoConsentPending: false,

        pdfUrl: "assets/meetings/1.2/meeting-note.pdf"
      },
      {
        week:  "1.1",
        date:  "Sunday, June 14, 2026",
        time:  "3:00 PM",
        theme: "Kickoff — Forming the Company",

        recap:
          "Eleven of us crammed into Mr. Holcombe's living room tonight for the " +
          "first meeting of the season — twelve on the roster, one absent. " +
          "We watched the slide deck on the TV with the family dog stretched " +
          "out on the rug like he was officially on the roster too. We learned " +
          "what the MATE ROV Competition actually is, what it means to be a " +
          "RANGER-class company (not a \"club\"), and that the season ends at " +
          "our 2027 MATE ROV regional next April — which regional we land at " +
          "gets sorted when registrations shake out. Not all of us " +
          "will be the six standing on the pool deck that day — but most of " +
          "the room came in wanting to do this, which is a good way to start. " +
          "We didn't elect officers tonight. We're each taking a week to think " +
          "about which role fits us and coming back with a first and second choice.",

        byNumbers: [
          { value: "2",      label: "hours"           },
          { value: "11/12",  label: "students"        },
          { value: "$0",     label: "spent"           },
          { value: "1",      label: "dog on the rug"  }
        ],

        todaysRoles: [
          { role: "Notetaker",      holder: "Mentor-led" },
          { role: "Safety Briefer", holder: "Mentor-led" },
          { role: "Photographer",   holder: "Mentor-led" },
          { role: "Timekeeper",     holder: "Mentor-led" }
        ],
        rolesNote: "Rotation starts at Meeting 1.2.",

        decisions: [
          "Meeting cadence: 3 PM on Sundays, with extra weekday meetings when the season calls for them.",
          "Officer elections deferred to Meeting 1.2.",
          "Mechanical Lead will be broken into sub-areas (frame, manipulator, payload).",
          "Considering Deputies for some officer roles — second-in-command and backup. Final structure to be decided once the officers are elected.",
          "Software Lead starts studying prior teams' open-source code right away.",
          "Spiral development is our build philosophy. We build, test, fix, repeat — we don't wait for a perfect plan and then build once.",
          "The team Drive is set up with a project notebook and a photo log.",
          "Parent photo-consent forms are required before any team photo goes on the public site."
        ],

        actionItems: [
          { item: "Distribute parent photo-consent forms",                                 owner: "Advisor",                       due: "by 1.2" },
          { item: "Bring first + second choice for officer role",                          owner: "Every student",                 due: "1.2"     },
          { item: "Watch MATE pre-watch: \"Using Tools and Soldering & Waterproofing\"",   owner: "Every student",                 due: "by 1.2" },
          { item: "Bring closed-toe shoes (soldering irons on the table)",                 owner: "Every student",                 due: "1.2"     },
          { item: "Update team document links on the website",                             owner: "Advisor",                       due: "by 1.2" },
          { item: "Define Mechanical Lead sub-roles",                                      owner: "CEO + Mech Lead (post-election)", due: "by 1.3" },
          { item: "Define Deputy structure across all officer roles",                      owner: "CEO (post-election)",           due: "by 1.3" }
        ],

        learned: [
          "A RANGER company is bigger than \"a school club.\" It has a budget, a schedule, deputies, and people who own real jobs.",
          "Spiral development beats waterfall. We're going to build, test, fix, repeat — not draft a perfect plan and then build once.",
          "Safety briefs aren't theater. Real engineering and dive teams do them before every job, so we do them before every meeting. We start the habit now, while the irons are still cold."
        ],

        nextWeek:
          "Next Sunday at 3 PM is Class 1.2 — Soldering Bootcamp. Closed-toe " +
          "shoes required — soldering irons are on the table for the first " +
          "time. Officer elections happen at the top of the meeting, so we " +
          "each show up with a first and second choice ready.",

        photos: [
          { src: "assets/meetings/1.1/01-the-cast-assembles.jpg",      caption: "Meeting 1, slide 1. The cast assembles." },
          { src: "assets/meetings/1.1/02-room-ran-out-of-couch.jpg",   caption: "Twelve students showed up. The room ran out of couch." }
        ],

        photoConsentPending: true,

        /* One-page printable PDF version of this entry — generated by
           the build_meeting_note_pdf.py script and committed to the repo.
           Renders as a small "Download PDF" link in the corner of the
           field-note card. */
        pdfUrl: "assets/meetings/1.1/meeting-note.pdf"
      }
    ],

    /* ---- 5c. WEEKLY ROTATING DUTIES ----
       Four jobs every meeting that rotate across the team — not elected
       positions, just assignments made at the start of each meeting so
       every student touches every duty. Render as small chips below the
       elected officer cards. */
    weeklyDuties: [
      {
        role:   "Notetaker / Scribe",
        detail: "Captures meeting minutes — decisions, action items, blockers — and files them with the CFO for the engineering notebook."
      },
      {
        role:   "Safety Briefer",
        detail: "Delivers the standing four-question safety brief at the start of the meeting."
      },
      {
        role:   "Photographer",
        detail: "Captures photos and short videos of the meeting for the engineering notebook and the marketing display."
      },
      {
        role:   "Timekeeper",
        detail: "Keeps the meeting on the agenda's clock — calls the time at each block change."
      }
    ],

    /* ---- 7. FUNDING — the sponsor meter & wish list ----
       • raised / goal / asOf drive the progress meter.
       • Update "raised" and "asOf" as money comes in.
       • Set an item's funded: to true once it's covered (it gets
         a "Funded" check on the site). */
    funding: {
      raised: 6000,                 // ← update as money comes in
      goal:   10150,
      asOf:   "June 2026",          // ← date the raised figure is current as of

      intro:
        "We've raised $6,000 toward a $10,150 season. Here's the thing about " +
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

      contactEmail: "saywattrobotics2022@gmail.com",   // ← CONFIRM the real sponsor contact

      thankYou:
        "To everyone who's already chipped in — thank you. You're the reason " +
        "these teams exist. The students are doing the engineering; you're " +
        "making the engineering possible.",

      tiers: [
        {
          label: "Tier 1 — Gets the team to the competition  ·  $1,650",
          items: [
            {
              name: "RANGER competition registration", cost: "$450", unit: "",
              funded: true,
              rationale:
                "The team's entry fee for our 2027 MATE ROV regional. " +
                "No registration, no competition — this is the first dollar the " +
                "season needs."
            },
            {
              name: "Regional travel & lodging", cost: "$1,400", unit: "",
              funded: true,
              rationale:
                "Covers transport, two nights' lodging, and meals for the " +
                "students and chaperones to wherever our 2027 MATE ROV " +
                "regional is assigned. Every other item on this list builds " +
                "the robot. This is the one that gets the robot, and the team, " +
                "to the water. Without it, a season of work never gets scored." 
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
              funded: true,
              rationale:
                "A backup thruster and a stock of spare props. Thrusters take the " +
                "most abuse on the robot, and a dead one mid-competition ends the " +
                "run. The spare turns a season-ender into a five-minute swap."
            },
            {
              name: "ROV frame & structure", cost: "$450", unit: "",
              funded: true,
              rationale:
                "The aluminum extrusion, HDPE plate, and 316 stainless hardware " +
                "the whole robot is built on. Marine-grade stainless is non-" +
                "negotiable — ordinary steel rusts through in a single season of " +
                "pool water."
            },
            {
              name: "12 V battery system", cost: "$300", unit: "",
              funded: true,
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
              funded: true,
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
        dates:   "August 16, 2026",
        status:  "completed",
        summary: "The BIOGLOW season is revealed. The team reads the challenge, " +
                 "assigns roles, and reviews the FIRST Core Values together.",
        weeks: [
          {
            label:  "Week 1",
            dates:  "August 16, 2026",
            theme:  "BIOGLOW season reveal",
            lessons: [
              "Watching the BIOGLOW season launch",
              "Reading the challenge and missions as a team",
              "Reviewing the FIRST Core Values",
              "Team member introductions"
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
      { date: "2026-08-16", title: "FLL team kickoff meeting", type: "Meeting", location: "Team workspace" },
	  { date: "2026-08-23", title: "Team Finish Mission Model Builds", type: "Meeting", location: "Team workspace" },
	  { date: "2026-08-30", title: "Innovation Project Brainstorming & Robot Design Lessons", type: "Meeting", location "Team workspace" }
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

      contactEmail: "saywattrobotics2022@gmail.com",

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
