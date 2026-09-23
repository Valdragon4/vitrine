'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Timeline from './Timeline';
import Parallax from './Parallax';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const timelineItems = [
    {
      id: 'freelance',
      title: 'Développeur web & DevOps — Freelance',
      company: 'Auto-entrepreneur',
      location: 'Champagne-Ardenne · à distance',
      period: '2025 — en cours',
      type: 'experience' as const,
      description:
        "Conception, déploiement et hébergement d'applications web pour des clients, de la première ligne de code à la supervision en production. Disponible pour des missions de prestation et des projets au forfait.",
      achievements: [
        "Développement d'applications sur mesure, du front à l'API",
        'Conteneurisation et chaînes de déploiement continu',
        'Administration de serveurs Linux, reverse-proxy, TLS et DNS',
        'Supervision, sauvegardes et maintenance dans la durée',
      ],
      technologies: ['Next.js', 'Python', 'Docker', 'Linux', 'Nginx', 'CI/CD'],
      current: true,
    },
    {
      id: 'alternance-lacoste',
      title: 'Alternance — Administrateur Systèmes & Réseaux',
      company: 'Lacoste',
      location: 'Troyes',
      period: '2025 — 2027',
      type: 'experience' as const,
      description:
        "Alternance au sein des équipes IT de Lacoste, reconduite pour une seconde année : administration des infrastructures systèmes et réseaux, sécurité, supervision et automatisation opérationnelle.",
      achievements: [
        'Administration quotidienne des systèmes Linux/Windows et des équipements réseau',
        'Durcissement et supervision : monitoring, alerting, mises à jour',
        'Automatisation des tâches récurrentes (scripts, intégration continue)',
        'Amélioration de la sécurité : politiques, certificats, gestion des accès',
      ],
      technologies: [
        'Linux',
        'Windows Server',
        'Réseaux',
        'Sécurité',
        'Monitoring',
        'CI/CD',
      ],
      current: true,
    },
    {
      id: 'master-rt',
      title: 'Master Réseaux & Télécommunications',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2025 — 2027',
      type: 'education' as const,
      description:
        "Spécialisation en administration et sécurité des réseaux, suivie en alternance. Master 1 validé en 2026, Master 2 en cours.",
      achievements: [
        'Protocoles réseau avancés et architectures distribuées',
        'Sécurisation des infrastructures et gestion des accès',
        'Administration de systèmes complexes',
        'Conduite de projets techniques',
      ],
      technologies: [
        'Réseaux',
        'Sécurité',
        'Administration système',
        'Télécommunications',
      ],
      current: true,
      parallel: true,
    },
    {
      id: 'stage-petites-herbes',
      title: 'Stage — Développeur Web',
      company: 'Association Les Petites Herbes',
      location: 'Aix-en-Othe',
      period: 'Avril — Juin 2025',
      type: 'experience' as const,
      description:
        "Création et mise en ligne du site vitrine de l'association, mission complète incluant la migration d'hébergement et la configuration des services.",
      achievements: [
        "Développement du site vitrine de l'association",
        "Migration d'hébergement sans interruption de service",
        'Configuration DNS et gestion du nom de domaine',
        'Formation des bénévoles à la gestion du contenu',
      ],
      technologies: ['WordPress', 'DNS', 'Hébergement web', 'Formation'],
    },
    {
      id: 'licence-informatique',
      title: 'Licence Informatique',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2022 — 2025',
      type: 'education' as const,
      description:
        "Trois années couvrant le développement logiciel, les bases de données, les systèmes d'exploitation et les réseaux.",
      achievements: [
        "Développement d'applications web et desktop",
        'Conception et administration de bases de données',
        'Systèmes Linux/Windows, mécanismes internes et IPC',
        'Algorithmique et structures de données',
      ],
      technologies: ['Python', 'Java', 'C', 'SQL', 'Linux', 'Réseaux'],
    },
    {
      id: 'stage-akhilleus',
      title: 'Stage — Conseiller Informatique',
      company: 'Association Akhilleus',
      location: 'Troyes',
      period: 'Avril — Juin 2023',
      type: 'experience' as const,
      description:
        "Support technique et conseil auprès des utilisateurs de l'association, avec accompagnement à la prise en main des outils numériques.",
      achievements: [
        'Support technique et diagnostic',
        "Accompagnement à l'usage des outils numériques",
        'Mise en place de solutions adaptées aux besoins',
      ],
      technologies: ['Support technique', 'Formation', 'Diagnostic'],
    },
  ];

  const visible = showAll ? timelineItems : timelineItems.slice(0, 3);

  return (
    <section id="experience" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight text-balance">
              Une double casquette réseau &amp; développement
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Administrateur systèmes et réseaux en alternance, développeur en
              freelance. Les deux métiers se nourrissent : je sais ce que coûte en
              production le code que j&apos;écris.
            </p>
          </div>
        </Parallax>

        <div className="mb-8">
          <Timeline items={visible} />
        </div>

        <div className="flex mb-20">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="group flex items-center gap-2.5 min-h-[44px] px-5 py-3 rounded-lg border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-colors text-sm"
          >
            <span>
              {showAll
                ? 'Réduire'
                : `Voir le parcours complet (${timelineItems.length - visible.length} de plus)`}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-10">
          <h3 className="font-display text-xl font-semibold text-zinc-100 mb-3">
            Intéressé par mon profil ?
          </h3>
          <p className="text-zinc-300 mb-7 max-w-[36rem] text-[0.9375rem] leading-relaxed">
            Disponible pour des missions de prestation, des projets au forfait et
            des opportunités en alternance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              Me contacter
            </a>
            <a
              href="/cv-valentin-marot.pdf"
              download="CV-Valentin-MAROT.pdf"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
