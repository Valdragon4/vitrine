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
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'ordely',
    title: 'Ordely',
    problem: 'Commandes prises au téléphone, une par une',
    result: 'Commandes par SMS, comprises et traitées seules',
    description:
      "Plateforme SaaS multi-commerces de prise de commande par SMS, en production. Le client écrit un message en langage courant ; le système le comprend, vérifie la disponibilité et confirme.",
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
      "Ordely permet à un commerce alimentaire de recevoir ses commandes par SMS plutôt qu'au téléphone. Le message arrive par une passerelle SMS, part dans une file Redis Streams, passe par une analyse en langage naturel qui en extrait produits, quantités et créneau de retrait, puis rejoint le traitement des commandes qui répond au client. Chaque étape est un service distinct : la réception ne dépend pas de l'analyse, et l'analyse ne bloque pas la confirmation. Côté commerçant, une interface web par enseigne ; côté plateforme, un back-office d'administration multi-tenant et une facturation à l'abonnement.",
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
      "En production chez un commerçant. Le dépôt compte 860 commits et neuf chaînes d'intégration continue : tests, déploiement, migrations de base, sauvegarde quotidienne, contrôle de santé, maintenance, versionnage sémantique et retour arrière.",
    duration: '2024 — en cours',
    image: '/images/projects/ordely.png',
    gallery: [
      {
        src: '/images/projects/ordely-vitrine.png',
        alt: 'Page d’accueil publique d’Ordely : un SMS client et sa confirmation automatique',
        caption:
          'La page publique du produit. Le commerçant n’installe rien chez ses clients : la commande arrive par SMS ordinaire.',
      },
    ],
    demo: 'https://ordely.fr',
  },
  {
    slug: 'homelab',
    title: 'Infrastructure',
    problem: 'Dépendre d’un hébergeur pour chaque service',
    result: 'Quatre machines, trois sites, tout sous contrôle',
    description:
      "L'infrastructure sur laquelle tournent mes projets et ceux de mes clients : quatre machines réparties sur trois sites, reliées par un VPN, supervisées et documentées.",
    size: 'medium',
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
      "Quatre machines réparties sur trois sites — deux au même endroit, une sur un second site, une chez un hébergeur — reliées par un tunnel WireGuard dont le routeur MikroTik est le concentrateur. Un hôte porte les applications, un autre le reverse-proxy et ses vhosts, un troisième la supervision et la domotique, le dernier la production publique. Le réseau est segmenté en VLANs, l'administration du routeur est filtrée hors VPN, et tous les domaines publics passent derrière Cloudflare.",
    features: [
      'Environ 160 conteneurs actifs répartis sur les quatre machines',
      'Reverse-proxy nginx d’une vingtaine de vhosts, certificats automatisés',
      'VPN WireGuard maillé entre les trois sites, réseau segmenté en VLANs',
      'Supervision Prometheus / Grafana / Loki avec seize règles d’alerte',
      'Trois runners d’intégration continue auto-hébergés',
      'Adresse virtuelle keepalived pour la bascule de l’hôte applicatif',
    ],
    challenges:
      "Faire cohabiter du matériel très inégal : l'un des hôtes est un Core 2 Duo de 2007 qui porte tout le reverse-proxy. Un build applicatif l'avait saturé ; la chaîne de déploiement a été refaite pour que la compilation ait lieu sur la machine applicative et que celui-ci ne reçoive qu'une image déjà construite.",
    results:
      "Les machines tiennent entre 86 et 91 jours d'uptime sans conteneur en défaut. L'ensemble est décrit dans 110 pages de documentation, journaux d'incidents compris — y compris les écarts constatés et les correctifs qui n'ont pas encore été appliqués.",
    duration: '2023 — en cours',
    image: '/images/projects/homelab.png',
  },
  {
    slug: 'mcp-infra',
    title: 'Serveur MCP d’infra',
    problem: 'Répondre de mémoire sur un parc qui bouge',
    result: 'Un agent qui lit l’état réel avant de répondre',
    description:
      "Un serveur MCP que j'ai écrit pour exposer l'état réel de mes quatre machines à un assistant IA : conteneurs, services, ports, réseau et documentation, en lecture seule.",
    size: 'medium',
    icon: Plug,
    badges: ['Outil interne', 'IA'],
    technologies: ['Python', 'MCP', 'systemd', 'MkDocs'],
    stack: ['Python', 'Model Context Protocol', 'systemd', 'SSH', 'Docker', 'MkDocs'],
    fullDescription:
      "Diagnostiquer une infrastructure de mémoire, c'est produire une réponse plausible et périmée. Ce serveur expose donc l'état vivant du parc à un assistant : bilan de santé des quatre machines en un appel, recherche d'un service sur toutes les machines à la fois, conteneurs et ports d'un hôte, journaux d'un service, configuration réseau du routeur, et recherche plein texte dans les 110 pages de documentation. Tous les outils sont en lecture seule : aucun ne redémarre, ne déploie ni ne supprime.",
    features: [
      'Bilan de santé des quatre machines en un seul appel',
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
    size: 'small',
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
    image: '/images/projects/vitrine.png',
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
