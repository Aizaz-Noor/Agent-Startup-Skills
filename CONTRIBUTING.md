# Contributing to Agent Startup Skills

Thank you for helping grow this project. We accept new skill submissions that follow our pipeline standard.

## How to add a skill

1. **Fork the repo** and create a branch.
2. **Create a folder** in `skills/` (e.g., `skills/new-utility/`).
3. **Add `SKILL.md`** with the mandatory YAML frontmatter.

### Mandatory YAML Template
Every skill **MUST** start with this exact block. Failure to follow this will prevent the agent from loading the skill.

```yaml
---
name: your-skill-name
description: >
  A short description (max 1024 chars).
  MUST include trigger phrases (e.g., "Run a security check", "Audit my app").
---
```

**Constraints:**
- **`name`**: Must be lowercase with hyphens (e.g., `api-optimizer`). No spaces or underscores. Length: 1-64 characters.
- **`description`**: Must include natural language trigger phrases. This is how the AI "chooses" to use your skill.

## Style Guidelines

*   **Be Direct**: Use imperative language ("Create the file" instead of "The agent should create the file").
*   **Be Specific**: Every step must result in a file or a report. No vague "thinking" steps.
*   **Security**: Ensure your skill does not delete user data without a confirmation prompt.
*   **Diátaxis**: If adding documentation for your skill, follow the Tutorial/How-to/Reference/Explanation structure.

## Quality Standards

*   Skills must be under 500 lines.
*   No external API keys should be required for basic functionality.
*   Include clear **"Exit Criteria"** at the end of the process.

## Questions?

Open an issue with a specific description of your problem or suggestion.
