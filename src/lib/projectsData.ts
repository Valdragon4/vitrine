import { MessageSquare, Server, Globe } from 'lucide-react';

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
    slug: 'ordely-prod',
    title: 'Ordely',
    description: "Application de gestion de commandes (SMS → commandes) déployée en production chez un client, évolution vers une plateforme SaaS.",
    details: "Version 1 en production (client boulanger) avec traitement automatique des SMS.",
    benefit: "Automatisation bout‑en‑bout, réduction des erreurs, traçabilité et vision temps réel.",
    icon: MessageSquare,
    technologies: ["Python (Flask)", "Ordely API", "JSON", "Excel (openpyxl)", "HTML/CSS/JS", "Docker", "CI/CD"],
    color: 'violet',
    fullDescription: "Ordely v1 intercepte les SMS via une API, normalise et stocke les données (Excel/JSON) et expose une interface Flask pour le suivi. En production chez un client.",
    features: [
      'Traitement automatique des SMS',
      'Interface de suivi',
      'Export Excel',
      'Détection de doublons'
    ],
    challenges: 'Intégration API SMS, unification des formats, prévention des doublons.',
    results: 'Solution stable en production chez un client.',
    duration: '2025 – en cours',
    github: 'https://github.com/Valentin-MAROT',
    demo: 'https://boulangerie.valentin-marot.fr',
    isDemo: true,
    image: '/images/projects/dashboard.png',
    badges: ['Production']
  },
  {
    slug: 'ordely-saas',
    title: 'Ordely (SaaS)',
    description: "Transformation d’Ordely en SaaS multi‑tenants avec onboarding et démo publique.",
    details: "Architecture multi‑tenants, scalabilité, authentification, gestion des espaces clients, métriques.",
    benefit: "Déploiement rapide, coûts mutualisés, mises à jour continues.",
    icon: MessageSquare,
    technologies: ["Python", "Flask / FastAPI", "PostgreSQL", "Docker", "CI/CD", "Cloud"],
    color: 'violet',
    fullDescription: "Nouvelle itération d’Ordely vers une plateforme SaaS. Objectifs : multi‑tenants, isolation des données, onboarding, facturation, démo publique.",
    features: [
      'Multi‑tenants',
      'Onboarding simplifié',
      'Observabilité et métriques',
      'Scalabilité horizontale'
    ],
    challenges: 'Design multi‑tenants, sécurité, migrations de données, pipelines déploiement.',
    results: 'Démo publique bientôt disponible.',
    duration: '2025 – en cours',
    github: 'https://github.com/Valentin-MAROT',
    isDemo: false,
    badges: ['SaaS', 'En cours']
  },
  {
    slug: 'homelab',
    title: 'Homelab & auto-hébergement',
    description: "Mise en place d'un environnement personnel pour expérimenter l'auto‑hébergement et les pratiques DevOps.",
    details: "Services: Cockpit, Seafile, Portainer, Pi‑hole, Pterodactyl Panel.",
    benefit: "Compétences pratiques en administration système, Docker, réseau et déploiement.",
    icon: Server,
    technologies: ["Linux (Ubuntu)", "Docker", "Nginx", "Pi-hole", "Pterodactyl", "Cockpit"],
    color: 'blue',
    fullDescription: "Environnement personnel démarré en 2024 pour pratiquer l'auto‑hébergement et le DevOps. Ubuntu + Docker, services d'administration, stockage, DNS filtering et gestion de containers/jeux.",
    features: [
      'Administration avec Cockpit',
      'Stockage Seafile',
      'Gestion Docker via Portainer',
      'Filtrage DNS Pi‑hole',
      'Reverse proxy Nginx'
    ],
    challenges: 'Sécurisation, certificats SSL, performances, maintenance et mises à jour.',
    results: "Maîtrise accrue de Linux, Docker et déploiement de services.",
    duration: 'Depuis 2024',
    github: 'https://github.com/Valentin-MAROT',
    isDemo: false
  },
  {
    slug: 'wordpress-associatif',
    title: 'Site WordPress associatif',
    description: "Création et mise en ligne d'un site WordPress pour une association, avec migration d'hébergement et configuration DNS.",
    details: "Mission complète incluant la migration et la configuration Google Workspace.",
    benefit: "Site vitrine moderne, meilleure visibilité et autonomie des utilisateurs.",
    icon: Globe,
    technologies: ["WordPress", "DNS", "Google Workspace", "Hébergement web"],
    color: 'green',
    fullDescription: "Projet réalisé en stage chez l'association Les Petites Herbes (avril‑juin 2025). Création d'un site vitrine, migration d'hébergement, configuration DNS et Google Workspace, formation des utilisateurs.",
    features: [
      'Site responsive',
      'Migration d’hébergement',
      'Configuration DNS et domaine',
      'Intégration Google Workspace',
      'Formation utilisateurs'
    ],
    challenges: "Migration sans interruption, configuration DNS, formation d’utilisateurs non‑techniques.",
    results: "Site fonctionnel et moderne, visibilité accrue, autonomie de l’équipe.",
    duration: '2 mois (avril‑juin 2025)',
    github: 'Projet client confidentiel',
    demo: 'Site associatif privé',
    isDemo: false,
    isExperience: true,
    image: '/images/projects/wordpress-association.png'
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}


