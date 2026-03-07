'use client';

import { Building2, Clock3, Globe2, LayoutTemplate, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative flex items-center min-h-[80vh] py-20 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-16 items-center">
        {/* Colonne gauche : wording */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-50">
              <span className="block">L&apos;expertise réseau.</span>
              <span className="block">La passion du code.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400">
                Des solutions sur mesure.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed">
            Étudiant en Master Réseaux & Télécoms et développeur Web & DevOps freelance. Je crée des applications modernes et j'automatise vos infrastructures (Linux, Docker) pour une performance optimale.
            </p>
          </div>

          {/* Zone d'action */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => {
                const el = document.querySelector('#projets');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-7 py-3 rounded-2xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40"
            >
              Découvrir mes projets
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-7 py-3 rounded-2xl border border-slate-500/70 text-sm font-semibold text-slate-50 hover:bg-slate-900/70 transition-all duration-200"
            >
              Me contacter
            </button>
          </div>

          {/* Petite ligne de contexte */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300/85 pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/90 border border-slate-700/70">
                <Building2 className="w-3.5 h-3.5 text-sky-300" />
              </span>
              <span>Basé en Champagne-Ardenne.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/90 border border-slate-700/70">
                <Clock3 className="w-3.5 h-3.5 text-emerald-300" />
              </span>
              <span>Réponse sous 24h, devis gratuit.</span>
            </div>
          </div>
        </div>

        {/* Colonne droite : mini vitrine services/projets, simple et visuelle */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-950/80 border border-slate-800/80 shadow-2xl shadow-slate-900/60 px-6 py-5 overflow-hidden">
            {/* halo décoratif */}
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.4)_0,transparent_40%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.35)_0,transparent_45%)] opacity-60" />

            <div className="relative space-y-4">
              <p className="text-[11px] font-semibold text-slate-200 mb-2 uppercase tracking-[0.18em]">
                Ce que je mets en place
              </p>

              <div className="space-y-3 text-[11px]">
                <div className="group rounded-2xl bg-slate-900/90 border border-slate-700/80 px-4 py-3 flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-400/40">
                    <Globe2 className="w-4 h-4 text-sky-300" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-slate-50 text-[11px]">
                      Sites vitrines clairs
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Pour présenter votre activité et rassurer vos futurs clients.
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-slate-900/90 border border-slate-700/80 px-4 py-3 flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/40">
                    <LayoutTemplate className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-slate-50 text-[11px]">
                      Services en ligne simples
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Prise de rendez‑vous, demandes de devis, formulaires adaptés à votre métier.
                    </p>
                  </div>
                </div>

                <div className="group rounded-2xl bg-slate-900/90 border border-slate-700/80 px-4 py-3 flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-400/40">
                    <Sparkles className="w-4 h-4 text-violet-300" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-slate-50 text-[11px]">
                      Outils sur mesure
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Petites automatisations et tableaux de bord pensés pour votre quotidien.
                    </p>
                  </div>
                </div>
              </div>

              {/* petite “animation” très discrète */}
              <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Tout est testé dans mon environnement avant d&apos;être mis en ligne.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
