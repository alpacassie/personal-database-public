window.PUBLIC_DATABASE_DATA = {
  skills: [
    {
      name: "Research Brief",
      category: "research",
      level: "intermediate",
      summary: "Turn scattered links, notes, and questions into a clean brief with claims, sources, and open questions.",
      tags: ["AI", "analysis", "writing"],
      use: "Good for market maps, company research, creator ideas, and decision memos.",
      featured: 1
    },
    {
      name: "Database Cleanup",
      category: "data",
      level: "advanced",
      summary: "Audit a table, find duplicates or messy fields, and propose a simpler schema before changing anything.",
      tags: ["Supabase", "SQL", "systems"],
      use: "Good for personal CRMs, finance ledgers, wardrobe tables, and content databases.",
      featured: 2
    },
    {
      name: "Content Angle Builder",
      category: "content",
      level: "beginner",
      summary: "Convert a messy idea into hooks, script beats, visual ideas, and captions.",
      tags: ["content", "taste", "media"],
      use: "Good for short-form video, carousels, newsletters, and thought-leadership drafts.",
      featured: 3
    },
    {
      name: "Prompt Refinement",
      category: "AI",
      level: "beginner",
      summary: "Rewrite a vague request into a precise prompt with context, constraints, output shape, and examples.",
      tags: ["AI", "prompting", "workflow"],
      use: "Good when the first AI output is generic, too long, or not in the right voice.",
      featured: 4
    },
    {
      name: "Launch Checklist",
      category: "web",
      level: "intermediate",
      summary: "Check links, deployment status, repo naming, README, mobile layout, and public/private boundaries.",
      tags: ["Vercel", "GitHub", "QA"],
      use: "Good before sharing a project with friends, collaborators, or a hiring manager.",
      featured: 5
    },
    {
      name: "Obsidian Capture",
      category: "knowledge",
      level: "intermediate",
      summary: "Turn a long conversation or rough note into a durable project note with angles and next steps.",
      tags: ["notes", "systems", "writing"],
      use: "Good for keeping personal knowledge useful without overbuilding the system.",
      featured: 6
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
