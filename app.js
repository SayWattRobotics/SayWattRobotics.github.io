/* ============================================================
   Say Watt Robotics — site engine
   You should not need to edit this file. All content is in content.js.
   ============================================================ */

(function () {
  "use strict";

  const SITE = window.SITE || {};
  const ORG = SITE.org || {};
  const SPONSORS = SITE.sponsors || [];

  /* which team page are we on? set by <body data-team="..."> */
  const PAGE = (document.body && document.body.getAttribute("data-team")) || "rov";
  const S = SITE[PAGE] || {};

  const $ = (id) => document.getElementById(id);

  /* ---------- helpers ---------- */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function highlight(text, query) {
    const safe = esc(text);
    if (!query) return safe;
    const re = new RegExp("(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- nav: logo, title, team tabs ---------- */
  function renderChrome() {
    const orgName = ORG.name || "Say Watt Robotics";
    const teamName = (S.team && S.team.name) || orgName;
    document.title = teamName;

    /* logo — the Say Watt Robotics comic emblem. Shows the club name
       as text until the emblem image is confirmed to load. */
    const logo = document.querySelector("[data-logo]");
    if (logo) {
      logo.textContent = orgName;
      const probe = new Image();
      probe.onload = function () {
        logo.textContent = "";
        const img = document.createElement("img");
        img.src = "assets/logo-emblem.png";
        img.alt = orgName;
        img.className = "logo-emblem";
        logo.appendChild(img);
        document.body.classList.add("art-ready");
      };
      probe.src = "assets/logo-emblem.png";
    }

    /* highlight the active team tab */
    document.querySelectorAll("[data-team-tab]").forEach((tab) => {
      if (tab.getAttribute("data-team-tab") === PAGE) tab.classList.add("active");
    });

    /* nav "Donate" button — point it at the configured destination */
    const donate = document.querySelector("[data-donate]");
    if (donate) {
      const u = ORG.donateUrl || "#sponsors";
      donate.setAttribute("href", u);
      if (/^https?:/i.test(u)) { donate.target = "_blank"; donate.rel = "noopener"; }
    }

    /* mobile menu */
    const toggle = $("navToggle"), links = $("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
      links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => links.classList.remove("open")));
    }
  }

  /* ---------- hero ---------- */
  function renderHero() {
    const t = S.team || {};
    const meta = (t.facts || []).map((f) => `<span>${esc(f)}</span>`).join("");
    $("hero").innerHTML = `
      <div class="wrap">
        ${t.season ? `<p class="hero-eyebrow">${esc(t.season)}</p>` : ""}
        <h1>${esc(t.heroHeadline || t.name || "")}</h1>
        ${t.heroSub ? `<p class="hero-sub">${esc(t.heroSub)}</p>` : ""}
        ${meta ? `<div class="hero-meta">${meta}</div>` : ""}
        <a class="hero-cta" href="#curriculum">Explore the curriculum</a>
        <div class="hero-art"></div>
      </div>`;

    /* hero illustration — ROV on the ROV page, brick robot on the FLL
       page. Shown only once the image file is confirmed to load. */
    const artFile = "assets/" +
      (PAGE === "fll" ? "lego-robot-illustration" : "rov-illustration") + ".png";
    const holder = $("hero").querySelector(".hero-art");
    const probe = new Image();
    probe.onload = function () {
      const img = document.createElement("img");
      img.src = artFile;
      img.alt = "";
      holder.appendChild(img);
      holder.classList.add("on");
    };
    probe.src = artFile;
  }

  /* ---------- curriculum: phases / weeks / lessons ---------- */
  const phases = S.phases || [];

  function weekMatches(week, q) {
    if (!q) return true;
    if ((week.theme || "").toLowerCase().includes(q)) return true;
    if ((week.dates || "").toLowerCase().includes(q)) return true;
    return (week.lessons || []).some((l) => l.toLowerCase().includes(q));
  }
  function phaseMatches(phase, q) {
    if (!q) return true;
    if ((phase.name || "").toLowerCase().includes(q)) return true;
    if ((phase.summary || "").toLowerCase().includes(q)) return true;
    return (phase.weeks || []).some((w) => weekMatches(w, q));
  }

  function buildWeek(week, q, forceOpen) {
    const themeMatched = q && (week.theme || "").toLowerCase().includes(q);
    const filtered = (week.lessons || [])
      .filter((l) => !q || l.toLowerCase().includes(q))
      .map((l) => `<li>${highlight(l, q)}</li>`).join("");
    const all = (week.lessons || []).map((l) => `<li>${highlight(l, q)}</li>`).join("");
    const list = (q && !themeMatched) ? filtered : all;

    const res = (week.resources || [])
      .map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)}</a>`)
      .join("");

    const week_el = el("div", "week");
    week_el.id = "week-" + String(week.label || "").replace(/\./g, "-");
    if (forceOpen) week_el.classList.add("open");
    week_el.innerHTML = `
      <div class="week-head">
        <span class="week-label">${esc(week.label || "")}</span>
        <span class="week-theme">${highlight(week.theme || "", q)}</span>
        ${week.dates ? `<span class="week-dates">${esc(week.dates)}</span>` : ""}
        <span class="chevron"></span>
      </div>
      <div class="collapse"><div class="collapse-inner"><div class="week-body">
        <ul class="lesson-list">${list || '<li style="color:var(--ink-faint)">Lesson notes coming soon.</li>'}</ul>
        ${res ? `<div class="week-resources">${res}</div>` : ""}
      </div></div></div>`;
    week_el.querySelector(".week-head").addEventListener("click", () =>
      week_el.classList.toggle("open"));
    return week_el;
  }

  function buildPhase(phase, idx, q) {
    const status = (phase.status || "upcoming").toLowerCase();
    const statusLabel = { complete: "Complete", active: "In progress", upcoming: "Upcoming" }[status] || "Upcoming";
    const open = !!q && phaseMatches(phase, q);

    const phase_el = el("div", "phase");
    if (open) phase_el.classList.add("open");
    phase_el.innerHTML = `
      <div class="phase-head">
        <span class="phase-num">${idx + 1}</span>
        <span class="phase-titlewrap">
          <span class="phase-title">${highlight(phase.name || "", q)}</span>
          ${phase.dates ? `<span class="phase-dates">${esc(phase.dates)}</span>` : ""}
        </span>
        <span class="phase-status status-${status}">${statusLabel}</span>
        <span class="chevron"></span>
      </div>
      <div class="collapse"><div class="collapse-inner"><div class="phase-body">
        ${phase.summary ? `<p class="phase-summary">${highlight(phase.summary, q)}</p>` : ""}
        ${(phase.resources && phase.resources.length) ? `<div class="week-resources phase-resources">${phase.resources.map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.label)}</a>`).join("")}</div>` : ""}
        <div class="week-list"></div>
      </div></div></div>`;

    const wlist = phase_el.querySelector(".week-list");
    const weeks = phase.weeks || [];
    const visible = q ? weeks.filter((w) => weekMatches(w, q) || phaseMatches(phase, q)) : weeks;
    if (!visible.length) {
      wlist.appendChild(el("p", null,
        '<span style="font-size:14px;color:var(--ink-faint)">Weekly lessons will appear here as the phase begins.</span>'));
    }
    visible.forEach((w) => {
      const forceOpen = !!q && weekMatches(w, q);
      wlist.appendChild(buildWeek(w, q, forceOpen));
    });

    phase_el.querySelector(".phase-head").addEventListener("click", () =>
      phase_el.classList.toggle("open"));
    return phase_el;
  }

  function renderPhases(q) {
    const host = $("phaseList");
    host.innerHTML = "";
    const query = (q || "").trim().toLowerCase();
    const matched = phases.filter((p) => phaseMatches(p, query));
    (query ? matched : phases).forEach((p) => {
      host.appendChild(buildPhase(p, phases.indexOf(p), query));
    });
    $("noResults").hidden = !(query && matched.length === 0);
  }

  function renderCurriculum() {
    if (S.curriculumLede) $("curriculumLede").textContent = S.curriculumLede;
    renderPhases("");
    const input = $("curriculumSearch"), clear = $("searchClear");
    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        renderPhases(input.value);
        clear.hidden = !input.value;
      }, 120);
    });
    clear.addEventListener("click", () => {
      input.value = ""; clear.hidden = true; renderPhases(""); input.focus();
    });
  }

  /* ---------- season plan link ---------- */
  function renderRoadmap() {
    const host = $("roadmap");
    const R = S.roadmap;
    if (!host || !R || !R.pdf) return;
    host.innerHTML =
      '<a class="plan-link" href="' + esc(R.pdf) + '" target="_blank" rel="noopener">' +
        '<span class="plan-badge">PDF</span>' +
        '<span class="plan-text">' +
          '<span class="plan-title">' + esc(R.title || "Season plan") + "</span>" +
          (R.blurb ? '<span class="plan-blurb">' + esc(R.blurb) + "</span>" : "") +
        "</span>" +
        '<span class="plan-arrow" aria-hidden="true">&rarr;</span>' +
      "</a>";
  }

  /* ---------- calendar ---------- */
  function renderCalendar() {
    const host = $("calendarList");
    const items = (S.calendar || []).slice().sort((a, b) =>
      String(a.date).localeCompare(String(b.date)));
    const todayISO = new Date().toISOString().slice(0, 10);
    let nextFlagged = false;

    if (!items.length) {
      host.innerHTML = '<p style="color:var(--ink-faint)">No events scheduled yet.</p>';
      return;
    }
    items.forEach((ev) => {
      const isNext = !nextFlagged && String(ev.date) >= todayISO;
      if (isNext) nextFlagged = true;
      const d = new Date(ev.date + "T00:00:00");
      const pretty = isNaN(d) ? esc(ev.date) :
        d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      const item = el("div", "cal-item" + (isNext ? " next" : ""));
      // Wrap the title in an <a> when a url is present. Hash-links scroll
      // in-page; external URLs open in a new tab.
      const titleHtml = ev.url
        ? '<a class="cal-title cal-title-link" href="' + esc(ev.url) + '"' +
            (/^https?:/i.test(ev.url) ? ' target="_blank" rel="noopener"' : "") +
          '>' + esc(ev.title) + " &rarr;</a>"
        : '<span class="cal-title">' + esc(ev.title) + "</span>";
      item.innerHTML = `
        <span class="cal-date">${pretty}</span>
        <span class="cal-main">
          ${isNext ? '<span class="cal-next-flag">NEXT UP</span><br>' : ""}
          ${titleHtml}
          ${ev.location ? `<div class="cal-meta">${esc(ev.location)}</div>` : ""}
        </span>
        ${ev.type ? `<span class="cal-tag">${esc(ev.type)}</span>` : ""}`;
      // When the deep link points to a curriculum week, force that week
      // open before scrolling so the user lands on the expanded content.
      if (ev.url && ev.url.charAt(0) === "#") {
        const link = item.querySelector(".cal-title-link");
        if (link) link.addEventListener("click", () => {
          const target = document.getElementById(ev.url.slice(1));
          if (target && target.classList && !target.classList.contains("open")) {
            target.classList.add("open");
            // Also open the parent phase if applicable so the week is visible.
            const phase = target.closest(".phase");
            if (phase && !phase.classList.contains("open")) phase.classList.add("open");
          }
        });
      }
      host.appendChild(item);
    });
  }

  /* ---------- resources ---------- */
  function renderResources() {
    const host = $("resourceList");
    (S.resources || []).forEach((group) => {
      const items = (group.items || []).map((it) => {
        const inner = `
          <span class="res-title">${esc(it.title)}${it.url ? '<span class="arrow">&nbsp;&rarr;</span>' : ""}</span>
          ${it.description ? `<span class="res-desc">${esc(it.description)}</span>` : ""}`;
        return it.url
          ? `<li><a href="${esc(it.url)}" target="_blank" rel="noopener">${inner}</a></li>`
          : `<li><span class="res-static">${inner}</span></li>`;
      }).join("");
      host.appendChild(el("div", "resource-card",
        `<h3>${esc(group.category)}</h3><ul>${items}</ul>`));
    });
  }

  /* ---------- roster ---------- */
  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2)
      .map((w) => w[0].toUpperCase()).join("");
  }
  function renderRoster() {
    const host = $("rosterList");
    if (!host) return;
    (S.roster || []).forEach((m) => {
      const duties = m.duties || [];
      const has = duties.length > 0;
      const card = el("div", "roster-card" + (has ? " has-duties" : ""));
      card.innerHTML =
        '<div class="roster-avatar">' + esc(initials(m.name || "?")) + "</div>" +
        '<div class="roster-name">' + esc(m.name || "") + "</div>" +
        (m.role ? '<div class="roster-role">' + esc(m.role) + "</div>" : "") +
        (m.detail ? '<div class="roster-detail">' + esc(m.detail) + "</div>" : "") +
        (has
          ? '<div class="roster-toggle">' +
              "<span>What this role does</span><span class=\"chevron\"></span>" +
            "</div>" +
            '<div class="collapse"><div class="collapse-inner">' +
              '<ul class="roster-duties">' +
                duties.map((d) => "<li>" + esc(d) + "</li>").join("") +
              "</ul>" +
            "</div></div>"
          : "");
      if (has) {
        card.addEventListener("click", () => card.classList.toggle("open"));
      }
      host.appendChild(card);
    });

    /* Weekly rotating duties — chip row beneath the elected officer cards.
       Spans the full grid via .weekly-duties' grid-column: 1 / -1. */
    const duties = S.weeklyDuties || [];
    if (duties.length) {
      const block = el("div", "weekly-duties");
      block.innerHTML =
        '<p class="weekly-duties-eyebrow">Each week, every student rotates through</p>' +
        '<div class="weekly-duties-chips">' +
          duties.map((d) =>
            '<div class="weekly-duty">' +
              '<div class="weekly-duty-role">' + esc(d.role || "") + "</div>" +
              (d.detail ? '<div class="weekly-duty-detail">' + esc(d.detail) + "</div>" : "") +
            "</div>"
          ).join("") +
        "</div>";
      host.appendChild(block);
    }
  }

  /* ---------- field log (meeting notes) ---------- */
  function renderFieldLog() {
    const host = $("fieldLogList");
    if (!host) return;
    const notes = (S.meetingNotes || []).slice();
    if (!notes.length) {
      host.innerHTML = '<p style="color:var(--ink-faint)">' +
        'Meeting notes will appear here, in the kids\' own voice, after each Sunday meeting.' +
      '</p>';
      return;
    }

    notes.forEach((n, idx) => {
      const card = el("article", "field-note" + (idx === 0 ? " open" : ""));
      card.id = "field-log-" + String(n.week || "").replace(/\./g, "-");

      // Header band — always visible; click to toggle the body
      const header =
        '<button type="button" class="field-note-head">' +
          '<div class="field-note-head-text">' +
            (n.week  ? '<span class="field-note-week">WEEK ' + esc(n.week) + '</span>'  : "") +
            (n.theme ? '<h3 class="field-note-theme">'  + esc(n.theme) + '</h3>' : "") +
            '<div class="field-note-meta">' +
              (n.date ? esc(n.date) : "") +
              (n.time ? '  ·  ' + esc(n.time) : "") +
            "</div>" +
          "</div>" +
          '<span class="chevron" aria-hidden="true"></span>' +
        "</button>";

      // Recap prose
      const recap = n.recap ? '<p class="field-note-recap">' + esc(n.recap) + "</p>" : "";

      // By the numbers chip row
      const stats = (n.byNumbers && n.byNumbers.length)
        ? '<div class="field-note-stats">' +
            n.byNumbers.map((s) =>
              '<div class="field-stat">' +
                '<div class="field-stat-value">' + esc(s.value || "") + "</div>" +
                '<div class="field-stat-label">' + esc(s.label || "") + "</div>" +
              "</div>"
            ).join("") +
          "</div>"
        : "";

      // Today's roles
      const roles = (n.todaysRoles && n.todaysRoles.length)
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">Today\'s roles</h4>' +
            '<div class="field-roles-grid">' +
              n.todaysRoles.map((r) =>
                '<div class="field-role">' +
                  '<div class="field-role-role">' + esc(r.role || "") + "</div>" +
                  '<div class="field-role-holder">' + esc(r.holder || "—") + "</div>" +
                "</div>"
              ).join("") +
            "</div>" +
            (n.rolesNote ? '<p class="field-note-aside">' + esc(n.rolesNote) + "</p>" : "") +
          "</div>"
        : "";

      // Decisions list
      const decisions = (n.decisions && n.decisions.length)
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">Decisions made</h4>' +
            '<ul class="field-bullets">' +
              n.decisions.map((d) => "<li>" + esc(d) + "</li>").join("") +
            "</ul>" +
          "</div>"
        : "";

      // Action items table
      const actions = (n.actionItems && n.actionItems.length)
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">Action items</h4>' +
            '<table class="field-actions">' +
              '<thead><tr><th>Item</th><th>Owner</th><th>Due</th></tr></thead>' +
              '<tbody>' +
                n.actionItems.map((a) =>
                  "<tr>" +
                    "<td>" + esc(a.item  || "") + "</td>" +
                    "<td>" + esc(a.owner || "") + "</td>" +
                    "<td>" + esc(a.due   || "") + "</td>" +
                  "</tr>"
                ).join("") +
              "</tbody>" +
            "</table>" +
          "</div>"
        : "";

      // What we learned
      const learned = (n.learned && n.learned.length)
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">What we learned</h4>' +
            '<ul class="field-bullets">' +
              n.learned.map((l) => "<li>" + esc(l) + "</li>").join("") +
            "</ul>" +
          "</div>"
        : "";

      // Looking ahead
      const ahead = n.nextWeek
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">Looking ahead</h4>' +
            '<p class="field-note-ahead">' + esc(n.nextWeek) + "</p>" +
          "</div>"
        : "";

      // Photos — only render if consent is NOT pending
      const photos = (n.photos && n.photos.length && !n.photoConsentPending)
        ? '<div class="field-note-section">' +
            '<h4 class="field-note-eyebrow">Photos</h4>' +
            '<div class="field-photos">' +
              n.photos.map((p) =>
                '<figure class="field-photo">' +
                  '<img src="' + esc(p.src || "") + '" alt="' + esc(p.caption || "") + '" />' +
                  (p.caption ? '<figcaption>' + esc(p.caption) + "</figcaption>" : "") +
                "</figure>"
              ).join("") +
            "</div>" +
          "</div>"
        : (n.photos && n.photos.length && n.photoConsentPending
            ? '<div class="field-note-section field-photos-pending">' +
                '<h4 class="field-note-eyebrow">Photos</h4>' +
                '<p class="field-note-aside">Photos held until every student in frame has a signed photo-release form on file.</p>' +
              "</div>"
            : "");

      // Quiet sponsor row at the bottom
      const sponsorRow = SPONSORS && SPONSORS.length
        ? '<div class="field-note-sponsors">' +
            '<span class="field-note-sponsors-label">Made possible by</span>' +
            '<div class="field-note-sponsors-row" id="field-sponsors-' + esc(n.week || "") + '"></div>' +
          "</div>"
        : "";

      // Body wrapped in the standard sliding .collapse container so the
      // open/closed transition matches the curriculum + roster accordions.
      const body =
        '<div class="collapse"><div class="collapse-inner field-note-body">' +
          recap + stats + roles + decisions + actions + learned + ahead + photos + sponsorRow +
        "</div></div>";

      card.innerHTML = header + body;
      host.appendChild(card);

      // Click the header to toggle the body.
      const head = card.querySelector(".field-note-head");
      if (head) head.addEventListener("click", () => card.classList.toggle("open"));

      // Populate sponsor row with small images, falling back to text-only.
      const row = card.querySelector(".field-note-sponsors-row");
      if (row) {
        SPONSORS.forEach((s) => {
          const a = document.createElement("a");
          a.className = "field-sponsor";
          a.href = s.url || "#";
          if (s.url) { a.target = "_blank"; a.rel = "noopener"; }
          a.textContent = s.name || "";
          row.appendChild(a);
          if (s.logo) {
            const probe = new Image();
            probe.onload = function () {
              const img = document.createElement("img");
              img.src = s.logo;
              img.alt = s.name || "";
              a.innerHTML = "";
              a.appendChild(img);
            };
            probe.src = s.logo;
          }
        });
      }
    });
  }

  /* ---------- sponsors (shared across both pages) ---------- */
  function renderSponsors() {
    if (SITE.sponsorLede) $("sponsorLede").textContent = SITE.sponsorLede;
    const host = $("sponsorList");
    if (!SPONSORS.length) {
      host.innerHTML = '<p style="color:var(--ink-faint)">Interested in sponsoring? Get in touch below.</p>';
      return;
    }
    SPONSORS.forEach((s) => {
      const card = el("a", "sponsor-card");
      card.href = s.url || "#";
      if (s.url) { card.target = "_blank"; card.rel = "noopener"; }
      /* show the name as text, and upgrade to the logo image only once
         that image is confirmed to load (no broken-image icons). */
      card.innerHTML = `<div class="sponsor-name">${esc(s.name || "")}</div>`;
      if (s.logo) {
        const probe = new Image();
        probe.onload = function () {
          const img = document.createElement("img");
          img.src = s.logo;
          img.alt = s.name || "Sponsor";
          img.className = "sponsor-logo";
          card.innerHTML = "";
          card.appendChild(img);
        };
        probe.src = s.logo;
      }
      host.appendChild(card);
    });
  }

  /* ---------- funding plan — both teams, side by side ---------- */
  function renderFunding() {
    const host = $("fundingBlock");
    if (!host) return;
    const rovF = (SITE.rov && SITE.rov.funding) || null;
    const fllF = (SITE.fll && SITE.fll.funding) || null;
    if (!rovF && !fllF) return;

    const money = (n) => "$" + Number(n || 0).toLocaleString("en-US");

    function itemHtml(it, aspire) {
      return (
        '<div class="wish-item' + (it.funded ? " is-funded" : "") +
        (aspire ? " wish-aspire" : "") + '">' +
          '<div class="wish-head">' +
            '<span class="wish-name">' + esc(it.name) + "</span>" +
            '<span class="wish-cost">' + esc(it.cost) + "</span>" +
          "</div>" +
          (it.unit ? '<div class="wish-unit">' + esc(it.unit) + "</div>" : "") +
          '<p class="wish-why">' + esc(it.rationale) + "</p>" +
          (it.funded ? '<span class="wish-funded">&#10003; Funded</span>' : "") +
        "</div>"
      );
    }

    /* one team's funding column */
    function colHtml(F, teamName) {
      if (!F) return "";
      const rawPct = F.goal > 0 ? Math.round((100 * F.raised) / F.goal) : 0;
      const pct = Math.max(0, Math.min(100, rawPct));
      const tiers = (F.tiers || []).map((t) =>
        '<div class="wish-tier"><h4 class="tier-label">' + esc(t.label) +
        "</h4>" + (t.items || []).map((it) => itemHtml(it, false)).join("") +
        "</div>").join("");
      const aspire = F.aspirational
        ? '<div class="wish-tier"><h4 class="tier-label">Aspirational</h4>' +
          itemHtml(F.aspirational, true) + "</div>"
        : "";
      const contact = F.contactEmail
        ? ' <a href="mailto:' + esc(F.contactEmail) + '">Get in touch &rarr;</a>'
        : "";
      return (
        '<div class="fund-col">' +
          '<h3 class="fund-col-head">' + esc(teamName) + "</h3>" +
          (F.intro ? '<p class="fund-intro">' + esc(F.intro) + "</p>" : "") +
          '<div class="meter">' +
            '<div class="meter-track"><div class="meter-fill" style="width:' +
              pct + '%"></div></div>' +
            '<div class="meter-label">' + esc(money(F.raised)) +
              " raised toward our " + esc(money(F.goal)) +
              " goal &middot; " + rawPct + "%</div>" +
            (F.asOf ? '<div class="meter-asof">As of ' + esc(F.asOf) + "</div>" : "") +
          "</div>" +
          '<div class="wish-list">' + tiers + aspire + "</div>" +
          (F.cta ? '<p class="fund-cta">' + esc(F.cta) + contact + "</p>" : "") +
        "</div>"
      );
    }

    const lede = SITE.fundingLede
      ? '<p class="fund-lede">' + esc(SITE.fundingLede) + "</p>" : "";

    const P = SITE.fundingPledge;
    const pledge = P
      ? '<div class="fund-pledge">' +
          (P.badge ? '<div class="pledge-badge">' + esc(P.badge) + "</div>" : "") +
          (P.headline ? '<h3 class="pledge-headline">' + esc(P.headline) + "</h3>" : "") +
          (P.body ? '<p class="pledge-body">' + esc(P.body) + "</p>" : "") +
          ((P.goesTo || P.neverGoesTo) ?
            '<div class="pledge-split">' +
              (P.goesTo ? '<div class="pledge-cell pledge-goes">' +
                '<span class="pledge-k">Goes to</span>' + esc(P.goesTo) + "</div>" : "") +
              (P.neverGoesTo ? '<div class="pledge-cell pledge-never">' +
                '<span class="pledge-k">Never goes to</span>' + esc(P.neverGoesTo) + "</div>" : "") +
            "</div>" : "") +
        "</div>"
      : "";

    const taxNote = (rovF && rovF.taxNote) || (fllF && fllF.taxNote) || "";
    const thanks  = (rovF && rovF.thankYou) || (fllF && fllF.thankYou) || "";

    host.innerHTML =
      '<div class="fund">' +
        '<button class="fund-toggle" type="button">' +
          "<span>Sponsor our teams &mdash; see the funding plans</span>" +
          '<span class="chevron"></span>' +
        "</button>" +
        '<div class="collapse"><div class="collapse-inner"><div class="fund-panel">' +
          lede +
          pledge +
          '<div class="fund-cols">' +
            colHtml(rovF, "ROV Team") +
            colHtml(fllF, "FIRST LEGO League") +
          "</div>" +
          (taxNote ? '<p class="fund-tax">' + esc(taxNote) + "</p>" : "") +
          (thanks ? '<p class="fund-thanks">' + esc(thanks) + "</p>" : "") +
        "</div></div></div>" +
      "</div>";

    const fund = host.querySelector(".fund");
    host.querySelector(".fund-toggle").addEventListener("click", () => {
      fund.classList.toggle("open");
    });

    /* a "Donate" link that points in-page also opens this panel */
    document.querySelectorAll("[data-donate]").forEach((d) => {
      if ((d.getAttribute("href") || "").charAt(0) === "#") {
        d.addEventListener("click", () => fund.classList.add("open"));
      }
    });
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    const year = new Date().getFullYear();
    const name = ORG.name || "Say Watt Robotics";
    $("footerInner").innerHTML = `
      <p>
        <strong>${esc(name)}</strong>${ORG.location ? " &middot; " + esc(ORG.location) : ""}<br>
        ${ORG.contactEmail ? `<a href="mailto:${esc(ORG.contactEmail)}">${esc(ORG.contactEmail)}</a><br>` : ""}
        &copy; ${year} ${esc(name)}. A 501(c)(3) non-profit youth robotics program since 2022.
      </p>`;
  }

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) {
        e.target.classList.add("in"); obs.unobserve(e.target);
      }});
    }, { threshold: 0.08 });
    document.querySelectorAll(".section .wrap > *").forEach((node) => {
      node.classList.add("reveal"); obs.observe(node);
    });
  }

  /* ---------- landing page (the hub) ---------- */
  function renderLanding() {
    const L = SITE.landing || {};
    const hero = $("hero");
    if (hero) {
      hero.innerHTML =
        '<div class="wrap">' +
          (L.eyebrow ? '<p class="hero-eyebrow">' + esc(L.eyebrow) + "</p>" : "") +
          "<h1>" + esc(L.heroHeadline || (ORG.name || "Say Watt Robotics")) + "</h1>" +
          (L.heroSub ? '<p class="hero-sub">' + esc(L.heroSub) + "</p>" : "") +
        "</div>";
    }
    const grid = $("teamGrid");
    if (grid) {
      grid.innerHTML = (L.teams || []).map((t) =>
        '<a class="team-card" href="' + esc(t.href || "#") + '">' +
          '<div class="team-card-art">' +
            (t.art ? '<img src="' + esc(t.art) + '" alt="" />' : "") +
          "</div>" +
          '<div class="team-card-body">' +
            '<h3 class="team-card-name">' + esc(t.name || "") + "</h3>" +
            (t.tagline ? '<p class="team-card-tag">' + esc(t.tagline) + "</p>" : "") +
            '<span class="team-card-cta">' + esc(t.cta || "Explore") +
              " &rarr;</span>" +
          "</div>" +
        "</a>").join("");
    }
  }

  /* ---------- boot ---------- */
  function boot() {
    if (!window.SITE) {
      document.body.innerHTML =
        '<p style="padding:40px;font-family:sans-serif">content.js did not load. ' +
        'Make sure content.js sits next to this page.</p>';
      return;
    }
    renderChrome();
    if (PAGE === "home") {
      renderLanding();
    } else {
      renderHero();
      renderCurriculum();
      renderRoadmap();
      renderCalendar();
      renderResources();
      renderRoster();
      renderFieldLog();
    }
    renderSponsors();
    renderFunding();
    renderFooter();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
