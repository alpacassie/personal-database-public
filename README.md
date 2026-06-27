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

The Supabase starter SQL is in `supabase/wardrobe.sql`.

## Run locally

```bash
python3 -m http.server 5002
```

Then open <http://127.0.0.1:5002/#skills>.
