# Claude Code Skills Guide

This guide explains how to get the most out of **Agent Startup Skills** within the [Claude Code](https://github.com/anthropics/claude-code) CLI.

## Installation Methods

### 1. Global Installation (Recommended)
This makes the Startup Factory available in every Claude session.
```bash
npx -y github:Aizaz-Noor/Agent-Startup-Skills --claude
```

### 2. Project-Local Installation
This enables the skills only for the current project folder.
```bash
npx -y github:Aizaz-Noor/Agent-Startup-Skills --project
```

## How to Invoke
In the Claude terminal, you can trigger the pipeline in two ways:

1.  **Natural Language**: *"I want to build a fitness app using the Startup Factory."*
2.  **Explicit Trigger**: `using the Startup Factory build a SaaS`

## Tips for Claude Code
*   **Approval**: When an agent finishes a phase, it will wait for your input. Type `approve` to move to the next phase.
*   **Refinement**: If you don't like the architecture or scope, just type your feedback. Claude will rewrite the artifact before asking for approval again.
*   **Context**: Claude is very good at reading the local filesystem. Make sure you are in an empty project folder before starting the pipeline.
