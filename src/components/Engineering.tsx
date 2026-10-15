'use client';

import {
  GitPullRequest,
  ShieldCheck,
  Package,
  DatabaseBackup,
  Rocket,
  HeartPulse,
  Undo2,
  Globe,
  Activity,
  HardDrive,
  KeyRound,
  BookOpen,
} from 'lucide-react';
import Parallax from './Parallax';
import SectionWatermark from './SectionWatermark';

/**
 * Le professionnalisme se montre par la mécanique, pas par des adjectifs.
 * À gauche, la chaîne réelle qui met Ordely en production, étape par étape,
 * reprise de ses workflows. À droite, l'architecture qui la porte. Tout est
 * vérifiable dans le dépôt ou la documentation.
 */
const PIPELINE = [
  {
    icon: GitPullRequest,
    title: 'Pull request',
    detail: 'Toute modification passe par une branche de développement, puis une revue avant la production.',
  },
  {
    icon: ShieldCheck,
    title: 'Intégration continue',
    detail: 'Tests unitaires et de bout en bout, typage, analyse statique, audit des dépendances, test de concurrence sur la base.',
  },
  {
    icon: Package,
    title: 'Images construites une fois',
    detail: 'Publiées sur un registre, reconstruites seulement pour les services dont le code a changé.',
  },
  {
    icon: DatabaseBackup,
    title: 'Sauvegarde, puis migration',
    detail: 'La base est sauvegardée avant chaque migration de schéma, jamais après.',
  },
  {
    icon: Rocket,
    title: 'Déploiement',
    detail: 'Services de base d’abord, applicatifs ensuite, avec note de mise à jour obligatoire pour les utilisateurs.',
  },
  {
    icon: HeartPulse,
    title: 'Vérification',
    detail: 'Attente de l’état sain de chaque service, puis contrôle de santé planifié en continu.',
  },
  {
    icon: Undo2,
    title: 'Retour arrière',
    detail: 'Une chaîne dédiée rétablit la version précédente ; chaque version est numérotée et tracée.',
  },
];

const ARCHITECTURE = [
  {
    icon: Globe,
    title: 'Exposition maîtrisée',
    detail: 'Cloudflare devant tous les domaines, reverse-proxy nginx, certificats renouvelés et leur expiration mesurée.',
  },
  {
    icon: Activity,
    title: 'Supervision qui prévient',
    detail: 'Prometheus, Grafana et Loki, près de 80 règles d’alerte, un chien de garde indépendant qui surveille la supervision elle-même.',
  },
  {
    icon: HardDrive,
    title: 'Sauvegardes prouvées',
    detail: 'Chiffrées, copiées hors site, et restaurées chaque semaine pour être comparées à la base en service.',
  },
  {
    icon: KeyRound,
    title: 'Accès cloisonnés',
    detail: 'VPN WireGuard entre les sites, administration du routeur réservée au VPN, annuaire unique avec double authentification.',
  },
  {
    icon: BookOpen,
    title: 'Tout est écrit',
    detail: '125 pages de documentation : procédures, décisions, et journaux d’incidents avec leurs causes réelles.',
  },
];

const Engineering = () => {
  return (
    <section id="architecture" className="relative py-28 sm:py-36 overflow-hidden">
      <SectionWatermark text="git push" align="left" />
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight text-balance">
              Une mise en production qui ne dépend pas de la chance
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[38rem]">
              Un logiciel vendu doit pouvoir évoluer sans casser chez le client.
              Ordely compte plus de 1 300 commits et dix chaînes d&apos;intégration
              et de déploiement continus ; voici ce qui se passe entre une
              modification et sa mise en ligne.
            </p>
          </div>
        </Parallax>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 xl:gap-20">
          {/* La chaîne de déploiement d'Ordely */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-amber-400/90 font-medium mb-6">
              La chaîne d&apos;Ordely, de la branche à la production
            </p>
            <ol className="relative">
              {PIPELINE.map((step, i) => {
                const Icon = step.icon;
                const last = i === PIPELINE.length - 1;
                return (
                  <li key={step.title} className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 pb-7 last:pb-0">
                    {!last && (
                      <span
                        className="absolute left-[17px] top-10 bottom-1 w-px bg-zinc-800"
                        aria-hidden="true"
                      />
                    )}
                    <span className="w-9 h-9 rounded-lg border border-zinc-700 bg-[#0c0c0e] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-400" aria-hidden="true" />
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-[0.9375rem] font-semibold text-zinc-100">
                        <span className="font-mono text-xs text-zinc-500 mr-2 tabular">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-zinc-400 leading-relaxed max-w-[34rem]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="mt-8 text-[13px] text-zinc-400 leading-relaxed max-w-[34rem]">
              En tâche de fond : sauvegarde quotidienne de la base, maintenance
              planifiée, mises à jour mineures de dépendances fusionnées
              automatiquement une fois les tests passés. Ce site suit le même principe : fusionner
              suffit à le mettre en ligne, avec image de retour arrière posée
              avant chaque bascule.
            </p>
          </div>

          {/* L'architecture qui porte tout ça */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-amber-400/90 font-medium mb-6">
              L&apos;infrastructure qui l&apos;héberge
            </p>
            <div className="rounded-2xl border border-zinc-800 bg-[#0c0c0e]/80 p-7 sm:p-8">
              <p className="text-[0.9375rem] text-zinc-200 leading-relaxed">
                Cinq machines sur trois sites et environ 170 conteneurs, que
                j&apos;administre moi-même. La production d&apos;Ordely est
                séparée de son environnement de développement, chacune sur sa
                machine.
              </p>
              <dl className="mt-6 divide-y divide-zinc-800 border-t border-zinc-800">
                {ARCHITECTURE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="py-4 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3.5 gap-y-1"
                    >
                      <Icon className="w-4 h-4 text-amber-400 translate-y-0.5" aria-hidden="true" />
                      <dt className="text-sm font-semibold text-zinc-100">{item.title}</dt>
                      <dd className="col-start-2 text-[13px] text-zinc-400 leading-relaxed">
                        {item.detail}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
