'use client';

import { Code2, Workflow, Server, Activity, ArrowRight, Check } from 'lucide-react';
import Parallax from './Parallax';

const services = [
  {
    n: '01',
    title: 'Développement web',
    icon: Code2,
    description:
      "Sites vitrines et applications sur mesure, du front à l'API. Code propre, rapide et pensé pour évoluer.",
    points: ['Next.js / React', 'API Python (Flask, Django)', 'Bases de données SQL'],
  },
  {
    n: '02',
    title: 'Automatisation & DevOps',
    icon: Workflow,
    description:
      'Je fiabilise vos déploiements : conteneurisation, pipelines CI/CD et scripts pour supprimer les tâches manuelles.',
    points: ['Docker & Compose', 'Pipelines CI/CD', 'Déploiements reproductibles'],
  },
  {
    n: '03',
    title: 'Infrastructure & hébergement',
    icon: Server,
    description:
      "Mise en ligne et administration de vos services sur Linux : reverse-proxy, certificats, DNS, auto-hébergement.",
    points: ['Serveurs Linux / VPS', 'Nginx, SSL/TLS, DNS', 'Auto-hébergement'],
  },
  {
    n: '04',
    title: 'Supervision & maintenance',
    icon: Activity,
    description:
      'Votre infra reste saine dans le temps : monitoring, sauvegardes automatiques, mises à jour et sécurité.',
    points: ['Monitoring & alertes', 'Sauvegardes automatisées', 'Mises à jour & durcissement'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Parallax speed={0.08}>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-amber-400 mb-4">
              01 — Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Du code à la production, un seul interlocuteur
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Je couvre l&apos;ensemble de la chaîne : concevoir l&apos;application,
              l&apos;automatiser, la déployer et la maintenir.
            </p>
          </div>
        </Parallax>

        <div className="grid sm:grid-cols-2 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800/60">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.n}
                className="group bg-[#0c0c0e] p-8 transition-colors hover:bg-zinc-900/60"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{service.n}</span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 font-mono text-xs text-zinc-500"
                    >
                      <Check className="w-3.5 h-3.5 text-amber-500/80 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-7">
          <div>
            <p className="text-lg font-semibold text-zinc-100">Un projet en tête ?</p>
            <p className="text-sm text-zinc-500 font-mono mt-1">
              Réponse sous 24 h · devis gratuit
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
          >
            Parlons-en
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
