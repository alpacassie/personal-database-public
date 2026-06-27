window.PUBLIC_DATABASE_DATA = {
  wardrobe: [
    {
      name: "white tank",
      product_name: "Ribbed cotton tank",
      brand: "Example Studio",
      type: "top",
      subtype: "tank",
      color: "white",
      season: "summer",
      capsule: true,
      notes: "Clean base layer for warm-weather outfits.",
      type_order: 1,
      subtype_order: 1
    },
    {
      name: "black baby tee",
      product_name: "Fitted short-sleeve tee",
      brand: "Everyday Label",
      type: "top",
      subtype: "baby tee",
      color: "black",
      season: "all-season",
      capsule: true,
      notes: "Useful with denim, skirts, trousers, and under jackets.",
      type_order: 1,
      subtype_order: 2
    },
    {
      name: "blue button-down",
      product_name: "Relaxed cotton shirt",
      brand: "Market Sample",
      type: "top",
      subtype: "shirt",
      color: "blue stripe",
      season: "all-season",
      capsule: true,
      notes: "A polished layer that still feels casual.",
      type_order: 1,
      subtype_order: 3
    },
    {
      name: "black trousers",
      product_name: "Straight-leg trouser",
      brand: "Example Studio",
      type: "bottom",
      subtype: "pants",
      color: "black",
      season: "all-season",
      capsule: true,
      notes: "Anchor piece for work, dinners, and travel.",
      type_order: 2,
      subtype_order: 1
    },
    {
      name: "denim shorts",
      product_name: "High-rise denim short",
      brand: "Denim Sample",
      type: "bottom",
      subtype: "shorts",
      color: "medium blue",
      season: "summer",
      capsule: false,
      notes: "Good seasonal piece; less essential year-round.",
      type_order: 2,
      subtype_order: 1
    },
    {
      name: "linen jacket",
      product_name: "Lightweight linen jacket",
      brand: "Market Sample",
      type: "outerwear",
      subtype: "jacket",
      color: "natural",
      season: "summer",
      capsule: true,
      notes: "Light structure without feeling too formal.",
      type_order: 3,
      subtype_order: 1
    },
    {
      name: "black slip dress",
      product_name: "Midi slip dress",
      brand: "Occasion Label",
      type: "dress",
      subtype: "dress",
      color: "black",
      season: "all-season",
      capsule: true,
      notes: "Easy dinner, travel, and event piece.",
      type_order: 4,
      subtype_order: 1
    },
    {
      name: "silver flats",
      product_name: "Leather ballet flat",
      brand: "Shoe Sample",
      type: "shoes",
      subtype: "flats",
      color: "silver",
      season: "all-season",
      capsule: true,
      notes: "Adds polish without needing a heel.",
      type_order: 5,
      subtype_order: 1
    }
  ],
  skills: [
    {
      name: "Create a Wardrobe Database",
      category: "database",
      summary: "Turn clothes into a simple, searchable Supabase table.",
      download: "./supabase/wardrobe.sql",
      featured: 1
    }
  ],
  prompts: [
    {
      name: "Messy Notes to Clean Plan",
      category: "planning",
      format: "template",
      summary: "Organize a rough dump into a simple plan with angles, next steps, and open questions.",
      prompt: "Turn these messy notes into a clean plan. Keep it simple and tasteful. Give me: 1. the core idea, 2. three possible angles, 3. next steps, 4. anything I should decide before making it public. Notes: [paste notes]",
      tags: ["planning", "clarity"],
      featured: 1
    },
    {
      name: "Public-Facing Project README",
      category: "writing",
      format: "template",
      summary: "Write a concise README that explains what a project is, why it exists, and where to see it live.",
      prompt: "Write a GitHub README for this project. Make it public-facing, concise, and polished. Include: what it is, live link, what it contains, how to run locally, and what makes it useful. Project notes: [paste notes]",
      tags: ["GitHub", "writing"],
      featured: 2
    },
    {
      name: "AI Workflow Audit",
      category: "AI",
      format: "checklist",
      summary: "Find where AI can help a workflow without adding unnecessary tools.",
      prompt: "Audit this workflow for useful AI support. Keep the stack minimal. Tell me: what should stay manual, what AI can help with, what data needs to be structured, and the smallest version I can ship. Workflow: [describe workflow]",
      tags: ["AI", "systems"],
      featured: 3
    },
    {
      name: "Data Table Design",
      category: "data",
      format: "template",
      summary: "Design a simple database table that is easy to query and maintain.",
      prompt: "Help me design a simple database table for this use case. Prefer fewer fields, clear names, and queryable structure. Return: table name, columns, sample rows, useful views, and what not to store. Use case: [describe]",
      tags: ["SQL", "Supabase"],
      featured: 4
    },
    {
      name: "Content Script Beats",
      category: "content",
      format: "template",
      summary: "Turn an idea into a short script with hook, beats, visuals, and caption.",
      prompt: "Turn this idea into a short-form video script. Make it smart, tasteful, and not too salesy. Give me: hook, 4-6 script beats, visual direction, on-screen text, and a caption. Idea: [paste idea]",
      tags: ["content", "script"],
      featured: 5
    },
    {
      name: "Calm Debugging Brief",
      category: "debugging",
      format: "checklist",
      summary: "Explain what broke, what changed, and the safest next fix in plain English.",
      prompt: "Help me debug this calmly. First explain what likely happened in plain English. Then list the evidence, the safest fix, what to verify after, and what not to touch. Context/errors: [paste context]",
      tags: ["debugging", "clarity"],
      featured: 6
    }
  ],
  workflows: [
    {
      name: "Share a Small Database",
      category: "publishing",
      summary: "Create a tiny public table site, add a README, connect Vercel, and verify the live URL.",
      tags: ["GitHub", "Vercel", "website"],
      featured: 1
    },
    {
      name: "Turn Private Knowledge Public",
      category: "content",
      summary: "Strip private details, keep the useful pattern, and publish the generalizable version.",
      tags: ["writing", "privacy", "taste"],
      featured: 2
    },
    {
      name: "Build a Prompt Library",
      category: "AI",
      summary: "Collect prompts by use case, keep the wording editable, and add copy-ready examples.",
      tags: ["AI", "prompts", "systems"],
      featured: 3
    }
  ]
};
