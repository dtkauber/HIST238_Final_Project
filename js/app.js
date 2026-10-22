/* =========================================================
   Builds the timeline and renders journal entries from
   JOURNAL_ENTRIES (defined in entries.js).
   ========================================================= */

(function () {
  const entries = [...JOURNAL_ENTRIES].sort((a, b) => a.date.localeCompare(b.date));

  const TIMELINE_START = 1765;
  const TIMELINE_END = 1785;

  const els = {
    timeline:  document.getElementById("timeline"),
    caption:   document.getElementById("timeline-caption"),
    page:      document.getElementById("diary-page"),
    date:      document.getElementById("entry-date"),
    title:     document.getElementById("entry-title"),
    body:      document.getElementById("entry-body"),
    context:   document.getElementById("entry-context"),
    letters:   document.getElementById("entry-letters"),
    documents: document.getElementById("entry-documents"),
    prev:      document.getElementById("prev-btn"),
    next:      document.getElementById("next-btn"),
    count:     document.getElementById("page-count"),
  };

  let current = 0;

  // ---------- helpers ----------
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function placeholder(text) {
    return el("div", "placeholder", text);
  }

  // Converts "1776-07-08" into a position (0–100%) along the timeline.
  function timelinePercent(isoDate) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const year = y + (m - 1) / 12 + (d - 1) / 365;
    return ((year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
  }

  // ---------- timeline ----------
  function buildTimeline() {
    for (let y = TIMELINE_START; y <= TIMELINE_END; y += 1) {
      const tick = el("span", "timeline-year", String(y));
      tick.style.left = timelinePercent(`${y}-01-01`) + "%";
      els.timeline.appendChild(tick);
    }

    entries.forEach((entry, i) => {
      const marker = el("button", "timeline-marker");
      marker.type = "button";
      marker.style.left = timelinePercent(entry.date) + "%";
      marker.setAttribute("role", "listitem");
      marker.setAttribute("aria-label", `${entry.date.slice(0, 4)}: ${entry.event}`);
      marker.appendChild(el("span", "marker-label", entry.date.slice(0, 4)));
      marker.addEventListener("click", () => showEntry(i, true));
      els.timeline.appendChild(marker);
    });
  }

  // ---------- rendering ----------
  function renderDiary(entry) {
    els.date.textContent = entry.dateLabel;
    els.title.textContent = entry.title;
    els.body.replaceChildren();

    if (!entry.diary || entry.diary.length === 0) {
      els.body.appendChild(placeholder("[Insert diary entry here]"));
      return;
    }
    entry.diary.forEach((para, i) => {
      els.body.appendChild(el("p", i === 0 ? "first" : "", para));
    });
  }

  function renderContext(entry) {
    els.context.replaceChildren(
      el("p", "context-event", entry.event),
      entry.context && !entry.context.startsWith("[")
        ? el("p", "", entry.context)
        : placeholder(entry.context || "[Insert historical context here]")
    );
  }

  function renderLetters(entry) {
    els.letters.replaceChildren();
    if (!entry.letters || entry.letters.length === 0) {
      els.letters.appendChild(placeholder("[Insert letter here]"));
      return;
    }
    entry.letters.forEach((letter) => {
      const card = el("div", "letter");
      card.appendChild(el("p", "letter-meta",
        `From ${letter.from} to ${letter.to}${letter.date ? " — " + letter.date : ""}`));
      const body = el("div", "letter-body");
      if (!letter.body || letter.body.length === 0) {
        body.appendChild(placeholder("[Insert letter here]"));
      } else {
        letter.body.forEach((para) => body.appendChild(el("p", "", para)));
      }
      card.appendChild(body);
      els.letters.appendChild(card);
    });
  }

  function renderDocuments(entry) {
    els.documents.replaceChildren();
    if (!entry.documents || entry.documents.length === 0) {
      els.documents.appendChild(placeholder("[Insert document or image here]"));
      return;
    }
    entry.documents.forEach((doc) => {
      const wrap = el("div", "document");
      wrap.appendChild(el("p", "document-title", doc.title));

      const figure = el("figure", "document-figure");
      if (doc.image) {
        const img = document.createElement("img");
        img.src = doc.image;
        img.alt = doc.imageAlt || doc.title;
        img.loading = "lazy";
        figure.appendChild(img);
      } else {
        figure.appendChild(el("div", "image-placeholder", "[Insert image here]"));
      }
      wrap.appendChild(figure);

      if (doc.note) wrap.appendChild(el("p", "document-note", doc.note));

      const cite = el("p", "document-citation", doc.citation || "");
      if (doc.url) {
        cite.append(" ");
        const a = el("a", "", "View source");
        a.href = doc.url;
        a.target = "_blank";
        a.rel = "noopener";
        cite.appendChild(a);
      }
      wrap.appendChild(cite);
      els.documents.appendChild(wrap);
    });
  }

  function updateNav() {
    els.prev.disabled = current === 0;
    els.next.disabled = current === entries.length - 1;
    els.count.textContent = `Entry ${current + 1} of ${entries.length}`;
    els.caption.textContent = entries[current].event;

    els.timeline.querySelectorAll(".timeline-marker").forEach((m, i) => {
      m.classList.toggle("active", i === current);
      m.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  function render() {
    const entry = entries[current];
    renderDiary(entry);
    renderContext(entry);
    renderLetters(entry);
    renderDocuments(entry);
    updateNav();
  }

  // Fades the page out, swaps content, fades back in.
  function showEntry(index, updateHash) {
    if (index < 0 || index >= entries.length) return;
    current = index;
    if (updateHash) history.replaceState(null, "", "#entry-" + entries[index].id);

    els.page.classList.add("turning");
    setTimeout(() => {
      render();
      els.page.classList.remove("turning");
    }, 200);
  }

  // ---------- events ----------
  els.prev.addEventListener("click", () => showEntry(current - 1, true));
  els.next.addEventListener("click", () => showEntry(current + 1, true));

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    if (e.key === "ArrowLeft") showEntry(current - 1, true);
    if (e.key === "ArrowRight") showEntry(current + 1, true);
  });

  // ---------- start ----------
  buildTimeline();

  const fromHash = location.hash.startsWith("#entry-")
    ? entries.findIndex((e) => "#entry-" + e.id === location.hash)
    : -1;
  current = fromHash >= 0 ? fromHash : 0;
  render();
  if (fromHash >= 0) document.getElementById("journal").scrollIntoView();
})();
