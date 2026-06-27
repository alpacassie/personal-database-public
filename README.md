# Personal Database Public

A public-facing version of Cassie's personal database format, focused on small, useful databases that are easy to copy and adapt.

Live site: <https://personal-database-public.vercel.app/#skills>

## What is inside

- Wardrobe database starter
- Wardrobe database skill
- Prompt database with copy-ready prompts
- Workflow database for small repeatable systems

## Wardrobe starter

If someone wants to build their own wardrobe database, send them this repo and the `#skills` page.

The download is an installable skill folder. After adding it to ChatGPT/Codex or Claude Code, they can ask it to create a wardrobe database for Google Sheets, Notion, or Supabase.

Simple flow:

1. Download the skill.
2. Unzip the folder.
3. ChatGPT/Codex: Skills, New skill, Upload from your computer.
4. Claude Code: move the folder to `~/.claude/skills/`.
5. Ask it to build your wardrobe database.

The starter keeps the schema intentionally small:

- `name`: the simple name you would actually use
- `product_name`: the official product name, if useful
- `brand`
- `type`: top, bottom, outerwear, dress, or shoes
- `subtype`: tank, baby tee, shirt, pants, flats, etc.
- `color`
- `season`
- `capsule`: whether it belongs in the core closet
- `notes`

The skill includes Google Sheets, Notion, Supabase, and prompt starters.

## Run locally

```bash
python3 -m http.server 5002
```

Then open <http://127.0.0.1:5002/#skills>.
