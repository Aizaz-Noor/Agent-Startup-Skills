<p align="center">
  <h1 align="center">Agent Startup Skills</h1>
  <p align="center">Drop-in skill files that turn AI coding agents into a full startup engineering team.</p>
  <p align="center">
    <a href="#how-to-install">Install</a> · <a href="#included-skills">Skills</a> · <a href="#how-to-use">Usage</a> · <a href="#contributing">Contribute</a>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/skills-8-blue?style=flat-square" alt="8 skills">
    <img src="https://img.shields.io/badge/cost-free-brightgreen?style=flat-square" alt="Free">
    <img src="https://img.shields.io/badge/license-MIT-orange?style=flat-square" alt="MIT License">
    <img src="https://img.shields.io/badge/works_with-Antigravity%20%7C%20Claude%20Code%20%7C%20Codex-purple?style=flat-square" alt="Platform support">
  </p>
</p>

---

## Why this exists

You ask an AI agent to "build me a SaaS" and you get one giant file — no structure, no tests, no security checks, no way to deploy it. That output is unusable.

This repo fixes that. It gives your AI agent 8 structured skill files, each one acting as a different team member. The agent follows them in order, stops after each phase for your approval, and only moves on when you say so.

You stay in control. The AI does the heavy lifting.

---

## How it works

```
YOUR IDEA
    │
    ▼
┌─────────────────┐
│  Market Scout    │──→ market_brief.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  MVP Scoper     │──→ mvp_scope.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  System Architect│──→ architecture.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  Schema Designer │──→ schema.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  Full-Stack Coder│──→ complete codebase
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  Test Engineer   │──→ test suite + testing_plan.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  Security Auditor│──→ security_audit.md
└────────┬────────┘
         ▼  you approve
┌─────────────────┐
│  Deploy Planner  │──→ Dockerfile + deploy_guide.md
└────────┬────────┘
         ▼
    LAUNCH READY
```

Each box is a separate skill file. Each arrow is an approval gate where you review the output and either approve it or send it back for revisions.

---

## Included skills

| # | Skill | Role | What it produces |
|---|---|---|---|
| 1 | `market-scout` | Market analyst | Competitor table, target user persona, risk list |
| 2 | `mvp-scoper` | Product manager | Prioritized feature list (max 7), success metrics |
| 3 | `system-architect` | Architect | Tech stack, folder structure, API endpoint list |
| 4 | `schema-designer` | Database engineer | Table definitions, relationships, indexes, seed data |
| 5 | `fullstack-coder` | Senior developer | Full codebase — no TODOs, no placeholders |
| 6 | `test-engineer` | QA engineer | Unit tests, integration tests, edge case coverage |
| 7 | `security-auditor-saas` | Security engineer | OWASP Top 10 checklist, vulnerability report |
| 8 | `deploy-planner` | DevOps engineer | Dockerfile, hosting guide, post-launch checklist |

The `saas-accelerator` skill chains all 8 together. You can also use any skill on its own.

---

## How to install

Clone this repo, then copy the `skills/` folder into your AI agent's config directory.

**Google Antigravity**
```bash
git clone https://github.com/Aizaz-Noor/Agent-Startup-Skills.git
cp -r Agent-Startup-Skills/skills/* ~/.gemini/antigravity/skills/
```

**Claude Code**
```bash
git clone https://github.com/Aizaz-Noor/Agent-Startup-Skills.git
cp -r Agent-Startup-Skills/skills/* ~/.claude/skills/
```

**OpenAI Codex**
```bash
git clone https://github.com/Aizaz-Noor/Agent-Startup-Skills.git
cp -r Agent-Startup-Skills/skills/* ~/.codex/skills/
```

**Windows (manual)**
1. Download this repo as a ZIP
2. Extract it
3. Copy everything inside the `skills/` folder into your agent's skill directory
4. Start a new agent session

---

## How to use

Tell your agent what you want to build. That's it.

```
> I want to build a SaaS that helps freelancers track invoices.
```

The `saas-accelerator` skill picks up the prompt and starts Phase 1 (Market Scout). After each phase, it stops and asks for your approval before continuing.

You can also call individual skills:

| What you say | Skill that triggers |
|---|---|
| "Research competitors for invoice tools" | `market-scout` |
| "Scope the MVP features" | `mvp-scoper` |
| "Design the database" | `schema-designer` |
| "Audit this code for security" | `security-auditor-saas` |
| "How do I deploy this?" | `deploy-planner` |

---

## What this will not do

This is a structured workflow, not magic. Be clear about what it can and cannot do:

- It will not guarantee revenue. Products need real users and real feedback.
- It will not make legal or financial decisions for you.
- It will not deploy code to a live server automatically.
- It will not replace your own judgment on what to build.

What it *will* do: give you the same step-by-step process that working engineering teams follow — research, scope, design, build, test, secure, deploy — with AI doing the drafting and you making the calls.

---

## Project structure

```
Agent-Startup-Skills/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── skills/
    ├── saas-accelerator/SKILL.md       ← master orchestrator
    ├── market-scout/SKILL.md           ← phase 1
    ├── mvp-scoper/SKILL.md             ← phase 2
    ├── system-architect/SKILL.md       ← phase 3
    ├── schema-designer/SKILL.md        ← phase 4
    ├── fullstack-coder/SKILL.md        ← phase 5
    ├── test-engineer/SKILL.md          ← phase 6
    ├── security-auditor-saas/SKILL.md  ← phase 7
    └── deploy-planner/SKILL.md         ← phase 8
```

---

## Contributing

Pull requests are open. To add a skill:

1. Create `skills/your-skill-name/SKILL.md`
2. Include YAML frontmatter with `name` and `description`
3. Follow the format: Purpose → When to Use → Process → Exit Criteria
4. Keep it under 500 lines. Move long content into a `references/` subfolder.
5. Open a PR with a short description of what the skill does

See existing skills for reference.

---

## License

[MIT](LICENSE) — use it, fork it, sell what you build with it.

---

<p align="center">
  Built by <a href="https://github.com/Aizaz-Noor">Aizaz Noor</a><br>
  If you found this useful, leave a star. It helps others find the repo.
</p>
