'use client';

import { MapPin, Clock, FileText, Mail, Building2 } from 'lucide-react';

const About = () => {
  const infos = [
    {
      icon: Building2,
      label: 'Statut',
      value: 'Micro-entreprise',
      detail: 'SIRET enregistré',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Champagne-Ardenne',
      detail: 'Interventions à distance partout en France',
    },
    {
      icon: Clock,
      label: 'Disponibilité',
      value: 'Réactif',
      detail: 'Réponse sous 24h, RDV flexibles',
    },
    {
      icon: FileText,
      label: 'Facturation',
      value: 'Simple et claire',
      detail: 'Devis gratuit, paiement à la livraison',
    },
  ];

  return (
    <section id="a-propos" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-violet-400 mx-auto mb-6" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Développeur et administrateur système en freelance, je crée des solutions numériques pour les petites structures.
          </p>
        </div>

        {/* Main content */}
        <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 md:p-10">
          {/* Intro */}
          <div className="mb-10 text-center">
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Étudiant en Master Réseaux & Télécoms et passionné d'informatique depuis toujours, 
              j'ai créé ma micro-entreprise pour accompagner les artisans, commerçants et associations 
              dans leur présence en ligne. Mon objectif : vous proposer des outils simples et efficaces, 
              sans vous noyer dans la technique.
            </p>
          </div>

          {/* Infos grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infos.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                      {info.label}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-slate-100 mb-1">{info.value}</p>
                  <p className="text-sm text-slate-400">{info.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Contact rapide */}
          <div className="mt-10 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-400">
              <Mail className="w-5 h-5" />
              <span>contact@valentin-marot.fr</span>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-600 transition-all"
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
