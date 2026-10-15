import {
  MessageSquare,
  Server,
  Plug,
  LayoutDashboard,
  TrendingUp,
  Mail,
  Play,
  Layers,
  HardDrive,
  GitPullRequest,
  Globe,
  Send,
  Bell,
  Fuel,
  type LucideIcon,
} from 'lucide-react';

/**
 * Source de vérité unique des projets.
 *
 * Consommée à la fois par la grille d'accueil (`ProjectsBento`) et par les
 * pages de détail `/projects/[slug]`. Toute donnée projet vit ici : dupliquer
 * un tableau dans un composant, c'est garantir qu'il divergera.
 */
export interface ProjectItem {
  slug: string;
  title: string;
  /** Situation de départ, affichée barrée dans la grille. */
  problem: string;
  /** Ce que le projet a changé. */
  result: string;
  /** Résumé court : grille et chapô de la page de détail. */
  description: string;
  /** Poids dans la grille bento. */
  size: 'large' | 'medium' | 'small';
  icon: LucideIcon;
  badges: string[];
  /** Pile affichée dans la grille — volontairement courte. */
  technologies: string[];
  /** Pile complète, page de détail. */
  stack: string[];
  /** Texte long de la page de détail. */
  fullDescription: string;
  features: string[];
  challenges: string;
  results: string;
  duration: string;
  /** Image principale : carte de la grille et ouverture de la page projet. */
  image?: string;
  /** Images complémentaires, page de détail uniquement. */
  gallery?: { src: string; alt: string; caption: string }[];
  demo?: string;
  github?: string;
  /**
   * Présent sur les seuls produits que j'édite ou que je vends. Ils sont
   * présentés dans la section Produits, et non dans la grille des
   * réalisations : un produit se juge à ses clients, pas à sa pile.
   */
  product?: {
    /** À qui il s'adresse, dans les mots du client. */
    audience: string;
    /** Où il en est, sans arrondir vers le haut. */
    status: string;
    /** Faits mesurés, jamais des objectifs. */
    metrics?: { value: string; label: string }[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'ordely',
    title: 'Ordely',
    problem: 'Commandes prises au téléphone, une par une',
    result: 'Commandes par SMS, comprises et traitées seules',
    description:
      "Le carnet de commandes des boulangeries. Le client écrit un SMS comme il écrirait à son boulanger ; Ordely comprend la demande, vérifie catalogue, stock et horaires, répond et enregistre la commande.",
    product: {
      audience: 'Boulangeries et commerces de bouche',
      status: 'En production depuis août 2026',
      metrics: [
        { value: '140+', label: 'clients commandent par SMS' },
        { value: '~170', label: 'commandes gérées par semaine' },
        { value: '3 sur 4', label: 'clients repassent commande' },
      ],
    },
    size: 'large',
    icon: MessageSquare,
    badges: ['Production', 'SaaS'],
    technologies: ['Flask', 'Next.js', 'MariaDB', 'Redis'],
    stack: [
      'Python 3.12',
      'Flask',
      'SQLAlchemy',
      'Next.js 15',
      'React 19',
      'MariaDB 11.4',
      'Redis Streams',
      'Docker',
      'Stripe',
      'OpenAI',
      'GitHub Actions',
    ],
    fullDescription:
      "Ordely est mon produit : je l'ai conçu, je le développe, je l'héberge et je le vends. Il permet à une boulangerie de recevoir ses commandes par SMS plutôt qu'au téléphone pendant le rush — sans rien demander au client final, ni application ni mot-clé. Les commandes par SMS, au comptoir, en ligne et des clients réguliers arrivent au même endroit, et une fiche de production dit chaque matin quoi préparer, pour qui et pour quand. Côté technique, le message arrive par une passerelle SMS, part dans une file Redis Streams, passe par une analyse en langage naturel qui en extrait produits, quantités et créneau de retrait, puis rejoint le traitement des commandes qui répond au client. Le message arrive par une passerelle SMS, part dans une file Redis Streams, passe par une analyse en langage naturel qui en extrait produits, quantités et créneau de retrait, puis rejoint le traitement des commandes qui répond au client. Chaque étape est un service distinct : la réception ne dépend pas de l'analyse, et l'analyse ne bloque pas la confirmation. Côté commerçant, une interface web par enseigne ; côté plateforme, un back-office d'administration multi-tenant et une facturation à l'abonnement.",
    features: [
      'Analyse des SMS en langage naturel, y compris mal orthographiés',
      "Pipeline découplé en files d'attente : réception, analyse, commandes, réponses",
      'Neuf workers spécialisés en production, chacun sur une responsabilité',
      'Multi-tenant : chaque commerce a son interface et ses données',
      'Abonnements et cycle de vie client automatisés',
      'Purge RGPD automatique des clients finaux inactifs',
    ],
    challenges:
      "Comprendre des SMS écrits à la va-vite, sans ponctuation ni orthographe fiable. Isoler les données de chaque commerce sur une plateforme partagée. Et faire remonter la vraie adresse IP du client à travers deux couches de reverse-proxy — un réglage faux et c'est le journal d'audit, la limitation de débit et l'IP de consentement RGPD qui deviennent faux avec lui.",
    results:
      "En production depuis août 2026 dans une boulangerie familiale de l'Aube. Au 15 octobre 2026 : plus de 140 clients y commandent par SMS, environ 170 commandes par semaine, plus de trois clients sur quatre ont déjà recommandé, 46 clients réguliers sont servis sans ressaisie, et près d'un SMS sur six arrive avant 7 h ou après 20 h — des commandes qui, avant, n'arrivaient pas. Le dépôt compte plus de 1 300 commits et dix chaînes d'intégration continue : tests et audit des dépendances, construction des images, déploiement avec sauvegarde de la base avant migration, contrôle de santé, maintenance, versionnage sémantique, notes de mise à jour et retour arrière.",
    duration: '2024 — en cours',
    image: '/images/projects/ordely.png',
    gallery: [
      {
        src: '/images/projects/ordely-vitrine-2610.png',
        alt: 'Page d’accueil publique d’Ordely : un SMS client et sa confirmation automatique',
        caption:
          'La page publique du produit. Le commerçant n’installe rien chez ses clients : la commande arrive par SMS ordinaire.',
      },
    ],
    demo: 'https://ordely.fr',
  },
  {
    slug: 'messagerie-sms',
    title: 'Messagerie SMS',
    problem: 'Prévenir 1 200 adhérents depuis un portable personnel',
    result: 'Des campagnes envoyées depuis les téléphones de la structure',
    description:
      "Diffusion de SMS pour les associations, depuis leurs propres téléphones et cartes SIM. Écrire à tous les adhérents d'un coup, ou — bien plus souvent — à un groupe de dix à trente personnes.",
    product: {
      audience: 'Associations et structures médico-sociales',
      status: 'Prête · déploiement en cours chez Akhilleus',
      metrics: [
        { value: '~1 200', label: 'adhérents visés par le premier déploiement' },
      ],
    },
    size: 'medium',
    icon: Send,
    badges: ['Produit', 'En déploiement'],
    technologies: ['Next.js', 'PostgreSQL', 'Android'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Passerelle SMS privée', 'Application compagnon Android'],
    fullDescription:
      "Une association qui veut écrire à ses adhérents a deux mauvaises options : le portable personnel d'un bénévole, ou un service d'envoi en masse facturé au message. Cette solution prend une troisième voie : l'interface web compose les messages et les met en file, un moteur d'envoi les dépose sur une passerelle privée, et ce sont les téléphones de la structure, avec leurs propres forfaits, qui émettent. L'application web n'envoie jamais elle-même : une campagne à 1 200 destinataires ne peut pas dépendre d'un onglet de navigateur resté ouvert.",
    features: [
      'Envoi à toute l’association ou à des groupes ciblés',
      'Plusieurs téléphones de la structure, répartition des envois',
      'Moteur d’envoi découplé de l’interface : une campagne survit à la fermeture du navigateur',
      'Gestion des listes et des réglages par l’équipe, sans développeur',
      'Installation possible sur le serveur du client, en coordination avec son service informatique',
    ],
    challenges:
      "Les deux usages tirent dans des sens opposés : une campagne à 1 200 destinataires exige débit maîtrisé et reprise sur incident, alors qu'un message à quinze personnes doit partir tout de suite. Et Android bride en silence les envois au-delà de trente messages par demi-heure — l'ordre est accepté, le téléphone attend dans un placard qu'on tape sur son écran. La limite est documentée, et levée une fois pour toutes à la mise en service.",
    results:
      "Développée et éprouvée de bout en bout — campagnes, accusés de réception, réponses entrantes —, elle est en cours de déploiement à la Maison Sport-Santé Akhilleus, pour ses quelque 1 200 adhérents. La même solution est proposée à d’autres associations, en hébergement géré ou installée sur leur propre serveur.",
    duration: '2026 — en cours',
  },
  {
    slug: 'coucou-akhilleus',
    title: 'Le Coucou',
    problem: 'Des exercices conseillés, jamais refaits à la maison',
    result: 'Un exercice de 30 secondes, au rythme de chacun',
    description:
      "Application installable pour une maison sport-santé : comme l'oiseau d'une horloge, elle envoie à chaque inscrit un exercice de moins de trente secondes, par notification, au rythme qu'il a choisi.",
    product: {
      audience: 'Maisons sport-santé et leurs adhérents',
      status: 'En service depuis septembre 2026',
      metrics: [
        { value: '80', label: 'exercices réalisés en trois semaines' },
        { value: '22 sur 23', label: 'avis laissés sont positifs' },
      ],
    },
    size: 'small',
    icon: Bell,
    badges: ['Production', 'Client'],
    technologies: ['Next.js', 'PWA', 'Web Push'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL 16', 'Web Push (VAPID)', 'PWA', 'Docker'],
    fullDescription:
      "Réalisée pour la Maison Sport-Santé Akhilleus. L'adhérent s'inscrit depuis son téléphone, choisit son rythme, et reçoit ses micro-exercices en notification — sans passer par un magasin d'applications. L'équipe gère les exercices et les vidéos depuis un espace dédié. Même principe que la messagerie SMS : l'interface inscrit et met en file, un planificateur séparé choisit l'exercice au moment de l'envoi et pousse la notification.",
    features: [
      'Application installable depuis le navigateur, sans magasin d’applications',
      'Rythme choisi par chaque inscrit',
      'Exercice choisi au moment de l’envoi, pas à l’avance',
      'Espace équipe pour gérer exercices et vidéos',
      'Relances et purge automatiques',
    ],
    challenges:
      "Les notifications web passent par le service de chaque fabricant de navigateur — Google, Apple, Mozilla — chacun avec ses règles. Le planificateur doit tenir la journée de chaque inscrit sans jamais doubler un envoi ni en perdre un au redémarrage.",
    results: 'Mise en service le 25 septembre 2026 pour les adhérents d’Akhilleus. En trois semaines, 80 exercices ont été réalisés à la réception d’un coucou, et 22 des 23 avis laissés après un exercice sont positifs.',
    image: '/images/projects/coucou-2610.png',
    duration: '2026 — en cours',
  },
  {
    slug: 'plenove',
    title: 'Plenove',
    problem: 'La station la moins chère… à vingt minutes de détour',
    result: 'Le plein le plus malin, détour compris',
    description:
      "Application mobile qui croise les prix officiels des carburants, le véhicule et le trajet réel pour indiquer où faire le plein au meilleur coût total — détour compris.",
    size: 'small',
    icon: Fuel,
    badges: ['Mobile', 'En pause'],
    technologies: ['Flutter', 'FastAPI', 'OpenStreetMap'],
    stack: ['Flutter', 'Dart', 'Python', 'FastAPI', 'OSRM', 'Nominatim', 'OpenStreetMap', 'Google Play Billing', 'Docker'],
    fullDescription:
      "Les comparateurs affichent le prix au litre, pas ce que coûte vraiment le plein : une station moins chère de trois centimes ne vaut rien à vingt minutes de détour. Plenove part de la base officielle des prix (mise à jour toutes les dix minutes), de la consommation réelle du véhicule (base de l'ADEME) et du trajet calculé sur la route, puis classe les stations par coût total. L'application Flutter s'appuie sur une API que j'héberge, avec son propre calcul d'itinéraires et de géocodage sur OpenStreetMap.",
    features: [
      'Prix officiels des carburants, rafraîchis toutes les dix minutes',
      'Consommation du véhicule tirée de la base de l’ADEME',
      'Stations cherchées le long du trajet réel, pas seulement autour de soi',
      'Tri par coût total, temps de détour ou distance',
      'Itinéraires et géocodage auto-hébergés, sans service cartographique payant',
      'Abonnement Google Play, sans donnée personnelle conservée',
    ],
    challenges:
      "Calculer des itinéraires réels pour chaque recherche sans payer un service cartographique au volume : le moteur d'itinéraires et le géocodage tournent sur mes serveurs, à partir des données OpenStreetMap de la France entière.",
    results: "Application Android aboutie, avec abonnement intégré. Le projet est en pause depuis septembre 2026 : son moteur d'itinéraires, gourmand en mémoire, a été arrêté pour laisser la place aux services en production sur la même machine.",
    duration: '2026 — en cours',
  },
  {
    slug: 'homelab',
    title: 'Infrastructure',
    problem: 'Dépendre d’un hébergeur pour chaque service',
    result: 'Cinq machines, trois sites, tout sous contrôle',
    description:
      "L'infrastructure sur laquelle tournent mes produits et ceux de mes clients : cinq machines réparties sur trois sites, reliées par un VPN, supervisées, sauvegardées et documentées.",
    size: 'large',
    icon: Server,
    badges: ['Production', 'Infrastructure'],
    technologies: ['Linux', 'Docker', 'MikroTik', 'WireGuard'],
    stack: [
      'Ubuntu Server',
      'Docker',
      'nginx',
      'MikroTik RouterOS',
      'WireGuard',
      'Cloudflare',
      'keepalived',
      'Prometheus',
      'Grafana',
      'Loki',
      'GitHub Actions',
      'MkDocs',
    ],
    fullDescription:
      "Cinq machines réparties sur trois sites — trois au même endroit, une sur un second site, une chez un hébergeur — reliées par un tunnel WireGuard dont le routeur MikroTik est le concentrateur. Un hôte porte les applications, un autre le reverse-proxy et ses vhosts, un troisième la supervision et la domotique, un quatrième la production publique, et un hyperviseur Proxmox les machines virtuelles de laboratoire. Le réseau est segmenté en VLANs, l'administration du routeur est filtrée hors VPN, et tous les domaines publics passent derrière Cloudflare.",
    features: [
      'Environ 170 conteneurs actifs répartis sur le parc',
      'Reverse-proxy nginx d’une vingtaine de vhosts, certificats automatisés',
      'VPN WireGuard maillé entre les trois sites, réseau segmenté en VLANs',
      'Supervision Prometheus / Grafana / Loki, près de quatre-vingts règles d’alerte',
      'Trois runners d’intégration continue auto-hébergés',
      'Adresse virtuelle keepalived pour la bascule de l’hôte applicatif',
    ],
    challenges:
      "Faire cohabiter du matériel très inégal : l'un des hôtes est un Core 2 Duo de 2007 qui porte tout le reverse-proxy. Un build applicatif l'avait saturé ; la chaîne de déploiement a été refaite pour que la compilation ait lieu sur la machine applicative et que celui-ci ne reçoive qu'une image déjà construite.",
    results:
      "Aucun conteneur en défaut sur le parc. Les sauvegardes sont copiées hors site et restaurées chaque semaine pour être comparées à la base vivante — une sauvegarde n'est déclarée bonne qu'après restauration. L'ensemble est décrit dans 125 pages de documentation, journaux d'incidents compris — y compris les écarts constatés et les correctifs qui n'ont pas encore été appliqués.",
    duration: '2023 — en cours',
    image: '/images/projects/homelab-smart-anon.png',
  },
  {
    slug: 'mcp-infra',
    title: 'Serveur MCP d’infra',
    problem: 'Répondre de mémoire sur un parc qui bouge',
    result: 'Un agent qui lit l’état réel avant de répondre',
    description:
      "Un serveur MCP que j'ai écrit pour exposer l'état réel de mes cinq machines à un assistant IA : conteneurs, services, ports, réseau et documentation, en lecture seule.",
    size: 'medium',
    icon: Plug,
    badges: ['Outil interne', 'IA'],
    technologies: ['Python', 'MCP', 'systemd', 'MkDocs'],
    stack: ['Python', 'Model Context Protocol', 'systemd', 'SSH', 'Docker', 'MkDocs'],
    fullDescription:
      "Diagnostiquer une infrastructure de mémoire, c'est produire une réponse plausible et périmée. Ce serveur expose donc l'état vivant du parc à un assistant : bilan de santé de tout le parc en un appel, recherche d'un service sur toutes les machines à la fois, conteneurs et ports d'un hôte, journaux d'un service, configuration réseau du routeur, et recherche plein texte dans les 125 pages de documentation. Tous les outils sont en lecture seule : aucun ne redémarre, ne déploie ni ne supprime.",
    features: [
      'Bilan de santé de tout le parc en un seul appel',
      'Recherche d’un service ou d’un port sur tout le parc à la fois',
      'Conteneurs, services systemd et ports en écoute par machine',
      'Configuration réseau : VLANs, pare-feu, NAT, VPN, baux DHCP',
      'Recherche plein texte dans le corpus documentaire',
      'Lecture seule par conception — agir passe explicitement par SSH',
    ],
    challenges:
      "Croiser deux sources qui ne disent pas la même chose : la documentation énonce l'intention, les outils rapportent la réalité. L'écart entre les deux est souvent l'information recherchée, encore faut-il l'exposer sans la masquer.",
    results:
      "Le serveur tourne en service systemd sur l'hôte applicatif. Il a servi à établir l'inventaire qui a nourri la refonte de ce site : les chiffres affichés ici en sortent.",
    duration: '2026 — en cours',
    image: '/images/projects/mcp-infra.png',
  },
  {
    slug: 'openproject-reskin',
    title: 'OpenProject — refonte',
    problem: 'Interface dense, navigation en liste plate',
    result: 'Quinze écrans refaits, zéro fonction perdue',
    description:
      "Fork d'OpenProject dont j'ai reconstruit l'interface, sous une contrainte tenue d'un bout à l'autre : aucune fonctionnalité retirée.",
    size: 'medium',
    icon: LayoutDashboard,
    badges: ['Open source', 'UI/UX'],
    technologies: ['Ruby on Rails', 'Angular', 'SCSS'],
    stack: ['Ruby on Rails', 'Angular', 'SCSS', 'OpenProject 17.8', 'Docker'],
    fullDescription:
      "OpenProject est un outil de gestion de projet complet, à l'interface dense et à la navigation en liste plate. J'en ai reconstruit quinze écrans — contrôleur propre, vue propre, feuille de style propre — et réorganisé le menu global en trois groupes. Ce n'est pas un thème posé sur l'existant.",
    features: [
      'Quinze écrans reconstruits, des pages d’accueil aux frises et tableaux',
      'Menu global réorganisé : onze entrées refaites, aucune perdue',
      'Vocabulaire revu : « lots de travaux » devient Travail, « Gantt » devient Frise',
      'Chaque navigation garde une section « Vues classiques » vers l’original',
      'Soixante captures comparatives en thèmes clair et sombre',
    ],
    challenges:
      "« Aucune fonctionnalité retirée » est une contrainte, pas un slogan : une refonte qui simplifie en supprimant n'est plus comparable à l'original, elle change le produit. Le compte d'entrées de menu perdues est donc tenu à zéro, et chaque entrée d'origine a une destination.",
    results:
      "Quinze écrans comparés sur un protocole fixe : instance d'origine vierge contre sources modifiées, même version, mêmes données de démonstration, mêmes réglages de capture. Onze entrées de menu refaites, zéro perdue.",
    duration: '2026',
    image: '/images/projects/openproject-reskin.png',
    gallery: [
      {
        src: '/images/projects/openproject-origine.png',
        alt: 'Accueil d’OpenProject 17.8 dans sa version d’origine',
        caption:
          'La même page avant refonte, sur la même version et le même jeu de démonstration. Le menu global était une liste plate ; il est désormais groupé en Travailler, Collaborer et Suivre — sans qu’aucune entrée disparaisse.',
      },
    ],
    github: 'https://github.com/Valdragon4/Openproject-reskin',
  },
  {
    slug: 'dashboard-patrimoine',
    title: 'Dashboard patrimoine',
    problem: 'Un relevé à rapatrier à la main chaque mois',
    result: 'Comptes synchronisés, performances calculées',
    description:
      "Application de suivi de patrimoine qui se connecte directement aux banques et aux courtiers, sans import manuel de fichiers.",
    size: 'medium',
    icon: TrendingUp,
    badges: ['Production', 'Personnel'],
    technologies: ['Django', 'PostgreSQL', 'Celery'],
    stack: ['Django', 'Python', 'PostgreSQL 16', 'Celery', 'Redis', 'Docker'],
    fullDescription:
      "La plupart des outils de suivi de patrimoine demandent d'exporter un CSV puis de le réimporter. Celui-ci se connecte aux comptes et récupère transactions et soldes tout seul, chaque jour. Les identifiants sont chiffrés en base, chaque synchronisation est journalisée, et les performances sont recalculées à mesure.",
    features: [
      'Synchronisation automatique quotidienne, sans import de fichier',
      'Trois établissements pris en charge : Trade Republic, BoursoBank, Hello Bank',
      'Authentification à deux facteurs gérée pour le courtier',
      'Identifiants chiffrés en base (AES-256)',
      'Historique complet et journal détaillé de chaque synchronisation',
      'Tâches planifiées et files d’attente (Celery)',
    ],
    challenges:
      "Chaque établissement expose ses données autrement, et aucun ne propose d'interface prévue pour ça. Il a fallu gérer l'authentification à deux facteurs sans intervention humaine quotidienne, et stocker des identifiants bancaires d'une manière qui reste défendable.",
    results:
      "En service quotidien. La synchronisation supprime la saisie manuelle et garde l'historique exploitable sur la durée.",
    duration: '2024 — en cours',
    image: '/images/projects/dashboard-1.png',
    github: 'https://github.com/Valdragon4/Dashboard',
  },
  {
    slug: 'mailcow',
    title: 'Serveur mail',
    problem: 'Messagerie professionnelle chez un tiers',
    result: 'Messagerie auto-hébergée, délivrabilité tenue',
    description:
      "Serveur de messagerie complet auto-hébergé : envoi, réception, antispam, antivirus et webmail, pour le domaine professionnel.",
    size: 'small',
    icon: Mail,
    badges: ['Production'],
    technologies: ['Postfix', 'Dovecot', 'Rspamd'],
    stack: ['mailcow', 'Postfix', 'Dovecot', 'SOGo', 'Rspamd', 'ClamAV', 'Docker'],
    fullDescription:
      "Une messagerie professionnelle auto-hébergée, avec tout ce que cela suppose : envoi et réception sécurisés, filtrage du courrier indésirable, analyse antivirus, webmail et gestion multi-domaines. La partie délicate n'est pas l'installation, c'est la délivrabilité.",
    features: [
      'Envoi et réception chiffrés (SMTP, IMAP, POP3)',
      'Filtrage antispam et analyse antivirus des pièces jointes',
      'Webmail avec agenda et contacts',
      'Enregistrements SPF, DKIM et DMARC complets',
      'Gestion multi-domaines et multi-boîtes',
    ],
    challenges:
      "Un serveur mail neuf part avec une réputation nulle : sans SPF, DKIM et DMARC correctement posés, les messages finissent en indésirables. S'y ajoute l'exposition permanente d'un service ouvert sur Internet.",
    results:
      "En service quotidien pour les échanges professionnels du domaine, avec une bonne délivrabilité.",
    duration: '2025 — en cours',
  },
  {
    slug: 'media-stack',
    title: 'Media Stack',
    problem: 'Des contenus sans aucun sous-titre',
    result: 'Sous-titres générés puis traduits, tout seuls',
    description:
      "Chaîne média auto-hébergée qui génère les sous-titres absents à partir de la bande son, puis les traduit hors ligne.",
    size: 'small',
    icon: Play,
    badges: ['Auto-hébergé'],
    technologies: ['Jellyfin', 'Whisper', 'Docker'],
    stack: ['Jellyfin', 'Whisper', 'LibreTranslate', 'Sonarr', 'Radarr', 'Bazarr', 'Docker', 'VAAPI'],
    fullDescription:
      "Une bibliothèque média personnelle avec sa chaîne de traitement complète. Quand un contenu arrive sans sous-titres, la transcription automatique les produit à partir de l'audio, puis une traduction hors ligne les rend disponibles en français. Un worker d'encodage convertit ensuite les fichiers en HEVC avec accélération matérielle.",
    features: [
      'Lecture en streaming sur tous les appareils',
      'Sous-titres générés depuis la bande son quand ils manquent',
      'Traduction hors ligne, sans service tiers',
      'Encodage HEVC accéléré par le circuit graphique',
      'Chaîne de récupération et d’organisation automatisée',
    ],
    challenges:
      "Faire cohabiter la transcription, qui est gourmande, avec la lecture en direct sur la même machine. Le worker d'encodage tourne à la priorité la plus basse pour ne jamais concurrencer un visionnage en cours.",
    results:
      'En service quotidien. Tout nouveau contenu sans sous-titres en obtient automatiquement.',
    duration: '2024 — en cours',
    image: '/images/projects/media-stack.png',
  },
  {
    slug: 'table-virtuelle-mtg',
    title: 'Table virtuelle MTG',
    problem: 'Les tables en ligne arbitrent à votre place',
    result: 'Une vraie table : les joueurs arbitrent',
    description:
      "Table virtuelle multijoueur pour Magic, dans le navigateur, délibérément sans moteur de règles : le serveur assiste, il n'arbitre pas.",
    size: 'small',
    icon: Layers,
    badges: ['Open source'],
    technologies: ['TypeScript', 'PostgreSQL', 'Docker'],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
    fullDescription:
      "Les plateformes existantes appliquent les règles à votre place, ce qui interdit tout ce que le jeu autorise hors du cadre prévu. Ici, le serveur ne refuse jamais un geste au motif qu'il serait illégal : les joueurs arbitrent eux-mêmes, comme sur une vraie table. La frontière — assister est permis, arbitrer ne l'est pas — est écrite dans le protocole du projet, avec ce qu'elle coûte.",
    features: [
      'Parties multijoueur dans le navigateur, sans installation',
      'Aucun refus de geste au motif de légalité',
      'Import de decks depuis les principaux sites, ou en texte brut',
      'Comptes et persistance des parties côté serveur',
      'Base de cartes ingérée et tenue à jour en tâche de fond',
    ],
    challenges:
      "Tenir la frontière. Le serveur évalue malgré tout quelques règles pour dérouler certaines séquences qu'on lui demande de dérouler : la limite devait être écrite explicitement, sinon chaque demande d'assistance la repousse un peu.",
    results:
      "Démarrage en une commande : le conteneur applique le schéma, sert le client et déclenche l'ingestion des cartes.",
    duration: '2026 — en cours',
    image: '/images/projects/table-virtuelle-mtg.png',
    github: 'https://github.com/Valdragon4/Table-virtuel-mtg',
  },
  {
    slug: 'sauvegardes',
    title: 'Sauvegardes',
    problem: 'Des données critiques sans copie',
    result: 'Sauvegardes vérifiées tous les jours',
    description:
      "Dispositif de sauvegarde centralisant les données de plusieurs serveurs, avec vérification d'intégrité et restauration testée.",
    size: 'medium',
    icon: HardDrive,
    badges: ['Infrastructure'],
    technologies: ['restic', 'SFTP', 'Docker'],
    stack: ['Zerobyte', 'restic', 'SFTP', 'FUSE', 'Docker', 'Linux'],
    fullDescription:
      "Les données de plusieurs serveurs sont rassemblées vers un stockage dédié : bases, configurations système, certificats, vhosts et fichiers de service. Chaque exécution produit un relevé des artefacts vérifiés et des échecs, et les restaurations sont testées plutôt que supposées.",
    features: [
      'Sauvegardes planifiées et centralisées depuis plusieurs machines',
      'Montages distants chiffrés vers le stockage de destination',
      'Vérification d’intégrité à chaque exécution, avec relevé détaillé',
      'Restauration partielle ou complète depuis l’interface',
      'Pilotage par API pour l’automatisation',
    ],
    challenges:
      "Une montée de version a mis en évidence que les montages distants ignoraient la vérification des clés d'hôte. Le correctif retenu n'a pas été de désactiver le contrôle mais de constituer un fichier de clés vérifiées — chacune relevée sur le réseau puis recoupée avec la clé lue sur la machine elle-même. Deux montages s'authentifient par mot de passe : sans ce contrôle, ils les enverraient à n'importe quel serveur répondant à l'adresse.",
    results:
      'Exécution quotidienne, dix artefacts vérifiés par passage, zéro échec sur les dernières campagnes.',
    duration: '2025 — en cours',
    image: '/images/projects/zerobyte.png',
  },
  {
    slug: 'centreon-plugin',
    title: 'Plugin Centreon',
    problem: 'Baies IBM non supervisées par l’existant',
    result: 'Un plugin proposé au projet amont',
    description:
      "Contribution open source à Centreon : un plugin de supervision pour les baies de stockage IBM Storage Virtualize, via leur API REST.",
    size: 'small',
    icon: GitPullRequest,
    badges: ['Open source', 'Contribution'],
    technologies: ['Perl', 'API REST', 'Centreon'],
    stack: ['Perl', 'Centreon Plugins', 'API REST', 'IBM Storage Virtualize'],
    fullDescription:
      "Centreon est une plateforme de supervision largement déployée, dont les sondes sont maintenues en open source. Les baies IBM Storage Virtualize — FlashSystem, Storwize, SVC — n'y étaient pas couvertes. J'ai écrit le plugin qui interroge leur API REST et remonte état et métriques, et je l'ai proposé au projet amont.",
    features: [
      'Découverte et relevé via l’API REST des baies',
      'Couverture des gammes FlashSystem, Storwize et SVC',
      'Conforme aux conventions du dépôt de sondes Centreon',
      'Proposé en intégration au projet amont',
    ],
    challenges:
      "Respecter les conventions d'un projet établi plutôt que les siennes : structure des modules, conventions de nommage, format des seuils et des métriques, documentation attendue.",
    results:
      'Proposition ouverte sur le dépôt officiel Centreon, sous la référence #6406.',
    duration: '2026',
    image: '/images/projects/centreon-plugin.png',
    github: 'https://github.com/centreon/centreon-plugins/pull/6406',
  },
  {
    slug: 'vitrine',
    title: 'Ce site',
    problem: 'Un déploiement manuel à chaque retouche',
    result: 'Fusionner suffit à mettre en ligne',
    description:
      "Ce site : rendu 3D en arrière-plan, et une chaîne de déploiement continue qui va de la fusion à la vérification publique.",
    size: 'small',
    icon: Globe,
    badges: ['En ligne'],
    technologies: ['Next.js', 'React Three Fiber', 'Tailwind'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'three.js', 'PostHog', 'Docker', 'GitHub Actions'],
    fullDescription:
      "Le site que vous consultez. Arrière-plan en trois dimensions rendu dans le navigateur, mise en page en graphite et ambre, formulaire de contact fonctionnel. Sa partie intéressante est ailleurs : fusionner une modification suffit à la mettre en ligne, en passant par une compilation sur la machine applicative, un transfert d'image vers le serveur frontal et une double vérification interne puis publique.",
    features: [
      'Arrière-plan tridimensionnel rendu dans le navigateur',
      'Pages de projet servies au rendu statique',
      'Formulaire de contact avec envoi de courriel',
      'Déploiement déclenché par la fusion, sans étape manuelle',
      'Image de retour arrière posée avant chaque mise en production',
      'Vérification interne puis publique après bascule',
    ],
    challenges:
      "Le serveur frontal est un Core 2 Duo de 2007 : une compilation l'avait saturé au point de faire souffrir le reverse-proxy qu'il héberge. La chaîne a été refaite pour qu'il ne compile jamais et ne reçoive qu'une image déjà construite.",
    results:
      "Chaque fusion met en ligne en quelques minutes, avec retour arrière immédiat si la vérification échoue. Les modifications purement documentaires ne déclenchent plus de déploiement.",
    duration: '2025 — en cours',
    image: '/images/projects/vitrine-2610.png',
    demo: 'https://valentin-marot.fr',
    github: 'https://github.com/Valdragon4/vitrine',
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
