# Contributing to Agent Startup Skills

Thanks for your interest in contributing. This project grows through community skill submissions.

## Adding a new skill

1. **Fork this repo** and create a branch for your skill.

2. **Create your skill folder:**
   ```
   skills/your-skill-name/SKILL.md
   ```

3. **Follow this format in SKILL.md:**

   ```markdown
   ---
   name: your-skill-name
   description: >
     One or two sentences explaining what the skill does and what
     trigger phrases activate it.
   ---

   # Skill Name

   ## Purpose
   What this skill does, in plain terms.

   ## When to Use
   Specific situations where this skill should activate.

   ## Process
   Step-by-step instructions the AI agent follows.

   ## Exit Criteria
   Conditions that must be true before this skill is considered complete.
   ```

4. **Keep it under 500 lines.** If you need more space, create a
   `references/` subfolder with supporting docs.

5. **Open a pull request** with:
   - A one-line summary of what the skill does
   - Which phase of the pipeline it fits into (or if it's standalone)

## Writing guidelines

- Write in plain, direct language. No jargon where a simpler word works.
- Use imperative mood for instructions ("Write the schema" not "You should write the schema").
- Every process step should produce a concrete output, not a vague action.
- Include exit criteria so the agent knows when to stop.

## What makes a good skill

- Solves a specific, repeatable problem
- Produces a named artifact (a file, a report, a checklist)
- Has clear start and stop conditions
- Works without external API keys or paid services

## Questions?

Open an issue. Keep it short and specific.
