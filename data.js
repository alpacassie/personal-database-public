window.PUBLIC_DATABASE_DATA = {
  skills: [
    {
      name: "Create a Wardrobe Database",
      category: "database",
      summary: "Turn clothes into a simple database and wardrobe site.",
      download: "./downloads/create-wardrobe-database.zip",
      featured: 1
    }
  ],
  prompts: [
    {
      name: "Create a Wardrobe Database",
      category: "database",
      summary: "Use this if you want the wardrobe flow without installing the skill.",
      prompt: "Help me create a wardrobe database and simple wardrobe site. Start by helping me choose a wardrobe framework; use 18 pieces as the first version unless I say otherwise. Then help me populate the database from whatever I have: Gmail purchase history, order emails, item photos, or a rough clothing list. Keep the database simple with these columns: name, product_name, brand, type, subtype, color, season, capsule, notes. Sort items in closet order: tops, bottoms, outerwear, dresses, shoes. Build the database first for Google Sheets, Notion, or Supabase. Only after the database exists, help me make a simple local wardrobe site using the data. Keep the site table-first, simple, chic, and faithful to the starter style. Do not add palettes, swatches, search controls, filters, background grids, dashboards, extra cards, or decorative UI unless I explicitly ask.",
      featured: 1
    }
  ]
};
