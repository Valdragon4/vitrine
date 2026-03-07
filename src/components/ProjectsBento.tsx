'use client';

import { useState } from 'react';
import { ArrowRight, X, ExternalLink, MessageSquare, TrendingUp, Play, Mail, HardDrive, Globe, Server } from 'lucide-react';

interface BentoProject {
  id: string;
  title: string;
  problem: string;
  result: string;
  description: string;
  image?: string;
  icon: any;
  color: string;
  size: 'large' | 'medium' | 'small';
  badges: string[];
  technologies: string[];
  demo?: string;
}

const projects: BentoProject[] = [
  {
    id: 'ordely',
    title: 'Ordely',
    problem: 'Trop de temps perdu au téléphone',
    result: 'Commandes automatisées par SMS',
    description: 'Application de gestion de commandes pour commerces de proximité. Les clients envoient leur commande par SMS, le système la comprend automatiquement grâce à l\'IA et l\'organise dans un tableau de bord.',
    image: '/images/projects/ordely.png',
    icon: MessageSquare,
    color: 'from-orange-500 to-amber-500',
    size: 'large',
    badges: ['Production', 'SaaS'],
    technologies: ['Flask', 'Next.js', 'MariaDB', 'OpenAI'],
    demo: 'https://ordely.fr'
  },
  {
    id: 'dashboard',
    title: 'Dashboard Finance',
    problem: 'Données éparpillées sur plusieurs apps',
    result: 'Vision claire du patrimoine',
    description: 'Tableau de bord personnel centralisant tous les comptes bancaires, investissements et épargne. Calcul automatique des performances et projections.',
    image: '/images/projects/dashboard-1.png',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    size: 'medium',
    badges: ['Personnel'],
    technologies: ['Django', 'PostgreSQL', 'Celery']
  },
  {
    id: 'media-stack',
    title: 'Media Stack',
    problem: 'Pas de sous-titres disponibles',
    result: 'Sous-titres générés par IA',
    description: 'Infrastructure multimédia auto-hébergée avec streaming personnel. Whisper génère automatiquement les sous-titres, LibreTranslate les traduit.',
    icon: Play,
    color: 'from-emerald-500 to-teal-500',
    size: 'small',
    badges: ['Auto-hébergé'],
    technologies: ['Jellyfin', 'Whisper', 'Docker']
  },
  {
    id: 'zerobyte',
    title: 'Zerobyte',
    problem: 'Risque de perte de données',
    result: 'Backups automatiques multi-serveurs',
    description: 'Solution de sauvegarde centralisant les backups de plusieurs serveurs via SFTP. Interface web pour gérer et surveiller l\'état des sauvegardes.',
    image: '/images/projects/zerobyte.png',
    icon: HardDrive,
    color: 'from-red-500 to-rose-500',
    size: 'medium',
    badges: ['Infrastructure'],
    technologies: ['Zerobyte', 'SFTP', 'Docker']
  },
  {
    id: 'mailcow',
    title: 'Serveur Mail',
    problem: 'Dépendance aux GAFAM',
    result: 'Emails 100% auto-hébergés',
    description: 'Serveur mail complet avec antispam, antivirus et webmail. Indépendance totale pour les communications professionnelles.',
    icon: Mail,
    color: 'from-sky-500 to-blue-500',
    size: 'small',
    badges: ['Production'],
    technologies: ['Mailcow', 'Postfix', 'Docker']
  },
  {
    id: 'vitrine',
    title: 'Ce Site',
    problem: 'Besoin d\'une vitrine pro',
    result: 'Portfolio moderne et performant',
    description: 'Ce site que vous consultez ! Design sombre, animations fluides, formulaire de contact et analytics intégrés.',
    icon: Globe,
    color: 'from-indigo-500 to-violet-500',
    size: 'small',
    badges: ['En ligne'],
    technologies: ['Next.js', 'TailwindCSS', 'PostHog'],
    demo: 'https://valentin-marot.fr'
  },
  {
    id: 'homelab',
    title: 'Homelab',
    problem: 'Expérimenter sans risque',
    result: 'Infrastructure complète maison',
    description: '4 serveurs physiques, Home Assistant pour la domotique, switch et routeur dédiés, VPN WireGuard, monitoring complet. Un vrai datacenter miniature pour tester, apprendre et héberger.',
    icon: Server,
    color: 'from-cyan-500 to-sky-500',
    size: 'small',
    badges: ['Personnel'],
    technologies: ['Proxmox', 'Docker', 'WireGuard', 'Home Assistant']
  }
];

const ProjectsBento = () => {
  const [selectedProject, setSelectedProject] = useState<BentoProject | null>(null);

  const getGridClass = (size: string, index: number) => {
    if (size === 'large') return 'md:col-span-2 md:row-span-2';
    if (size === 'medium') return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <section id="projets" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Projets <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">réalisés</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Des solutions concrètes pour des problèmes réels
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-900/50 ${getGridClass(project.size, index)}`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Background */}
                {project.image ? (
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors duration-300" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Icon for non-image cards */}
                  {!project.image && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComponent className="w-32 h-32 text-white" />
                    </div>
                  )}

                  {/* Title & Problem/Result */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-400 line-through">{project.problem}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-400 font-medium">{project.result}</span>
                    </div>

                    {/* Show more on large cards */}
                    {project.size === 'large' && (
                      <p className="text-slate-300 text-sm line-clamp-2 mt-2">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative bg-slate-900 rounded-3xl max-w-2xl w-full my-8 border border-slate-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-slate-300" />
            </button>

            {/* Modal Header with Image */}
            {selectedProject.image && (
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              {/* Title */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <selectedProject.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <div className="flex gap-2 mt-1">
                    {selectedProject.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${selectedProject.color} text-white`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem → Result */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Le problème</p>
                    <p className="text-slate-300 line-through text-sm">{selectedProject.problem}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-emerald-500 uppercase tracking-wide mb-1">Le résultat</p>
                    <p className="text-emerald-400 font-medium text-sm">{selectedProject.result}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wide mb-2">Description</h4>
                <p className="text-slate-300 leading-relaxed text-sm">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-wide mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-lg border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white font-medium text-sm hover:opacity-90 transition-opacity`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsBento;
