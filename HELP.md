# HELP — Notice complète et règles à respecter

> Lis ce fichier en premier pour comprendre comment utiliser le projet.

---

## Configuration du dossier de sortie

### Par défaut

Quand Claude génère une version remplie d'un template, il l'enregistre dans :
```
_output/templates_remplis/
```

### Comment customiser

Dans tes demandes, précise le chemin que tu veux :
```
"Génère une version remplie de pitch.md et sauvegarde dans /home/Johan/mes_pitchs/"
```

Ou modifie cette ligne par défaut dans ce fichier :
```
DEFAULT_OUTPUT_DIR = _output/templates_remplis/
```

---

## Architecture du projet et comment la customiser

### Architecture actuelle (BMAD-style)

```
mon_roman/
├── README.md                      # Vue d'ensemble + smart index
├── HELP.md                        # Notice (ce fichier)
├── _output/                       # Dossier de sortie par défaut
│
├── 0_fondamentaux/                # AVANT D'ÉCRIRE — préparation
│   ├── pitch.md                   # 1 phrase + 5 phrases + 1 page
│   ├── cible.md                   # Public visé
│   ├── valeurs.md                 # Thème central
│   ├── scene_centrale.md          # LA scène la plus importante
│   ├── environnement.md           # Setup complet du monde (8 blocs de questions)
│   ├── mon_corpus_personnel.md    # Toutes mes lectures/visionnages
│   └── sources_inspiration.md     # Cartographie de mes idées
│
├── 1_personnages/                 # Tests de robustesse
│   ├── README.md (tableau récap)
│   ├── protagoniste.md
│   ├── antagoniste.md
│   ├── love_interest.md
│   ├── mentor.md
│   ├── pilier_stable.md
│   ├── secondaires/
│   └── tertiaires/
│
├── 2_univers/                     # Worldbuilding utile uniquement
│   ├── monde.md
│   ├── regles.md
│   ├── lieux.md
│   └── histoire_passee.md
│
├── 3_trame/                       # Trame, timeline, fin
│   ├── trame_globale.md
│   ├── acte1.md / acte2.md / acte3.md
│   ├── timeline.md
│   ├── scenes_cles.md
│   └── fin_choix.md
│
├── 4_plan/                        # Plans chapitre par chapitre
├── 5_ecriture/                    # ÉCRITURE
│   ├── brouillon/
│   └── notes/
├── 6_revision/                    # Checklists de révision
└── 7_outils/                      # Référence quotidienne + outils
    ├── ponderation_vivante.md
    ├── suivi_quotidien.md
    ├── ref_principes.md
    ├── ref_pieges.md
    ├── communautes.md             # Discord, forums, plateformes publication
    ├── inspirations_externes.md   # Sites pour adapter / s'inspirer
    ├── grille_evaluation.md       # Grille 10 axes (notation /70)
    ├── feedback_humain.md         # Template bêta-lecteur
    ├── feedback_ia.md             # Comment demander à Claude
    └── lecture_critique.md        # Template d'analyse d'œuvre lue
```

### Comment customiser l'architecture

**Ajouter un dossier** : crée le dossier et un `index.md` dedans, puis ajoute une référence dans le README.md racine.

**Renommer un dossier** : modifie aussi tous les liens internes (utilise `grep -r "ancien_nom" .`).

**Si tu écris plusieurs romans en parallèle** : duplique la structure entière dans un sous-dossier `roman_2/`, garde le `7_outils/` partagé via lien symbolique.

---

## Notice d'utilisation — Workflow type

### A. Démarrage d'un nouveau roman

1. **Lis** `README.md` puis ce HELP.md
2. **Remplis dans l'ordre** :
   - `0_fondamentaux/pitch.md`
   - `0_fondamentaux/cible.md`
   - `0_fondamentaux/valeurs.md`
   - `0_fondamentaux/environnement.md`
   - `0_fondamentaux/sources_inspiration.md`
3. **Construis les persos** :
   - `1_personnages/protagoniste.md` — passe le test de robustesse (7 questions)
   - `1_personnages/antagoniste.md` — passe le test
   - `1_personnages/mentor.md` (si applicable) — test du pilier
   - `1_personnages/love_interest.md`
   - `1_personnages/pilier_stable.md`
4. **Définis l'univers minimal** : `2_univers/regles.md`
5. **Bâtis la trame** :
   - `3_trame/trame_globale.md` (7 étapes)
   - `3_trame/timeline.md`
   - `3_trame/scenes_cles.md`
6. **Identifie LA scène centrale** : `0_fondamentaux/scene_centrale.md`
7. **Décide la fin** : `3_trame/fin_choix.md`
8. **Plan détaillé** : `4_plan/plan_chapitre_XX.md` pour chaque chapitre
9. **Écris** : `5_ecriture/brouillon/chapitre_XX.md`
10. **Révise** : checklists dans `6_revision/`
11. **Bêta-lecteurs** : envoie `7_outils/feedback_humain.md` rempli en blanc

### B. Si tu fais une nouvelle (10-15 pages) au lieu d'un roman

Plus rapide, structure compressée :

1. `0_fondamentaux/pitch.md` (1 phrase suffit, pas la page)
2. `0_fondamentaux/valeurs.md` (au moins le thème central)
3. `1_personnages/protagoniste.md` (test simplifié : 5 questions sur 7)
4. `2_univers/regles.md` (1-2 contraintes max)
5. `3_trame/trame_globale.md` (3 étapes : déclencheur, crise, résolution)
6. **PAS de timeline détaillée**, pas de découpage chapitre par chapitre
7. **Écrit d'un trait** dans `5_ecriture/brouillon/nouvelle_X.md`
8. Révise avec `6_revision/verification_finale.md` (12 points adaptés)

> **Le format nouvelle est l'idéal pour démarrer** (cf. Section XV du guide). Finir une nouvelle de 10-15 pages t'apprendra plus que de planter 3 romans à 50 pages.

### C. Workflow quotidien d'écriture

1. **Avant** : ouvrir `7_outils/suivi_quotidien.md`, noter date + objectif
2. **Pendant** : consulter `7_outils/ref_principes.md` si doute
3. **Après** : mettre à jour `7_outils/ponderation_vivante.md`, fermer le suivi quotidien
4. **Idées en vrac** : note dans `5_ecriture/notes/idees_brutes.md`
5. **Blocages** : note dans `5_ecriture/notes/deblocages.md`

---

## Règles à respecter

### Règle 1 — Tu écris la doc AVANT le manuscrit
> Documents-as-truth. La doc est la source, le manuscrit en découle.

### Règle 2 — Tu remplis dans l'ordre numéroté
> 0 → 7. Pas de raccourci. Si tu sautes 0_fondamentaux, ton roman aura des bases instables.

### Règle 3 — Test de robustesse OBLIGATOIRE pour les persos de niveau 1
> Si tu n'as pas 6/7 sur les tests, NE COMMENCE PAS LE ROMAN. Renforce les persos avant.

### Règle 4 — Ne saute jamais l'étape `scene_centrale.md`
> Sans LA scène centrale identifiée, tout l'Acte III sera flottant.

### Règle 5 — Tu mets à jour `mon_corpus_personnel.md` à chaque nouvelle lecture/visionnage
> C'est ta carte mentale narrative. Plus elle s'étoffe, plus ton écriture s'enrichit.

### Règle 6 — Tu utilises `sources_inspiration.md` pour tracer chaque idée majeure
> Pour éviter de copier inconsciemment + pour générer de nouvelles idées par croisement.

### Règle 7 — Tu passes les checklists de révision après chaque acte écrit
> Ne laisse pas les défauts s'accumuler.

### Règle 8 — Tu utilises `feedback_humain.md` pour les bêta-lecteurs
> Pas un retour vague "j'ai aimé". Un retour structuré.

### Règle 9 — Quand tu lis ou vois une œuvre, remplis `lecture_critique.md`
> Chaque consommation = matière première pour ton écriture.

### Règle 10 — Tu te fixes un score minimum sur la grille d'évaluation avant les bêta-lecteurs
> 40/70 minimum. Idéal : 50/70.

---

## Commandes utiles à demander à Claude

### Pendant la conception

| Demande | Effet |
|---------|-------|
| "Critique mon pitch dans `0_fondamentaux/pitch.md`" | Vérifie la formule héros + veut + bloque + comprend |
| "Évalue la robustesse du protagoniste (test 7 questions)" | Applique la Section VI.C du guide |
| "Vérifie la cohérence de la trame" | Vérifie causalité et 7 étapes |
| "Génère 5 propositions de noms pour le mentor" | Applique les 5 méthodes de la Section IV |
| "La scène centrale passe-t-elle le test du retrait ?" | Applique critère VII.A |

### Pendant l'écriture

| Demande | Effet |
|---------|-------|
| "Critique le chapitre __ selon les principes 8 et 19" | Critique ciblée |
| "Mets à jour `ponderation_vivante.md`" | Recalcule % par perso |
| "Je suis bloqué au chapitre __, voici mon contexte" | Brainstorm depuis la trame |
| "Détecte les pièges classiques dans ce chapitre" | Cherche les 8 cas documentés |

### Après l'écriture

| Demande | Effet |
|---------|-------|
| "Passe la grille d'évaluation complète" | Notation /70 |
| "Vérifie tous les piliers narratifs : sont-ils payés ?" | Test du principe 25 |
| "Génère un retour bêta-lecteur fictif basé sur le profil cible" | Simulation utile en attendant les vrais bêta-lecteurs |

---

## Référence rapide aux sections du guide

Le guide complet est dans `/home/Johan/guide_romancier.md`. Les sections les plus utiles :

| Section | Sujet | Utiliser quand |
|---------|-------|-----------------|
| III | But du héros | Avant de remplir `pitch.md` |
| IV | Noms et rôles | Avant `1_personnages/` |
| V | Trame, timeline, fin | Avant `3_trame/` |
| VI | Robustesse personnages | Pendant `1_personnages/` |
| VII | Fondamentaux (cible, valeurs, scène centrale) | Avant `0_fondamentaux/` |
| VIII | 40 principes | Pendant l'écriture |
| IX | Worldbuilding | Avant `2_univers/` |
| X | Pondération | Pendant `7_outils/ponderation_vivante.md` |
| XII | Études de cas | Pour repérer les pièges |
| XIII | Checklist 25 étapes | Pendant l'écriture |
| XIV | Vérification finale | Après 1er jet |

---

## Ressources externes (cf. `7_outils/`)

| Fichier | Utilité |
|---------|---------|
| `communautes.md` | Discord, forums, plateformes de publication |
| `inspirations_externes.md` | Sites pour adapter / s'inspirer du réel |
| `grille_evaluation.md` | Grille de notation /70 sur 10 axes |
| `feedback_humain.md` | Template à donner aux bêta-lecteurs |
| `feedback_ia.md` | Comment demander à Claude |
| `lecture_critique.md` | Pour analyser les œuvres que tu lis |
