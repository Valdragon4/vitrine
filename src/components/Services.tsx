'use client';

import { Globe2, Wrench, Server, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Site vitrine',
      subtitle: 'Votre présence en ligne',
      description: 'Un site clair et moderne pour présenter votre activité. Vos clients vous trouvent, comprennent ce que vous faites, et vous contactent facilement.',
      icon: Globe2,
      color: 'from-sky-500 to-blue-600',
      highlights: ['Design sur mesure', 'Mobile-friendly', 'Formulaire de contact'],
    },
    {
      title: 'Outils métier',
      subtitle: 'Simplifiez votre quotidien',
      description: 'Prise de rendez-vous, commandes en ligne, espace client... Des outils adaptés à votre façon de travailler.',
      icon: Wrench,
      color: 'from-violet-500 to-purple-600',
      highlights: ['Automatisation', 'Gain de temps', 'Moins d\'erreurs'],
    },
    {
      title: 'Hébergement & maintenance',
      subtitle: 'Tranquillité d\'esprit',
      description: 'Je m\'occupe de la technique : mise en ligne, sauvegardes, mises à jour. Votre site reste rapide et sécurisé.',
      icon: Server,
      color: 'from-emerald-500 to-teal-600',
      highlights: ['Sauvegardes auto', 'Mises à jour', 'Support réactif'],
    },
    {
      title: 'Accompagnement',
      subtitle: 'Un interlocuteur unique',
      description: 'Pas de jargon, des explications claires. Je vous guide à chaque étape et reste disponible pour vos questions.',
      icon: MessageCircle,
      color: 'from-amber-500 to-orange-600',
      highlights: ['Écoute', 'Conseils', 'Évolutions'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Comment je peux <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">vous aider</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            De l'idée à la mise en ligne, un accompagnement simple et efficace.
          </p>
        </div>

        {/* Services Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-900/60 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/80"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">{service.subtitle}</p>
                    <h3 className="text-2xl font-bold text-slate-50">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {service.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative px-8 py-16 md:px-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
              Discutons-en.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold text-lg hover:from-sky-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
            >
              Parlons de votre projet
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-6 text-sm text-slate-500">
              Réponse sous 24h • Devis gratuit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
