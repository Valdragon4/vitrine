'use client';

import { ArrowRight, MapPin, Clock3 } from 'lucide-react';
import Parallax from './Parallax';

const STACK = ['Linux', 'Docker', 'Python', 'Next.js', 'Nginx', 'CI/CD', 'PostgreSQL'];

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative flex items-center min-h-[92vh] pt-32 pb-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs sm:text-sm tracking-[0.15em] uppercase text-amber-400 mb-6">
            Développeur web &amp; DevOps · Freelance
          </p>

          {/* Titre */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-zinc-50">
            Je conçois, déploie et héberge
            <br className="hidden sm:block" /> vos applications{' '}
            <span className="text-amber-400">web</span>.
          </h1>

          {/* Sous-titre précis */}
          <p className="mt-7 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Développement d&apos;applications sur mesure et infrastructure DevOps :
            automatisation, conteneurisation, administration Linux et hébergement.
            Un seul interlocuteur, du code à la mise en production.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#projets"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              Voir mes réalisations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Discuter d&apos;un projet
            </a>
          </div>

          {/* Stack technique (mono) */}
          <Parallax speed={0.16} className="mt-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-zinc-500">
              <span className="text-zinc-600">stack&nbsp;:</span>
              {STACK.map((tech, i) => (
                <span key={tech} className="flex items-center gap-4">
                  <span className="text-zinc-400">{tech}</span>
                  {i < STACK.length - 1 && (
                    <span className="text-zinc-700">/</span>
                  )}
                </span>
              ))}
            </div>
          </Parallax>

          {/* Meta */}
          <Parallax speed={0.28} className="mt-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-600" />
              Champagne-Ardenne · à distance partout en France
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-zinc-600" />
              Réponse sous 24 h · devis gratuit
            </span>
          </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;
