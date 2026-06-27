---
name: create-wardrobe-database
description: Use when someone wants to turn clothing items into a simple wardrobe database and website for Google Sheets, Notion, or Supabase.
---

# Create a Wardrobe Database

Help the user turn clothes into a simple, searchable wardrobe system and a small website they can run locally or publish.

## Start here

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

1. Ask the user to paste a rough list of clothes.
2. Clean the list into rows.
3. Keep names short and human.
4. Sort in closet order: tops, bottoms, outerwear, dresses, shoes.
5. Give the user the right output for their tool.
6. If they want a site, use `assets/site-starter` and populate `wardrobe.csv`.

## Website workflow

For a local website:

1. Copy `assets/site-starter` into their project.
2. Replace `wardrobe.csv` with their wardrobe rows.
3. Run a local static server from the site folder.
4. Open the local URL and verify the table renders.

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
