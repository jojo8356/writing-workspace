# _output — Dossier de sortie par défaut

> **Inspiré du dossier `_bmad-output/` de BMAD-METHOD.**
> Ici sont rangés les artefacts générés lors du remplissage des templates.

## Pourquoi ce dossier existe

Quand tu remplis un template (ex : `0_fondamentaux/pitch.md`), tu peux choisir :

1. **Le remplir directement** dans le fichier source (modification du template)
2. **Demander à Claude de générer une version remplie** dans `_output/templates_remplis/` (préserve le template original)

L'option 2 est utile quand :
- Tu veux **garder le template intact** pour un futur projet
- Tu veux **comparer plusieurs versions** d'un même template
- Tu veux **un dossier propre** sans casser la structure de base

## Structure

```
_output/
├── README.md (ce fichier)
└── templates_remplis/
    ├── pitch_v1.md
    ├── pitch_v2.md
    ├── protagoniste_v1.md
    └── ...
```

## Comment changer ce dossier de sortie par défaut

Si tu préfères un autre emplacement :

1. Dans tes demandes à Claude, précise : *"Sauvegarde dans `[chemin]` au lieu de `_output/`"*
2. Ou modifie ce comportement par défaut dans `HELP.md` (section "Configuration")

## Convention de nommage

`{nom_template}_{version_ou_date}.md`

Exemples :
- `pitch_v1.md` → première version du pitch
- `pitch_2026-05-09.md` → version datée
- `protagoniste_marc.md` → version pour un perso nommé Marc
