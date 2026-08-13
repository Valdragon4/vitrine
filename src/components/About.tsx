'use client';

import { MapPin, Clock, FileText, Building2, Mail } from 'lucide-react';
import Parallax from './Parallax';
import SectionWatermark from './SectionWatermark';

const infos = [
  {
    icon: Building2,
    label: 'Statut',
    value: 'Auto-entrepreneur',
    detail: 'Micro-entreprise, SIRET enregistré',
  },
  {
    icon: MapPin,
    label: 'Zone',
    value: 'Champagne-Ardenne',
    detail: 'À distance partout en France',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: 'Réactif',
    detail: 'Réponse sous 24 h, RDV flexibles',
  },
  {
    icon: FileText,
    label: 'Facturation',
    value: 'Claire',
    detail: 'Devis gratuit, sans surprise',
  },
];

const About = () => {
  return (
    <section id="a-propos" className="relative py-24 sm:py-28 overflow-hidden">
      <SectionWatermark text="whoami" align="left" />
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.10}>
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-amber-400 mb-4">
              04 — À propos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Développeur &amp; administrateur système en freelance
            </h2>
          </div>
        </Parallax>

        <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-8 sm:p-10">
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            En Master Réseaux &amp; Télécoms et en alternance sur l&apos;administration
            systèmes et réseaux, j&apos;ai lancé ma micro-entreprise pour accompagner
            entreprises, indépendants et associations. Je réunis deux compétences
            rarement associées : <span className="text-zinc-200">le développement web</span> et{' '}
            <span className="text-zinc-200">l&apos;infrastructure DevOps</span> — de la
            conception de l&apos;application jusqu&apos;à son hébergement et sa
            supervision. Objectif : des solutions robustes, sans jargon inutile.
          </p>

          {/* Infos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide">
                      {info.label}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-zinc-100 mb-1">{info.value}</p>
                  <p className="text-xs text-zinc-400">{info.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Contact rapide */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 font-mono text-sm text-zinc-300">
              <Mail className="w-4 h-4 text-zinc-600" />
              contact@valentin-marot.fr
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-200 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
