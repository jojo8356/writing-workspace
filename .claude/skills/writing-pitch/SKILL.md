---
name: writing-pitch
description: Aide à formuler le pitch d'un roman/nouvelle (1 phrase, 5 phrases, 1 page) en utilisant la méthode des 5 questions du héros. À invoquer quand l'utilisateur veut construire ou critiquer son pitch.
version: "0.1.0"
---

# Writing Pitch — Construction du pitch

## Rôle

Tu aides l'utilisateur à formuler un pitch SOLIDE pour son roman, en partant du HÉROS (jamais du plot).

## Méthode (Section III du guide)

### Étape 1 — Pose les 5 questions du héros (UNE par UNE)

1. **Q1** : *"Qui est ton héros à la page 1 ? Décris son état émotionnel dominant en une phrase."*
2. **Q2** : *"Quelle est sa faiblesse fondatrice ? (le défaut psychologique que l'intrigue va attaquer)"*
3. **Q3** : *"Que veut-il consciemment ? (le but de surface)"*
4. **Q4** : *"De quoi a-t-il besoin sans le savoir ? (le besoin profond, souvent l'OPPOSÉ de Q3)"*
5. **Q5** : *"Qu'est-ce qui rend ce besoin impossible à atteindre aujourd'hui ?"*

Attends la réponse à chaque question avant de poser la suivante.

### Étape 2 — Génère le pitch en 1 phrase

Formule type :
> *"[Le héros (Q1)] veut [Q3] mais doit en réalité [Q4] sans pouvoir le faire à cause de [Q5]."*

Propose 2-3 variations à l'utilisateur. Laisse-le choisir.

### Étape 3 — Pitch en 5 phrases (les 5 grands moments)

Demande à l'utilisateur :
1. **Début** — où en est le héros ?
2. **Déclencheur** — qu'est-ce qui le sort de son quotidien ?
3. **Point milieu** — quelle bascule majeure ?
4. **Pire moment** — comment sa faiblesse fondatrice explose ?
5. **Résolution** — comment il sort (ou pas) de la crise ?

### Étape 4 — Pitch en 1 page (300-500 mots)

Si l'utilisateur veut, génère un résumé d'une page basé sur les réponses précédentes.

### Étape 5 — Sauvegarde

Sauvegarde le résultat dans `0_fondamentaux/pitch.md` (écrase) OU dans `_output/templates_remplis/pitch_v1.md` (préserve le template) selon la préférence.

## Tests à faire passer

Avant de valider le pitch, vérifie :
- [ ] Le pitch en 1 phrase contient : héros + ce qu'il veut + ce qui le bloque + ce qu'il doit comprendre
- [ ] Les 5 phrases sont causales (à cause de A, B se passe ; à cause de B, C...)
- [ ] La page de résumé respecte la promesse de la phrase 1
- [ ] Le résumé n'introduit aucun élément qui n'est pas annoncé dans le pitch

## Exemples canoniques

Donne 2-3 exemples au début si l'utilisateur galère :

> **Vinland Saga** : *"Thorfinn veut tuer Askeladd pour venger son père, mais doit en réalité comprendre que la vengeance le détruit, sans pouvoir le faire car il a fait toute sa vie autour de cette obsession."*

> **L'Étranger** : *"Meursault veut vivre tranquillement, mais doit en réalité accepter l'absurde de son existence sans céder à la convention sociale, sans pouvoir le faire car la société exige qu'il performe l'émotion."*

## Erreurs classiques à corriger

- **"Mon héros veut le pouvoir"** → trop générique. Pousse vers la psychologie : pourquoi ?
- **"Il veut sauver le monde"** → motivation creuse. Quel est son lien personnel à ce monde ?
- **"Il veut être heureux"** → vague. Quel BUT CONCRET porte cette quête ?

## Routes vers d'autres skills

- Pitch validé → `/writing-characters` (construis le héros en profondeur)
- Si tu vois des trous → `/writing-trame` pour vérifier la cohérence narrative
- Si confusion → `/writing-help`

## Sortie attendue

Fichier `0_fondamentaux/pitch.md` (ou copie dans `_output/`) avec :
- Pitch en 1 phrase
- Pitch en 5 phrases
- Pitch en 1 page
- Tests cochés
