'use client';

import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import Timeline from './Timeline';

const Experience = () => {
  const timelineItems = [
    {
      id: 'alternance-lacoste',
      title: 'Alternance - Administrateur Systèmes & Réseaux',
      company: 'Lacoste',
      location: 'Paris (hybride)',
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
      id: 'formation-licence',
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
      id: 'stage-petites-herbes',
      title: 'Stage - Développeur Web',
      company: 'Association Les Petites Herbes',
      location: 'Reims',
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
      id: 'stage-akhilleus',
      title: 'Stage - Conseiller Informatique',
      company: 'Association Akhilleus',
      location: 'Reims',
      period: '2023',
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
    }
  ];

  const skills = [
    'Support technique',
    'Formation utilisateurs', 
    'Gestion de projet web',
    'Administration système',
    'Migration d\'hébergement',
    'Configuration DNS',
    'WordPress',
    'Google Workspace',
    'Python',
    'Linux',
    'Réseaux',
    'Sécurité'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header amélioré */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mon <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Parcours</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mon évolution professionnelle et académique à travers différentes expériences 
            qui ont forgé mes compétences en développement et administration système.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <Timeline items={timelineItems} />
        </div>

        {/* Section compétences développées */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Compétences <span className="text-blue-600">Développées</span>
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensemble des compétences acquises au cours de mon parcours académique et professionnel
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-300">
                    <Calendar className="w-6 h-6 text-blue-600 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par mon profil ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
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
                className="btn-outline"
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
