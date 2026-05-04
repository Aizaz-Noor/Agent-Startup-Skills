#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const HOME = os.homedir();
const ARGS = process.argv.slice(2);

const HELP_MENU = `
Agent Startup Skills — Universal Installer
Usage: npx -y github:Aizaz-Noor/Agent-Startup-Skills [options]

Options:
  --antigravity     Install to Antigravity global path
  --claude          Install to Claude Code global path
  --codex           Install to Codex global path
  --project         Install to project-local .claude/skills/
  --path <dir>      Install to a custom directory
  --help            Show this help menu

If no options are provided, it installs to all detected agents.
`;

const TARGETS = {
    antigravity: path.join(HOME, '.gemini', 'antigravity', 'skills'),
    claude: path.join(HOME, '.claude', 'skills'),
    codex: path.join(HOME, '.codex', 'skills'),
    project: path.join(process.cwd(), '.claude', 'skills')
};

async function install() {
    if (ARGS.includes('--help')) {
        console.log(HELP_MENU);
        return;
    }

    let selectedTargets = [];

    if (ARGS.includes('--antigravity')) selectedTargets.push({ name: 'Antigravity', path: TARGETS.antigravity });
    if (ARGS.includes('--claude')) selectedTargets.push({ name: 'Claude Code', path: TARGETS.claude });
    if (ARGS.includes('--codex')) selectedTargets.push({ name: 'Codex', path: TARGETS.codex });
    if (ARGS.includes('--project')) selectedTargets.push({ name: 'Project-Local', path: TARGETS.project });

    const pathIdx = ARGS.indexOf('--path');
    if (pathIdx !== -1 && ARGS[pathIdx + 1]) {
        selectedTargets.push({ name: 'Custom Path', path: path.resolve(ARGS[pathIdx + 1]) });
    }

    // Default to all if no specific targets selected
    if (selectedTargets.length === 0) {
        selectedTargets = [
            { name: 'Antigravity', path: TARGETS.antigravity },
            { name: 'Claude Code', path: TARGETS.claude },
            { name: 'Codex', path: TARGETS.codex }
        ];
    }

    const sourceDir = path.join(__dirname, '..', 'skills');

    console.log('\x1b[36m%s\x1b[0m', '🚀 Initializing Agent Startup Skills Installation...');

    for (const target of selectedTargets) {
        try {
            if (!fs.existsSync(target.path)) {
                fs.mkdirSync(target.path, { recursive: true });
            }

            copyRecursiveSync(sourceDir, target.path);
            console.log('\x1b[32m%s\x1b[0m', `✅ Successfully installed to ${target.name}: ${target.path}`);
        } catch (err) {
            console.error('\x1b[31m%s\x1b[0m', `❌ Failed to install to ${target.name}: ${err.message}`);
        }
    }

    console.log('\n\x1b[35m%s\x1b[0m', '✨ Installation Complete! Restart your agents to activate the Startup Factory.');
}

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

install();
