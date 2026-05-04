# Usage Guide

This guide covers the core interaction patterns for the **Agent Startup Skills** ecosystem.

## 1. The Startup Factory (Main Workflow)
The `saas-accelerator` is your primary tool. It coordinates 8 specialized agents in a strictly governed sequence.

**Activation:**
*"I want to build a [Description of Idea] using the Startup Factory."*

### The Approval Gate Mechanism
To prevent the agent from "going rogue," every phase ends with a gate. 
1. The agent produces a markdown artifact (e.g., `architecture.md`).
2. The agent pauses and asks for your approval.
3. You MUST type `approve` or `approve phase` to continue.

**Feedback Loop:**
If the output isn't perfect, provide feedback instead of approving:
*"Change the database to MongoDB and remove the social login feature."*
The agent will regenerate the artifact and ask for approval again.

---

## 2. Standalone Skill Invocation
You don't have to run the full pipeline. You can call any specialist at any time using their standalone trigger phrases or IDs.

**Examples:**
*   `@[market-scout] Research market for a peer-to-peer car sharing app.`
*   `@[security-auditor] Audit the security of this project.`
*   `@[system-architect] Design a system for a real-time chat app using WebSockets.`

---

## 3. Customizing Your Tech Stack
By default, the agents prefer **Next.js, TypeScript, and Tailwind**. To change this, simply tell the **Architect** (Phase 3) or the **Master Orchestrator**:

*"Build me a blog platform using the Startup Factory, but use Python with FastAPI and a PostgreSQL database."*

The agents will adapt all subsequent artifacts (Schema, Code, Tests, Deploy) to your specified stack.
