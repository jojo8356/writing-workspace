---
name: writing-session
description: Détecte si la session Claude actuelle doit être close et une nouvelle démarrée. Recommande la fin de session selon : durée, type de travail à venir, fatigue cognitive. À invoquer en cas de doute, ou Claude doit l'invoquer automatiquement quand certains seuils sont atteints.
version: "0.1.0"
---

# Writing Session — Gestionnaire de sessions

## Rôle

Tu détectes quand une session Claude doit être close et une nouvelle démarrée. Une session = un fil de conversation cohérent. Trop long = perte de contexte. Mauvais type de travail dans la même session = pollution mentale.

## Quand changer de session — les 7 signaux

### Signal 1 — Changement de phase de travail

Si l'utilisateur passe de :
- Conception (sections 0-3) → Écriture (section 5) : **Nouvelle session recommandée**
- Écriture → Révision : **Nouvelle session FORTEMENT recommandée**
- Révision → Réécriture après bêta-lecteurs : **Nouvelle session obligatoire**

> Pourquoi : chaque phase a un mode mental différent. Mélanger pollue.

### Signal 2 — Volume de tokens élevé

Si la conversation dépasse ~50 000 tokens (estimable par la longueur cumulée des messages) :
- **Recommande la nouvelle session**
- L'historique long sature le contexte et augmente les chances d'erreurs

### Signal 3 — Travail sur plusieurs persos différents

Si la session a discuté du protagoniste ET de l'antagoniste ET d'un secondaire :
- **Recommande de focus sur UN perso par session**
- Sauf si le travail est de COMPARER (ex : tableau de pondération)

### Signal 4 — Travail sur plusieurs chapitres différents

Si l'utilisateur a écrit / révisé 3+ chapitres dans la même session :
- **Recommande une pause + nouvelle session pour le suivant**
- L'écriture demande une concentration élevée

### Signal 5 — Conversation qui dévie vers du non-écriture

Si l'utilisateur commence à parler d'autre chose (autre projet, vie perso longue) :
- **Recommande de clore la session écriture** et d'ouvrir une autre conversation
- Préserve la pureté du contexte écriture

### Signal 6 — Heure tardive / fatigue cognitive

Si l'utilisateur écrit avec fautes croissantes / phrases moins cohérentes :
- **Recommande l'arrêt** : la qualité chute, mieux vaut reprendre demain
- Note la session dans `7_outils/suivi_quotidien.md` avec le sentiment de la session

### Signal 7 — Utilisateur explicitement perdu / frustré

Si l'utilisateur exprime de la frustration ou se sent perdu :
- Propose une **nouvelle session "fraîche"** avec un objectif réduit
- Invoque `/writing-help` pour reprendre les bases

## Comment recommander une nouvelle session

Format :

```
🛑 Je recommande de clore cette session.

Raisons :
- [Signal 1 + détails]
- [Signal 2 + détails]

Avant de fermer :
1. Je sauvegarde l'état dans `7_outils/suivi_quotidien.md`
2. Je note les blocages dans `5_ecriture/notes/deblocages.md`
3. Je liste les 3 prochaines actions pour la prochaine session

Pour reprendre dans une nouvelle session :
- Ouvre une nouvelle conversation Claude
- Tape `/writing-init` pour qu'il te route rapidement
- Ou tape `/writing-help` pour voir où tu en es
```

## Sauvegarde d'état avant fermeture de session

Toujours faire :

1. **Mise à jour de `7_outils/suivi_quotidien.md`** :
   ```
   ### [Date]
   - Objectif : ...
   - Mots écrits : ...
   - Chapitre travaillé : ...
   - Sentiment : ...
   - Note pour la prochaine session : [LE PLUS IMPORTANT]
   ```

2. **Liste des 3 prochaines actions** pour quand l'utilisateur reviendra

3. **Commit Git** si du travail a été fait :
   ```bash
   git add . && git commit -m "Session [date] — [résumé]"
   ```

## Quand NE PAS changer de session

- L'utilisateur est dans un flow productif (chapitre qui avance bien) → **continue**
- Le travail est sur UN perso UN concept UN chapitre → **continue**
- Moins de 1h dans la session → probablement pas besoin de changer

## Exemple

> User a écrit 2000 mots, maintenant veut faire du worldbuilding
>
> Toi : "Tu viens de finir une session d'écriture solide (2000 mots, chapitre __ ). Je recommande de **clore cette session** avant de basculer sur le worldbuilding — c'est un mode mental différent.
>
> Je sauvegarde le suivi quotidien et note tes 3 prochaines actions.
>
> Quand tu reviendras, ouvre une nouvelle conversation et tape `/writing-trame` pour bâtir l'univers proprement."

## Routes vers d'autres skills

- Pour reprendre fraîchement → `/writing-init` ou `/writing-help`
- Pour planifier la prochaine session → consulter `7_outils/suivi_quotidien.md`
