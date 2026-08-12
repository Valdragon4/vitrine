'use client';

import { useState } from 'react';
import { ArrowRight, X, ExternalLink, MessageSquare, TrendingUp, Play, Mail, HardDrive, Globe, Server } from 'lucide-react';
import Parallax from './Parallax';

interface BentoProject {
  id: string;
  title: string;
  problem: string;
  result: string;
  description: string;
  image?: string;
  icon: React.ComponentType<{ className?: string }>;
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
    description:
      "Application de gestion de commandes pour commerces de proximité. Les clients envoient leur commande par SMS, le système la comprend automatiquement grâce à l'IA et l'organise dans un tableau de bord.",
    image: '/images/projects/ordely.png',
    icon: MessageSquare,
    size: 'large',
    badges: ['Production', 'SaaS'],
    technologies: ['Flask', 'Next.js', 'MariaDB', 'OpenAI'],
    demo: 'https://ordely.fr',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Finance',
    problem: 'Données éparpillées sur plusieurs apps',
    result: 'Vision claire du patrimoine',
    description:
      'Tableau de bord personnel centralisant tous les comptes bancaires, investissements et épargne. Calcul automatique des performances et projections.',
    image: '/images/projects/dashboard-1.png',
    icon: TrendingUp,
    size: 'medium',
    badges: ['Personnel'],
    technologies: ['Django', 'PostgreSQL', 'Celery'],
  },
  {
    id: 'media-stack',
    title: 'Media Stack',
    problem: 'Pas de sous-titres disponibles',
    result: 'Sous-titres générés par IA',
    description:
      'Infrastructure multimédia auto-hébergée avec streaming personnel. Whisper génère automatiquement les sous-titres, LibreTranslate les traduit.',
    icon: Play,
    size: 'small',
    badges: ['Auto-hébergé'],
    technologies: ['Jellyfin', 'Whisper', 'Docker'],
  },
  {
    id: 'zerobyte',
    title: 'Zerobyte',
    problem: 'Risque de perte de données',
    result: 'Backups automatiques multi-serveurs',
    description:
      'Solution de sauvegarde centralisant les backups de plusieurs serveurs via SFTP. Interface web pour gérer et surveiller l\'état des sauvegardes.',
    image: '/images/projects/zerobyte.png',
    icon: HardDrive,
    size: 'medium',
    badges: ['Infrastructure'],
    technologies: ['Zerobyte', 'SFTP', 'Docker'],
  },
  {
    id: 'mailcow',
    title: 'Serveur Mail',
    problem: 'Dépendance aux GAFAM',
    result: 'Emails 100% auto-hébergés',
    description:
      'Serveur mail complet avec antispam, antivirus et webmail. Indépendance totale pour les communications professionnelles.',
    icon: Mail,
    size: 'small',
    badges: ['Production'],
    technologies: ['Mailcow', 'Postfix', 'Docker'],
  },
  {
    id: 'vitrine',
    title: 'Ce Site',
    problem: "Besoin d'une vitrine pro",
    result: 'Portfolio moderne et performant',
    description:
      'Ce site que vous consultez : design graphite, fond 3D en parallax (React Three Fiber), formulaire de contact et analytics intégrés.',
    icon: Globe,
    size: 'small',
    badges: ['En ligne'],
    technologies: ['Next.js', 'React Three Fiber', 'TailwindCSS'],
    demo: 'https://valentin-marot.fr',
  },
  {
    id: 'homelab',
    title: 'Homelab',
    problem: 'Expérimenter sans risque',
    result: 'Infrastructure complète maison',
    description:
      '4 serveurs physiques, Home Assistant pour la domotique, switch et routeur dédiés, VPN WireGuard, monitoring complet. Un vrai datacenter miniature pour tester, apprendre et héberger.',
    icon: Server,
    size: 'small',
    badges: ['Personnel'],
    technologies: ['Proxmox', 'Docker', 'WireGuard', 'Home Assistant'],
  },
];

const getGridClass = (size: string) => {
  if (size === 'large') return 'md:col-span-2 md:row-span-2';
  if (size === 'medium') return 'md:col-span-1 md:row-span-2';
  return 'md:col-span-1 md:row-span-1';
};

const ProjectsBento = () => {
  const [selected, setSelected] = useState<BentoProject | null>(null);

  return (
    <section id="projets" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax speed={0.08}>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-amber-400 mb-4">
              02 — Projets
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Des solutions concrètes pour des problèmes réels
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Applications en production, infrastructure auto-hébergée et outils
              internes. Cliquez pour le détail.
            </p>
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className={`group relative rounded-xl overflow-hidden text-left border border-zinc-800 bg-[#0c0c0e] transition-all duration-300 hover:border-zinc-700 ${getGridClass(project.size)}`}
              >
                {project.image && (
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/70 to-transparent" />
                  </div>
                )}

                {!project.image && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                    <Icon className="w-28 h-28 text-white" />
                  </div>
                )}

                <div className="relative h-full p-5 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded border border-zinc-700 bg-zinc-900/80 text-zinc-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-zinc-500 line-through truncate">{project.problem}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-amber-400/90 font-medium truncate">{project.result}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#111113] rounded-2xl max-w-2xl w-full my-8 border border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-zinc-900/80 border border-zinc-700 hover:bg-zinc-800 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-zinc-300" />
            </button>

            {selected.image && (
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] to-transparent" />
              </div>
            )}

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                  <selected.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{selected.title}</h3>
                  <div className="flex gap-2 mt-1">
                    {selected.badges.map((badge) => (
                      <span key={badge} className="font-mono text-[10px] uppercase tracking-wide text-zinc-500">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wide mb-1">Problème</p>
                    <p className="text-zinc-400 line-through text-sm">{selected.problem}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-amber-500/70 uppercase tracking-wide mb-1">Résultat</p>
                    <p className="text-amber-400 font-medium text-sm">{selected.result}</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed text-sm">{selected.description}</p>

              <div>
                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wide mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-xs px-2.5 py-1 bg-zinc-900 text-zinc-400 rounded border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-zinc-950 font-medium text-sm hover:bg-amber-400 transition-colors"
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
