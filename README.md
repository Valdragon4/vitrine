# valentin-marot.fr

Site vitrine de [Valentin Marot](https://valentin-marot.fr) — développeur web &
DevOps freelance. Next.js, rendu 3D temps réel, formulaire de contact, et un
déploiement continu sur infrastructure auto-hébergée.

## Pile

| | |
|---|---|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript 5 |
| **Styles** | Tailwind CSS 3.4 |
| **3D** | three.js via `@react-three/fiber` et `@react-three/drei` |
| **Analytics** | PostHog (`posthog-js` côté client, `posthog-node` côté serveur) |
| **Contact** | `nodemailer` |
| **Conteneur** | image multi-étages `node:20-alpine` |

Le code applicatif vit dans `src/` : `app/` (routes App Router), `components/`,
`lib/`.

## Développer

```sh
npm install
npm run dev          # http://localhost:3000
```

Ou en conteneur, avec `Dockerfile.dev` :

```sh
docker compose up
```

Les clés PostHog sont injectées **au build** (`NEXT_PUBLIC_POSTHOG_KEY`) ; elles
ne sont pas dans le dépôt. Copier les variables nécessaires dans un `.env` local,
que `.gitignore` exclut.

## Déploiement

Le déploiement est **automatique** : toute poussée sur `main` déclenche
`.github/workflows/deploy.yml`. Les changements purement documentaires
(`README.md`, `.gitignore`, `docs/`) sont exclus par `paths-ignore` — ils ne
redéploient pas le site.

La chaîne, et la raison de sa forme :

```
push main
  └─ runner auto-hébergé (valdragon2)
       ├─ build de l'image Next.js
       ├─ pose du tag `vitrine-vitrine:rollback` sur Server
       ├─ docker save | ssh Server docker load
       ├─ git reset --hard origin/main + docker compose up -d --no-build
       └─ vérification : curl interne (:3002) puis public (https://valentin-marot.fr)
```

**Server ne build jamais.** C'est un Core 2 Duo qui porte le reverse-proxy nginx
d'une vingtaine de vhosts ; un build Next.js l'avait saturé (load 7+). Le build
a donc été déplacé sur la machine applicative, et Server ne reçoit qu'une image
déjà construite.

### Retour arrière

Le tag `rollback` pointe sur l'image qui tournait avant le dernier déploiement :

```sh
ssh Server
cd ~/vitrine
docker tag vitrine-vitrine:rollback vitrine-vitrine:latest
docker compose up -d --no-build
```

> ⚠️ Le déploiement fait `git reset --hard` dans `~/vitrine` sur Server : toute
> modification locale non commitée y est écrasée. Le healthcheck est commité
> dans le dépôt précisément pour cette raison.
