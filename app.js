const databaseOrder = ["skills", "hotels", "prompts"];

const databaseConfig = {
  skills: {
    title: "Skills",
    intro: "Small, reusable ways to build personal databases.",
    search: "Search skills",
    allLabel: "all skills",
    filterKey: "category",
    columns: [
      { label: "Skill", key: "name", primary: true },
      { label: "Use", key: "summary", detail: true },
      { label: "Download", key: "download", download: true }
    ],
    controls: false,
    panel: {
      title: "How to use a skill",
      items: [
        "Download and unzip the skill.",
        "Add it to ChatGPT/Codex Skills, or move it to ~/.claude/skills/.",
        "Type / and the skill name in chat to trigger it."
      ]
    }
  },
  hotels: {
    title: "Hotels",
    intro: "A small collection of hotels I want to remember, visit, or revisit.",
    search: "Search hotels",
    allLabel: "all hotels",
    filterKey: "status",
    columns: [
      { label: "Hotel", key: "name", primary: true },
      { label: "Location", key: "location", detail: true },
      { label: "Status", key: "status", format: "label" },
      { label: "Notes", key: "notes", detail: true, mobile: false }
    ],
    panel: {
      title: "How I use this collection",
      items: [
        "Collect hotels worth remembering.",
        "Track location and visited status.",
        "Keep the public version light; deeper notes stay private."
      ]
    }
  },
  prompts: {
    title: "Prompts",
    intro: "Copy-ready prompts for building small personal databases without installing a skill.",
    search: "Search prompts",
    allLabel: "all prompts",
    filterKey: "category",
    columns: [
      { label: "Prompt", key: "name", primary: true },
      { label: "Use", key: "summary", detail: true },
      { label: "Copy", key: "prompt", copy: true }
    ],
    controls: false,
    panel: {
      title: "How to use a prompt",
      items: [
        "Copy the prompt.",
        "Paste it into ChatGPT, Claude, or Codex.",
        "Replace details with your own database topic."
      ]
    }
  }
};

const databases = window.PUBLIC_DATABASE_DATA || {};

const state = {
  database: getDatabaseFromHash(),
  filter: "all",
  search: "",
  sort: "featured"
};

const databaseNav = document.querySelector("#databaseNav");
const pageTitle = document.querySelector("#pageTitle");
const pageIntro = document.querySelector("#pageIntro");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const categoryTabs = document.querySelector("#categoryTabs");
const tableHead = document.querySelector("#tableHead");
const tableRows = document.querySelector("#tableRows");
const emptyState = document.querySelector("#emptyState");
const backToTop = document.querySelector("#backToTop");
const usagePanel = document.querySelector(".usage-panel");
const usageTitle = document.querySelector("#usageTitle");
const usageSteps = document.querySelector(".usage-panel ol");

function getDatabaseFromHash() {
  const name = window.location.hash.replace("#", "");
  return databaseOrder.includes(name) ? name : "skills";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLabel(value = "") {
  return String(value).replaceAll("-", " ").replaceAll("_", " ");
}

function getRows() {
  return databases[state.database] || [];
}

function getConfig() {
  return databaseConfig[state.database];
}

function renderNav() {
  databaseNav.innerHTML = databaseOrder
    .map((name) => {
      const active = name === state.database ? " active" : "";
      return `<a class="database-link${active}" href="#${name}">${databaseConfig[name].title}</a>`;
    })
    .join("");
}

function renderPanel() {
  const panel = getConfig().panel;
  if (!panel) {
    usagePanel.hidden = true;
    return;
  }

  usagePanel.hidden = false;
  usageTitle.textContent = panel.title;
  usageSteps.innerHTML = panel.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderFilters(rows) {
  const config = getConfig();
  if (config.controls === false) {
    categoryTabs.innerHTML = "";
    return;
  }

  const values = [...new Set(rows.map((row) => row[config.filterKey]).filter(Boolean))].sort();
  const buttons = [{ value: "all", label: config.allLabel }, ...values.map((value) => ({ value, label: formatLabel(value) }))];

  categoryTabs.innerHTML = `
    <div class="filter-group">
      <span class="filter-label">Filter</span>
      <div class="filter-options">
        ${buttons
          .map((button) => {
            const active = button.value === state.filter ? " active" : "";
            return `<button class="tab${active}" type="button" data-filter="${escapeHtml(button.value)}">${escapeHtml(button.label)}</button>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function sortRows(rows) {
  return [...rows].sort((a, b) => {
    if (state.sort === "az") return a.name.localeCompare(b.name);
    if (state.sort === "za") return b.name.localeCompare(a.name);
    if (getConfig().defaultSort === "wardrobe") {
      return (a.type_order || 999) - (b.type_order || 999)
        || (a.subtype_order || 999) - (b.subtype_order || 999)
        || a.name.localeCompare(b.name);
    }
    return (a.featured || 999) - (b.featured || 999);
  });
}

function filterRows(rows) {
  const config = getConfig();
  const query = state.search.trim().toLowerCase();

  return rows.filter((row) => {
    const matchesFilter = state.filter === "all" || row[config.filterKey] === state.filter;
    const haystack = Object.values(row).flat().join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesFilter && matchesSearch;
  });
}

function renderHead() {
  const columns = getConfig().columns;
  tableHead.innerHTML = `<tr>${columns
    .map((column) => `<th class="${column.mobile === false ? "hide-mobile" : ""}">${escapeHtml(column.label)}</th>`)
    .join("")}</tr>`;
}

function renderTags(tags = []) {
  return `<div class="tag-list">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function renderCell(row, column) {
  if (column.copy) {
    return `<td class="action-cell"><button class="copy-button" type="button" data-copy="${escapeHtml(row[column.key])}">Copy</button></td>`;
  }

  if (column.download) {
    return `<td class="action-cell"><a class="download-link" href="${escapeHtml(row[column.key])}" download>Download <span aria-hidden="true">&darr;</span></a></td>`;
  }

  if (column.tags) {
    return `<td class="tag-cell">${renderTags(row[column.key] || [])}</td>`;
  }

  let value = column.format === "label" ? formatLabel(row[column.key]) : row[column.key];
  if (column.format === "boolean") value = row[column.key] ? "Yes" : "No";
  const classNames = [
    column.primary ? "primary-cell" : "",
    column.detail ? "detail-cell" : "",
    column.mobile === false ? "hide-mobile" : ""
  ].filter(Boolean).join(" ");

  return `<td class="${classNames}">${escapeHtml(value || "—")}</td>`;
}

function renderRows(rows) {
  const columns = getConfig().columns;
  tableRows.innerHTML = rows
    .map((row) => `<tr>${columns.map((column) => renderCell(row, column)).join("")}</tr>`)
    .join("");
  emptyState.hidden = rows.length > 0;
}

function render() {
  const config = getConfig();
  const rows = getRows();
  const visibleRows = sortRows(filterRows(rows));

  document.body.dataset.database = state.database;
  pageTitle.textContent = config.title;
  pageIntro.textContent = config.intro;
  searchInput.placeholder = config.search;
  document.querySelector(".controls").hidden = config.controls === false;

  renderNav();
  renderPanel();
  renderFilters(rows);
  renderHead();
  renderRows(visibleRows);
}

window.addEventListener("hashchange", () => {
  state.database = getDatabaseFromHash();
  state.filter = "all";
  state.search = "";
  state.sort = "featured";
  searchInput.value = "";
  sortSelect.value = "featured";
  render();
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

tableRows.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;

  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1100);
  } catch {
    button.textContent = "Select";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
