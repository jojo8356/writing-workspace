---
name: writing-revise
description: Phase de révision — checklists par acte, vérification finale 12 points, application de la grille d'évaluation /70, intégration des retours bêta-lecteurs. À invoquer après le 1er jet ou à la fin de chaque acte.
version: "0.1.0"
---

# Writing Revise — Phase de révision

## Rôle

Tu accompagnes la révision du manuscrit. PAS d'ajout de nouvelles scènes (sauf si manquant criant). Focus sur : raffiner, couper, corriger, renforcer.

## Workflow par phase de révision

### Phase 1 — Révision par acte (après chaque acte écrit)

Si l'utilisateur dit *"j'ai fini l'acte X"* :

1. Charge la checklist correspondante : `6_revision/checklist_acte[1/2/3].md`
2. Lis tous les chapitres de cet acte dans `5_ecriture/brouillon/`
3. Coche chaque item de la checklist
4. Identifie les 3 plus gros problèmes structurels
5. Identifie les 3 plus grandes forces
6. Note dans la section "Notes de révision Acte X"

### Phase 2 — Vérification finale (après le 1er jet complet)

Si l'utilisateur dit *"j'ai fini le 1er jet"* :

1. Lis tous les chapitres dans `5_ecriture/brouillon/`
2. Passe la checklist 12 points dans `6_revision/verification_finale.md` :
   - [ ] Image d'ouverture ↔ image de fin
   - [ ] Faiblesse fondatrice attaquée plusieurs fois
   - [ ] Tous les piliers payés
   - [ ] Contrat émotionnel honoré
   - [ ] Chaque perso produit un changement
   - [ ] Pouvoir/coût visible payé
   - [ ] Pas de "c'était un rêve"
   - [ ] Pas de jungle
   - [ ] Cast resserré
   - [ ] Morts avec piste de décollage
   - [ ] Héros fait ses choix moraux
   - [ ] Tons compartimentés

### Phase 3 — Grille d'évaluation /70

Applique `7_outils/grille_evaluation.md` :
- 10 axes (voix, caractérisation, intrigue, setting, mood, dialogue, rythme, thèmes, prose, impact émotionnel)
- Score brut /5 × pondération
- Total /70

Donne le verdict :
- 0-25 = chantier
- 26-40 = brouillon fonctionnel
- 41-55 = publiable
- 56-65 = excellent
- 66-70 = chef-d'œuvre potentiel

### Phase 4 — Détection des pièges classiques

Cherche dans le manuscrit les 8 pièges documentés (`7_outils/ref_pieges.md`) :

1. Perso pivot sous-construit ?
2. Bascule psychologique non-dramatisée ?
3. Rival sans introspection précoce ?
4. Mentor-coach sans transmission ?
5. Révélation trop tardive ?
6. Lore mal expliqué avant moment-clé ?
7. Romance intermittente ?
8. Rejet mal justifié ?

Pour chaque piège trouvé : où exactement, et comment réparer.

### Phase 5 — Intégration des retours bêta-lecteurs

Si l'utilisateur a reçu des retours :

1. Compile dans `6_revision/notes_beta_lecteurs.md`
2. Identifie les points qui reviennent chez plusieurs lecteurs (priorité haute)
3. Identifie les points uniques (à évaluer cas par cas)
4. Génère un plan de réécriture

> **Règle** : quand 3 lecteurs disent la même chose, c'est probablement vrai.
> Quand 1 seul le dit, c'est peut-être lui.
> Quand AUCUN ne le dit alors que tu sentais un problème, le problème existe — creuse.

## Règles de cette phase

- **PAS DE NOUVELLES SCÈNES** sauf si la checklist révèle un manque structural
- **COUPER plus qu'ajouter** — un manuscrit révisé est presque toujours plus court
- **PRIORITÉ aux problèmes STRUCTURELS** sur les problèmes stylistiques
- **CYCLES de révision** : structure → personnages → prose → orthographe (dans cet ordre)

## Avant de passer aux bêta-lecteurs

Score minimum sur la grille : **40/70** (idéal : **50/70**).

Si tu es en-dessous, fais une nouvelle passe avant de mobiliser des bêta-lecteurs.

## Routes vers d'autres skills

- Manuscrit prêt pour bêta-lecteurs → demande à l'utilisateur de leur envoyer `7_outils/feedback_humain.md`
- Découverte d'un problème majeur → `/writing-write` ou `/writing-trame` selon l'ampleur
- Confusion → `/writing-help`

## Sortie attendue

- Checklists `6_revision/checklist_acte*.md` cochées
- `6_revision/verification_finale.md` complète
- Score sur grille `/70` calculé et enregistré
- Plan de réécriture si nécessaire
