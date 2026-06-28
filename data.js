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
  hotels: [
    {
      name: "Alila Ventana Big Sur",
      location: "Big Sur, California, United States",
      status: "haven't",
      notes: "Luxury Big Sur resort saved from Google Maps.",
      featured: 1
    },
    {
      name: "Amangiri",
      location: "1 Kayenta Rd, Canyon Point, Utah, United States",
      status: "haven't",
      notes: "Desert Aman resort in southern Utah.",
      featured: 2
    },
    {
      name: "Aman Venice",
      location: "Palazzo Papadopoli, Calle Tiepolo 1364, 30125 Venice, Italy",
      status: "haven't",
      notes: "Grand Canal Aman hotel in Venice.",
      featured: 3
    },
    {
      name: "Cap Rocat",
      location: "Ctra. d'Enderrocat, s/n, 07609 Cala Blava, Mallorca, Spain",
      status: "haven't",
      notes: "Fortress hotel in Mallorca.",
      featured: 4
    },
    {
      name: "La Mamounia",
      location: "Avenue Bab Jdid, Marrakech, Morocco",
      status: "haven't",
      notes: "Historic luxury hotel in Marrakech.",
      featured: 5
    }
  ],
  prompts: [
    {
      name: "Create a Wardrobe Database",
      category: "database",
      summary: "Use this if you want the wardrobe flow without installing a skill.",
      prompt: "Help me create a wardrobe database and simple wardrobe site. Start by helping me choose a wardrobe framework; use 18 pieces as the first version unless I say otherwise. Then help me populate the database from whatever I have: Gmail purchase history, order emails, item photos, or a rough clothing list. Keep the database simple with these columns: name, product_name, brand, type, subtype, color, season, capsule, notes. Sort items in closet order: tops, bottoms, outerwear, dresses, shoes. Build the database first for Google Sheets, Notion, or Supabase. Only after the database exists, help me make a simple local wardrobe site using the data. Keep the site table-first, simple, chic, and faithful to the starter style. Do not add palettes, swatches, search controls, filters, background grids, dashboards, extra cards, or decorative UI unless I explicitly ask.",
      featured: 1
    }
  ]
};
