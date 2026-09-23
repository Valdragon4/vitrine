'use client';

import { MapPin, Clock, FileText, Building2 } from 'lucide-react';
import Parallax from './Parallax';
import SectionWatermark from './SectionWatermark';
import EmailLink from './EmailLink';

/**
 * Des faits, pas des adjectifs. Une fiche dont la valeur est « Réactif »
 * ou « Claire » est une carte construite avant d'avoir quelque chose à y
 * mettre.
 */
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
    label: 'Format',
    value: 'Mission ou forfait',
    detail: 'Prestation ponctuelle ou suivi dans la durée',
  },
  {
    icon: FileText,
    label: 'Devis',
    value: 'Gratuit, sous 24 h',
    detail: 'Périmètre et prix fixés avant de commencer',
  },
];

const About = () => {
  return (
    <section id="a-propos" className="relative py-28 sm:py-36 overflow-hidden">
      <SectionWatermark text="whoami" align="left" />
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight text-balance">
              Développeur et administrateur système, en freelance
            </h2>
          </div>
        </Parallax>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 xl:gap-20">
          {/* La prose porte l'argument : elle n'a pas besoin d'une carte */}
          <div>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              En Master Réseaux &amp; Télécommunications et en alternance sur
              l&apos;administration systèmes et réseaux, j&apos;ai lancé ma
              micro-entreprise pour accompagner entreprises, indépendants et
              associations.
            </p>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Je réunis deux compétences rarement associées :{' '}
              <span className="text-zinc-100">le développement web</span> et{' '}
              <span className="text-zinc-100">l&apos;infrastructure qui le fait
              tourner</span>. Concrètement, ça veut dire que je sais ce que coûte
              en production le code que j&apos;écris — et que votre projet ne se
              perdra pas entre deux prestataires qui se renvoient la
              responsabilité.
            </p>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Ce n&apos;est pas théorique : j&apos;administre quatre machines sur
              trois sites, un SaaS en production et une vingtaine de services
              exposés. Tout ce que je propose, je le fais déjà tourner chez moi.
            </p>

            <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <EmailLink />
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-lg border border-zinc-700 text-zinc-200 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Les faits administratifs : une liste de définitions, pas
              quatre cartes jumelles */}
          <dl className="divide-y divide-zinc-800 border-y border-zinc-800">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="py-5 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3.5 gap-y-1 items-baseline"
                >
                  <Icon
                    className="w-4 h-4 text-amber-400 translate-y-0.5"
                    aria-hidden="true"
                  />
                  <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">
                    {info.label}
                  </dt>
                  <dd className="col-start-2 max-w-[24rem]">
                    <span className="block text-base font-semibold text-zinc-100">
                      {info.value}
                    </span>
                    <span className="block text-[13px] text-zinc-400 leading-relaxed mt-0.5">
                      {info.detail}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
