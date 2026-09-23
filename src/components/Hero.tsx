'use client';

import { ArrowRight, MapPin, Clock3 } from 'lucide-react';

const STACK = ['Linux', 'Docker', 'Python', 'Next.js', 'Nginx', 'CI/CD', 'PostgreSQL'];

/**
 * Preuve, pas promesse. Chaque ligne est vérifiable sur la page Projets.
 * Volontairement rédigé en phrases : un mur de grands chiffres avec leurs
 * petits libellés est le gabarit que toutes les pages de vente partagent.
 */
const PROOF = [
  {
    fact: 'Un SaaS en production',
    detail: 'prise de commande par SMS, neuf services spécialisés',
  },
  {
    fact: '4 machines, 3 sites',
    detail: 'reliées par un VPN, environ 160 conteneurs actifs',
  },
  {
    fact: 'Une vingtaine de vhosts',
    detail: 'derrière un reverse-proxy que j’administre',
  },
  {
    fact: '110 pages de doc',
    detail: 'procédures et journaux d’incidents tenus à jour',
  },
];

const Hero = () => {
  return (
    <section id="accueil" className="relative flex items-center min-h-[92vh] pt-32 pb-20">
      <div className="w-full max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 xl:gap-20 items-center">
          {/* Colonne argumentaire */}
          <div>
            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.04] tracking-tight text-zinc-50 text-balance">
              Je conçois, déploie et héberge vos applications{' '}
              <span className="text-amber-400">web</span>.
            </h1>

            <p className="mt-7 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Développement sur mesure et infrastructure DevOps : automatisation,
              conteneurisation, administration Linux et hébergement. Un seul
              interlocuteur, du code à la mise en production.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="#projets"
                className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
              >
                Voir mes réalisations
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
              >
                Discuter d&apos;un projet
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-zinc-400">
              <span className="text-zinc-400">stack&nbsp;:</span>
              {STACK.map((tech, i) => (
                <span key={tech} className="flex items-center gap-4">
                  <span className="text-zinc-300">{tech}</span>
                  {i < STACK.length - 1 && <span className="text-zinc-700">/</span>}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                Champagne-Ardenne · à distance partout en France
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                Réponse sous 24 h · devis gratuit
              </span>
            </div>
          </div>

          {/* Colonne preuve — occupe le vide et répond tout de suite au
              « est-ce qu'il sait vraiment faire ? » */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e]/80 p-7 sm:p-8">
            <p className="text-sm font-semibold text-zinc-100">
              Ce que je fais tourner en ce moment
            </p>
            <p className="mt-1.5 text-[13px] text-zinc-400 leading-relaxed max-w-[26rem]">
              Pas des maquettes : de l&apos;infrastructure en service, la mienne et
              celle de mes clients.
            </p>

            <dl className="mt-6 space-y-5">
              {PROOF.map((item) => (
                <div key={item.fact} className="flex gap-3.5">
                  <span
                    className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[0.9375rem] font-medium text-zinc-100 tabular">
                      {item.fact}
                    </dt>
                    <dd className="text-[13px] text-zinc-400 leading-relaxed max-w-[26rem]">
                      {item.detail}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
