# Personal Database Public

A public-facing version of Cassie's personal database format, focused on small, useful databases that are easy to copy and adapt.

Live site: <https://personal-database-public.vercel.app/#skills>

## What is inside

- Skills index
- Wardrobe database skill

## Skills

Send people to the `#skills` page.

The download is an installable skill folder. The page keeps install steps general; wardrobe-specific instructions live inside the downloaded skill.

Simple flow:

1. Download the skill.
2. Unzip the folder.
3. ChatGPT/Codex: Skills, New skill, Upload from your computer.
4. Claude Code: move the folder to `~/.claude/skills/`.
5. Type the skill name in chat to trigger it.

The wardrobe skill includes Google Sheets, Notion, Supabase, prompt, and local website starters.

## Run locally

```bash
python3 -m http.server 5002
```

Then open <http://127.0.0.1:5002/#skills>.
