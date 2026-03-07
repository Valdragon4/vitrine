'use client';

import { useState } from 'react';
import { GraduationCap, Briefcase, ChevronDown } from 'lucide-react';
import Timeline from './Timeline';

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
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header amélioré */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl mb-6 shadow-lg shadow-emerald-500/40">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6">
            Mon <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">parcours</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mb-8" />
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Quelques expériences marquantes (formations, stages, alternance) qui expliquent ma double
            casquette réseau / développement.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <Timeline items={showAll ? timelineItems : timelineItems.slice(0, 2)} />
        </div>

        {/* Bouton Voir plus / Réduire */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-slate-100 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
          >
            <span className="text-sm font-medium">
              {showAll ? 'Réduire' : 'Voir mon parcours complet'}
            </span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`} />
          </button>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-slate-900/80 rounded-3xl p-10 shadow-xl shadow-slate-900/60 border border-slate-700/80">
            <h3 className="text-2xl font-bold text-slate-50 mb-4">
              Intéressé par mon profil ?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-semibold bg-sky-400 text-slate-950 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/30"
              >
                Me contacter
              </button>
              <button
                onClick={() => {
                  // Télécharger le CV
                  const link = document.createElement('a');
                  link.href = '/cv-valentin-marot.pdf';
                  link.download = 'CV-Valentin-MAROT.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-semibold border border-slate-500/70 text-slate-100 hover:bg-slate-900/70 transition-all duration-200"
              >
                Télécharger mon CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
