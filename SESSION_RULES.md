# Règles de gestion des sessions Claude

> **Pourquoi ce fichier existe** : ne pas tout faire dans une seule conversation Claude.
> Une session trop longue ou polluée par plusieurs types de travail dégrade la qualité.

## Les 7 signaux pour changer de session

### 1. Changement de phase de travail
- Conception → Écriture : **nouvelle session recommandée**
- Écriture → Révision : **nouvelle session FORTEMENT recommandée**
- Révision → Réécriture après bêta-lecteurs : **nouvelle session obligatoire**

### 2. Volume de tokens élevé
- Au-delà de ~50 000 tokens cumulés → nouvelle session
- L'historique long sature le contexte

### 3. Travail sur plusieurs persos différents
- Focus sur UN perso par session (sauf si comparaison)

### 4. Travail sur plusieurs chapitres
- Au-delà de 3 chapitres → pause + nouvelle session

### 5. Dérive hors-écriture
- Si la conversation parle d'autre chose → clore proprement

### 6. Fatigue cognitive
- Si la qualité de tes échanges chute → arrête

### 7. Frustration / perte
- Si tu te sens perdu → nouvelle session "fraîche" avec objectif réduit

## Workflow par type de session

### Session "Conception"
- **Skills à utiliser** : `/writing-init`, `/writing-pitch`, `/writing-characters`, `/writing-trame`
- **Durée typique** : 1-3h
- **Sortie** : fichiers dans `0_fondamentaux/`, `1_personnages/`, `3_trame/` remplis

### Session "Écriture"
- **Skills à utiliser** : `/writing-write`
- **Durée typique** : 1-4h (selon ta concentration)
- **Sortie** : 1-3 chapitres dans `5_ecriture/brouillon/`

### Session "Révision"
- **Skills à utiliser** : `/writing-revise`
- **Durée typique** : 2-4h
- **Sortie** : checklist cochée + score sur grille `/70`

### Session "Worldbuilding ponctuel"
- **Skills à utiliser** : pas de skill spécifique, lis le guide section IX
- **Durée typique** : 30 min - 2h
- **Sortie** : `2_univers/` mis à jour

### Session "Réflexion sur une œuvre lue"
- **Skills à utiliser** : aucun, utilise le template `7_outils/lecture_critique.md`
- **Durée typique** : 30 min - 1h
- **Sortie** : ajout à `0_fondamentaux/mon_corpus_personnel.md`

## Quand NE PAS changer de session

- Tu es dans un flow productif (continue tant que ça avance)
- Tu travailles sur UN perso UN concept UN chapitre
- Moins d'1h dans la session

## Avant de clore une session

Toujours faire :

1. **Mise à jour de `7_outils/suivi_quotidien.md`** :
   ```
   ### [Date d'aujourd'hui]
   - Objectif : ...
   - Mots écrits : ...
   - Chapitre travaillé : ...
   - Sentiment : (fluide / difficile / bloqué / inspiré)
   - Note pour la prochaine session : [le plus important]
   ```

2. **Lister les 3 prochaines actions** pour quand tu reviendras

3. **Commit Git** si du travail a été fait :
   ```bash
   git add .
   git commit -m "Session [date] — [résumé]"
   git push
   ```

## Pour reprendre une nouvelle session

1. Ouvre une nouvelle conversation Claude
2. Tape `/writing-init` (il détectera où tu en es)
3. OU tape `/writing-help` (pour voir tes 3 prochaines actions)
4. OU tape directement le skill dont tu as besoin : `/writing-write`, `/writing-revise`, etc.

## Le skill `/writing-session`

Tu peux aussi invoquer `/writing-session` à tout moment pour que Claude évalue si tu devrais changer de session.

## Conseil pratique

> **Une session = un objectif clair. Si tu ne peux pas définir l'objectif en une phrase, tu n'es pas prêt à commencer la session.**

Exemple de bon objectif :
- ✅ "Construire le protagoniste et passer son test de robustesse"
- ✅ "Écrire le chapitre 7"
- ✅ "Réviser l'Acte II"

Exemple de mauvais objectif :
- ❌ "Travailler sur le roman"
- ❌ "Faire avancer le projet"
