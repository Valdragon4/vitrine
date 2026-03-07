import { MessageSquare, TrendingUp, Play, Mail, HardDrive, Globe } from 'lucide-react';

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  details: string;
  benefit: string;
  icon: any;
  technologies: string[];
  color: 'violet' | 'blue' | 'green' | 'orange';
  fullDescription: string;
  features: string[];
  challenges: string;
  results: string;
  duration: string;
  github?: string;
  demo?: string;
  isDemo?: boolean;
  isExperience?: boolean;
  image?: string;
  badges?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: 'ordely',
    title: 'Ordely',
    description: "Application de commandes par SMS pour commerces de proximité. Les clients envoient leur commande par message, le système la comprend et l'organise automatiquement.",
    details: "Plateforme SaaS multi-tenants déployée en production chez un boulanger.",
    benefit: "Fini les appels téléphoniques et les erreurs de prise de commande. Tout est tracé, organisé et accessible en temps réel.",
    icon: MessageSquare,
    technologies: ["Flask", "Next.js", "MariaDB", "Redis", "OpenAI", "Docker", "SMS Gateway"],
    color: 'violet',
    fullDescription: "Ordely permet aux commerces de proximité (boulangeries, traiteurs, etc.) de recevoir des commandes par SMS. Le système analyse le message en langage naturel grâce à l'IA, extrait les produits et quantités, puis organise le tout dans un tableau de bord. Le commerçant voit ses commandes en temps réel, peut les valider et suivre son stock.",
    features: [
      'Réception et analyse automatique des SMS',
      'Compréhension du langage naturel (IA)',
      'Tableau de bord temps réel',
      'Gestion multi-commerces (SaaS)',
      'Notifications et confirmations automatiques',
      'Export des commandes'
    ],
    challenges: "Faire comprendre à une IA des messages SMS souvent mal écrits, gérer plusieurs commerces sur la même plateforme, assurer la fiabilité de la réception des SMS.",
    results: "Solution en production chez un client boulanger. Réduction significative du temps passé au téléphone et des erreurs de commande.",
    duration: '2024 – en cours',
    demo: 'https://ordely.fr',
    isDemo: true,
    badges: ['Production', 'SaaS']
  },
  {
    slug: 'dashboard-trading',
    title: 'Dashboard Trading',
    description: "Tableau de bord personnel pour suivre un portefeuille d'investissements. Récupération automatique des données de marché et calcul des performances.",
    details: "Application Django avec tâches automatisées pour le suivi financier.",
    benefit: "Vision claire et actualisée de ses investissements, sans avoir à jongler entre plusieurs plateformes.",
    icon: TrendingUp,
    technologies: ["Django", "PostgreSQL", "Redis", "Celery", "Docker", "APIs financières"],
    color: 'blue',
    fullDescription: "Dashboard personnel développé pour centraliser le suivi d'un portefeuille d'investissements. L'application récupère automatiquement les cours et données de marché via des APIs, calcule les performances et affiche des graphiques de suivi. Les tâches Celery permettent d'automatiser les mises à jour et les alertes.",
    features: [
      'Suivi de portefeuille en temps réel',
      'Récupération automatique des cours',
      'Calcul des performances et plus-values',
      'Graphiques et historiques',
      'Alertes personnalisables',
      'Tâches automatisées (Celery)'
    ],
    challenges: "Intégration de multiples APIs financières, gestion des fuseaux horaires des marchés, calculs de performance précis avec les dividendes et splits.",
    results: "Outil fonctionnel utilisé quotidiennement pour le suivi personnel d'investissements.",
    duration: '2024 – en cours',
    isDemo: false,
    badges: ['Personnel']
  },
  {
    slug: 'media-stack',
    title: 'Media Stack',
    description: "Infrastructure multimédia complète pour gérer une bibliothèque de films et séries. Streaming personnel, sous-titres automatiques générés par IA, traduction.",
    details: "Stack Docker complète avec Jellyfin, Whisper, LibreTranslate et automatisation.",
    benefit: "Une expérience Netflix-like auto-hébergée, avec des sous-titres générés automatiquement même pour les contenus qui n'en ont pas.",
    icon: Play,
    technologies: ["Jellyfin", "Whisper (OpenAI)", "LibreTranslate", "Sonarr", "Radarr", "Docker", "Nginx"],
    color: 'green',
    fullDescription: "Infrastructure multimédia auto-hébergée permettant de gérer et streamer une bibliothèque personnelle de films, séries et musique. Le système intègre Whisper (OpenAI) pour générer automatiquement des sous-titres à partir de l'audio, et LibreTranslate pour les traduire. L'automatisation via Sonarr/Radarr permet de gérer les ajouts et mises à jour.",
    features: [
      'Streaming multimédia (Jellyfin)',
      'Génération automatique de sous-titres (Whisper)',
      'Traduction hors-ligne (LibreTranslate)',
      'Gestion automatisée des médias',
      'Interface web responsive',
      'Multi-utilisateurs'
    ],
    challenges: "Orchestration de nombreux services Docker, optimisation des performances de transcription Whisper, gestion du stockage et des flux vidéo.",
    results: "Stack fonctionnelle utilisée quotidiennement, avec génération automatique de sous-titres pour tout nouveau contenu.",
    duration: '2024 – en cours',
    isDemo: false,
    badges: ['Auto-hébergé']
  },
  {
    slug: 'mailcow',
    title: 'Serveur Mail',
    description: "Serveur mail professionnel auto-hébergé avec antispam, antivirus et webmail. Indépendance totale vis-à-vis des fournisseurs cloud.",
    details: "Stack Mailcow complète avec Postfix, Dovecot, SOGo et Rspamd.",
    benefit: "Contrôle total sur ses emails professionnels, sans dépendre de Google ou Microsoft. Confidentialité garantie.",
    icon: Mail,
    technologies: ["Mailcow", "Postfix", "Dovecot", "SOGo", "Rspamd", "ClamAV", "Docker"],
    color: 'orange',
    fullDescription: "Serveur mail complet auto-hébergé basé sur Mailcow. Gère l'envoi et la réception d'emails avec antispam (Rspamd), antivirus (ClamAV), et webmail (SOGo). Configuration DNS complète (SPF, DKIM, DMARC) pour une délivrabilité optimale. Utilisé pour les emails professionnels du domaine valentin-marot.fr.",
    features: [
      'Envoi/réception SMTP sécurisé',
      'Webmail moderne (SOGo)',
      'Antispam intelligent (Rspamd)',
      'Antivirus (ClamAV)',
      'Configuration DNS complète',
      'Gestion multi-domaines'
    ],
    challenges: "Configuration DNS complexe pour la délivrabilité, sécurisation contre les attaques, maintenance et mises à jour régulières.",
    results: "Serveur mail fonctionnel avec excellente délivrabilité, utilisé quotidiennement pour les communications professionnelles.",
    duration: '2024 – en cours',
    isDemo: false,
    badges: ['Production']
  },
  {
    slug: 'zerobyte',
    title: 'Zerobyte Backup',
    description: "Solution de sauvegarde avec montages SFTP distants. Permet de sauvegarder des données depuis plusieurs serveurs vers un stockage centralisé.",
    details: "Application de backup avec support FUSE pour les montages distants.",
    benefit: "Tranquillité d'esprit : les données importantes sont sauvegardées automatiquement et accessibles en cas de problème.",
    icon: HardDrive,
    technologies: ["Zerobyte", "SFTP", "FUSE", "Docker", "Linux"],
    color: 'blue',
    fullDescription: "Solution de sauvegarde déployée pour centraliser les backups de plusieurs serveurs. Zerobyte permet de monter des systèmes de fichiers distants via SFTP/FUSE et de les sauvegarder localement. Interface web pour gérer les tâches de backup et surveiller leur état.",
    features: [
      'Montages SFTP distants',
      'Sauvegardes automatisées',
      'Interface de gestion web',
      'Support multi-serveurs',
      'Historique des sauvegardes',
      'Notifications d\'erreurs'
    ],
    challenges: "Gestion des montages FUSE dans Docker (privilèges), fiabilité des connexions SFTP, gestion de l'espace disque.",
    results: "Système de backup fonctionnel protégeant les données critiques de plusieurs serveurs.",
    duration: '2024 – en cours',
    isDemo: false,
    badges: ['Infrastructure']
  },
  {
    slug: 'site-vitrine',
    title: 'Ce Site',
    description: "Portfolio moderne présentant mes projets et services. Design sombre, animations fluides, formulaire de contact et analytics.",
    details: "Site Next.js 15 avec React 19, TailwindCSS et PostHog.",
    benefit: "Une vitrine professionnelle qui reflète mes compétences techniques et mon approche du développement.",
    icon: Globe,
    technologies: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "PostHog", "Docker"],
    color: 'violet',
    fullDescription: "Ce site que vous consultez actuellement ! Développé avec Next.js 15 et React 19, il présente mes projets et services avec un design moderne et des animations soignées. Intégration de PostHog pour comprendre comment les visiteurs interagissent avec le site. Formulaire de contact fonctionnel avec envoi d'emails.",
    features: [
      'Design moderne et responsive',
      'Animations fluides au scroll',
      'Formulaire de contact',
      'Analytics (PostHog)',
      'Optimisé SEO',
      'Déploiement Docker'
    ],
    challenges: "Créer un design qui se démarque tout en restant professionnel, optimiser les performances et l'expérience utilisateur.",
    results: "Site fonctionnel et performant, utilisé comme vitrine professionnelle.",
    duration: '2025',
    demo: 'https://valentin-marot.fr',
    isDemo: true,
    badges: ['En ligne']
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
