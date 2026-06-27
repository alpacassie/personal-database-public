---
name: create-wardrobe-database
description: Use when someone wants to turn clothing items into a simple wardrobe database for Google Sheets, Notion, or Supabase.
---

# Create a Wardrobe Database

Help the user turn clothes into a simple, searchable wardrobe system.

## Start here

Ask which format they want:

- Google Sheets
- Notion
- Supabase

If they are unsure, recommend Google Sheets.

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

## Included starters

- For Google Sheets, use `assets/google-sheets.csv`.
- For Notion, use `assets/notion-properties.md`.
- For Supabase, use `assets/supabase.sql`.
- If the user needs help filling rows, use `assets/prompt.txt`.
