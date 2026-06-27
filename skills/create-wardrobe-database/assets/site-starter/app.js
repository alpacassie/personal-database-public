const typeOrder = {
  top: 1,
  bottom: 2,
  outerwear: 3,
  dress: 4,
  shoes: 5
};

const subtypeOrder = {
  tank: 1,
  "baby tee": 2,
  shirt: 3,
  blouse: 3,
  "button-down": 3
};

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(current);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current);
  if (row.some((value) => value.trim())) rows.push(row);

  const headers = rows.shift().map((header) => header.trim());
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").trim()])));
}

function yesNo(value) {
  return ["yes", "true", "1"].includes(String(value).toLowerCase()) ? "Yes" : "No";
}

function sortWardrobe(a, b) {
  return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99)
    || (subtypeOrder[a.subtype] || 99) - (subtypeOrder[b.subtype] || 99)
    || a.name.localeCompare(b.name);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadWardrobe() {
  const response = await fetch("./wardrobe.csv");
  const csv = await response.text();
  const rows = parseCsv(csv).sort(sortWardrobe);
  const tableRows = document.querySelector("#rows");

  tableRows.innerHTML = rows.map((row) => `
    <tr>
      <td class="item">${escapeHtml(row.name)}</td>
      <td>${escapeHtml(row.brand)}</td>
      <td>${yesNo(row.capsule)}</td>
      <td>${escapeHtml(row.type)}</td>
      <td class="notes">${escapeHtml(row.notes)}</td>
    </tr>
  `).join("");

  document.querySelector("#pieceCount").textContent = rows.length;
  document.querySelector("#capsuleCount").textContent = rows.filter((row) => yesNo(row.capsule) === "Yes").length;
}

loadWardrobe();
