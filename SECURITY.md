# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| < 1.1.0 | :x:                |

## Reporting a Vulnerability

We take the security of our agents and the code they generate seriously. If you find a security vulnerability within the skills library or the installer, please do not open a public issue.

Instead, please report vulnerabilities by opening a Draft Security Advisory on GitHub or by contacting the maintainers directly via the repository's contact information.

### Security Guarantees
*   **Human-in-the-Loop**: Our 8-phase pipeline is designed specifically to prevent autonomous code execution.
*   **Approval Gates**: No skill in this library is permitted to make destructive changes without an explicit `approve` keyword from the human operator.
*   **Secret Management**: We strictly prohibit hardcoding API keys in `SKILL.md` files.

Thank you for helping keep our agent ecosystem secure!
