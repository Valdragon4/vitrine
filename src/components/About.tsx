'use client';

import { Download, GraduationCap, User, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 font-medium">
                    Master 1 Réseaux & Télécommunications – Administration et Sécurité des Réseaux
                  </p>
                  <p className="text-sm text-gray-500">Université de Reims Champagne-Ardenne (2025–2026)</p>
                  <p className="text-gray-600 font-medium">
                    Licence 3 Informatique
                  </p>
                  <p className="text-sm text-gray-500">Université de Reims Champagne-Ardenne (2024–2025)</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-entrepreneur</h3>
                <p className="text-gray-600">
                  Passionné par l'automatisation et l'auto-hébergement, je développe des solutions sur mesure pour les entreprises et associations. 
                  Spécialisé dans l'intégration d'API, l'administration système et les pratiques DevOps.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Objectif</h3>
                <p className="text-gray-600">
                  Concevoir des applications fiables et efficaces, adaptées aux besoins spécifiques de chaque client. 
                  Focus sur l'automatisation des processus métier et le déploiement de solutions techniques robustes.
                </p>
              </div>
            </div>

            {/* Bouton CV */}
            <div className="pt-6">
              <button 
                onClick={() => {
                  // Créer un lien de téléchargement
                  const link = document.createElement('a');
                  link.href = '/cv-valentin-marot.pdf';
                  link.download = 'CV-Valentin-MAROT.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger mon CV</span>
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Développeur Full-Stack
                </h3>
                <p className="text-gray-600">
                  Spécialisé en solutions sur mesure
                </p>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
