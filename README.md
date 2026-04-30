# Agent Startup Skills 🚀

**Turn your AI coding assistant into a full startup engineering team.**

A collection of open-source skills that give AI agents (Antigravity, Claude Code, Codex) the ability to take a raw SaaS idea through a complete, 8-phase startup pipeline — from market research to deployment — with you as the CEO approving every step.

---

## The Problem

You tell your AI "build me a SaaS product" and it spits out a single messy file with no architecture, no tests, no security review, and no deployment plan. That is not how real startups are built.

## The Solution

This skill pack transforms your AI into **8 specialized agents** that work in sequence, each producing a real artifact that you review and approve before the next agent begins:

```
YOUR IDEA
    │
    ▼
┌─────────────────┐
│  Market Scout    │──→ market_brief.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  MVP Scoper     │──→ mvp_scope.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  System Architect│──→ architecture.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  Schema Designer │──→ schema.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  Full-Stack Coder│──→ Complete Codebase
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  Test Engineer   │──→ Test Suite + testing_plan.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  Security Auditor│──→ security_audit.md
└────────┬────────┘
         ▼ CEO approves
┌─────────────────┐
│  Deploy Planner  │──→ Dockerfile + deploy_guide.md
└────────┬────────┘
         ▼
   🚀 LAUNCH READY
```

---

## Included Skills

| # | Skill | Agent Persona | Output |
|---|---|---|---|
| 1 | `market-scout` | Market Research Analyst | Competitor analysis, UVP, user persona |
| 2 | `mvp-scoper` | Product Manager | Prioritized feature list, success metrics |
| 3 | `system-architect` | Principal Architect | Tech stack, file structure, API contracts |
| 4 | `schema-designer` | Database Engineer | Tables, relationships, indexes, seed data |
| 5 | `fullstack-coder` | Senior Engineer | Complete, runnable codebase |
| 6 | `test-engineer` | QA Engineer | Unit tests, integration tests, edge cases |
| 7 | `security-auditor-saas` | Security Engineer | OWASP audit, vulnerability report |
| 8 | `deploy-planner` | DevOps Engineer | Docker, hosting guide, deployment checklist |

The **`saas-accelerator`** skill is the master orchestrator that chains all 8 together.

---

## How to Install

### For Google Antigravity
```bash
# Copy the skills folder into Antigravity's skill directory
cp -r skills/* ~/.gemini/antigravity/skills/
```

### For Claude Code
```bash
cp -r skills/* ~/.claude/skills/
```

### For OpenAI Codex
```bash
cp -r skills/* ~/.codex/skills/
```

### Manual Installation
1. Download this repository
2. Copy the `skills/` folder contents into your AI agent's skill directory
3. Restart your AI agent session

---

## How to Use

Once installed, simply tell your AI agent:

> "I want to build a SaaS product that helps freelancers manage their invoices."

The `saas-accelerator` skill will automatically trigger and walk you through all 8 phases, pausing for your approval at each step.

You can also trigger individual skills directly:
- "Do market research on invoice management tools" → triggers `market-scout`
- "Design the database schema for my app" → triggers `schema-designer`
- "Run a security audit on this code" → triggers `security-auditor-saas`

---

## What This Does NOT Do

- ❌ Guarantee a million-dollar business (that requires real users and real execution)
- ❌ Replace human judgment on business strategy
- ❌ Handle legal, compliance, or financial regulation
- ❌ Deploy to production automatically

**What it DOES do:** Give you the same structured process that real engineering teams use, accelerated by AI, with you making every important decision.

---

## Contributing

We welcome contributions! To add a new skill:

1. Create a folder in `skills/your-skill-name/`
2. Add a `SKILL.md` file with proper YAML frontmatter
3. Follow the existing skill format (Purpose, When to Use, Process, Exit Criteria)
4. Submit a pull request

---

## License

MIT — Use it, fork it, build your empire.

---

**Built by [Aizaz Noor](https://github.com/Aizaz-Noor)** — If this helped you build something, star the repo ⭐
