const databaseOrder = ["wardrobe", "skills", "prompts", "workflows"];

const databaseConfig = {
  wardrobe: {
    title: "Wardrobe",
    intro: "A simple closet database for seeing what you own, what is capsule-worthy, and what is missing.",
    search: "Search wardrobe",
    allLabel: "all pieces",
    filterKey: "type",
    columns: [
      { label: "Item", key: "name", primary: true },
      { label: "Brand", key: "brand" },
      { label: "Capsule", key: "capsule", format: "boolean" },
      { label: "Type", key: "type", format: "label" },
      { label: "Notes", key: "notes", detail: true, mobile: false }
    ],
    defaultSort: "wardrobe"
  },
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
    stepsTitle: "How to use",
    steps: [
      "Download the skill.",
      "Unzip the folder.",
      "ChatGPT/Codex: Skills, New skill, Upload from your computer.",
      "Claude Code: move the folder to ~/.claude/skills/.",
      "Pick a wardrobe framework. Start with 18 pieces and add more later.",
      "Use Gmail purchases if available, or item photos/a rough list if not.",
      "Build the database in Google Sheets, Notion, or Supabase.",
      "Make the local wardrobe site using your data.",
      "If you want it live, deploy the site folder with Vercel or another static host."
    ]
  },
  prompts: {
    title: "Prompts",
    intro: "Copy-ready prompts for research, writing, data, debugging, and content work.",
    search: "Search prompts",
    allLabel: "all prompts",
    filterKey: "category",
    columns: [
      { label: "Prompt", key: "name", primary: true },
      { label: "Best for", key: "summary", detail: true },
      { label: "Tags", key: "tags", tags: true, mobile: false },
      { label: "", key: "prompt", copy: true }
    ]
  },
  workflows: {
    title: "Workflows",
    intro: "Small, reusable ways to turn personal systems into public artifacts.",
    search: "Search workflows",
    allLabel: "all workflows",
    filterKey: "category",
    columns: [
      { label: "Workflow", key: "name", primary: true },
      { label: "Description", key: "summary", detail: true },
      { label: "Tags", key: "tags", tags: true }
    ]
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
const totalCount = document.querySelector("#totalCount");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const categoryTabs = document.querySelector("#categoryTabs");
const tableHead = document.querySelector("#tableHead");
const tableRows = document.querySelector("#tableRows");
const emptyState = document.querySelector("#emptyState");
const backToTop = document.querySelector("#backToTop");
const stepsSection = document.querySelector("#stepsSection");
const stepsTitle = document.querySelector("#stepsTitle");
const stepsList = document.querySelector("#stepsList");

function getDatabaseFromHash() {
  const name = window.location.hash.replace("#", "");
  return databaseOrder.includes(name) ? name : "wardrobe";
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

function renderSteps() {
  const config = getConfig();
  const steps = config.steps || [];
  stepsSection.hidden = steps.length === 0;
  if (!steps.length) return;

  stepsTitle.textContent = config.stepsTitle || "How to use";
  stepsList.innerHTML = steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
}

function render() {
  const config = getConfig();
  const rows = getRows();
  const visibleRows = sortRows(filterRows(rows));

  document.body.dataset.database = state.database;
  pageTitle.textContent = config.title;
  pageIntro.textContent = config.intro;
  searchInput.placeholder = config.search;
  totalCount.textContent = visibleRows.length;
  document.querySelector(".controls").hidden = config.controls === false;

  renderNav();
  renderFilters(rows);
  renderHead();
  renderRows(visibleRows);
  renderSteps();
}

window.addEventListener("hashchange", () => {
  state.database = getDatabaseFromHash();
  state.filter = "all";
  state.search = "";
  searchInput.value = "";
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
