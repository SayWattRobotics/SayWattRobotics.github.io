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
      item.innerHTML = `
        <span class="cal-date">${pretty}</span>
        <span class="cal-main">
          ${isNext ? '<span class="cal-next-flag">NEXT UP</span><br>' : ""}
          <span class="cal-title">${esc(ev.title)}</span>
          ${ev.location ? `<div class="cal-meta">${esc(ev.location)}</div>` : ""}
        </span>
        ${ev.type ? `<span class="cal-tag">${esc(ev.type)}</span>` : ""}`;
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
    (S.roster || []).forEach((m) => {
      host.appendChild(el("div", "roster-card", `
        <div class="roster-avatar">${esc(initials(m.name || "?"))}</div>
        <div class="roster-name">${esc(m.name || "")}</div>
        ${m.role ? `<div class="roster-role">${esc(m.role)}</div>` : ""}
        ${m.detail ? `<div class="roster-detail">${esc(m.detail)}</div>` : ""}`));
    });
  }

  /* ---------- updates ---------- */
  function renderUpdates() {
    const host = $("updateList");
    const items = (S.updates || []).slice();
    if (!items.length) {
      host.innerHTML = '<p style="color:var(--ink-faint)">Season updates will be posted here.</p>';
      return;
    }
    items.forEach((u) => {
      host.appendChild(el("div", "update", `
        ${u.date ? `<div class="update-date">${esc(u.date)}</div>` : ""}
        <h3>${esc(u.title || "")}</h3>
        ${u.body ? `<p>${esc(u.body)}</p>` : ""}`));
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
        &copy; ${year} ${esc(name)}. A 501(c)(3) non-profit youth robotics program.
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

  /* ---------- boot ---------- */
  function boot() {
    if (!window.SITE) {
      document.body.innerHTML =
        '<p style="padding:40px;font-family:sans-serif">content.js did not load. ' +
        'Make sure content.js sits next to this page.</p>';
      return;
    }
    renderChrome();
    renderHero();
    renderCurriculum();
    renderRoadmap();
    renderCalendar();
    renderResources();
    renderRoster();
    renderUpdates();
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
