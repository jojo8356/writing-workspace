---
name: writing-trame
description: Construit la trame narrative globale (7 étapes), la timeline exacte, les scènes-clés et la décision de fin (ouverte ou fermée). À invoquer après le pitch et la construction des personnages, AVANT de commencer l'écriture.
version: "0.1.0"
---

# Writing Trame — Trame narrative + Timeline + Choix de fin

## Rôle

Tu aides l'utilisateur à bâtir le SQUELETTE de son histoire (la trame), la cartographier dans le temps (timeline), identifier les scènes-clés, et décider du type de fin.

## Workflow en 4 phases

### Phase A — Trame globale (Section V.A du guide)

Applique les 7 étapes en ordre :

1. **Le but** — récupère du `0_fondamentaux/pitch.md`
2. **Les 3 piliers** — déclencheur, point milieu, climax
3. **Le pire moment** — "tout est perdu" à 75% (attaque la faiblesse fondatrice)
4. **Remontée** — chaîne causale inverse depuis le pire moment
5. **Déclencheur** — qui sort le héros de son quotidien (et pourquoi MAINTENANT)
6. **Résolution** — comment il sort (ou pas) de la crise
7. **Vérification causalité** — chaque événement cause le suivant

Pose les questions UNE PAR UNE et remplis `3_trame/trame_globale.md`.

### Phase B — Timeline (Section V.B)

Méthode en 6 étapes :

1. Âge du héros au climax → ancre temporelle
2. Remonter les événements passés (backstory)
3. Durée de l'intrigue présente (jours, mois, années ?)
4. Cartographier chapitre par chapitre dans `3_trame/timeline.md`
5. Placer les flashbacks (avec leur déclencheur émotionnel)
6. Test de cohérence par perso secondaire (que fait-il hors-scène ?)

### Phase C — Scènes-clés (Section V.A étendue)

Identifie les 13 scènes obligatoires + scènes spécifiques au roman :

**Obligatoires** :
1. Image d'ouverture
2. Présentation héros ordinaire
3. Faiblesse fondatrice montrée
4. Incident déclencheur
5. Passage du seuil
6. Premier vrai obstacle
7. Point milieu (50%)
8. Crise (~65-70%)
9. Tout est perdu (~75%)
10. Nuit noire de l'âme
11. Climax
12. Résolution
13. Image de fin (miroir de l'ouverture)

**Spécifiques** : amour, trahison, révélation, adieu, etc.

Remplis `3_trame/scenes_cles.md`.

### Phase D — Choix de fin (Section V.C)

Pose les 5 questions :

1. As-tu promis une résolution ? → fermée obligatoire si oui
2. Lecteur investi dans la réponse OU la question ?
3. Quel est le thème central ? (action/vengeance → fermée ; existentialisme → ouverte possible)
4. Le lecteur peut-il compléter lui-même ?
5. As-tu l'intention d'une suite ?

Décide : **fin fermée, semi-ouverte, ou ouverte**.

Remplis `3_trame/fin_choix.md`.

## Tests à valider

Avant de considérer la trame OK :

- [ ] Le pitch en 5 phrases est résumable depuis la trame
- [ ] Chaque événement cause le suivant (causalité)
- [ ] Le pire moment attaque la faiblesse fondatrice
- [ ] La résolution paie la promesse du début
- [ ] La timeline est cohérente (pas de perso à 2 endroits)
- [ ] La scène centrale passe le test du retrait
- [ ] La décision de fin est argumentée

## Identification de LA scène centrale

À la fin du processus, demande à l'utilisateur :
> "Si tu retires UNE scène et que tout l'édifice s'effondre, c'est laquelle ?"

C'est ta scène centrale. Remplis `0_fondamentaux/scene_centrale.md` avec les 5 critères.

## Routes vers d'autres skills

- Trame validée → `/writing-write` (commence à écrire)
- Si la trame révèle un perso faible → reviens à `/writing-characters`
- Si confusion → `/writing-help`

## Erreurs à corriger

- **"Et puis voilà ils ont fait ça parce que..."** → ce n'est pas causal, à réécrire
- **Pire moment qui n'attaque pas la faiblesse fondatrice** → mauvais pire moment
- **Climax qui paie autre chose que la promesse initiale** → trahison du contrat (principe 31)

## Sortie attendue

Fichiers remplis :
- `3_trame/trame_globale.md`
- `3_trame/timeline.md`
- `3_trame/scenes_cles.md`
- `3_trame/fin_choix.md`
- `0_fondamentaux/scene_centrale.md`
