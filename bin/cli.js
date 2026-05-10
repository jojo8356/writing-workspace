#!/usr/bin/env node

/**
 * writing-workspace CLI
 *
 * Usage:
 *   npx writing-workspace install     # Installation interactive
 *   npx writing-workspace install -y  # Installation non-interactive (defaults)
 *   npx writing-workspace help        # Aide
 *   npx writing-workspace skills      # Liste les skills Claude disponibles
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0] || 'help';

const PACKAGE_ROOT = path.resolve(__dirname, '..');

// Couleurs ANSI simples (sans dépendre de kleur en runtime)
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
};

function help() {
  console.log(`
${c.bold}${c.cyan}writing-workspace${c.reset} — Framework d'écriture de fiction pour Claude Code

${c.bold}USAGE${c.reset}
  npx writing-workspace ${c.cyan}<command>${c.reset} [options]

${c.bold}COMMANDS${c.reset}
  ${c.green}install${c.reset}        Installation interactive dans un dossier
  ${c.green}install -y${c.reset}     Installation non-interactive (defaults)
  ${c.green}skills${c.reset}         Liste les skills Claude Code disponibles
  ${c.green}structure${c.reset}      Affiche l'architecture du framework
  ${c.green}help${c.reset}           Affiche cette aide

${c.bold}EXEMPLES${c.reset}
  ${c.dim}# Installer dans le dossier courant${c.reset}
  npx writing-workspace install

  ${c.dim}# Installer dans un dossier spécifique avec defaults${c.reset}
  npx writing-workspace install -y --dir ./mon-roman

${c.bold}DOCS${c.reset}
  https://github.com/jojo8356/writing-workspace

${c.bold}SKILLS CLAUDE CODE${c.reset}
  Une fois installé, ouvre Claude Code dans le projet et tape ${c.yellow}/${c.reset}
  pour voir les skills disponibles (writing-init, writing-pitch, etc.)
`);
}

function listSkills() {
  const skillsDir = path.join(PACKAGE_ROOT, '.claude', 'skills');
  if (!fs.existsSync(skillsDir)) {
    console.log(`${c.red}Erreur :${c.reset} dossier .claude/skills/ introuvable`);
    process.exit(1);
  }

  console.log(`\n${c.bold}${c.cyan}Skills Claude Code disponibles${c.reset}\n`);

  const skills = fs.readdirSync(skillsDir).filter((f) =>
    fs.statSync(path.join(skillsDir, f)).isDirectory(),
  );

  for (const skill of skills) {
    const skillPath = path.join(skillsDir, skill, 'SKILL.md');
    if (!fs.existsSync(skillPath)) continue;

    const content = fs.readFileSync(skillPath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) continue;

    const frontmatter = frontmatterMatch[1];
    const nameMatch = frontmatter.match(/name:\s*(.+)/);
    const descMatch = frontmatter.match(/description:\s*(.+)/);

    const name = nameMatch ? nameMatch[1].trim() : skill;
    const desc = descMatch ? descMatch[1].trim() : '(pas de description)';

    console.log(`  ${c.green}/${name}${c.reset}`);
    console.log(`    ${c.dim}${desc}${c.reset}\n`);
  }

  console.log(`${c.dim}Pour invoquer un skill, tape "/" dans Claude Code et choisis-le.${c.reset}\n`);
}

function showStructure() {
  console.log(`
${c.bold}${c.cyan}Architecture du framework${c.reset}

${c.bold}mon_roman/${c.reset}
├── ${c.green}README.md${c.reset}                      Vue d'ensemble + smart index
├── ${c.green}HELP.md${c.reset}                        Notice complète
├── ${c.green}SESSION_RULES.md${c.reset}               Quand changer de session Claude
├── ${c.cyan}.claude/skills/${c.reset}                Skills Claude Code (auto-loadable)
├── ${c.cyan}_output/${c.reset}                       Dossier de sortie par défaut
│
├── ${c.yellow}0_fondamentaux/${c.reset}                AVANT D'ÉCRIRE — préparation
│   ├── pitch.md                   1 phrase + 5 phrases + 1 page
│   ├── cible.md                   Public visé
│   ├── valeurs.md                 Thème central
│   ├── scene_centrale.md          LA scène la plus importante
│   ├── environnement.md           Setup complet du monde (40+ Q)
│   ├── mon_corpus_personnel.md    Toutes mes lectures
│   └── sources_inspiration.md     Cartographie des idées
│
├── ${c.yellow}1_personnages/${c.reset}                 Tests de robustesse + ancrage
├── ${c.yellow}2_univers/${c.reset}                     Worldbuilding utile uniquement
├── ${c.yellow}3_trame/${c.reset}                       Trame, timeline, fin
├── ${c.yellow}4_plan/${c.reset}                        Plans chapitre par chapitre
├── ${c.yellow}5_ecriture/${c.reset}                    Brouillon + notes
├── ${c.yellow}6_revision/${c.reset}                    Checklists de révision
└── ${c.yellow}7_outils/${c.reset}                      Référence quotidienne
`);
}

function install() {
  const installerPath = path.join(PACKAGE_ROOT, 'tools', 'installer.js');
  if (!fs.existsSync(installerPath)) {
    console.log(`${c.red}Erreur :${c.reset} tools/installer.js introuvable`);
    process.exit(1);
  }

  // Délègue à installer.js avec les args restants
  const child = spawn('node', [installerPath, ...args.slice(1)], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });

  child.on('exit', (code) => process.exit(code));
}

// Dispatcher
switch (command) {
  case 'install':
    install();
    break;
  case 'skills':
  case 'list-skills':
    listSkills();
    break;
  case 'structure':
  case 'arch':
    showStructure();
    break;
  case 'help':
  case '--help':
  case '-h':
    help();
    break;
  default:
    console.log(`${c.red}Commande inconnue :${c.reset} ${command}\n`);
    help();
    process.exit(1);
}
