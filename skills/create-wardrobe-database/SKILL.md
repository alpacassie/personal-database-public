---
name: create-wardrobe-database
description: Use when someone wants to turn clothing items into a simple wardrobe database and website for Google Sheets, Notion, or Supabase.
---

# Create a Wardrobe Database

Help the user turn clothes into a simple wardrobe system and a small website they can run locally or publish.

## Start here

Ask the user to choose a wardrobe framework first.

- Recommend starting with an 18-piece wardrobe framework.
- Tell them they can add more pieces later.
- Keep the first version small enough to finish.

Ask which format they want:

- Google Sheets
- Notion
- Supabase

If they are unsure, recommend Google Sheets.

Then ask whether they want:

- the database only
- a local website using their data
- a live website deployed with Vercel or another static host

## Core columns

Use this simple shape:

- `name`: simple personal label
- `product_name`: official product name, if useful
- `brand`
- `type`: top, bottom, outerwear, dress, or shoes
- `subtype`: tank, baby tee, shirt, pants, flats, etc.
- `color`
- `season`
- `capsule`: yes/no
- `notes`

## Workflow

1. Choose the wardrobe framework. Start with 18 pieces unless the user already has a clear structure.
2. Pull purchase data if available. If the user has connected Gmail and approves, search purchase emails for clothing orders, brands, product names, prices, and dates.
3. If purchase data is not available, ask for a rough clothing list or photos of items worth adding.
4. Clean the source material into rows.
5. Keep names short and human.
6. Sort in closet order: tops, bottoms, outerwear, dresses, shoes.
7. Give the user the right output for their tool.
8. After the database exists, use `assets/site-starter` and populate `wardrobe.csv` if they want a site.

## Source guidance

- Gmail purchases are useful for brand and product names, but do not require Gmail.
- Photos are useful for recognizable pieces, colors, and categories.
- A plain typed list is enough for a first version.
- Do not overbuild. Start with the 18 core pieces, then add more later.
- Simple and chic means quiet, table-first, and faithful to the starter style.

## Website workflow

For a local website:

1. Copy `assets/site-starter` into their project.
2. Replace `wardrobe.csv` with their wardrobe rows.
3. Run a local static server from the site folder.
4. Open the local URL and verify the table renders.

### Website style guardrails

- Follow the `assets/site-starter` style unless the user explicitly asks for a redesign.
- Keep the first website as a simple table, not a dashboard.
- Do not add color palettes, swatch filters, search controls, segmented filters, background grids, extra cards, or decorative UI unless the user asks for them.
- Only make minimal copy changes such as title, intro, or table labels when they clarify the data.
- If adding a feature, explain the tradeoff first and keep the default version close to the starter.
- Before calling the site done, verify that the page has no unrequested controls and that the row count matches the wardrobe data.

For a live website:

1. Keep the site static if possible.
2. Deploy the site folder to Vercel, Netlify, GitHub Pages, or another static host.
3. If using Notion or Supabase live data, add API credentials only through the host's environment variables.

## Included starters

- For Google Sheets, use `assets/google-sheets.csv`.
- For Notion, use `assets/notion-properties.md`.
- For Supabase, use `assets/supabase.sql`.
- For a local website, use `assets/site-starter`.
- If the user needs help filling rows, use `assets/prompt.txt`.
