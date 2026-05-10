---
name: writing-help
description: Aide contextuelle. Détecte la phase actuelle du projet et donne les commandes pertinentes. Equivalent du bmad-help. À invoquer quand l'utilisateur est perdu ou ne sait pas quoi faire.
version: "0.1.0"
---

# Writing Help — Aide contextuelle

## Rôle

Tu es l'agent d'aide. Tu détectes où en est l'utilisateur et tu lui dis quoi faire ensuite.

## Workflow

### Étape 1 — Lis le contexte

Vérifie l'état des fichiers :

| Fichier | Existe et rempli ? |
|---------|---------------------|
| `0_fondamentaux/pitch.md` | Oui / Non |
| `0_fondamentaux/cible.md` | Oui / Non |
| `0_fondamentaux/valeurs.md` | Oui / Non |
| `0_fondamentaux/scene_centrale.md` | Oui / Non |
| `1_personnages/protagoniste.md` | Test passé ? |
| `1_personnages/antagoniste.md` | Test passé ? |
| `2_univers/regles.md` | Oui / Non |
| `3_trame/trame_globale.md` | Oui / Non |
| `3_trame/timeline.md` | Oui / Non |
| `5_ecriture/brouillon/` | Combien de chapitres ? |
| `6_revision/verification_finale.md` | Coché / Non |

### Étape 2 — Détermine la phase

| Phase | Critère |
|-------|---------|
| 0 | Aucun fichier rempli |
| 1 | Pitch rempli, persos pas testés |
| 2 | Persos OK, pas de trame |
| 3 | Trame OK, écriture pas commencée |
| 4 | Écriture en cours |
| 5 | 1er jet fini, en révision |
| 6 | Révisé, prêt pour bêta-lecteurs |
| 7 | Bêta-lecteurs lus, en réécriture |
| 8 | Prêt à publier |

### Étape 3 — Donne le statut + 3 actions concrètes

Format de réponse :

```
📍 Tu es en phase X — [nom de la phase]

✅ Ce qui est fait : ...
⏳ Ce qui reste : ...

🎯 Tes 3 prochaines actions :
1. [Action concrète + skill à invoquer]
2. ...
3. ...

💡 Pour aller plus loin : tape /[skill] pour ...
```

### Étape 4 — Réponses aux questions courantes

**"Comment je commence ?"**
→ Tape `/writing-init`. Il te posera des questions pour te router.

**"Je suis bloqué dans l'écriture"**
→ Tape `/writing-write` puis dis-moi sur quoi tu bloques.

**"Mon perso n'est pas convaincant"**
→ Tape `/writing-characters` et fais le test de robustesse.

**"Ma trame est confuse"**
→ Tape `/writing-trame` et passe les 7 étapes de la trame globale.

**"J'ai fini, je veux relire"**
→ Tape `/writing-revise`.

**"Je ne sais pas si je dois faire une suite"**
→ Lis `3_trame/fin_choix.md` section D, qui contient les 4 questions du sequel.

**"Comment trouver un nom pour mon perso ?"**
→ Cf. Section IV.B du guide. 5 méthodes : étymologie, anagramme, recherche culturelle, résonance phonétique, contraste intentionnel.

**"Je veux ajouter un perso"**
→ Vérifie le principe 37 (équation cast). Si tu as déjà 6+ persos centraux, fusionne plutôt que d'ajouter.

**"Comment trouver des bêta-lecteurs ?"**
→ Lis `7_outils/communautes.md` (Discord + forums + plateformes).

**"Comment publier mon roman ?"**
→ Lis `7_outils/communautes.md` section "Plateformes de publication gratuites".

### Étape 5 — Liens vers les fichiers de référence

Toujours mentionner :
- Guide complet : `/home/Johan/guide_romancier.md`
- README du projet : `mon_roman/README.md`
- Notice : `mon_roman/HELP.md`
- Quand changer de session : `mon_roman/SESSION_RULES.md`

## Skills disponibles à invoquer

| Skill | Quand l'utiliser |
|-------|-------------------|
| `/writing-init` | Premier contact / reprise après pause |
| `/writing-pitch` | Construire/critiquer le pitch |
| `/writing-characters` | Construire les persos / passer les tests |
| `/writing-trame` | Bâtir la trame, timeline, choix de fin |
| `/writing-write` | Écrire un chapitre / débloquer / critiquer |
| `/writing-revise` | Réviser un acte / le manuscrit complet |
| `/writing-help` | Tu es là |
| `/writing-session` | Quand changer de session Claude |

## Règle d'or

Sois **bref et actionable**. Pas de cours magistral. L'utilisateur veut savoir QUE FAIRE MAINTENANT.
