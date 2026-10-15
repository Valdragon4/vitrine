'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';
import Parallax from './Parallax';
import SectionWatermark from './SectionWatermark';

/**
 * Les logiciels que j'édite ou que je vends. Ordely mène, seul sur toute la
 * largeur : c'est l'entreprise, les autres sont des produits qui
 * l'accompagnent. Chaque chiffre vient d'une mesure en production — un
 * objectif ou une estimation n'a rien à faire ici.
 */
const products = projectsData.filter((p) => p.product);
const [flagship, ...others] = products;

const Products = () => {
  if (!flagship?.product) return null;
  const FlagshipIcon = flagship.icon;

  return (
    <section id="produits" className="relative py-28 sm:py-36 overflow-hidden">
      <SectionWatermark text="ship" align="right" />
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 tracking-tight text-balance">
              Des logiciels que je conçois, vends et exploite
            </h2>
            <p className="mt-5 text-lg text-ink-300 leading-relaxed max-w-[38rem]">
              Je ne fais pas que des prestations : j&apos;édite mes propres
              produits. Je les développe, je les héberge, je les maintiens et je
              réponds à leurs utilisateurs — c&apos;est ce qui me rend exigeant
              sur ceux de mes clients.
            </p>
          </div>
        </Parallax>

        {/* Produit phare */}
        <article className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] rounded-2xl overflow-hidden border border-ink-800 bg-card">
          <div className="p-7 sm:p-10 flex flex-col">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="w-9 h-9 rounded-lg border border-ink-700 bg-ink-900 flex items-center justify-center flex-shrink-0">
                <FlagshipIcon className="w-4 h-4 text-signal-400" aria-hidden="true" />
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-ink-50 tracking-tight">
                {flagship.title}
              </h3>
              <span className="text-xs font-medium px-2 py-0.5 rounded border border-signal-500/40 bg-signal-500/10 text-signal-300">
                Mon entreprise
              </span>
            </div>

            <p className="mt-2 text-sm text-ink-400">
              {flagship.product.audience} · {flagship.product.status}
            </p>

            <p className="mt-6 text-lg text-ink-200 leading-relaxed max-w-[36rem]">
              {flagship.description}
            </p>

            {flagship.product.metrics && (
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-800/70 rounded-xl overflow-hidden border border-ink-800/70">
                {flagship.product.metrics.map((m) => (
                  <div key={m.label} className="bg-card px-5 py-4">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-bold text-ink-50 tabular">
                        {m.value}
                      </span>
                      <span className="block mt-0.5 text-[13px] text-ink-400 leading-snug">
                        {m.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-3 text-xs text-ink-500">
              Mesures chez le commerce pilote, une boulangerie familiale de l&apos;Aube.
            </p>

            <div className="mt-8 lg:mt-auto lg:pt-8 flex flex-col sm:flex-row gap-3">
              {flagship.demo && (
                <a
                  href={flagship.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-signal-500 text-ink-950 hover:bg-signal-400 transition-colors"
                >
                  Découvrir Ordely
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
              <Link
                href={`/projects/${flagship.slug}`}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold border border-ink-700 text-ink-200 hover:border-ink-500 hover:text-white transition-colors"
              >
                Comment il est construit
              </Link>
            </div>
          </div>

          {flagship.image && (
            <div className="relative min-h-[260px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-ink-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flagship.image}
                alt="Tableau de bord commerçant d’Ordely, données anonymisées"
                className="absolute inset-0 w-full h-full object-cover object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card/70 via-transparent to-transparent" />
            </div>
          )}
        </article>

        {/* Les autres produits */}
        <ul className="mt-3 grid gap-3 md:grid-cols-3">
          {others.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group h-full flex flex-col rounded-2xl border border-ink-800 bg-card p-7 transition-colors hover:border-ink-600 focus-visible:border-signal-500"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg border border-ink-700 bg-ink-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-signal-400" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-ink-100">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-ink-600 flex-shrink-0 transition-[color,transform] duration-300 group-hover:text-signal-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-3 text-[13px] font-semibold text-signal-400/90">
                    {p.product?.audience}
                  </p>
                  <p className="mt-3 text-[0.9375rem] text-ink-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-auto pt-6">
                    {p.product?.metrics?.map((m) => (
                      <p key={m.label} className="text-sm text-ink-300 mb-2">
                        <span className="font-semibold text-ink-50 tabular">{m.value}</span>{' '}
                        {m.label}
                      </p>
                    ))}
                    <p className="border-t border-ink-800/80 pt-4 text-[13px] text-ink-400 flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-signal-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {p.product?.status}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl border border-ink-800 bg-ink-900/40 px-8 py-7">
          <div>
            <p className="text-lg font-semibold text-ink-100">
              Une association ou un commerce à équiper&nbsp;?
            </p>
            <p className="text-sm text-ink-400 mt-1 max-w-[34rem] leading-relaxed">
              Ces logiciels s&apos;installent en hébergement géré ou sur votre
              propre serveur. Je vous fais une démonstration et un devis.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-signal-500 text-ink-950 hover:bg-signal-400 transition-colors flex-shrink-0"
          >
            Demander une démo
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

export default Products;
