'use client';

import { Code2, Workflow, Server, Activity, ArrowRight } from 'lucide-react';
import Parallax from './Parallax';

/**
 * Ces quatre prestations ne sont pas quatre cases équivalentes : c'est une
 * chaîne. On conçoit, puis on automatise ce qu'on a conçu, puis on le
 * déploie, puis on le maintient. La mise en page dit cet enchaînement —
 * d'où le connecteur, et non une grille de quatre cartes jumelles.
 */
const steps = [
  {
    title: 'Concevoir',
    heading: 'Développement web',
    icon: Code2,
    description:
      "Sites vitrines et applications sur mesure, du front à l'API. Code lisible, rapide, et pensé pour être repris.",
    points: ['Next.js / React', 'API Python (Flask, Django)', 'Bases de données SQL'],
  },
  {
    title: 'Automatiser',
    heading: 'Intégration & déploiement continus',
    icon: Workflow,
    description:
      'Chaque mise en ligne devient une opération sans surprise : conteneurisation, tests, déploiement déclenché par la fusion, retour arrière prévu.',
    points: ['Docker & Compose', 'Pipelines CI/CD', 'Retour arrière immédiat'],
  },
  {
    title: 'Héberger',
    heading: 'Infrastructure & mise en ligne',
    icon: Server,
    description:
      'Vos services tournent sur du Linux administré : reverse-proxy, certificats, DNS, segmentation réseau, ou auto-hébergement complet.',
    points: ['Serveurs Linux / VPS', 'Nginx, TLS, DNS', 'Auto-hébergement'],
  },
  {
    title: 'Maintenir',
    heading: 'Supervision & maintenance',
    icon: Activity,
    description:
      "L'infrastructure reste saine dans la durée : métriques, alertes qui se déclenchent vraiment, sauvegardes vérifiées, mises à jour et durcissement.",
    points: ['Monitoring & alertes', 'Sauvegardes vérifiées', 'Mises à jour & durcissement'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight text-balance">
              Du code à la production, un seul interlocuteur
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              La plupart des projets se cassent entre deux prestataires : celui qui
              développe et celui qui héberge. Je tiens les deux bouts de la chaîne.
            </p>
          </div>
        </Parallax>

        <ol className="relative grid gap-px bg-zinc-800/60 sm:grid-cols-2 xl:grid-cols-4 rounded-2xl overflow-hidden border border-zinc-800/60">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative bg-[#0c0c0e] p-7 sm:p-8 transition-colors hover:bg-zinc-900/60"
              >
                {/* Étape et position dans la chaîne */}
                <div className="flex items-center gap-2.5 mb-6">
                  <Icon
                    className="w-4 h-4 text-amber-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs uppercase tracking-[0.14em] text-amber-400/90 font-medium">
                    {step.title}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      className="w-3.5 h-3.5 text-zinc-700 ml-auto hidden xl:block"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-zinc-100 mb-3 text-balance">
                  {step.heading}
                </h3>
                <p className="text-[0.9375rem] text-zinc-300 leading-relaxed mb-6 max-w-[30rem]">
                  {step.description}
                </p>

                <ul className="space-y-2 border-t border-zinc-800/80 pt-5">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-baseline gap-2.5 text-[13px] text-zinc-400"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-amber-500/70 flex-shrink-0 translate-y-[-2px]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-7">
          <div>
            <p className="text-lg font-semibold text-zinc-100">
              Un projet en tête&nbsp;?
            </p>
            <p className="text-sm text-zinc-400 mt-1 max-w-[32rem] leading-relaxed">
              Dites-moi où vous en êtes, je vous réponds avec un périmètre et un
              prix, pas avec un questionnaire.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors flex-shrink-0"
          >
            Parlons-en
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
