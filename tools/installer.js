#!/usr/bin/env node

/**
 * writing-workspace Installer
 *
 * Copie les templates dans le dossier cible.
 * Mode interactif (par défaut) ou non-interactif (--yes / -y).
 *
 * Usage:
 *   node installer.js              # interactif
 *   node installer.js -y           # non-interactif (defaults)
 *   node installer.js --dir <path> # spécifier le dossier
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PACKAGE_ROOT = path.resolve(__dirname, '..');

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
};

// Parse args
const args = process.argv.slice(2);
const isYes = args.includes('-y') || args.includes('--yes');
let targetDir = process.cwd();
const dirIndex = args.findIndex((a) => a === '--dir' || a === '-d');
if (dirIndex !== -1 && args[dirIndex + 1]) {
  targetDir = path.resolve(args[dirIndex + 1]);
}

// Items à copier (templates uniquement, pas le code de l'installer)
const ITEMS_TO_COPY = [
  '0_fondamentaux',
  '1_personnages',
  '2_univers',
  '3_trame',
  '4_plan',
  '5_ecriture',
  '6_revision',
  '7_outils',
  '_output',
  '.claude',
  'README.md',
  'HELP.md',
  'SESSION_RULES.md',
];

const ITEMS_TO_SKIP_IF_FILLED = [
  // Si l'utilisateur a déjà rempli ces fichiers, on ne les écrase pas
];

// Helper : copie récursive
function copyRecursive(src, dest, options = {}) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry), options);
    }
  } else {
    if (fs.existsSync(dest) && options.skipExisting) {
      console.log(`  ${c.dim}skip (existe déjà):${c.reset} ${path.relative(targetDir, dest)}`);
      return;
    }
    fs.copyFileSync(src, dest);
    if (options.verbose) {
      console.log(`  ${c.green}+${c.reset} ${path.relative(targetDir, dest)}`);
    }
  }
}

// Question interactive
function ask(question, defaultValue) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const prompt = defaultValue ? `${question} ${c.dim}(${defaultValue})${c.reset} ` : `${question} `;
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim() || defaultValue);
    });
  });
}

async function run() {
  console.log(`
${c.bold}${c.cyan}╔════════════════════════════════════════════════╗
║      writing-workspace — Installeur            ║
║      Framework d'écriture pour Claude Code      ║
╚════════════════════════════════════════════════╝${c.reset}
`);

  let projectName = 'mon_roman';
  let projectDir = path.join(targetDir, projectName);
  let userName = 'Auteur';
  let language = 'fr';
  let skipExisting = true;
  let installSkills = true;

  if (!isYes) {
    // Phase interactive
    console.log(`${c.dim}Réponds aux questions ou appuie sur Entrée pour la valeur par défaut.${c.reset}\n`);

    projectName = await ask(`${c.bold}Nom du projet ?${c.reset}`, 'mon_roman');
    projectDir = path.resolve(targetDir, projectName);

    const useCurrentDir = await ask(
      `${c.bold}Installer dans${c.reset} ${c.cyan}${projectDir}${c.reset} ?`,
      'oui',
    );
    if (useCurrentDir.toLowerCase().startsWith('n')) {
      const customPath = await ask(`${c.bold}Chemin alternatif ?${c.reset}`, projectDir);
      projectDir = path.resolve(customPath);
    }

    userName = await ask(`${c.bold}Ton nom (pour les commits Git) ?${c.reset}`, 'Auteur');
    language = await ask(`${c.bold}Langue d'écriture ?${c.reset} (fr / en)`, 'fr');

    const installSkillsAnswer = await ask(
      `${c.bold}Installer les skills Claude Code ?${c.reset} (oui / non)`,
      'oui',
    );
    installSkills = installSkillsAnswer.toLowerCase().startsWith('o');

    const overwriteAnswer = await ask(
      `${c.bold}Écraser les fichiers existants ?${c.reset} (oui / non)`,
      'non',
    );
    skipExisting = !overwriteAnswer.toLowerCase().startsWith('o');
  }

  console.log(`\n${c.bold}Installation en cours...${c.reset}`);
  console.log(`  ${c.dim}Cible:${c.reset} ${projectDir}`);
  console.log(`  ${c.dim}Auteur:${c.reset} ${userName}`);
  console.log(`  ${c.dim}Langue:${c.reset} ${language}`);
  console.log(`  ${c.dim}Skills Claude:${c.reset} ${installSkills ? 'oui' : 'non'}`);
  console.log(`  ${c.dim}Mode:${c.reset} ${skipExisting ? 'préserve l\'existant' : 'écrase tout'}\n`);

  // Création du dossier cible
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }

  // Copie des items
  for (const item of ITEMS_TO_COPY) {
    if (item === '.claude' && !installSkills) continue;
    const src = path.join(PACKAGE_ROOT, item);
    const dest = path.join(projectDir, item);
    if (fs.existsSync(src)) {
      console.log(`${c.cyan}Copie:${c.reset} ${item}`);
      copyRecursive(src, dest, { skipExisting, verbose: false });
    }
  }

  // Création d'un .ww-config (équivalent du _bmad-config)
  const config = {
    user_name: userName,
    communication_language: language,
    project_name: projectName,
    output_folder: '_output',
    installed_at: new Date().toISOString(),
    package_version: require('../package.json').version,
  };
  const configPath = path.join(projectDir, '.writing-workspace.json');
  if (!fs.existsSync(configPath) || !skipExisting) {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`${c.green}+${c.reset} .writing-workspace.json (config)`);
  }

  console.log(`\n${c.bold}${c.green}✓ Installation terminée !${c.reset}\n`);

  console.log(`${c.bold}Prochaines étapes :${c.reset}`);
  console.log(`  ${c.cyan}1.${c.reset} cd ${path.relative(process.cwd(), projectDir) || '.'}`);
  console.log(`  ${c.cyan}2.${c.reset} Ouvre Claude Code dans ce dossier`);
  console.log(`  ${c.cyan}3.${c.reset} Tape ${c.yellow}/writing-init${c.reset} pour démarrer la conception`);
  console.log(`  ${c.cyan}4.${c.reset} Ou lis ${c.yellow}README.md${c.reset} et ${c.yellow}HELP.md${c.reset} pour comprendre l'architecture\n`);

  console.log(`${c.bold}Skills disponibles :${c.reset} (tape "/" dans Claude Code)`);
  console.log(`  /writing-init        Premier contact, comprend ton projet`);
  console.log(`  /writing-pitch       Aide à formuler le pitch`);
  console.log(`  /writing-characters  Construction des persos`);
  console.log(`  /writing-trame       Trame narrative + timeline`);
  console.log(`  /writing-write       Assistance à l'écriture`);
  console.log(`  /writing-revise      Phase de révision`);
  console.log(`  /writing-help        Aide contextuelle`);
  console.log(`  /writing-session     Quand changer de session\n`);

  console.log(`${c.dim}Pour réinstaller / mettre à jour : npx writing-workspace install${c.reset}\n`);
}

run().catch((err) => {
  console.error(`\n${c.red}Erreur :${c.reset} ${err.message}\n`);
  process.exit(1);
});
