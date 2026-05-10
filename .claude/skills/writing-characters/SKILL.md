---
name: writing-characters
description: Construit les personnages (protagoniste, antagoniste, love interest, mentor, pilier stable, secondaires) avec tests de robustesse. Applique les 7 questions de chaque test selon le type de perso. À invoquer après le pitch.
version: "0.1.0"
---

# Writing Characters — Construction des personnages

## Rôle

Tu aides l'utilisateur à construire ses personnages en passant les TESTS DE ROBUSTESSE (Section VI du guide).

## Workflow

### Étape 1 — Identifie quel perso construire

Demande : *"Quel perso veux-tu construire en premier ?"*

Options :
- **Protagoniste** (niveau 1) — le plus important
- **Antagoniste principal** (niveau 1)
- **Love interest** (niveau 1 ou 2)
- **Mentor** (niveau 2)
- **Pilier stable** (niveau 2 — Hodgins-type)
- **Secondaire** (niveau 2)
- **Tertiaire** (niveau 3)

### Étape 2 — Charge le bon template et applique le test

Selon le perso choisi, ouvre le fichier correspondant dans `1_personnages/` :
- `protagoniste.md` → 7 questions du test (Section VI.C)
- `antagoniste.md` → 7 questions (Section VI.D)
- `love_interest.md` → 7 questions adaptées (test du trophée inclus)
- `mentor.md` → 7 questions du pilier (Section VI.E)
- `pilier_stable.md` → 7 questions (présence constante)

### Étape 3 — Fais passer le test (UNE question à la fois)

Pose chaque question du test, attends la réponse, note le score.

**Test du protagoniste :**
1. Peux-tu en parler en 3 paragraphes sans répéter ?
2. A-t-il une faiblesse fondatrice qu'un arc peut attaquer ?
3. As-tu 5 scènes de backstory ?
4. A-t-il une voix unique ?
5. Choix surprenants mais inévitables ?
6. Motivation multi-couches ?
7. 3 facettes cohérentes possibles ?

**Test de l'antagoniste :**
1. Logique cohérente depuis SON POV ?
2. Motivation à hauteur du héros ?
3. Admirable même craint ?
4. Son propre arc ?
5. Actions causales ?
6. Au moins un moment d'humanité ?
7. Tu peux décrire sa douleur en un paragraphe ?

**Test du mentor :**
1. Enseigne quelque chose de SPÉCIFIQUE utilisé plus tard ?
2. Backstory complète A à Z ?
3. Son absence créerait un VRAI vide ?
4. Ses propres opinions, peut désapprouver le héros ?
5. Influence détectable dans le héros ?
6. Change-t-il, ou délibérément statique ?
7. Vie imaginable au-delà du héros ?

### Étape 4 — Verdict

Calcule le score :
- **6-7 OUI** = perso solide, prêt
- **4-5 OUI** = à renforcer (cible les Q manquées)
- **<4 OUI** = NE COMMENCE PAS LE ROMAN. Renforce avant.

### Étape 5 — Renforcement ciblé

Pour chaque question manquée, propose des solutions :
- Q3 manquée (backstory < 5 scènes) → *"Génère 2-3 scènes de passé pour ton héros"*
- Q5 manquée (voix générique) → *"Donne 3 tics de langage qui le distinguent"*
- Q6 manquée (motivation flat) → *"Approfondis : Surface → Profondeur → Existentielle"*

### Étape 6 — Points faibles (Section VII.B)

Pour les persos de niveau 1 et 2, applique aussi les **6 catégories de points faibles** :

| Catégorie | Question |
|-----------|----------|
| Physique | Quelle limite physique ? |
| Psychologique | Quelle phobie / trauma ? |
| Social | Quelle exclusion / réputation ? |
| Moral | Quelle ligne refuse-t-il/elle de franchir ? |
| Connaissance | Quelle ignorance critique ? |
| Relationnel | Quelle dépendance affective ? |

Vise 2-4 cases remplies par perso central.

### Étape 7 — Sauvegarde

Mets à jour le fichier `1_personnages/[perso].md` avec les réponses.
Met aussi à jour `1_personnages/README.md` avec le tableau récap.

## Routes vers d'autres skills

- Tous les persos centraux validés → `/writing-trame`
- Si pitch incertain → reviens à `/writing-pitch`
- Si confusion → `/writing-help`

## Sortie attendue

Fichiers `1_personnages/*.md` remplis avec :
- Identité, personnalité, faiblesse fondatrice
- 5+ scènes de backstory pour le protagoniste
- Test de robustesse passé (6-7 OUI minimum)
- Points faibles identifiés
