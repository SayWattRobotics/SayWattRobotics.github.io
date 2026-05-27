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
      name: "AUVSI",
      url:  "https://www.auvsipathfinder.org/",
      logo: "sponsors/AUVSI_Pathfinder.png"
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
        dates:   "Mid-June – July 2026 · 6 weeks",
        status:  "active",
        summary: "The goal isn't a competition ROV. It's a team that exists, a starter " +
                 "ROV in the water, and kids who have soldered something.",
        weeks: [
          {
            label: "Kickoff",
            theme: "Forming the company",
            lessons: [
              "Overview of the MATE ROV Competition and the RANGER class",
              "Assigning the six company roles — CEO, CFO, and the mechanical, electrical, software, and communications leads",
              "Walking the 2026–2027 season timeline and its six phases",
              "Setting the safety culture — every meeting opens with a safety brief",
              "Starting the community-outreach log on day one"
            ],
            resources: [
              { label: "Week 1 slide deck", url: "Classes/Phase%201/ROV-Week-01-Kickoff.pptx" },
              { label: "MATE ROV Competition", url: "https://materovcompetition.org" }
            ]
          },
          {
            label: "Soldering",
            theme: "Soldering bootcamp",
            lessons: [
              "Reading a basic wiring diagram",
              "Through-hole soldering practice on a junk board",
              "Tinning wires and making a clean, strong joint",
              "Heat-shrink and strain-relief basics"
            ],
            resources: [
              { label: "Adafruit soldering guide", url: "https://learn.adafruit.com/adafruit-guide-excellent-soldering" }
            ]
          },
          {
            label: "Starter ROV",
            theme: "Build the SeaMATE Triggerfish",
            lessons: [
              "Assembling the SeaMATE Triggerfish kit — the team's first ROV",
              "Wiring the 12 V sealed lead-acid battery, charger, and Powerpole leads (the kit ships without a power source)",
              "Getting every team member in the pool by week three"
            ]
          },
          {
            label: "Electronics",
            theme: "Electronics & the project notebook",
            lessons: [
              "Multimeter basics — measuring voltage, continuity, and current",
              "Circuits, fuses, and full-load-amp measurement",
              "The project-notebook session — how the team records every decision"
            ]
          },
          {
            label: "Waterproofing",
            theme: "Waterproofing capsule exercise",
            lessons: [
              "How water pressure increases with depth",
              "Designing a sealed PVC capsule with a single cable penetration",
              "Drop, recover, and check the paper towel inside — then iterate",
              "Passing three consecutive dry dives — the foundation skill for the Phase 2 float"
            ]
          },
          {
            label: "Setup",
            theme: "Lock in the season",
            lessons: [
              "Confirming pool access for the year, including one deep-water host",
              "The parallel track — registration, waivers, insurance, and fundraising underway"
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
            theme: "Commit to the competition vehicle",
            lessons: [
              "Six Blue Robotics T200 thrusters — brushless, reliable, and reusable across seasons",
              "A pre-terminated competition tether — faulty hand-made terminations are a top failure mode for new teams",
              "A sealed Blue Robotics enclosure, an aluminum T-slot frame, and a regulated topside power supply",
              "A go / no-go on the thrusters in the fall — the full T200 set if funding is in hand, bilge-pump conversions if not"
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
            theme: "The topside bench replica",
            lessons: [
              "Building a bench replica that mirrors the ROV electronics",
              "Letting software develop in parallel while the real vehicle stays safe"
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
            theme: "Start the safety track",
            lessons: [
              "Beginning the fluid-power quiz",
              "Beginning the safety pre-inspection tracking"
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
      { date: "2026-06-15", title: "Season kickoff meeting",        type: "Meeting",     location: "Team workspace" },
      { date: "2026-06-22", title: "Soldering bootcamp",            type: "Workshop",    location: "Team workspace" },
      { date: "2026-06-29", title: "Waterproofing exercise",        type: "Workshop",    location: "Team workspace" },
      { date: "2026-11-01", title: "2027 competition manual drops", type: "Milestone",   location: "https://materovcompetition.org/2026" },
      { date: "2027-04-23", title: "Regional Competition",  type: "Competition", location: "TBD" }
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
      raised: 4500,                 // ← update as money comes in
      goal:   9600,
      asOf:   "May 2026",           // ← date the raised figure is current as of

      intro:
        "We've raised $4,500 toward a $9,600 season. Here's the thing about " +
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
          label: "Tier 1 — Gets the team to the competition",
          items: [
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
          label: "Tier 2 — Makes the team competitive",
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
              name: "Pneumatic manipulator", cost: "$175", unit: "",
              funded: false,
              rationale:
                "The robot's gripper is the tool that does the scored tasks — " +
                "collecting samples, turning valves, recovering objects off the " +
                "seafloor. A precision pneumatic gripper instead of a fixed hook " +
                "is the difference between points earned and points missed."
            },
            {
              name: "Pre-terminated tether", cost: "$350", unit: "",
              funded: false,
              rationale:
                "The tether is the robot's lifeline — power and data down a " +
                "single cable. Bad hand-made cable connections are one of the " +
                "most common ways a new team's run fails. A professionally " +
                "terminated tether removes that failure mode, and it gets reused " +
                "every season."
            }
          ]
        },
        {
          label: "Tier 3 — Stretch goals",
          items: [
            {
              name: "Sealed electronics enclosure", cost: "$250", unit: "",
              funded: false,
              rationale:
                "A professional watertight housing for the electronics. It " +
                "replaces a hand-built one, protects the most expensive parts on " +
                "the robot, and saves the team weeks of chasing leaks."
            },
            {
              name: "Competition spares & reliability kit", cost: "$200",
              unit: "", funded: false,
              rationale:
                "Backup controllers, seals, connectors, and adhesives the team " +
                "carries to the event. Something always breaks on the deck. This " +
                "kit is the difference between a five-minute fix and a forfeited " +
                "run."
            },
            {
              name: "Upgraded camera & vision system", cost: "$120", unit: "",
              funded: false,
              rationale:
                "The pilot flies the robot entirely through its cameras. Better " +
                "underwater vision means more completed tasks — you can't grab " +
                "what you can't see."
            },
            {
              name: "Team jerseys", cost: "$160", unit: "", funded: false,
              rationale:
                "Competition uniforms with sponsor logos on them. A visible " +
                "thank-you that travels everywhere the team does."
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
        "founded on — is mapping out its season budget now. Support is " +
        "welcome today; the detailed plan lands here soon.",

      cta:
        "Want to support the FIRST LEGO League team? Get in touch — every " +
        "level of support is welcome.",

      taxNote:
        "Say Watt Robotics is a registered 501(c)(3) non-profit — every " +
        "sponsorship is fully tax-deductible.",

      contactEmail: "contact@saywattrobotics.org",

      thankYou:
        "Thank you to everyone supporting our FIRST LEGO League team.",

      tiers: [
        {
          label: "Tier 1 — Essentials",
          items: [
            {
              name: "Registration & season fees", cost: "$500", unit: "",
              funded: false,
              rationale:
                "Placeholder rationale — describe what this covers and why it " +
                "matters to the team."
            }
          ]
        }
      ],

      aspirational: {
        name: "Championship travel", cost: "$1,000", funded: false,
        rationale:
          "Placeholder — describe the team's stretch goal here."
      }
    }

  }

};
