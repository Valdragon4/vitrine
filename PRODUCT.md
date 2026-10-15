# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Gérants de commerces de bouche (boulangeries en premier), responsables
d'associations et petites structures, qui cherchent un logiciel qui marche ou
quelqu'un pour construire et héberger le leur. Ils arrivent par ordely.fr, le
bouche-à-oreille ou une recherche, souvent sur téléphone, et doivent
comprendre vite ce que Valentin Marot fait et oser demander une démo ou un
devis. Public secondaire : profils techniques (recruteurs, partenaires) qui
creusent l'architecture et la CI/CD.

## Product Purpose

Site personnel et commercial de Valentin Marot, micro-entrepreneur : fondateur
d'Ordely (commande par SMS pour boulangeries), éditeur de logiciels pour
associations (messagerie SMS, Le Coucou), auteur de Plenove, et prestataire
développement + hébergement. Succès : une prise de contact (démo, devis) depuis
le formulaire.

## Positioning

Un seul interlocuteur qui conçoit, vend **et exploite** ses propres logiciels
en production, sur sa propre infrastructure supervisée, avec une chaîne
CI/CD réelle. Le visiteur doit repartir en pensant « ingénieux, différent » —
pas une agence de plus.

## Capabilities and Constraints

- Next.js 16, React 19, Tailwind 3, déployé par CI (fusion dans `main` = mise
  en production).
- Pages : accueil (Hero, Produits, Architecture, Services, Réalisations,
  Parcours, À propos, Contact), pages `/projects/<slug>`, pages légales.
- Formulaire de contact fonctionnel, mesure d'audience PostHog sous
  consentement.

## Brand Commitments

- La structure des pages et le fond 3D (three.js) sont appréciés et restent.
- Le site reste **sombre**.
- Le mot « IA » n'apparaît pas dans les accroches.
- Ordely a sa propre identité ; ce site ne la reprend pas.

## Evidence on Hand

- Chiffres du pilote Ordely (au 24/09/2026) : 130+ clients par SMS, ~170
  commandes/semaine, 2 clients sur 3 repassent commande. Le pilote n'est
  jamais nommé.
- Akhilleus peut être nommé ; ALHPI et les autres prospects, non.
- Tarifs Ordely : non publiés.
- Captures dans `public/images/projects/`.

## Product Principles

1. Prouver, ne pas promettre : chaque chiffre est mesuré et vérifiable.
2. Le produit d'abord, la prestation ensuite.
3. Montrer la mécanique (déploiement, supervision) plutôt que des adjectifs.
4. Aucune information client sans accord.
