'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Timeline from './Timeline';
import Parallax from './Parallax';
import SectionWatermark from './SectionWatermark';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const timelineItems = [
    {
      id: 'alternance-lacoste',
      title: 'Alternance - Administrateur Systèmes & Réseaux',
      company: 'Lacoste',
      location: 'Troyes',
      period: '2025–2026',
      type: 'experience' as const,
      description: 'Alternance au sein des équipes IT de Lacoste : administration des infrastructures systèmes et réseaux, sécurité, supervision et automatisation opérationnelle.',
      achievements: [
        'Administration quotidienne des systèmes Linux/Windows et équipements réseau',
        'Durcissement et supervision (monitoring, alerting, mises à jour)',
        'Automatisation de tâches récurrentes (scripts, CI/CD)',
        'Amélioration de la sécurité (politiques, certificats, accès)'
      ],
      technologies: ['Linux', 'Windows Server', 'Réseaux', 'Sécurité', 'CI/CD', 'Monitoring'],
      current: true
    },
    {
      id: 'formation-master',
      title: 'Master 1 Réseaux & Télécommunications',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2025–2026 (en parallèle de l\'alternance)',
      type: 'education' as const,
      description: 'Spécialisation en Administration et Sécurité des Réseaux, suivie en parallèle de mon alternance chez Lacoste.',
      achievements: [
        'Maîtrise des protocoles réseau avancés',
        'Sécurisation des infrastructures',
        'Administration de systèmes complexes',
        'Gestion de projets techniques'
      ],
      technologies: ['Réseaux', 'Sécurité', 'Administration système', 'Télécommunications'],
      current: true,
      parallel: true
    },
    {
      id: 'stage-petites-herbes',
      title: 'Stage - Développeur Web',
      company: 'Association Les Petites Herbes',
      location: 'Aix-en-Othe',
      period: 'Avril - Juin 2025',
      type: 'experience' as const,
      description: 'Création et mise en ligne d\'un site WordPress vitrine pour l\'association. Mission complète incluant la migration d\'hébergement et la configuration des services.',
      achievements: [
        'Développement d\'un site WordPress vitrine moderne',
        'Migration d\'hébergement sans interruption de service',
        'Configuration DNS et gestion de domaine',
        'Mise en place de Google Workspace',
        'Formation des utilisateurs à la gestion du contenu',
        'Support technique post-déploiement'
      ],
      technologies: ['WordPress', 'DNS', 'Google Workspace', 'Hébergement web', 'Formation']
    },
    {
      id: 'formation-licence-3',
      title: 'Licence 3 Informatique',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2024–2025',
      type: 'education' as const,
      description: 'Formation complète en informatique couvrant le développement logiciel, les bases de données, les systèmes d\'exploitation et les réseaux.',
      achievements: [
        'Développement d\'applications web et desktop',
        'Conception et gestion de bases de données',
        'Administration de systèmes Linux/Windows',
        'Algorithmes et structures de données'
      ],
      technologies: ['Python', 'Java', 'SQL', 'Linux', 'Réseaux', 'Algorithmes']
    },
    {
      id: 'formation-licence-2-2',
      title: 'Licence 2 Informatique - 2ème année',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2023–2024',
      type: 'education' as const,
      description: 'Formation complète en informatique couvrant le développement logiciel, les bases de données, les systèmes d\'exploitation et les réseaux.',
      achievements: [
        'Développement d\'applications web et desktop',
        'Conception et gestion de bases de données',
        'Administration de systèmes Linux/Windows',
        'Algorithmes et structures de données'
      ],
      technologies: ['Python', 'Java', 'SQL', 'Linux', 'Réseaux', 'Algorithmes']
    },
    {
      id: 'stage-akhilleus',
      title: 'Stage - Conseiller Informatique',
      company: 'Association Akhilleus',
      location: 'Troyes',
      period: 'Avril - Juin 2023',
      type: 'experience' as const,
      description: 'Support technique et conseil informatique auprès des utilisateurs de l\'association. Accompagnement dans l\'utilisation d\'outils numériques.',
      achievements: [
        'Support technique aux utilisateurs',
        'Aide à l\'utilisation d\'outils numériques',
        'Mise en place de solutions numériques adaptées',
        'Formation et accompagnement des utilisateurs',
        'Diagnostic et résolution de problèmes techniques'
      ],
      technologies: ['Support technique', 'Formation', 'Outils bureautiques', 'Diagnostic']
    },
    {
      id: 'formation-licence-2-1',
      title: 'Licence 2 Informatique - 1ère année',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2023–2024',
      type: 'education' as const,
      description: 'Formation complète en informatique couvrant le développement logiciel, les bases de données, les systèmes d\'exploitation et les réseaux.',
      achievements: [
        'Développement d\'applications web et desktop',
        'Conception et gestion de bases de données',
        'Administration de systèmes Linux/Windows',
        'Algorithmes et structures de données'
      ],
      technologies: ['Python', 'Java', 'SQL', 'Linux', 'Réseaux', 'Algorithmes']
    },
    {
      id: 'formation-licence-1',
      title: 'Licence 1 Informatique',
      institution: 'Université de Reims Champagne-Ardenne',
      location: 'Reims',
      period: '2022–2023',
      type: 'education' as const,
      description: 'Formation complète en informatique couvrant le développement logiciel, les bases de données, les systèmes d\'exploitation et les réseaux.',
      achievements: [
        'Développement d\'applications web et desktop',
        'Conception et gestion de bases de données',
        'Administration de systèmes Linux/Windows',
        'Algorithmes et structures de données'
      ],
      technologies: ['Python', 'Java', 'SQL', 'Linux', 'Réseaux', 'Algorithmes']
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-28 overflow-hidden">
      <SectionWatermark text="history" align="right" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Parallax speed={0.18}>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-amber-400 mb-4">
              03 — Parcours
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Une double casquette réseau &amp; développement
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Formations, stages et alternance en administration systèmes et
              réseaux, qui nourrissent mon approche DevOps.
            </p>
          </div>
        </Parallax>

        {/* Timeline */}
        <div className="mb-8">
          <Timeline items={showAll ? timelineItems : timelineItems.slice(0, 2)} />
        </div>

        {/* Bouton Voir plus / Réduire */}
        <div className="flex mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors font-mono text-xs"
          >
            <span>{showAll ? 'Réduire' : 'Voir le parcours complet'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
          </button>
        </div>

        {/* Call to action */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Intéressé par mon profil ?
          </h3>
          <p className="text-zinc-400 mb-7 max-w-2xl text-sm leading-relaxed">
            Ouvert aux missions freelance comme aux opportunités en alternance.
            Parlons de votre besoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              Me contacter
            </button>
            <a
              href="/cv-valentin-marot.pdf"
              download="CV-Valentin-MAROT.pdf"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
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
