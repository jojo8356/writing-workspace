# writing-workspace

> Framework d'écriture de fiction pour Claude Code — inspiré de BMAD-METHOD et adapté à la création de romans/nouvelles.

[![npm version](https://img.shields.io/npm/v/writing-workspace.svg)](https://www.npmjs.com/package/writing-workspace)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation rapide

```bash
# Installation interactive
npx writing-workspace install

# Installation non-interactive (defaults)
npx writing-workspace install -y

# Dans un dossier spécifique
npx writing-workspace install --dir ./mon-roman
```

Ou avec **pnpm** :

```bash
pnpm dlx writing-workspace install
```

## Skills Claude Code

Une fois installé, ouvre Claude Code dans le projet et tape `/` pour voir les skills :

| Skill | Quand l'utiliser |
|-------|-------------------|
| `/writing-init` | Premier contact avec ton projet |
| `/writing-pitch` | Construire ou critiquer le pitch |
| `/writing-characters` | Construire les persos + tests de robustesse |
| `/writing-trame` | Bâtir trame + timeline + choix de fin |
| `/writing-write` | Assistance à l'écriture en cours |
| `/writing-revise` | Phase de révision |
| `/writing-help` | Aide contextuelle |
| `/writing-session` | Quand changer de session Claude |

## Commande CLI

```bash
# Voir les commandes
npx writing-workspace help

# Lister les skills
npx writing-workspace skills

# Voir l'architecture
npx writing-workspace structure

# Alias court : `ww`
npx ww help
```

## Smart Index — Navigation rapide

### Phase 1 — Conception (avant d'écrire une seule scène)

| Dossier | Rôle | Skill associé |
|---------|------|----------------|
| [`0_fondamentaux/`](0_fondamentaux/index.md) | Pitch, cible, valeurs, scène centrale | `/writing-pitch` |
| [`1_personnages/`](1_personnages/index.md) | Tous les persos, niveaux, tests robustesse | `/writing-characters` |
| [`2_univers/`](2_univers/index.md) | Monde, règles, lieux, histoire passée | `/writing-trame` |
| [`3_trame/`](3_trame/index.md) | Trame globale, actes, timeline | `/writing-trame` |

### Phase 2 — Écriture

| Dossier | Rôle | Skill |
|---------|------|-------|
| [`4_plan/`](4_plan/index.md) | Plan détaillé chapitre par chapitre | `/writing-write` |
| [`5_ecriture/`](5_ecriture/index.md) | Brouillon + notes d'écriture | `/writing-write` |

### Phase 3 — Révision

| Dossier | Rôle | Skill |
|---------|------|-------|
| [`6_revision/`](6_revision/index.md) | Checklists, retours bêta-lecteurs | `/writing-revise` |

### Outils en continu

| Dossier | Rôle |
|---------|------|
| [`7_outils/`](7_outils/index.md) | Pondération vivante, suivi quotidien, raccourcis principes, communautés, grille d'évaluation |

---

## Workflow recommandé

1. **Lire** `README.md` puis [`HELP.md`](HELP.md)
2. **Ouvrir Claude Code** dans le dossier
3. **Taper** `/writing-init` pour la première session
4. **Suivre** les phases dans l'ordre numéroté (0 → 7)
5. **Consulter** [`SESSION_RULES.md`](SESSION_RULES.md) pour gérer les sessions
6. **Push régulièrement** sur Git pour préserver ton travail

---

## Architecture

```
mon_roman/
├── package.json                  # NPM package config
├── bin/cli.js                    # CLI executable
├── tools/installer.js            # Logique d'installation
├── .claude/skills/               # Skills Claude Code
│   ├── writing-init/SKILL.md
│   ├── writing-pitch/SKILL.md
│   ├── writing-characters/SKILL.md
│   ├── writing-trame/SKILL.md
│   ├── writing-write/SKILL.md
│   ├── writing-revise/SKILL.md
│   ├── writing-help/SKILL.md
│   └── writing-session/SKILL.md
├── _output/                      # Dossier de sortie par défaut
│
├── 0_fondamentaux/               # AVANT D'ÉCRIRE
│   ├── pitch.md                  # 1 phrase + 5 phrases + 1 page
│   ├── cible.md                  # Public visé
│   ├── valeurs.md                # Thème central
│   ├── scene_centrale.md         # LA scène la plus importante
│   ├── environnement.md          # Setup complet (40+ Q)
│   ├── mon_corpus_personnel.md   # Toutes mes lectures
│   └── sources_inspiration.md    # Cartographie des idées
│
├── 1_personnages/                # Tests de robustesse
├── 2_univers/                    # Worldbuilding utile uniquement
├── 3_trame/                      # Trame, timeline, fin
├── 4_plan/                       # Plans chapitre par chapitre
├── 5_ecriture/                   # Brouillon + notes
├── 6_revision/                   # Checklists de révision
├── 7_outils/                     # Outils + référence
│
├── README.md                     # Ce fichier
├── HELP.md                       # Notice complète
├── SESSION_RULES.md              # Quand changer de session
└── LICENSE                       # MIT
```

---

## Contenu du framework

- **40 principes** d'écriture documentés
- **8 études de cas** narratifs (MHA, VS, Tougen Anki, etc.)
- **~400 questions guidées** réparties dans les templates
- **Grille d'évaluation /70** sur 10 axes pondérés
- **8 skills Claude Code** pour assistance contextuelle
- **Templates pour bêta-lecteurs** (humain + IA)
- **Liste de communautés** Discord et plateformes de publication

---

## Contribuer

Issues et PR bienvenues sur [GitHub](https://github.com/jojo8356/writing-workspace).

---

## License

MIT © Johan Polsinelli (jojo8356)
