import { Code, Server, GitBranch, Database, Shield, Zap, Cog, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Développement d'applications web et systèmes sur mesure",
      description: "Conception et développement de solutions techniques adaptées aux besoins spécifiques de votre entreprise.",
      icon: Code,
      features: [
        "Applications web avec Python (Flask) et JavaScript", 
        "Interfaces utilisateur modernes et responsive", 
        "Architecture scalable et maintenable",
        "Intégration d'API et bases de données"
      ]
    },
    {
      title: "Automatisation de processus",
      description: "Automatisation de tâches répétitives et intégration d'API pour optimiser vos processus métier.",
      icon: Bot,
      features: [
        "Scripts Python pour automatisation", 
        "Intégration d'API tierces (SMS, email, etc.)", 
        "Traitement automatique de données",
        "Solutions sur mesure pour votre secteur"
      ]
    },
    {
      title: "Mise en place et administration de VPS/services",
      description: "Installation, configuration et maintenance d'environnements serveur et services auto-hébergés.",
      icon: Server,
      features: [
        "Configuration Linux (Ubuntu)", 
        "Containerisation avec Docker", 
        "Configuration Nginx et reverse proxy",
        "Sécurisation et maintenance des services"
      ]
    },
    {
      title: "Déploiement & DevOps de base",
      description: "Mise en place de pratiques DevOps simples pour le déploiement et la supervision de vos applications.",
      icon: GitBranch,
      features: [
        "Conteneurisation avec Docker", 
        "CI/CD basique", 
        "Monitoring et supervision",
        "Déploiement automatisé"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je propose des solutions complètes pour répondre aux besoins numériques de votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-violet-50 transition-all duration-300 group"
              >
                {/* Icône */}
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-violet-200 transition-colors duration-200">
                  <IconComponent className="w-8 h-8 text-violet-600" />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Fonctionnalités */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Section avantages */}
        <div className="mt-20 bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi me choisir ?
            </h3>
            <p className="text-xl text-gray-600">
              Des solutions sur mesure, simples et efficaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapidité",
                description: "Développement agile et livraison rapide"
              },
              {
                icon: Shield,
                title: "Sécurité",
                description: "Applications sécurisées et conformes"
              },
              {
                icon: Database,
                title: "Fiabilité",
                description: "Solutions robustes et maintenables"
              },
              {
                icon: Code,
                title: "Sur mesure",
                description: "Adaptées à vos besoins spécifiques"
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
