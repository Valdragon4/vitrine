# Design — valentin-marot.fr

Système visuel « plaque émaillée », adopté le 2026-10-15. La structure des
pages et le fond 3D (three.js) préexistent et restent ; ce document fixe ce
qui a été remplacé : couleurs, arrondis, typographie.

## Monde

Les plaques de rue émaillées : cadres bleu émail, filet blanc incrusté à
quelques pixels du bord, lettrage blanc étroit. Posées sur un fond graphite,
avec un seul accent jade. Le site est sombre, par choix arrêté.

## Couleurs

Tout passe par les variables de `src/app/globals.css` (`:root`), exposées à
Tailwind sous des noms sémantiques. Aucune couleur en dur dans les composants.

| Rôle | Variable / classe | Valeur |
|---|---|---|
| Fond de page | `--page` / `bg-page` | `#0a0a0b` graphite |
| Plaque (cadres) | `--card` / `bg-card` | `#13306f` bleu émail |
| Texte, du plus clair au plus sombre | `--ink-50…950` / `text-ink-*` | `#f6f8fb` → `#0a1530` (neutres bleutés) |
| Accent | `--signal-400` / `text-signal-400` | `#7ed3a8` jade |
| Bouton principal | `--signal-500` / `bg-signal-500` | `#f4f6f8` blanc émail, texte `ink-950` |
| Scène 3D | `--scene-line`, `--scene-signal`, `--scene-wire` | `#dce3ee`, `#7ed3a8`, `#2a3f70` |

Contrastes mesurés (WCAG) : texte le plus faible sur plaque 4,84:1
(`ink-500`), sur page 7,66:1 ; bouton 16,7:1.

## Arrondis

`--radius-sm` 3 px (badges), `--radius-md` 6 px (boutons, champs),
`--radius-lg` 12 px (plaques). Les classes `rounded`, `rounded-lg`,
`rounded-xl`, `rounded-2xl` y sont remappées dans `tailwind.config.js`.

## Le filet de plaque

Seuls les cadres à fond `bg-card` avec bordure et `rounded-xl`/`2xl`
reçoivent le filet (`::after`, inset 5 px, 1,5 px, blanc à 70 %). Il est
tracé **au-dessus** du contenu : une image qui remplit la plaque reste
encadrée. Un encadré posé dans une plaque n'en reçoit pas un second.

## Typographie

- Titrage : **Barlow Condensed** (500–700), via `font-display`.
- Texte : **Barlow** (400–700).
- **JetBrains Mono** seulement pour les mots-commandes en filigrane
  (`SectionWatermark`) — jamais comme déguisement « technique ».
- Pas de sur-titres ni d'étiquettes en capitales espacées : les libellés sont
  en casse normale, en graisse semi-grasse.

## Navigation

« Retour » sur une page projet revient à la page précédente du site, à la
hauteur exacte (`NavigationTracker` + `BackButton`) ; un visiteur arrivé
directement est renvoyé vers `/#projets`.
